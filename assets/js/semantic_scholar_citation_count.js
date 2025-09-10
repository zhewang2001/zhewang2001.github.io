const citationCountElements = document.querySelectorAll('[data-semantic-scholar-id]');

const semanticScholarIds = new Set();
citationCountElements.forEach(element => {
    const idsAttr = element.getAttribute('data-semantic-scholar-id');
    if (idsAttr) {
        const ids = idsAttr.split(',').map(id => id.trim().toLowerCase()).filter(id => id);
        ids.forEach(id => semanticScholarIds.add(id));
        element.setAttribute('data-semantic-scholar-id', ids.join(','));
    }
});

let uncachedSemanticScholarIds = [];
semanticScholarIds.forEach(id => {
    const cacheKey = `semanticScholarCitationCount:${id}`;
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
        const { _, timestamp } = JSON.parse(cachedData);
        if (Date.now() - timestamp > 1 * 60 * 60 * 1000) {
            uncachedSemanticScholarIds.push(id);
        }
    } else {
        uncachedSemanticScholarIds.push(id);
    }
});

let showSemanticScholarCitationCount = () => {
    citationCountElements.forEach(element => {
        const idsAttr = element.getAttribute('data-semantic-scholar-id');
        if (!idsAttr) return;

        const ids = idsAttr.split(',');
        if (ids.length === 0 || ids[0] === '') return;

        let totalCitationCount = 0;
        let allDataAvailable = true;

        ids.forEach(id => {
            const cacheKey = `semanticScholarCitationCount:${id}`;
            const cachedData = localStorage.getItem(cacheKey);
            if (cachedData) {
                const { citationCount } = JSON.parse(cachedData);
                totalCitationCount += parseInt(citationCount) || 0;
            } else {
                allDataAvailable = false;
            }
        });

        if (allDataAvailable) {
            const primaryId = ids[0];
            element.innerHTML = `<a class="badge badge-pill badge-publication badge-info" href="https://www.semanticscholar.org/paper/${primaryId}" target="_blank"><i class="ai ai-semantic-scholar"></i> ${totalCitationCount.toLocaleString()} citations</a>`;
        }
    });
};

if (uncachedSemanticScholarIds.length > 0) {
    fetch('https://api.semanticscholar.org/graph/v1/paper/batch?fields=citationCount', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ids: uncachedSemanticScholarIds
        })
    }).then(response => {
        return response.json();
    }).then(data => {
        data.forEach(paper => {
            if (paper && paper.paperId) {
                const cacheKey = `semanticScholarCitationCount:${paper.paperId}`;
                const cacheData = {
                    citationCount: paper.citationCount,
                    timestamp: Date.now()
                };
                localStorage.setItem(cacheKey, JSON.stringify(cacheData));
            }
        });
    }).catch(error => {
        console.error('Error fetching Semantic Scholar data:', error);
    }).finally(showSemanticScholarCitationCount);
} else {
    showSemanticScholarCitationCount();
}
