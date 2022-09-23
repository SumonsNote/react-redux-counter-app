import React from 'react';
import { useSelector } from 'react-redux';
import { ToDoAlert } from './ToDoAlert';
import { ToDoEditAlert } from './ToDoEditAlert';

const TodoList = () => {

    const todoList = useSelector((state) => state.todo.value)
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Task Name</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todoList.map((item, i) => {
                                    return (
                                        <tr key={i.toString()}>
                                            <td>{i + 1}</td>
                                            <td>{item}</td>
                                            <td><button onClick={() => {ToDoEditAlert(i, item)}} className='btn btn-sm btn-dark'>Edit</button></td>
                                            <td><button onClick={() => {ToDoAlert(i)}} className='btn btn-sm btn-danger'>Remove</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoList;