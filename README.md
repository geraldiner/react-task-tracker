# Task Tracker in React
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
And created following [Traversy Media's YouTube tutorial](https://www.youtube.com/watch?v=w7ejDZ8SWv8).

It's a simple Task Tracker for listing tasks and reminders.
 
## How It's Made
**Tech used:** HTML, CSS, JavaScript, React

The app is built on React and JSON-server to simulate a backend server so that the data persists. Each part of the app is a component:

![Components of the app](https://i.imgur.com/UvWCVbT.png)

### Header (red)
Title and Add button

### Button (orange)
There are only the Add and Close button in this app, which are both rendered with the Button component, which takes a `backgroundColor`, an `onClick` function, and of course `text` as properties. 

### Task (yellow)
To display a single task item from the "backend". Using `.map()`, we can display all the task items together.

### Footer
Simple information about its creation

### About 
Simple info page for demonstrating the use of Routes in react.
 
Each of the components could be embedded in the other by importing them. Furthermore, you can pass along `props` that are used in the last component in the chain.
 
## Optimizations
Each part of the app is a component, which is what makes React so useful. You can reuse components, such as the Task component, which would take forever to write out by hand. And probably be really clunky if using VanillaJS.
 
#$ Lessons Learned
I genuinely had fun making this app. As simple as it is, every time we added a new compenent and it worked, I had such genuine delight, I wish I could do this all the time. I wish my body could handle doing this all the time. 

I was especially blown away by the `Link` from `react-router-dom` that could just link to pages without the page refreshing.







## Other Projects

Check out other stuff I've worked on:

**Minute To Win It Games API & Wiki**: https://github.com/geraldiner/min-to-win

**Rehabitter:** https://github.com/geraldiner/rehabitter

**Snapchat Clone:** https://github.com/geraldiner/snapchat-clone

**K.K. Radio:** https://github.com/geraldiner/kk-radio
