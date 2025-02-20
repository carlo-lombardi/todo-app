import React from 'react';
import TaskCreateView from './TaskCreateView';
import TaskListView from './TaskListView';
import TaskCreateButton from './TaskCreateButton';
import '../styles/TaskSideNavbar.css';

const TaskSideNavbar = () => {
    return (
        <div className="task-side-navbar">
            <nav>
                <TaskCreateButton />
                <div className="task-side-navbar__displayAllTask">  ✅ Todas las tareas </div>
                <div className="task-side-navbar__displayOnlyhighlighs"> Destacados </div>
                <TaskListView />
                <TaskCreateView />
                <button className="task-side-navbar__createList">Create List</button>
            </nav>
        </div>
    );
};

export default TaskSideNavbar;