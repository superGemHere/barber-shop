import {html, render} from "../lib.js";

const mainElement = document.querySelector('main');

const homeTemplate = () => html`<div class="content">
<h1>Compass Barber Shop</h1>
<p>Welcome to our barber shop, where we appreciate our client's appearance.<br>Look matters, hairstyle and beard matters.</p>
</div>`;

export const showHome = () =>{
    render(homeTemplate(), mainElement);
};