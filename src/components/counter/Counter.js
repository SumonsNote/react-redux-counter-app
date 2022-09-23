import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, setCustom } from '../../redux/state/counterState/CounterSlice';

const Counter = () => {
    const count = useSelector((state=> state.counter.value))
    const dispatch = useDispatch();
    const customNumber = useRef();
    return (
        <div className='card'>
            <div className='card-header bg-secondary'>
                <h4 className='text-white'>My Counter App</h4>
            </div>
            <div className='card-body'>
                <h1>{count}</h1>
            </div>
            <div className='my-4'>
                <button onClick={() => {dispatch(decrement())}} className='btn mx-2 px-5 fs-2 fw-bold btn-danger'>-</button>
                <button onClick={() => {dispatch(increment())}} className='btn mx-2 px-5 fs-2 fw-bold btn-success'>+</button>
            </div>
            <div className='my-4'>
                <input ref={customNumber} className='form-control w-50 mx-2' type="number"/>
                <button onClick={() => {dispatch(setCustom(customNumber.current.value, customNumber.current.value = ''))}} className='btn mx-2 w-50 my-2 fs-4 btn-primary'>Set Number</button>
            </div>
        </div>
    );
};

export default Counter;