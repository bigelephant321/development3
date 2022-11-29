# Development

### Link to Deployed Website
If you used the stencil code, this is `https://bigelephant321.github.io/development`

### Goal and Value of the Application
The goal of this application is to model a web page that bakery customers could use to check
the price of different types of baked goods. There are filters at the top to filter options
with nuts and also see customer favorites. This website could be expanded to allow
for online ordering, giving value to the customer to quickly sort through and order 
sortable baked goods.

### Usability Principles Considered
In terms of usability, I put the filter checkboxes at the top of the page to make them
easy to see for the user. Below, the cards with the baked goods dynamically shift
based on the sorting that they choose. Each card displays the price and filter
options, allowing the user to easily see what they are sorting/filtering.

### Organization of Components
I have three different components. The first is an aggregator component that
acts as a cart for the selected items on the page. Since the array for the cart
is a state variable, when something is added or removed, the cart updates. The second
is the BakeryItem component. This represents each of the cards for the baked goods. The
third is a checkbox component. There are three of these for the filters/sorting and one 
for each of the baked good cards.

### How Data is Passed Down Through Components
I pass data through props down to each component. This is most complicated for the checkbox
and bakeryItem compoenents, since the bakeryItem contains a checkbox. As such, I keep a 
dictionary of values on whether the box is ticked or not in App.js, then pass this down
to BakeryItem. When the box is ticked in Checkbox.js, it calls a toggle function in BakeryItem.js, passed
down through props, to then toggle the dictionary in App.js, also passed down through props.

### How the User Triggers State Changes
Whenever the user checks any of the bakery items, they add or remove it from the cart, updating
the cart state variable, and triggering a state change that updates the cart on the screen.
