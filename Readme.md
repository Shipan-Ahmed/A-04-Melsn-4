1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:

=> getElementById: getElementById is a javascript method that is used to select a element by id. It returns a single element. if the element doesn't exits , it returns null.

=> getElementsByClassName: It is a another method that selects multiple elements by class name. It returns a live HTMLCollection, which means if the DOM changes, the collection updates automatically.

=> querySelector: This method selects the first element that matches a given CSS selector. It returns the first matching element or null if not found.

=> querySelectorAll: This method selects all elements that match a given CSS selector. It returns a static NodeList, which does not automatically update if the DOM changes.

The main difference between them is how they select elements and what type of collection they return (single element, live HTMLCollection, or static NodeList).





2. How do you create and insert a new element into the DOM?

Answer: 

=>To create a new element in the DOM, we use document.createElement().
After creating the element, we can add content or attributes to it.
Then we insert it into an existing parent element using methods like appendChild() or append().

For Example:

let div = document.createElement("div");   //  create element
div.innerText = "Hello World!";             // add content
document.body.appendChild(div);             // insert into parent




3. What is Event Bubbling? And how does it work?

Answer:

=> Event Bubbling is a process in JavaScript where an event starts from the target element and then moves upward to its parent elements in the DOM tree.

How it works:

When an event occurs on a child element, it first runs on that element, then it moves to its parent, then to the grandparent, and continues until it reaches the document object.t




4. What is Event Delegation in JavaScript? Why is it useful?
Answer:

=> Event Delegation is a technique in JavaScript where we attach a single event listener to a parent element instead of adding event listeners to multiple child elements.

It works because of Event Bubbling.

Why is it useful:

- It improves performance because we use fewer event listeners.
- It works for dynamically created elements.
- It makes the code cleaner and easier to manage.





5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:

*** preventDefault() stops the default behavior of an element.

For example:

- Preventing a form from submitting
- Preventing a link from navigating to another page

*** stopPropagation() stops the event from moving (bubbling) up to parent elements.

It does not stop the default browser behavior.