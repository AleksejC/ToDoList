import React from 'react';
import {TaskProps} from "./types";
import './TaskCard.css';

export const TaskCard: React.FC<TaskProps> = ({ task: { name, description, id} }) =>
            <div className='task-window'>
                    <div className='task-id'>
                            {id}
                    </div>
                    <div className='task-name'>
                            {name}
                    </div>
                    <div className='task-description'>
                            {description}
                    </div>
            </div>