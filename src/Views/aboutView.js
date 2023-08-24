import { html, render } from "../lib.js";

const mainElement = document.querySelector('main');

const aboutTemplate = () => html`
<section class="about-section" style="color: #fff;">
            <div class="about-content">
                <div class="story">
                    <div id='logo'>
                        <h1 class="logo">Compass</h1>
                    </div>
                    <h3 class="experience" style="font-family: 'Comfortaa', cursive;">With 4+ years of experience on the
                        field.</h5>
                        <div id='container'>
                            <p style="font-family: 'Comfortaa', cursive;">I can confidently say that you are gonna leave
                                impressed and satisfied like never before<br>from our products to our services
                                &nbsp;(Haircut, Hair Coloring,Hair Care, Beard Shaping/Trimming, Beard Care, Eyebrow
                                Shaping, Face Wax, Face Masks).</p>
                        </div>
                </div>
                <div class="contact-div">

                    <div class="contact" styl>
                        <div class="map" style="width: 100% ; height: fit-content;">
                            <div class="google-location">
                                <iframe style="height: 200px; width: 300px; border-radius: 15px;"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11872.154310825856!2d25.5422005!3d41.9350224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ad51c0c8b78051%3A0x150a8206749501f4!2sCompass%20Barber%20Shop!5e0!3m2!1sbg!2sbg!4v1692622441662!5m2!1sbg!2sbg"
                                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div class="map-content">
                                <h4 style=" padding-top: 20px; margin-bottom: 20px; font-family: 'Comfortaa', cursive;">
                                    Contact Us:</h4>
                                <p style="font-family:  'Comfortaa', cursive; text-align: center;">Address: &nbsp;ул.
                                    „Банска“ 34, 6301 ж.к. Любен Каравелов, Хасково</p>
                                <p>Facebook: &nbsp;@Compass Barber Shop<br></p>
                                <p>Instagram: &nbsp;@compass.barbershop<br></p>
                                <p>Phone: &nbsp;+359 88 970 6782</p>

                                <div class="social" style="display: flex;">
                                    <p>Follow on: </p>
                                    <div class="social-icons" style="display: flex;">
                                        <a href="https://www.facebook.com/profile.php?id=100057548600653" style=" color: #fff; cursor: pointer;">
                                            <i class="fa fa-brands fa-square-facebook fa-2xl"></i>
                                        </a>
                                        <a href="https://www.instagram.com/compass.barbershop/" style=" color: #fff; cursor: pointer;">
                                            <i class="fa fa-brands fa-instagram fa-2xl"></i>
                                        </a>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;

export const showAbout = () =>{
    render(aboutTemplate(), mainElement)
}
