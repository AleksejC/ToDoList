import React, {ChangeEvent, useCallback, useState} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import './ToDoList.css';
import {Status, Task} from '../Task/types';
import {TaskCard} from "../Task/TaskCard";

export const ToDoList = () => {
    const [isAddTaskModal, setIsAddTaskModal] = useState(false);
    const [isConfirmModal, setIsConfirmModal] = useState(false);

    const [currentTaskName, setCurrentTaskName] = useState('');
    const [currentTaskDescription, setCurrentTaskDescription] = useState('');

    const [toDoTasks, setToDoTasks] = useState<Task[]>([]);
    const [inProgressTasks, setInProgressTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);

    const [taskCounter, setTaskCounter] = useState(1);

    const toggleAddNewTaskModal = useCallback(() => setIsAddTaskModal(!isAddTaskModal), [isAddTaskModal])
    const toggleCancelConfirmModal = useCallback(() => setIsConfirmModal(!isConfirmModal), [isConfirmModal])

    const clearAllInputs = () => {
        setCurrentTaskName('');
        setCurrentTaskDescription('');
    }

    const closeAllModals = () => {
        toggleAddNewTaskModal();
        toggleCancelConfirmModal();
        clearAllInputs();
    }

    const id = 'T-' + taskCounter;

    const onSaveButtonClick = () => {
        toggleAddNewTaskModal();
        setTaskCounter(taskCounter + 1);
        setToDoTasks([...toDoTasks, {
            name: currentTaskName,
            description: currentTaskDescription,
            status: Status.TO_DO,
            id: id
        }]);
        clearAllInputs()
    }

    const enterTaskName = useCallback((event: ChangeEvent<HTMLInputElement>) =>
        setCurrentTaskName(event.currentTarget.value),[currentTaskName]);

    const enterTaskDescription = useCallback((event: ChangeEvent<HTMLInputElement>) =>
        setCurrentTaskDescription(event.currentTarget.value),[currentTaskDescription]);

    return (
        <div className='container'>
            <h1 className='main-header'>Super TO-DO List</h1>

            <div className ='columns-container'>
                <div className='header-and-column'>
                    <h1 className='column-header'>TO DO</h1>
                    <div className='column'>
                        {toDoTasks.map((it) => (
                            <TaskCard
                                task={it}
                                key={it.id}
                            />
                        ))}
                    </div>
                </div>

                <div className='header-and-column'>
                    <h1 className='column-header'>IN PROGRESS</h1>
                    <div className='column'>
                    </div>
                </div>

                <div className='header-and-column'>
                    <h1 className='column-header'>DONE</h1>
                    <div className='column'>
                    </div>
                </div>
            </div>

            <button className='add-new-task-button' onClick={toggleAddNewTaskModal}>+</button>

            <Modal
                open={isAddTaskModal}
                onClose={toggleCancelConfirmModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='new-task-box'>
                    <Typography id='modal-modal-title' className='title' variant='h4'>
                        Adding new task
                    </Typography>
                    <Typography id='modal-modal-description' className='content'>
                        <div className='content-div'>
                            <div>
                                <label htmlFor='standard-helper-text'>New task name</label>
                            </div>
                            <TextField
                                onChange={enterTaskName}
                                className='new-task-name-input'
                                id="standard-helper-text"
                                helperText={`${currentTaskName.length}/100 characters`}
                                variant="standard"
                                size='medium'
                            />
                            <div>
                                <label htmlFor='outlined-multiline-static'>Description</label>
                            </div>
                            <TextField
                                onChange={enterTaskDescription}
                                className='description-input'
                                id="outlined-multiline-static"
                                multiline
                                rows={9}
                                helperText={`${currentTaskDescription.length}/1000 characters`}
                            />
                        </div>
                            <hr/>
                            <div className='modal-buttons-container'>
                                <button className='modal-button' onClick={toggleCancelConfirmModal}>Cancel</button>
                                <button className='modal-button' onClick={onSaveButtonClick}>Save</button>
                            </div>
                    </Typography>
                </Box>
            </Modal>
            <Modal
                open={isConfirmModal}
                onClose={toggleCancelConfirmModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='confirm-box'>
                    <Typography id="modal-modal-description">
                        <WarningRoundedIcon
                            color='warning'
                            sx={{ fontSize: 60 }}
                            className='warning-icon'
                        />
                        <div className='confirm-div'>
                            <div className='confirm-title-div'>
                                WARNING
                            </div>
                            <div className='confirm-content-div'>
                                The current task will not be saved. Cancel anyway?
                            </div>
                        </div>
                    </Typography>
                    <div className='confirm-buttons'>
                        <button className='confirm-button' onClick={toggleCancelConfirmModal}>No</button>
                        <button className='confirm-button' onClick={closeAllModals}>Yes</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}