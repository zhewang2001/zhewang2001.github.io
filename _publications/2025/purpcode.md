---
title:          "PurpCode: Reasoning for Safer Code Generation"
date:           2025-07-25 00:00:00 +0800
selected:       true
pub:            '<a class="pub-highlight" href="https://www.amazon.science/nova-ai-challenge/pushing-the-boundaries-of-secure-ai-winners-of-the-amazon-nova-ai-challenge"><img src="/assets/images/icons/medal.png" alt="" class="highlight-icon"/> 1st Place in Amazon Nova AI Challenge 2025 ($250,000)</a><br><span class="badge badge-pill badge-publication badge-venue">NeurIPS 2025</span>'
# pub_date:       "2025"
semantic_scholar_id: d2cda4397bb3329c4c5b7277b61eeac6e7d98d2a
abstract: >-
  Code reasoning models are increasingly trusted to write production code, yet they still emit vulnerable code and can be steered into assisting malicious cyberactivity. We introduce PurpCode, the first post-training recipe for safe code reasoning, which first teaches a model to reason against explicit cybersafety rules and then balances safety against utility through multi-objective reinforcement learning over red-teamed prompts. The resulting PurpCode-32B achieves state-of-the-art cybersafety among frontier models while lowering overrefusal and preserving both coding ability and general security knowledge.
covers:
- /assets/images/covers/purpcode_overview.png
- src: /assets/images/covers/purpcode_cwe.png
  width: 72%
authors:
- Jiawei Liu*
- Nirav Diwan*
- Zhe Wang*
- Haoyu Zhai
- Xiaona Zhou
- Kiet A. Nguyen
- Tianjiao Yu
- Muntasir Wahed
- Yinlin Deng
- Hadjer Benkraouda
- Yuxiang Wei
- Lingming Zhang
- Ismini Lourentzou
- Gang Wang
links:
  Paper: https://arxiv.org/pdf/2507.19060
  Code: https://github.com/purpcode-uiuc/purpcode
  Dataset: https://huggingface.co/purpcode

---