---
layout: post
title: Test Driven Development
category: software-development
toc: true
---

TDD is an iterative software development process where you first write the test with the idea that it must fail.

This is a different approach to the traditional development where you write the application functionality first and then write test cases. The major benefit of this approach is that the code becomes thoroughly unit tested.

## Why use TDD?

- ***TDD can eliminate duplication of code and also disciplines the developer to focus his mind on delivering what is absolutely necessary.*** This means the system you develop only does what it is supposed to do because you first write test cases for the business requirements and then write the required functionality to satisfy the test cases and no more.
- ***These unit tests can be repeatedly run to alert the development team immediately if someone breaks any existing functionality.*** All the unit tests can be run overnight as part of the deployment process and test results can be emailed to the development team.
- ***TDD ensures that code becomes thoroughly unit tested.*** It is not possible to write thorough unit tests if you leave it to the end due to deadline pressures, lack of motivation etc.
- ***TDD complements design by contract methodology and gets the developer thinking in terms of pre and post conditions as well as exceptions.***
- When using TDD, ***tests drive your code and to some extent they assist you in validating your design at an earlier stage***.
- ***TDD also helps you refactor your code with confidence*** that if it breaks the business logic it gets picked up when you run your unit tests next time.
- ***TDD promotes design to interface not implementation design concept***. For example: when your code has to take input from an external source or device which is not present at the time of writing your unit tests, you need to create an interface, which takes input from another source in order for your tests to work.

## Approach

1. Write a Failing Test - Understand the (user) requirements/story well enough to write a test for what you expect. (the test should fail initially - hence it being "Red")
2. Make the (failing) Test Pass - Write (only) the code you need to make the (failing) test pass, while ensuring your existing/previous tests all still pass (no regressions).
3. Refactor the code you wrote - if you have time to tidy up the code you wrote to make it simpler (for your future self or colleagues to understand) before you need to ship the current feature, do it.
