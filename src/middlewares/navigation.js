import {html, render} from "../lib.js";
const mainElement = document.querySelector('.header');

const navTemplate = () =>html`
<header class="header">
    <div class="navbar">
        <p class="logo">Compass</p>
        <ul class="nav-ul">
            <li><a href="/">Home</a></li>
            <li><a href="#">Calendar</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </div>
</header>`;

export const showNav = (ctx, next) => {
    render(navTemplate(), mainElement);
    
    next();
}