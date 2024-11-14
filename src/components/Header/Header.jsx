import React, { useState ,useEffect} from 'react'
import { Container,Logo,LogoutButton} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authService from '../../appwrite/auth/auth'

const Header = () => {

  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [username ,setName] = useState('')

  useEffect(()=>{
    const fetchUsers = async () => {
        try {
            const user = await authService.getCurrentUser();
            setName(user);
        }
        catch{
            toast.error(error.message);
            throw error;
        }
    }
    fetchUsers();
  },[])

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: !authStatus
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
    name: "My Post",
    slug: "/my-posts",
    active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className='py-3 bg-white fixed w-screen shadow'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 text-black font-light hover:text-white py-2 duration-200 hover:bg-gray-800 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <>
              {/* <li className='hover:bg-red-700 mx-2 text-white bg-red-800 rounded-full px-2 h-10 font-light'> */}
              <li className='mx-2'>
                <LogoutButton/>
              </li>
              </>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header
