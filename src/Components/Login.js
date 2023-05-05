import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom"

const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorState, setErrorState] = useState("");
    const dispatch = useDispatch();

    const submit = e => {

        e.preventDefault();
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: username,
                password: password,
            })
        })
            .then(res => {
                if (res.status === 200) {
                    res.json()
                        .then(data => {
                            console.log(data);
                            if (data.message !== "Invalid credentials") {
                                console.log(data)
                                localStorage.setItem('token', data.token);
                                localStorage.setItem('id', data.id);
                                dispatch({
                                    type:'LOGIN_SUCCESS',
                                    payload:data
                                })
                                window.location.href = "/profilePage"
                                setErrorState("")
                            }
                            else {
                                setErrorState("Error: " + data.message)
                          
                            }
                        })
                }
                else{
                    throw new Error(res.status);
                }
            })
            .catch(err => {
                dispatch({
                    type: "LOGIN_FAILURE",
                    payload: err.message,
                  });
                  setErrorState("Error: " + err.message)
          
            })

    }

    return (
        <div className="container-fluid">
            <div className='row'>
            <h1 className='text-center'>Login</h1>
           
           {errorState && <p className='text-danger'>{errorState}</p>}

           <form className='form-group'>
               <input 
               className='form-control my-2'
               type="text"
                   value={username} placeholder='Username...' 
                   onChange={e => setUserName(e.target.value)} />
               <input 
               className='form-control my-2'
                   type="password" placeholder='Password...'
                   value={password}
                   onChange={e => setPassword(e.target.value)} />
               <NavLink to="/profilePage" onClick={submit}><button className='btn btn-primary'>Login</button></NavLink>
           </form>
            </div>
           
        </div>

    )
}

export default Login