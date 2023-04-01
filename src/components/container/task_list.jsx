import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example','Default description', false, LEVELS.NORMAL)
    const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div><h1>Your tasks:</h1> </div>
            {/* TODO Aplicar un for/map para renderizar una lista de tareas*/}
            <TaskComponent task={ defaultTask }></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
