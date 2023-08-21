import {page} from "./lib.js";
import { showHome } from "./Views/homeView.js";
import { showNav } from "./middlewares/navigation.js";


page(showNav);


// page('/', showHome);

page.start();