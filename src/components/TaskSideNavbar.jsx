import React from 'react';
import TaskListView from './TaskListView';
import TaskCreateButton from './TaskCreateButton';
import '../styles/TaskSideNavbar.css';
import { PiStarThin } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const TaskSideNavbar = () => {
    return (
        <div className="task-side-navbar">
            <nav>
                <TaskCreateButton />
                <div className="task-side-navbar__displayAllTask">  <IoMdCheckmarkCircleOutline /> Todas las tareas </div>
                <div className="task-side-navbar__displayOnlyhighlighs"> <PiStarThin /> Destacados </div>
                <TaskListView />
                <div className="task-side-navbar__createList"> + Create List</div>
            </nav>
        </div>
    );
};

export default TaskSideNavbar;