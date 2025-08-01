
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
//import { Popover, PopoverContent } from '../ui/popover'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { Avatar, AvatarImage } from '../avatar'
import { Button } from '../button'
import { LogOut, User2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import axios from 'axios'

const Navbar = () => {
 // const user = false;
  const {user} = useSelector(store=>store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get('${USER_API_END_POINT}/logout', {withCredentials:true})

      if(res.data.success){
        dispatch(setUser(null));
        navigate('/');
         toast.error(error.response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className='bg-white'>
      <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
        <div>
          <h1 className='text-2xl font-bold'>
            Job<span className='text-[#F83002]'>Portal</span>
          </h1>
        </div>
        <div className=' flex items-center gap-12'>
          <ul className='flex font-medium items-center gap-5'>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/jobs">Jobs</Link></li>
             <li><Link to="/browse">Browse</Link></li>
          </ul>
          {
           !user ? (      // agr user nahi hai to login and signup dikhega otherwise nahi dikhega profile dikhega 
            <div className='flex items-center gap-2'>
              <Link to='/login'><Button variant='outline'>Login</Button></Link>    
              <Link to='signup'><Button  className='bg-[#6A38C2] hover:bg-[#5b38a6] '>Signup</Button></Link>
            </div>
           )  : (
             <Popover>
            <PopoverTrigger asChild>
              <Avatar className='cursor-pointer'>
                <AvatarImage src="{user?.profie?.profilePhoto" alt="@shadcn" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className='w-80'>
              <div className=''>
                <div className='flex gap-2 space-y-2'>
                  <Avatar className='cursor-pointer'>
                  <AvatarImage src="{user?.profie?.profilePhoto}" alt="@shadcn" />
                  </Avatar>
                  <div>
                    <h4 className='font-medium'>{user?.fullname}</h4>
                    <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                  </div>
                </div>
                <div className='flex flex-col  my-2 text-gray-600'>
                  <div className='flex w-fit items-center gap-2 cursor-pointer'>
                    <User2/>  
                  <Button variant="link"><Link to='/profile'>View Profile</Link></Button>
                </div>
                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                  <LogOut/>                                                         
                  <Button onClick={logoutHandler} variant="link">Logout</Button>
                </div>
            </div>
          </div>
            </PopoverContent>
          </Popover>
           )
          }

        </div>
      </div>
      </div>
  )
}

export default Navbar

