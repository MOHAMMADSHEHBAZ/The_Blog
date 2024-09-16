import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth/auth'
import { logout } from '../../store/authslice';
import { useState,useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const LogoutButton = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [name, setName] = useState('');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(()=>{
      const fetchUsers = async () => {
          try {
              const user = await authService.getCurrentUser();
              setName(user.name);
          }
          catch{
              toast.error(error.message);
              throw error;
          }
      }
      fetchUsers();
  },[])
    
    const logOut = () =>{
        authService.logout().then(()=>{
            navigate("/")
            dispatch(logout())
        })
    } 

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full px-4 py-2 bg-black text-white font-medium text-sm rounded-md  focus:outline-none"
      >
        {name}
        <svg class="ml-1 w-4 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
        </svg>

      </button>

      {isOpen && (
        <ul className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <li className="block px-4 py-2 text-sm font-bold text-red-800 hover:bg-gray-50 text-center cursor-pointer" onClick={logOut}>Logout</li>
        </ul>
      )}
      </div>
        {/* <button className='inline-bock px-6 py-2 duration-200 rounded-full' onClick={logOut}>Logout</button> */}
    </>
  )
}

export default LogoutButton
