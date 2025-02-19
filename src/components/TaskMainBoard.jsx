import React from 'react';
import TaskDashboard from './TaskDashboard';
import TaskNavbar from './TaskNavbar';
import TaskSideNavbar from './TaskSideNavbar';
import '../styles/TaskMainBoard.css';

const TaskMainBoard = () => {
    return (
        <>
            <TaskNavbar />
            <div className="task-main-board">
                <TaskSideNavbar />
                <TaskDashboard />
            </div>
        </>
    );
};

export default TaskMainBoard;