# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers
- Monthly and yearly options & both display monthly payments

### Screenshot

![Screenshot on large screens](./images/Screenshot%202022-09-25%20211924.jpg) ![Screenshot on small screens](./images/small%20screen.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- Vanilla JS

### What I learned

Working with css grid template areas

```css
.card-top {
  padding: 1rem;
  display: grid;
  width: 100%;
  grid-template-areas:
    "one one"
    "two two"
    "three three"
    "four four";
  gap: 1rem 2rem;
  align-items: center;
}
```

Customizing input range

```css
input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  background: linear-gradient(
    90deg,
    var(--full-slider-bar) 50%,
    var(--empty-slider-bar) 50%
  );
  outline: none;
  transition: all 0.2s;
  -webkit-transition: 0.2s;
  border-radius: 15px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 35px;
  height: 35px;
  background: var(--slider-background) url(./images/icon-slider.svg) center no-repeat;
  box-shadow: 0px 3px 8px var(--slider-background);
  padding: 0.3rem;
  border-radius: 50%;
}

input[type="range"]::-moz-range-thumb {
  width: 35px;
  height: 35px;
  background: var(--slider-background) url(./images/icon-slider.svg) center no-repeat;
  box-shadow: 0px 3px 8px var(--slider-background);
  padding: 0.3rem;
  border-radius: 50%;
}
```

### Continued development

Working on different styling challenges would be interesting since I need to start feeling comfortable with styling things via css and structuring my html so it would be easily stylable. Besides, having challenging JS would be highly appreciated, too

### Useful resources

- [Kevin Powell's Youtube channel](https://www.youtube.com/kepowob) - This awesome channel helped me a lot with understanding of CSS grid and many more.

## Author

- Website - [Jelaleddin Atalykov](https://jay906.netlify.app/)
- Frontend Mentor - [@Jay906](https://www.frontendmentor.io/profile/jay906)
