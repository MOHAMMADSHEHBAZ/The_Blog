import React ,{useState} from 'react'
import authService from '../appwrite/auth/auth' 
import { useNavigate ,Link} from 'react-router-dom'
import {login} from '../store/authslice'
import {Button,Input,Logo} from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error,setError] = useState("");
    const {register,handleSubmit} =useForm();

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/my-posts")
                toast.success("Account Created Successfully")
            }
        } catch (error) {
            setError(error.message)
            toast.error(error.message)
        }
    }

  return (
    <div className='lg:p-24 lg:mt-0 pl-5 lg:mb-0 mt-24 mb-24 bg-gray-50'>
    <div className='flex items-center justify-center lg:w-full w-80'>
    <div className={`mx-auto w-full max-w-lg bg-white rounded-xl p-10 border border-black/10`}>
    <div className="mb-2 flex justify-center">
            
        </div>
        <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">Sign up to create account</h2>
        {/* {error && <p className="text-red-600 mt-8 text-center">{error}</p>} */}
        <Toaster/>
        <form onSubmit={handleSubmit(create)}>
            <div className='space-y-5'>
                <Input
                label="Full Name "
                placeholder="Enter your full name"
                {...register("name", {
                    required: true,
                })}
                />
                <Input
                label="Email "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true
                })}
                />
                <Button type="submit" className="w-full bg-slate-800 hover:bg-black">
                    Create Account
                </Button>
                <p className="mt-2 text-center text-base text-black/60">
            Already have an account?&nbsp;
            <Link
                to="/login"
                className="font-medium text-primary transition-all duration-200 hover:underline"
            >
                Sign In
            </Link>
        </p>
            </div>
        </form>
    </div>
    </div>
</div>
  )
}

export default Signup
