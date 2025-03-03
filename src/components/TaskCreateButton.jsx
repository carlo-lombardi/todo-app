import React from 'react';
import '../styles/TaskCreateButton.css';
import { FiPlus } from "react-icons/fi";
const TaskCreateButton = () => {
    return (
        <div className="task-create-button__container">
            <div className="task-create-button">
                <FiPlus/>      
                <span>Crear</span>
            </div>
        </div>
    );
};

export default TaskCreateButton;