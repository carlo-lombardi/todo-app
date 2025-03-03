import React from 'react';
import '../styles/TaskNavbar.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdHelpOutline } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { PiSquaresFourFill } from "react-icons/pi";


import imageProfile from '../assests/carlo.png';
import logoCalendar from '../assests/calendar.svg';

const TaskNavbar = () => {
    return (
        <div className="task-navbar">
            <div className="task-navbar__left">
                <div className="task-navbar__burger"><RxHamburgerMenu /></div>
                <div className="task-navbar__logo">
                 <img src={logoCalendar} alt="Imagen en assets"/>
                <div className="task-navbar__title">Calendario</div>
                </div>
            </div>
            <div className="task-navbar__right">
                <div className="task-navbar__help"><MdHelpOutline /></div>
                <div className="task-navbar__toggleButton">
                    <div className="task-navbar__toggleButton__calendar"><GoCalendar /></div>
                    <div className="task-navbar__toggleButton__task"><IoMdCheckmarkCircleOutline /></div>
                </div>
                <div className="task-navbar__squares"><PiSquaresFourFill /></div>
                <div className="task-navbar__iconProfile">
                    <img src={imageProfile} alt="Imagen en assets"/>
                </div>
            </div>

        </div>
    );
};

export default TaskNavbar;