1. What problem does the context API help solve?

Context API resolves the issue of Prop Drilling. You can set state in one portion of the app and using a provider and consumer send elements of the state to child components without passing them through the parents.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: Functions that live outside of components that can call dispatches to the reducer to affect the state. 
Reducers: Depending on if you are using thunk these either need to be objects or (when using Thunk) can be functions. It is a set of cases that deploy when the right dispatch is called that take the current state and copy/change/replace it.
Store: This is where the state for the application lives. Since it is outside of the components it can go to any place in your app using the connect functionality from react-redux.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the state for the overall application - if you make changes in it in one component it will affect the entire application. Component state is state that just lives within the component itself and nowhere else (unless it is passed through props….or context api”. For an example - in my project  for the Trivia game I had the application state living in the redux store that controlled the array to receive the info from the axios call, whether or not isFetching was true and a spot for an error message. This was needed in multiple places in the app itself. I also had a component state living in each individual question that was used to hide then show the answer when the state changed from false to true (on a button click). I had difficulty putting that answer state in the overall application state as it would reveal all of the answers when a button was clicked.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to have functions rather than just objects in our reducers. Our action creators are allowed to be functions which can give us access to stuff like making Axios calls.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux is my favorite by far. It was trouble getting started with but everything is lined up very orderly and is so much less messy than context API. I find it easier to read and I can see how context API would be very unwieldy in a large application.  I’m looking forward to learning easy-peasy which Anthony has described as a stripped down redux with less boilerplate.