import React from 'react';
import {useState} from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import './ToDoList.css';

export const ToDoList = () => {
    const [openWindow, setOpenWindow] = useState(false);

    const addNewTaskButton = () => {
        if (openWindow) {
            setOpenWindow(false);
        } else {
            setOpenWindow(true);
        }
    }
    return (
        <div className='container'>
            <h1 className='mainHeader'>Super TO-DO List</h1>

            <div className ='columnsContainer'>
                <div className='headerAndColumn'>
                    <h1 className='columnHeader'>TO DO</h1>
                    <div className='column'>
                    </div>
                </div>

                <div className='headerAndColumn'>
                    <h1 className='columnHeader'>IN PROGRESS</h1>
                    <div className='column'>
                    </div>
                </div>

                <div className='headerAndColumn'>
                    <h1 className='columnHeader'>DONE</h1>
                    <div className='column'>
                    </div>
                </div>
            </div>

            <button className='addButton' onClick={addNewTaskButton}>+</button>

            <Modal
                open={openWindow}
                onClose={addNewTaskButton}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='newTaskBox'>
                    <Typography id='modal-modal-title' className='title' variant='h4'>
                        Adding new task
                    </Typography>
                    <Typography id='modal-modal-description' className='content'>
                        <div className='contentDiv'>
                            <p>New task name</p>
                            <TextField
                                className='newTaskNameInput'
                                id="standard-helperText"
                                defaultValue="Task 1"
                                helperText="0/100 characters"
                                variant="standard"
                                size='medium'
                            />
                            <p>Description</p>
                            <TextField
                                className='descriptionInput'
                                id="outlined-multiline-static"
                                multiline
                                rows={9}
                                helperText='0/1000 characters'
                            />
                        </div>
                            <hr/>
                            <div className='modalButtonsContainer'>
                                <button className='modalButtons'>Cancel</button>
                                <button className='modalButtons'>Save</button>
                            </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}