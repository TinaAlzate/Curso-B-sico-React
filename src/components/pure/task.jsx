import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
//Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'

const TaskComponent = ({task}) => {
    return (
        <div>
            <h2 className="task-name">Nombre: { task.name }</h2>
            <h3>Descripción: { task.description }</h3>
            <h4>Level: { task.level }</h4>
            <h5>This task is: { task.completed ? 'Completed':'Pending'}</h5>
        </div>
    );
};


TaskComponent.propTypes = {
    //La siguiente linea de codigo indica que es una instancia que va a recibir una tarea y no un strig por ejemplo
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
