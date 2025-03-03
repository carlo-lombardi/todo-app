import React from 'react';
import TaskListDisplayer from './TaskListDisplayer';
import '../styles/TaskListView.css';

const TaskListView = () => {
    return (
        <div className="task-list">
            <div  className="task-list__container">
                <div class="task-list__dropdownbutton" jsslot="">Listas</div>
                <div class="task-list__arrowicon" jsslot=""> ^ </div>
            </div>       
            <TaskListDisplayer />
        </div>
    );
};

export default TaskListView;