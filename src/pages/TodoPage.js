import React from 'react';
import CreateTodo from '../components/todo/CreateTodo';
import TodoList from '../components/todo/TodoList';

const TodoPage = () => {
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-header py-5'>
                            <h5 className='fs-4'>To Do App</h5>
                        </div>
                        <div className='card-body'>
                            <CreateTodo/>
                            <TodoList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoPage;