import React from 'react';
import '../styles/TaskListDisplayer.css';
const TaskListDisplayer = () => {
    return (
        <div>
            <ul>
                <li>
                    <input type="checkbox" id="myCheckbox" />
                    <label for="myCheckbox"> Mis tareas</label>
                </li>
                <li>
                    <input type="checkbox" id="myCheckbox2" />
                    <label for="myCheckbox"> Example list 1</label>
                </li>
            </ul>
        </div>
    );
};

export default TaskListDisplayer;