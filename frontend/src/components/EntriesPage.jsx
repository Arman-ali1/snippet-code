import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import Image from '../assets/th.jpeg'


const EntriesPage = () => {

  const todos = useSelector(state => state.todos)
  console.log(todos.length);
  let len=todos.length;
  return (
    <div>
      <Link to={"/"}>
        <h1 className='text-2xl p-4 font-bold'>Home <span className='bg-white text-black pr-3 pl-3 p-1'>Page</span></h1>
      </Link>
      <h1 className='text-center text-2xl font-bold'> Submitted Entries</h1>
      
      {len?<ul className="list-none">
        {todos.map((todo) => (
          
          <li
          
            className="mt-4 flex justify-between items-center flex-col  px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='sm:grid grid-flow-col  bg-zinc-800 gap-32 p-4  rounded-xl min-w-screen text-2xl'>
                <div className='text-white'>username : <span className='text-green-500 '>{todo.username}</span></div>
                <div className='text-white'>Language : <span className='text-green-500 '>{todo.Language}</span></div>
                <div className='text-white'>timeTaken : <span className='text-green-500 '>{todo.timeTake}</span></div>
            </div>
            <div className='sm:grid sm:grid-flow-col'>
              <div  className='text-xl'>
                <h1 className='text-2xl font-bold'>code:</h1>
                <div className='text-green-500 sm:min-h-[500px] sm:min-w-[700px] bg-gray-800 rounded-xl' >{todo.code}</div>
              </div>
              <div className=' ml-6'>
                <h1 className='text-2xl font-bold text-center'>stdin:</h1>
                <p className='text-green-500 sm:min-w-[100px] sm:min-h-[500px] bg-gray-800 break-all ml-6 rounded-xl'>{todo.stdin}</p>
              </div>
            </div>
      
          </li>
        ))}
      </ul>:<div className='text-2xl font-bold text-center sm:flex items-center justify-center sm:min-w-screen min-h-[400px]'>
        <img src={Image} alt="no entries" className='rounded-xl min-h-[400px] min-w-[400px]'/>
      </div>}
    </div>
  );
};

export default EntriesPage;
