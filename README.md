# Frontend Mentor - QR Code Component solution

[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/EONRaider/QR-Code-Component?label=CodeFactor&logo=codefactor&style=flat-square)](https://www.codefactor.io/repository/github/eonraider/qr-code-component)
[![FrontendMentor](https://img.shields.io/badge/FrontendMentor-EONRaider-blue?style=flat-square)](https://www.frontendmentor.io/profile/EONRaider)
[![Reddit](https://img.shields.io/badge/Reddit-EONRaider-FF4500?style=flat-square&logo=reddit)](https://www.reddit.com/user/eonraider)
[![Twitter](https://img.shields.io/badge/Twitter-eon__raider-38A1F3?style=flat-square&logo=twitter)](https://twitter.com/intent/follow?screen_name=eon_raider)

This is a solution to the [QR Code Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Run with Docker](#run-with-docker)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

A simple project using pure HTML5 and CSS3 showcasing a QR code landing page that 
leads the visitor to [Frontend Mentor](http://www.frontendmentor.io) website.
### Screenshot

![qr-code-project](https://user-images.githubusercontent.com/15611424/161400835-731eb28e-9f32-405f-a7a5-4e5f98f7160c.png)

### Links

- [My Solution on Frontend Mentor](https://www.frontendmentor.io/solutions/qr-code-card-in-html5css3-HyXU24U7q)
- [Check the Live Site](https://eonraider-qr-code-component.netlify.app/)

### Run with Docker
The app will be available at http://localhost:3000/

![docker-run-qr-code](https://user-images.githubusercontent.com/15611424/161600544-004fb366-df89-4d59-b8cf-899e29abacb0.png)

## My process

1. I started with the markup on index.html, complying with HTML5 semantic tags and standards as much as possible.
2. The styling provided by the project briefing was implemented first, followed by the classes I came up with on the markup.
3. Browser developer tools were used until I could get the dimensions just right, since all I had was an image file to base myself on.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow

### What I learned
- One of several optimal ways of centering an element on the screen while ensuring responsiveness.
- Gave my first shot at applying the [CUBE CSS](https://cube.fyi/) methodology to a project
- Used the [CSS reset](https://piccalil.li/blog/a-modern-css-reset/) by Andy Bell
- Used Netlify for deployment of a static website for the first time
- Implemented a simple CI/CD pipeline that:
  - Checks the project's NPM packages for security vulnerabilities
  - Lints all the code with ESLint
  - Publishes an image of the NodeJS app to my repository on DockerHub for deployment