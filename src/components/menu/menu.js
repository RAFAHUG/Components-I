import './Menu.less'

// This is the data we will be using, study it but don't change anything, yet.
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function menuMaker (menuItem) {

  const menu = document.createElement("div") ; 
  const ul = document.createElement("ul") ;
  const liOne = document.createElement("li") ;
  const litwo =document.createElement("li") ;
  const lithree = document.createElement("li") ;
  const lifour =document.createElement("li") ;
  const lifive = document.createElement("li") ;
  const lisix = document.createElement("li") ;

  menu.classList.add("menu") ; 

  menu.appendChild(ul) ;
  ul.appendChild(liOne) ; 
  ul.appendChild(litwo) ;
  ul.appendChild(lithree) ;
  ul.appendChild(lifour);
  ul.appendChild(lifive);
  ul.appendChild(lisix) ; 

  const menuButton = document.querySelector(".menu-button") ; 
  
  menuButton.addEventListener("click"  , ()=>{
    menu.classList.toggle("menu--open") ; 
    console.log("click") ; 
  }) ; 

  liOne.textContent = menuItem[0] ;
  litwo.textContent = menuItem[1] ;
  lithree.textContent = menuItem[2] ;
  lifour.textContent = menuItem[3] ;
  lifive.textContent = menuItem[4] ; 
  lisix.textContent = menuItem[5] ; 

  return menu ; 

}

const header = document.querySelector(".header") ; 

header.appendChild(menuMaker(menuItems)) ;

// const items = menuItems.map ( items => {
//   return menuMaker(items) ; 
// }) ;

// console.log(items) ; 
console.log(header) ; 
console.log(menuMaker(menuItems)) ; 
/*
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
