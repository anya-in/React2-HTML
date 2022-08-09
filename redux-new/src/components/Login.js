import React from 'react'
import { useDispatch } from "react-redux"
import { login } from "../features/user"
import { logout } from "../features/user"

function Login() {

    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => {
                dispatch(login({ name: "Tara", age: 30, email: "tara@gmail.com" }))
            }}
            >Login</button>
            <button onClick={() => {
                dispatch(logout())
            }}>LOGOUT</button>
        </div >
    )
}

export default Login