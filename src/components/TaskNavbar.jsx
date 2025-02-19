import React from 'react';
import '../styles/TaskNavbar.css';

const TaskNavbar = () => {
    return (
        <div className="task-navbar">
            <div className="task-navbar__left">
                <div className="task-navbar__burger">Burger</div>
                <div className="task-navbar__logo">Logo</div>
                <div className="task-navbar__title">Calendario</div>
            </div>
            <div className="task-navbar__right">
                <div className="task-navbar__help">Help</div>
                <div className="task-navbar__toggleButton">
                    <div className="task-navbar__toggleButton__calendar">Calendar</div>
                    <div className="task-navbar__toggleButton__task">Task</div>
                </div>
                <div className="task-navbar__squares">Squares</div>
                <div className="task-navbar__iconProfile">Picture</div>
            </div>

        </div>
    );
};

export default TaskNavbar;