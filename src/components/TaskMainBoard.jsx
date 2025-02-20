import React from 'react';
import TaskDashboard from './TaskDashboard';
import TaskNavbar from './TaskNavbar';
import TaskSideNavbar from './TaskSideNavbar';
import '../styles/TaskMainBoard.css';

const TaskMainBoard = () => {
    return (
        <div className="task-main-board__container">
            <TaskNavbar />
            <div className="task-main-board">
                <TaskSideNavbar />
                <TaskDashboard />
            </div>
        </div>
    );
};

export default TaskMainBoard;