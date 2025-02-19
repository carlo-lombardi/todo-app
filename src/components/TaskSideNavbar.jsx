import React from 'react';
import TaskCreateView from './TaskCreateView';
import TaskListView from './TaskListView';
import TaskCreateButton from './TaskCreateButton';
const TaskSideNavbar = () => {
    return (
        <div className="task-side-navbar">
            <nav>
                <TaskCreateButton />
                <div> Todas las tareas </div>
                <div> Destacados </div>
                <TaskListView />
                <TaskCreateView />
                <button>Create List</button>
            </nav>
        </div>
    );
};

export default TaskSideNavbar;