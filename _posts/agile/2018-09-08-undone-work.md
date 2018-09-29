---
layout: post
title: Undone Work
category: agile
---

I received this question via email:

<blockquote>Our sprints seem to run like mini-waterfalls, with full end-to-end testing being required at the end. We are using TDD and have many automated checks within our codebases. However, our domain is mobile apps and therefore shipping will always be a high-ceremony process for us, and failure is costly, hence the nervousness.</blockquote>

<blockquote>I am also concerned that some developers do not feel full ownership of the work they create, and rely on QA to find issues.</blockquote>

I have an interesting story for this!

When I used to work in Amazon Video - Living Room, releasing would happen on a monthly cadence with a supporting team of 26 QA resources (the ratio of developer to QA was probably 2:1).

In 2016, a continuous integration program was started with the goal of increasing the releasing cadence for the entire organisation.

{% include want-more.html %}

Overall, the main steps in the program were:
1. Vision: We defined a high level goal for the program... it went something like this: "By T date, we will release our software X times every Y, with less than Z issues found during integration and less than N issues impacting customers";
2. Agility: There was a lot of ambiguity at the beginning of this program: as we pushed the limits of our release system, we learned more and more about the problem areas that were hurting us. We navigated this uncertainty by defining a good set metrics (and alarms!) for our release pipeline and trying to release again and again on shorter and shorter cycles and tweaking, improving and removing unnecessary steps as we went through;
3. Definition of Done: We raised all team's quality bar by fixing our imperfect [Definition of Done (Less.works)](https://less.works/less/framework/definition-of-done.html) (take a look at [Technical Excellence (Less.works)](https://less.works/less/technical-excellence/index.html) for some ideas on how to improve it);
4. Embedded QA: We embedded QA resources into the teams, as full-time members working side by side with developers to help them learn best practices for testing and de-risking, and not as a stage-gates for end of Sprint testing;
5. Automation: As we identified the main quality-leaks and slower-moving manual steps in our pipeline, we involved all teams in large quality hackatons-style events to improve on these gaps, and provided teams with Sprint budgets to work on maintaining their operational excellence;

After roughly 3 months, with steadfast improvements to our culture, tools and processes we managed to move to a weekly release cadence with only 6 QA resources involved.
