import React from 'react';
import {useCallback} from "react";
import {useState} from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import './ToDoList.css';

export const ToDoList = () => {
    const [isAddTaskModal, setIsAddTaskModal] = useState(false);
    const [isConfirmModal, setIsConfirmModal] = useState(false);
    const [toDoTasks, setToDoTasks] = useState([]);
    const [inProgressTasks, setInProgressTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);

    const toggleAddNewTaskModal = useCallback(() => setIsAddTaskModal(!isAddTaskModal), [isAddTaskModal])
    const toggleCancelConfirmModal = useCallback(() => setIsConfirmModal(!isConfirmModal), [isConfirmModal])
    const closeAllModals = () => {
        toggleAddNewTaskModal();
        toggleCancelConfirmModal();
    }

    const onSaveButtonClick = () => {

    }

    return (
        <div className='container'>
            <h1 className='main-header'>Super TO-DO List</h1>

            <div className ='columns-container'>
                <div className='header-and-column'>
                    <h1 className='column-header'>TO DO</h1>
                    <div className='column'>
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
                                className='new-task-name-input'
                                id="standard-helper-text"
                                defaultValue="Task 1"
                                helperText="0/100 characters"
                                variant="standard"
                                size='medium'
                            />
                            <div>
                                <label htmlFor='outlined-multiline-static'>Description</label>
                            </div>
                            <TextField
                                className='description-input'
                                id="outlined-multiline-static"
                                multiline
                                rows={9}
                                helperText='0/1000 characters'
                            />
                        </div>
                            <hr/>
                            <div className='modal-buttons-container'>
                                <button className='modal-button' onClick={toggleCancelConfirmModal}>Cancel</button>
                                <button className='modal-button'>Save</button>
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