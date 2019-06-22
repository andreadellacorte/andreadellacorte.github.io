---
layout: post
title: Threat Modeling
category: software-development
toc: true
---

Threat modeling is an approach for analyzing the security of an application. It is a structured approach that enables you to identify, quantify, and address the security risks associated with an application.

The threat modeling process can be decomposed into 3 high level steps

1. Decompose the Application
2. Determine and rank threats
3. Determine countermeasures and mitigation.

Each of the steps must be documented as they are carried out. The resulting document is the threat model for the application.

## Step 1: Decompose the Application

The first step in the threat modeling process is concerned with gaining an understanding of the application and how it interacts with external entities.

This involves creating use-cases to understand how the application is used, identifying entry points to see where a potential attacker could interact with the application, identifying assets i.e. items/areas that the attacker would be interested in, and identifying trust levels which represent the access rights that the application will grant to external entities.

This information is documented in the Threat Model document and it is also used to produce data flow diagrams (DFDs) for the application. The DFDs show the different paths through the system, highlighting the privilege boundaries.

Goals for this phase:

- Learn as much as possible about the target of analysis.
  - Read and understand the specifications, architecture documents, and other design materials.
  - Discuss and brainstorm about the target with a group.
  - Determine system boundary and data sensitivity/criticality.
  - Play with the software (if it exists in executable form).
  - Study the code and other software artifacts (including the use of code analysis tools).
  - Identify threats and agree on relevant sources of attack (e.g., will insiders be considered?).

## Step 2: Determine and rank threats

Critical to the identification of threats is using a threat categorization methodology. A threat categorization such as STRIDE can be used, or the Application Security Frame (ASF) that defines threat categories such as Auditing & Logging, Authentication, Authorization, Configuration Management, Data Protection in Storage and Transit, Data Validation, Exception Management.

The goal of the threat categorization is to help identify threats both from the attacker (STRIDE) and the defensive perspective (ASF). DFDs produced in step 1 help to identify the potential threat targets from the attacker's perspective, such as data sources, processes, data flows, and interactions with users. These threats can be identified further as the roots for threat trees; there is one tree for each threat goal. From the defensive perspective, ASF categorization helps to identify the threats as weaknesses of security controls for such threats.

Common threat-lists with examples can help in the identification of such threats. Use and abuse cases can illustrate how existing protective measures could be bypassed, or where a lack of such protection exists.

The determination of the security risk for each threat can be determined using a value-based risk model such as DREAD or a less subjective qualitative risk model based upon general risk factors (e.g. likelihood and impact).

Goals for this phase:

- Discuss security issues surrounding the software.
  - Argue about how the product works and determine areas of disagreement or ambiguity.
  - Identify possible vulnerabilities, sometimes making use of tools or lists of common vulnerabilities.
  - Map out exploits and begin to discuss possible fixes.
  - Gain understanding of current and planned security controls.               
- Determine probability of compromise.
  - Map out attack scenarios for exploits of vulnerabilities.
  - Balance controls against threat capacity to determine likelihood.
- Perform impact analysis.
  - Determine impacts on assets and business goals.
  - Consider impacts on the security posture.
- Rank risks.

## Step 3: Determine countermeasures and mitigation

A lack of protection against a threat might indicate a vulnerability whose risk exposure could be mitigated with the implementation of a countermeasure. Such countermeasures can be identified using threat-countermeasure mapping lists. Once a risk ranking is assigned to the threats, it is possible to sort threats from the highest to the lowest risk, and prioritize the mitigation effort, such as by responding to such threats by applying the identified countermeasures.

The risk mitigation strategy might involve evaluating these threats from the business impact that they pose and reducing the risk. Other options might include taking the risk, assuming the business impact is acceptable because of compensating controls, informing the user of the threat, removing the risk posed by the threat completely, or the least preferable option, that is, to do nothing.

Goals for this phase:

- Develop a mitigation strategy.
  - Recommend countermeasures to mitigate risks.
- Report findings.
  - Carefully describe the major and minor risks, with attention to impacts.
  - Provide basic information regarding where to spend limited mitigation resources.
