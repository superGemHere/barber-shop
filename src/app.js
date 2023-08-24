import {page} from "./lib.js";
import { showHome } from "./Views/homeView.js";
import { showNav } from "./middlewares/navigation.js";
import { showAbout } from "./Views/aboutView.js";


page(showNav);


page('/', showHome);
page('/about', showAbout);


page.start();