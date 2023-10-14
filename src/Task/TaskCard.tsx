import React from 'react';
import {TaskProps} from "./types";
import './TaskCard.css';

export const TaskCard: React.FC<TaskProps> = ({ task: { name, description } }) => {

    return (
        <div className='task-window'>
            <div className='task-name'>
                {name}
            </div>
            <div className='task-description'>
                {description}
            </div>
        </div>
    )
}