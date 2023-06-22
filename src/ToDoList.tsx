import React from 'react';
import './ToDoList.css';

export const ToDoList = () => {
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

            <button className='addButton'>+</button>
        </div>
    );
}