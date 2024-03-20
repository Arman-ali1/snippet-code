import React, { useState ,useRef, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const FormPage = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    language: 'C++',
    stdin: '',
    code: '',
  });

  const todos = useSelector(state => state.todos)
  console.log(todos);
  const dispatch = useDispatch()
//   const history = useHistory();
// const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  
  
  // const navigate = useNavigate();
  //Time Stamp======================================
  const [timerMinutes, setTimerMinutes] = useState("0");
  const [timerSeconds, setTimerSeconds] = useState("0");
  const [countdownDate, setCountdownDate] = useState(
    new Date().getTime() + 301000
    );
    
    const handleSubmit = async(e) => {
      e.preventDefault();
      // onSubmit(formData);
      console.log(formData);
      // console.log((4-timerMinutes)+":"+(59-timerSeconds));
      formData.timeTake=(4-timerMinutes)+":"+(59-timerSeconds);
      console.log(formData);
      await axios.post('https://snippet-code.onrender.com/api/v1/contactus',formData)
      .then((res)=>{
        console.log(res);
        dispatch(addTodo(formData))
        navigate('/result')
      })
      .catch((err)=>{
        console.log(err);
      })
      // history.push('/entries');
    };
  

  let interval = useRef();

  
  const startTimer = () => {
    
    

    // navigate('/UserData',{ state: { UserStatus } });

    console.log(countdownDate);
    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop timer
        clearInterval(interval.current);
      } else {
        //update timer
        // setTimerDays(days)
        // setTimerHours(hours)
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
        if(seconds===0 && minutes===0 ){
          // handleSubmitpaper();
        }
        // countdownDate=countdownDate+1000
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(interval.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  //Time Stamp End======================================

  return (
    <div className='min-h-screen min-w-screen border-0  border-white rounded-lg p-2 shadow-2xl  shadow-slate-300 '>
      {/* <h1 className='text-center'>Submit Code Snippet</h1> */}
      
      <form onSubmit={handleSubmit} className='sm:grid sm:grid-flow-row sm:gap-2 sm:min-w-screen p-4 text-2xl font-bold  '>
          <div className='sm:grid sm:grid-flow-col bg-black p-2'>
              <h1 className='text-white text-3xl p-1 font-bold '>Snippet <span className='bg-white text-black pr-2 pl-2'>Code</span></h1>
            <label >
              Username:
              <input
                className='bg-white  text-black border-2 border-white rounded-md p-2 w-1/2'
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Preferred Language:
              <select
                className='bg-white  text-black border-2 border-white rounded-md p-2 '
                name="language"
                value={formData.language}
                onChange={handleChange}
              >
                <option value="C++">C++</option>
                <option value="Java">Java</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
              </select>
            </label>

            {/* time stamp=============== */}
          <h1>{timerMinutes<10?"0"+timerMinutes:timerMinutes}:{timerSeconds<10?"0"+timerSeconds:timerSeconds} min Left</h1>  
          </div>
          <br />
          <div className='sm:grid sm:grid-flow-row  '>
             <div>
             source code:
              <textarea
                className='bg-gray-700 w-full text-lime-500 shadow-slate-600  shadow-xl  rounded-md p-2 sm:border-0 sm:border-slate-600 '
                name="code"
                value={formData.code}
                onChange={handleChange}
                rows="11"
                required
              />
            </div>
            <br />
              <div>
              Standard Input:
              <textarea
                className='bg-gray-700 w-full text-lime-500 shadow-slate-600  shadow-xl  rounded-md p-2 sm:border-0 sm:border-slate-600 '
                name="stdin"
                value={formData.stdin}
                onChange={handleChange}
                rows="4"
              />
              </div>
              <br />
          </div>
          <div  className='flex justify-center'>
            <button className=" bg-white text-black p-2 rounded-xl w-60 hover:border-2 border-blue-800 hover:bg-black hover:text-white transition-colors duration-300 ease-in-out hover:shadow-2xl hover:shadow-red-500 shadow-xl shadow-blue-500 " type="submit">Submit</button>
          </div>
      </form>
      
    </div>
  );
};

export default FormPage;
