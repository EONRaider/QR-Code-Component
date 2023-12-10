# Frontend Mentor - QR Code Component solution

[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/EONRaider/QR-Code-Component?label=CodeFactor&logo=codefactor&style=flat-square)](https://www.codefactor.io/repository/github/eonraider/qr-code-component)
[![FrontendMentor](https://img.shields.io/badge/FrontendMentor-EONRaider-blue?style=flat-square)](https://www.frontendmentor.io/profile/EONRaider)

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

![qr-code-project](https://github-production-user-asset-6210df.s3.amazonaws.com/15611424/289378171-6ab1857a-73c6-469a-882e-b8def245b3a4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20231210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231210T181039Z&X-Amz-Expires=300&X-Amz-Signature=c53743907a0ae5113627e0708082da210430b70fc9269269b431d06b568976bc&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=0)

### Links

- [My Solution on Frontend Mentor](https://www.frontendmentor.io/solutions/qr-code-card-in-html5css3-HyXU24U7q)
- [Check the Live Site](https://eonraider-qr-code-component.netlify.app/)

### Run with Docker

The app will be available at http://localhost:3000/

![docker-run-qr-code](https://user-images.githubusercontent.com/15611424/161600544-004fb366-df89-4d59-b8cf-899e29abacb0.png)

## My process

1. I started with the markup on index.html, complying with HTML5 semantic tags and standards as much as possible.
2. The styling provided by the project briefing was implemented first, followed by the classes I came up with on the markup.
3. I used Figma to acquire all the right dimensions involved in the layout and implemented them in the appropriate CSS classes.
4. The [CSS Cube](https://cube.fyi/) methodology was used when coding the stylesheet and some of the conventions from BEM were used when naming classes.

### Built with

- Semantic HTML5 markup
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
