import React from 'react';
import '../styles/TaskDashboard.css';
import taskimage     from '../assests/taskimage.png';
import { IoMdCheckmarkCircleOutline } from "react-icons/io"; 
import { MdArrowRight } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";


const TaskDashboard = () => {
    return (
        <div className="task-dashboard__container">
            <div className="task-dashboard__subcontainer">
                <div className="task-dashboard__header">
                    <div>Mis tareas</div>
                    <CiMenuKebab />
                </div>
                <div className="task-dashboard__addTask">
                    <IoMdCheckmarkCircleOutline className="task_icon_add"/>
                    <div>Agregar una tarea</div>
                </div>
                <div className="task-dashboard__tasks">
                    <div className="task-dashboard__tasksbody"> 
                        <img src={taskimage} alt="Imagen en assets"/>
                        <h3>Se completaron todas las tareas</h3>
                        <h4>Buen trabajo!</h4>
                    </div>
                    <div className="task-dashboard__tasksfooter">
                    <MdArrowRight /> 
                    <div>Completadas (19)</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDashboard;