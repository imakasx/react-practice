import React from "react";
import {Signup as SignupComponent} from "../components/index"
import authService from '../appwrite/auth'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

function Signup() {
    return(
        <div className="py-8" >
            <SignupComponent />
        </div>
    )
}
export default Signup;