
import './index.scss'
import logo from './images/logo.svg'
import userIcon from './images/user-icon.svg'
import Project1 from './images/project-1.png'
import Project2 from './images/project-2.png'
import Project3 from './images/project-3.png'
import Project4 from './images/project-4.png'
import Project5 from './images/project-5.png'
import Project6 from './images/project-6.png'
import authorLogo from './images/author-logo.svg'
import loope from './images/icons/loope.svg'
import filter from './images/icons/filter.svg'
import book from './images/icons/book.svg'
import camera from './images/icons/camera.svg'
import community from './images/icons/community.svg'
import animals from './images/icons/animals.svg'
import competition from './images/icons/competition.svg'
import education from './images/icons/education.svg'
import emergency from './images/icons/emergency.svg'
import event from './images/icons/event.svg'
import faith from './images/icons/faith.svg'
import family from './images/icons/family.svg'
import medical from './images/icons/medical.svg'
import memorial from './images/icons/memorial.svg'
import newlywed from './images/icons/newlywed.svg'
import sports from './images/icons/sports.svg'
import travel from './images/icons/travel.svg'
import volunteer from './images/icons/volunteer.svg'
import wishes from './images/icons/wishes.svg'
import nonprofit from './images/icons/nonprofit.svg'


function hiddenBlockToggle(button, hiddenBlock) {
    let targetButton = document.querySelector('.' + button),
        targetBlock = document.querySelector( '.' + hiddenBlock);

    targetButton.addEventListener('click', () => {
        targetBlock.classList.toggle(hiddenBlock + '--visible');
    })
}

document.addEventListener('DOMContentLoaded', () => {
   hiddenBlockToggle('header__user-icon', 'header__user-info');
   hiddenBlockToggle('select-button', 'category--mobile');
   hiddenBlockToggle('filter__button', 'category--mobile');
});