### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

### Answer:

1. getElementById is to find an element by its id and getElementsByClassName is to get multiple elements with the same ClassName and store them in an array like object. querySelector is to find the first element by its class, id and element name and querySelectorAll is to get all the elements and store them in an array like object.

2. First, we will create a new element. For example: const createDiv = document.createElement('div');
   Then we can put something inside this div.
   Then we will add it to the DOM. For example: document.body.appendChild(createDiv);

3. Event Bubbling means moving upward step by step. For example, when an event occurs on a specific element, it first triggers on that element, then moves to its parent, then to the parent’s parent, and so on. In this way, the event keeps bubbling up through the DOM tree. This process is called Event Bubbling.

4. Event Delegation is the process of adding an event listener to an item repeatedly, instead of making its parent an event listener and then working on its child goal. The reason for using Event Delegation is that it can easily provide event listeners. If there are many items, then you do not have to provide separate event listeners. With Event Delegation, all items can be handled by setting an event listener on a parent.

5. preventDefault() stops the default action of an HTML element. For example, if event.preventDefault() is called on a form, then its default action, such as reloading the page when clicking on a button, is stopped. stopPropagation() stops Event Bubbling. For example, if event.stopPropagation() is called on an element, it will not allow it to go near its parent element.
