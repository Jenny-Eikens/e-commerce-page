# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![Screenshot of laptop design](public/images/Screenshot%20Laptop.jpg)
![Screenshot of mobile design](public/images/Screenshot%20Mobile.jpg)

### Links

- Solution URL: [](https://github.com/Jenny-Eikens/e-commerce-page)
- Live Site URL: [](https://jenny-eikens.github.io/e-commerce-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Typescript
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - CSS framework

### What I learned

This project taught me a lot. There are several things I worked with / implemented for the first time. I had never coded an image gallery before, so it took me a while to figure out how to implement the ability to rotate through the images via arrow buttons while also being able to switch to an image by clicking on its thumbnail.

I also improved my understanding of state variables and passing them down, as I had to use a good few of those to make everything work as intended.
From feedback on my previous project, I learned not to hard-code data into a website but instead put the data in separate JSON files for maintainability. This project is the first time I implemented that.

Working on this project also helped me improve my understanding of conditional rendering, e.g. regarding the nav bar on mobile vs. larger screens.

Finally, I learned how to make it possible to close an element on the page (in this case, the lightbox and the shopping cart component) by clicking elsewhere on the page. I struggled with this initially as I ran into the problem that clicking on the element itself would cause it to close too. To prevent this, I stopped event propagation of the click event.

### Continued development

## Author

- Website - [Jennifer Eikens](https://jenny-eikens.github.io/portfolio-page/#projects)
- Frontend Mentor - [@Jenny-Eikens](https://www.frontendmentor.io/profile/Jenny-Eikens)
- GitHub - [Jenny-Eikens](https://github.com/Jenny-Eikens)
