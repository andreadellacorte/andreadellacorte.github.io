---
layout: post
title: Undone Work
category: agile
---

I received this question via email:

<blockquote>Our sprints seem to run like mini-waterfalls, with full end-to-end testing being required at the end. We are using TDD and have many automated checks within our codebases. However, our domain is mobile apps and therefore shipping will always be a high-ceremony process for us, and failure is costly, hence the nervousness.</blockquote>

<blockquote>I am also concerned that some developers do not feel full ownership of the work they create, and rely on QA to find issues.</blockquote>

When I used to work in Amazon Video, releasing was a huge ceremony for us as well!

When I came in, I was asked to cut our bi-monthly release cycle with 20 QA people resources and make it bi-weekly with only 5.

In the end, we managed to do this this by:
1. Defining a vision for the improvement, something like "By J date we will release X time every Y, with less than Z issues and by reducing waste (# of QA hours spent testing without finding issues?) by T%".
2. Setting the expectation things should be Done-Done-Done at the end of the Sprint; e.g. shippable :) by fixing our definition of done (take a look at https://less.works/less/framework/definition-of-done.html and https://less.works/less/technical-excellence/index.html for some ideas on how to improve it); this took a lot of work and might mean you might get less done in a Sprint but actually ship more valuable software to customers (Simplicity) :)
3. Embedding the QA resources into the teams, as supporting members on best practices for testing and de-risking, not "do-the-manual-testing" at the end of the sprint (this meant we removed the undone work department the QA team represented)
4. Being bold and brave! we moved to the bi-weekly cadence before we were ready (you'll never be)! We had some issues, learned from them, improved and nobody died :)
