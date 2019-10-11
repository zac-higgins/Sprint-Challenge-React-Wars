# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    `A` React is a UI library. It solves the problem of slow load time/lots of reloads when the web app is updating a lot of data. React does this by using a virtual DOM, which allows it to update only the data that's changed, allowing that portion to update without having to reload the entire page.

2. What does it mean to think in react?

    `A` 

3. Describe state.

    `A` State is a way to hold information that is _managed within_ a component.

4. Describe props.

    `A` Props is a way to hold information that is _passed to_ a component like a parameter.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

    `A` Side effects are anything that affects something outside the scope of the function being executed. We sync effects to state or prop changes by passing in a dependency array as the second argument to the effect hook.
