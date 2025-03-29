---
show: true
width: 4
date: 2021-09-12 00:01:00 +0800
height: 295px
images:
- src: /assets/images/attack_on_titan.jpg
  title: Attack on Titan
  # desc: Description 1.
  link: /assets/images/attack_on_titan.jpg
- src: /assets/images/jujutsu_kaisen.jpg
  title: Jujutsu Kaisen
  link: /assets/images/jujutsu_kaisen.jpg
---

{% include widgets/carousel.html id=page.id images=page.images height=page.height %}
