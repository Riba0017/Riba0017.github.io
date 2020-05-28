
import './index.scss'
import './images/halva.png'
import './images/alfa.png'
import './images/panda.png'
import initTabMenu from "./styles/tab-menu/tab-menu";
import initFilter from "./styles/filter/filter";


document.addEventListener('DOMContentLoaded', () => {
    initTabMenu();
    initFilter();
});