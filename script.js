
//Copy the following data structure to the top of script.js:
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

//Select and cache the <main>element in a variable named mainEl.
const mainEl = document.querySelector('main')// access to main using querySelector

const cssString = 'var(--main-bg)' // create a constent ccString that we assign the function that invoke --main-bg

//Set the background color of mainElto the value stored in the --main-bgCSS custom property.
mainEl.style.backgroundColor = cssString // assign the color from --main-bg and set it as a background for main 

//Set the content of mainEl to <h1>SEI Rocks!</h1>.
var h1 = document.createElement('h1')// create a variable call h1 and assign the element we created using createElement 
h1.textContent = "SEI Rocks!" // assign text to h1 using textContent 
mainEl.appendChild(h1) //Set the content of mainElto <h1>SEI Rocks!</h1>

//Add a class of flex-ctrto mainEl
mainEl.classList.add('flex-ctr'); //Add a class of flex-ctrto mainEl using classList that let add the class


//Select and cache the <nav id="top-menu">element in a variable named topMenuEl
var topMenuEl = document.getElementById('top-menu');// assign the const we create topMenuEl to nav top menu 
// using get elementbyId instead of querySelector because we got id for our menu 

//Set the height topMenuEl element to be 100%.
topMenuEl.style.height = '100%' // using style.height css proprety

//Set the background color of topMenuElto the value 
//stored in the --top-menu-bgCSS custom property.
const cssMenu = 'var(--top-menu-bg)' // create a const to assign the value in our css
topMenuEl.style.backgroundColor = cssMenu // assign to the value

//Add a class of flex-around to topMenuEl
topMenuEl.classList.add('flex-around')

//Iterate over the entire menuLinksarray and for each "link" object:
// Iterate over the menuLinks array using forEach
menuLinks.forEach(function(link) {
    // Access properties of each link object
    const linkText = link.text;
    const linkHref = link.href;

//Create an <a>element.
const aElement = document.createElement('a')

//On the new element, add an href attribute with its value set to the 
//hrefproperty of the "link" object.
aElement.setAttribute('href', link.href)
//Set the new element's content to the value of the 
//text property of the "link" object

aElement.textContent = link.text //set the content element  to the 'text property of the link object
topMenuEl.appendChild(aElement) // append the aElement to the topMenuEl
})



//================= part01 ========================================
//==================finish here ===================================





//Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.
const subMenuEl = document.getElementById('sub-menu')

//Set the height subMenuEl element to be 100%.
subMenuEl.style.height = '100%'

//Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.
const cssSubMenu = 'var(--sub-menu-bg)'
subMenuEl.style.backgroundColor = cssSubMenu

//Add the class of flex-around to the subMenuEl element. 
subMenuEl.classList.add('flex-around')

//Set the CSS position property of subMenuElto the value of absolute.
subMenuEl.style.position = 'absolute'

//Set the CSS top property of subMenuEl to the value of 0
subMenuEl.style.top = '0'



//Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll('a');
// //Declare a global showingSubMenu variable and initialize it to false;
var showingSubMenu = false;

//
//Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener('click', function (event) {
    // Prevent the default behavior of the click event
    event.preventDefault();
    console.log(event.srcElement.innerHTML)
    console.log(event.target.nodeName)
  
    // // Check if the clicked element is an <a> element
    if (event.target.nodeName !== 'A') {
      return; // Return immediately if the clicked element is not an <a> element
    }
  
    // // Log the content of the <a> element to verify the handler is working
    // console.log(event.target.textContent);
  });


//Remove the activeclass from the clicked <a>element.
  // Check if the clicked <a> element has a class of "active"
  // var clickedLink = event.target
  // if (clickedLink.classList.contains('active')) {
  //   // 1. Remove the "active" class from the clicked <a> element
  //   clickedLink.classList.remove('active');

  //   // 2. Set the showingSubMenu to false
  //   showingSubMenu = false;

  //   // 3. Set the CSS top property of subMenuEl to 0
  //   subMenuEl.style.top = '0';
  // }
















