---
layout: post
title: Threat Modeling
category: information-security
toc: true
---

### Why Information Security?

The goal of Information Security is to make the organization’s primary mission successful

Security it’s there to help the organization do what it does. If that mission is making money, then the main mission of the security group — at its highest level — is to make that company money.

To put it another way, the reason the security group is even there in the first place is to keep the organization from losing money.

This isn’t a “leet” way to look at things for those who are into the novelty of being in infosec, but it’s a mentality that one needs to have to make it in the industry long-term. This is becoming increasingly the case as companies are starting to put a premium on the professionals who see security as a business function rather than a purely technical exercise.

It's important to keep in mind that:
- Security is a process rather than a destination: You never get there. There’s no such thing. It’s something you strive for and work towards. The sooner one learns that the better.
- Complexity is the enemy of security: Complexity hinders security because one’s ability to defend their system rests heavily on their understanding of it.
- Security by obscurity is bad, but security with obscurity isn’t: There’s a popular belief out there that if any facet of your defense relies on secrecy, then it’s fundamentally flawed. What many people don’t realize is that adding obscurity to security that’s already solid is not a bad thing.

### The CIA Triad

The CIA triad is a very important trio in information security. The “CIA” stands for Confidentiality, Integrity, and Availability. These are the three elements that everyone in the industry is trying to protect. Let’s touch on each one of these briefly.

- Confidentiality : Protecting confidentiality deals with keeping things secret. This could be anything from a company’s intellectual property to a home user’s photo collection. Anything that attacks one’s ability to keep private that which they want to is an attack against confidentiality.

- Integrity: Integrity deals with making sure things are not changed from their true form. Attacks against integrity are those that try and modify something that’s likely going to be depended on later. Examples include changing prices in an ecommerce database, or changing someone’s pay rate on a spreadsheet.

- Availability: Availability is a highly critical piece of the CIA puzzle. As one may expect, attacks against availability are those that make it so that the victim cannot use the resource in question. The most famous example of this sort of attack is the Denial Of Service Attack. The idea here is that nothing is being stolen, and nothing is being modified. What the attacker is doing is keeping you from using whatever it is that’s being attacked. That could be a particular server or even a whole network in the case of bandwidth-based DoS attacks.

It’s a good practice to think of information security attacks and defenses in terms of the CIA triad.

### Mechanisms

<img src="{{site.url}}/{{site.images}}/information-security/infosec-mechanisms.png">

- Authentication - Authentication is the act of confirming that someone (or something) is who they say they claim to be.
  -  Correctly enforce basic password security.
  - Guard against brute force attacks on your login functionality, be sure to implement some sort of account lockout after a set number of failed attempts.
  - Third, pay attention to how the forgotten password functionality is implemented.
  - When web applications need to pass sensitive data, always use and explicitly enforce the POST method.
- Authorization - Authorization is the act of verifying that a previously authenticated user is allowed to perform a given operation or act on a given resource, and is often known as access control. There are actually two things going on here.
  - Verify that the user is allowed to access the
requested page or function.
  - Verify that the user can operate within the given context.
  - Any authorization check is done on the server as client side security can often be bypassed.
- Data Validation
  - Validate data before input
  - Validate data before output
  - Validate data before use in `eval`
  - Validate data length before writing to parsers
- Session Management
  - Enforce a reasonable session lifespan so that if a session is compromised there is at least a limit to how long it can be exploited
  - Leverage existing session management solutions and avoid rolling your own.
  - Avoid session fixation attacks by forcing a change of session ID after a successful login.
- Error Handling
  - Don’t disclose information that should remain private
  - Remember to clean up completely in an error condition
- Logging
 - Avoid logging sensitive data
 - Beware of logging tainted data to the logs
 - Beware of logging unnecessary data
 - Beware of data aimed at log spoofing
- Encryption
 - Don’t roll your own crypto
 - If storing password, hash with a salt value
 - If you’re using authentication, encrypt in transmission
 - Properly seed random number generators

### Glossary

#### Vulnerability
A vulnerability is a weakness in a system. This one is pretty straight forward because vulnerabilities are commonly labeled as such in advisories and even in the media. When you apply a security patch to a system, you’re doing so to address a vulnerability.

#### Threat
A threat is an event, natural or man-made, that can cause damage to your system. Threats include people trying to break into your network to steal information, fires, tornados, floods, social engineering, malicious employees, etc. Anything that can cause damage to your systems is basically a threat to those systems. Also remember that threat is usually rated as a probability, or a chance, of that threat coming to bear. An example would be the threat of exploit code being used against a particular vulnerability. If there is no known exploit code in the wild the threat is fairly low. But the second working exploit code hits the major mailing lists, your threat (chance) raises significantly.

#### Risk

Risk is perhaps the most important of all these definitions since the main mission of information security officers is to manage it. The simplest explanation I’ve heard is that risk is the chance of something bad happening. That’s a bit too simple, though, and I think the best way to look at these terms is with a couple of formulas:

- Risk = Threat x Vulnerability

Multiplication is used here for a very specific reason — any time one of the two sides reaches zero, the result becomes zero. In other words, there will be no risk anytime there is no threat or no vulnerability.

#### Policy

A policy is a high level statement from management saying what is and is not allowed in the organization. A policy will say, for example, that you can’t read personal email at work, or that you can’t do online banking, etc. A policy should be broad enough to encompass the entire organization and should have the endorsement of those in charge.

#### Standard

A standard dictates what will be used to carry out the policy. As an example, if the policy says all internal users will use a single, corporate email client, the standard may say that the client will be Outlook 2000, etc.

#### Procedure

A procedure is a description of how exactly to go about doing a certain thing. It’s usually laid out in a series of steps, i.e. 1) Download the following package, 2) Install the package using Add/Remove Programs, 3) Restart the machine, etc. A good way to think of standards and procedures is to imagine standards as being what to do or use, and procedures as how to actually do it.

## Resources

- [Information Security Concepts](https://danielmiessler.com/study/infosecconcepts/)
