---
sidebar_position: 4
title: AI Risks
description: Potential risks AI presents for ministries
keywords: [AI, ministry, technology, faithtech]
---

# Risks of AI in Ministry Contexts

## Bias & Misalignment

### Limited Objectivity
AI systems have been popularly marketed as being objective and removing human subjectivity from the equation, but the reality is far more complicated. A [report](https://www.science.org/doi/10.1126/science.aax2342) in Science journal [found](https://www.washingtonpost.com/health/2019/10/24/racial-bias-medical-algorithm-favors-white-patients-over-sicker-black-patients/) a healthcare company's algorithm was unintentionally discriminating against black people because their habits for seeing doctors are different from those of white people, which made them appear healthier based on how much money was spent on average to care for them.

AI systems will always have access to some data points and not include others, depending on what data the researchers gathered and the AI was trained on. The healthcare algorithm used "cost" as a proxy for "health," but failed to account for other reasons why people might avoid hospitals. While such AI systems may not be malicious, and the creators may have good intentions, the systems will still reflect human biases, both those of the researchers and those of the people about whom the data is collected.

### Substitution vs. Supplementation
The key to thinking about AI in ministry is to ask how it can supplement human activities, not substitute for them. As Gartner [writes](https://www.gartner.com/smarterwithgartner/the-cios-guide-to-artificial-intelligence/), "The most common mistake with AI is to focus on automation rather than augmentation of human decision making and interactions."

Research has [found](https://www.sciencedaily.com/releases/2019/03/190318141135.htm) that doctors plus AI perform better *together* than either one alone. And [not](https://www.nature.com/articles/s41586-022-04448-z) just [doctors](https://hbr.org/2018/07/collaborative-intelligence-humans-and-ai-are-joining-forces) either. Still, even as AI supplements human tasks, it will reshape the habits and activities of humans, as well as the relationships between individuals.

For example, in using AI systems for recruiting or hiring, organizations that rely too much on AI analysis may overlook details that the AI has not accounted for, like humility, creativity, or flexibility. If there's no data about it, the AI system cannot account for it. Builders should pay close attention to these shifts and biases, keeping in mind the values they and their organization hold.

### Focus on Observable Behavior
The nature of AI systems is to focus on behaviors and externalities that are observable and quantifiable in terms of data sets. While AI might find unexpected patterns and links between various data points—and those insights can be meaningful—missionaries are likely aware of still more implicit dynamics that occur between people, many of which have yet to be articulated explicitly, let alone measured and quantified.

Key questions to consider:
- What is still missing from the picture? 
- What data does the AI system not have?
- What is it unable to account for?

### Re-biasing Effects
One expert stated flatly: you can't take the bias out of the AI system; you can only re-bias it in another direction. Because AI systems derive from historic data, they are liable to reproduce and amplify existing human biases latent in that data. The decisions made by AI systems are either bounded by constraints that coders and designers determine or by patterns derived from historical records of human decisions, both of which are subject to bias.

AI systems can act like a mirror, illuminating social biases that were previously invisible, ignored, or covered up. Thus, these systems offer potential ways to highlight bias so that we can work to reduce it. While increasing awareness about AI bias is a positive step, efforts to fix it will not automatically eradicate it.

To mitigate the risk of bias:
- Develop AI systems by drawing diverse groups of people into development
- Without diverse perspectives, builders will develop systems with blind spots that [unconsciously bias](https://www.nytimes.com/2019/04/25/lens/sarah-lewis-racial-bias-photography.html) their product
- Use historic data sets that represent the populations they seek to serve
- If data fails to reflect the population, AI systems will magnify those who are represented and further marginalize those who are not
- For example, an AI system that [only learns from](https://medium.com/faithtech/who-makes-the-rules-whose-labels-to-use-a38cce3a60a7) photos of striped shirts will never be able to identify a polka dot shirt

## Safety

DeepMind [identified](https://deepmindsafetyresearch.medium.com/building-safe-artificial-intelligence-52f5f75058f1) 3 criteria of safety that AI systems should fulfill before being deployed:

### Specification
AI systems must behave as operators intend them to. These specifications include:
- The ideal
- The actual design
- The actual outcome
All of these should be aligned, but may in reality be different.

### Robustness
AI systems must operate safely even when they encounter unexpected situations, which arise from:
- Chance
- Adverse conditions
- Adverse actors
Robustness includes avoiding risks and recovering from environmental changes.

### Assurance
Operators must be able understand and control AI systems during operations:
- An AI system should be able to show users how it reached a specific decision
- Users should be able to interpret its behavior and outputs
- Users should be able to interrupt the system when they deem it necessary

## Privacy

### Data Requirements
- AI systems typically require large amounts of data to work (and work well)
- People generate most of that data
- Some data may be especially personal, including [face recognition](https://faithtech.com/product/facial-recognition/) data and emotion tracking data

### Dignity in Data Management
Builders must discern how their "love of neighbor" informs their management of data:
- Some data deserve more secure protection than other data
- Honor and dignity given to humans should be reflected in data protection
- Builders must decide how various kinds of data relate to the humans who generate it
- Some data, like biometrics, are closely tied to a person's identity
- Other data like behavioral data might be less identity-based
- Some data might have little connection to the person who created it

### Privacy Frameworks
[Contextual privacy](https://www.sup.org/books/title/?id=8862) recognizes that humans disclose different kinds of personal information depending on circumstances. Digital contexts can obscure where data flows and who might see it. Context should inform digital privacy policies.

Recent privacy legislation includes:
- European Union's [GDPR](https://gdpr.eu/what-is-gdpr/)
- California's [Consumer Privacy Act](https://www.oag.ca.gov/privacy/ccpa)
- Canada's [Consumer Privacy Protection Act](https://ised-isde.canada.ca/site/innovation-better-canada/en/consumer-privacy-protection-act)
- United Kingdom's [Data Protection Act](https://www.gov.uk/data-protection)
- New Zealand's [Privacy Act 2020 and the Privacy Principles](https://www.privacy.org.nz/privacy-act-2020/privacy-principles/)
- UN's [Data Protection and Privacy Legislation Worldwide](https://unctad.org/page/data-protection-and-privacy-legislation-worldwide)

### Privacy Protection Methods
- [Differential privacy](https://privacytools.seas.harvard.edu/differential-privacy)
- [Homomorphic encryption](https://www.microsoft.com/en-us/research/project/homomorphic-encryption/)

### Surveillance Concerns
- AI makes it easier to manage large data sets
- Larger data sets are being created for citizen and consumer surveillance
- These practices will likely impact organizations working in restricted countries
- According to the AI Global Surveillance Index ([pdf](https://carnegieendowment.org/files/AI_Global_Surveillance_Index1.pdf)):
  - 51% of advanced democracies deploy AI for surveillance
  - 37% of closed autocratic states deploy AI for surveillance
