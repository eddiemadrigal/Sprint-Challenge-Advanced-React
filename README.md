# Sprint Challenge: Advanced React - Women's World Cup

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored class components, custom hooks, and testing. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that consumes data from an API using a custom hook, displays that data on the DOM, and tests your React components.

The data you will get back from the server will be the Women's World Cup players ranked by search interest from Google Trends, June-July 2019, worldwide - https://googletrends.github.io/data/.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency with ReactJS Fundamentals and your command of the concepts and techniques in the Functional Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit the `ANSWERS.md` file to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [X] Why would you use class component over function components (removing hooks from the question)?

React lets you define components as classes or functions. Components defined as classes currently provide more features.  Class components make use of the ES6 class syntax. Since classes can have methods, these components can make use of life cycle methods like componentWillMount and componentDidMount.  Functional components, unlike class components, are stateless and that they also do not support life cycle methods. 

Functional components:
1. don’t have state
2. don’t have life cycle methods
3. don’t have a this

- [X] Name three lifecycle methods and their purposes.

Life Cycle:

1. Mounting: constructor, getDerivedStateFromProps, render and componentDidMount (birth phase). Here, this phase is being built out from the nothing.  The constructor holds the initial data your app will use. In this phase, the render method is invoked and the the compoentDidMount gets called as well.

2. Updating: New props (getDerivedStateFromProps, shouldComponentUpdate, render) (growth / updating phase). In the growth / updating phase, setState can be used to change the component's state data, for a call to render.  Also, shouldComponentUpdate is a method one could use here to stop a component from calling render if necessary

3. Unmounting: componentWillUnmount (death phase). The unmounting phase includes removing the component from the screen.  Also, componentWillUnmount is called and can be used for any memory cleanup (i.e., localStorage data) as needed

- [ ] What is the purpose of a custom hook?

Custom Hooks are hooks a programmer can build and customize as need to apply non-visual behavior and stateful logic throughout the project's components. This allows the hook to be used over and over. Custom hooks follow the same patterns of naming (ie, useState (camel-case)). You can build a reusable custom hook for anything from handling controlled inputs, to managing event listeners, or watching for key presses.

- [ ] Why is it important to test our apps?

Automated testing minimizes the risk of bugs finding their way into production code. Here are the benefits of using automated testing:

1. Surfaces bugs faster.
2. Reduces the risk of regressions.
3. Allows us to trust the code.
4. Makes us think about the edge cases.
5. Acts as a safety net when making changes or refactoring.
6. Acts as documentation for the code.
7. Encourages us to write more testable (better!) code.

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [ ] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [ ] Run `npm install` to download dependencies.
- [ ] Run the server using `npm start` or `node server.js`.
- [ ] In a separate terminal cd into the `client` folder and run `npm install` to download dependencies.
- [ ] Still inside the `client` folder run `npm start` to run the client application.
- [ ] Implement the project on this Branch, **committing progress & changes often.**
- [ ] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request.
- [ ] PM then will count the HW as done by merging the branch back into master.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Class component that fetches data from the server you now have running - the data can be fetched from `http://localhost:5000/api/players`
- [ ] Display the player data you receive from the API
- [ ] Build a custom hook and use it in your app - this can be a localStorage hook, a fetch hook, a dark mode hook, or any other hook you would like
- [ ] Write a "reasonable" amount of unit tests for your React components. What does "reasonable amount" mean? That is up to you to decide. Be ready to defend your choice to your TL 👍

## Stretch Problems

- [ ] Implement another custom hook
- [ ] Use a graphing library to graph the data you received from the API
