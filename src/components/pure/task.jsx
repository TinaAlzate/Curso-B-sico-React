import React, { useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
//Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'

const TaskComponent = ({task}) => {

    useEffect(() => {
        console.log('Create task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task]);

    /**
     * Function that returns a Badge
     * depending on the level of the task
     */
    function taskLevelBadge(){
        switch(task.level){
            case LEVELS.NORMAL: 
            return(
                <h6 className="mb-0">
                    <span className="badge bg-primary">
                        {task.level}
                    </span>
                </h6>
            )
            case LEVELS.URGENT: 
            return(
                <h6 className="mb-0">
                    <span className="badge bg-warning">
                        {task.level}
                    </span>
                </h6>
            )
            case LEVELS.BLOCKING: 
            return(
                <h6 className="mb-0">
                    <span className="badge bg-danger">
                        {task.level}
                    </span>
                </h6>
            )
            default:
                break;
        }
    }

    /** 
     * Function that return icon depending on completion of the task
     */

    function taskCompletedIcon(){
        if(task.completed){
            return (<i className='bi-toggle-on' style={{color:'green', fontSize: '2rem'}}></i>)
        }else{
            (<i className='bi-toggle-off' style={{color:'grey', fontSize: '2rem'}}></i>)
        }
    }

    return (
        <tr className="fw-normal">
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='aling-middle'>
                <span>{task.description}</span>
            </td>
            <td className='aling-middle'>
                {/* Sustituir por un badge */}
                {/* <span>{task.level}</span> */}
                {/* Execution of function to return badge element */}
                { taskLevelBadge() }
            </td>
            <td className='aling-middle'>
            {/* Execution of function to return icon depending on completion*/}
            { taskCompletedIcon() }
            </td>
        </tr>
    );
};
TaskComponent.propTypes = {
    //La siguiente linea de codigo indica que es una instancia que va a recibir una tarea y no un strig por ejemplo
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
