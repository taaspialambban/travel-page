import { Link, NavLink } from 'react-router-dom';

import logo from '../assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

  const {user , singOut} = useContext(AuthContext) ; 

  const handleSingOut = () =>{
    singOut()
    .then (result =>{
      console.log('user sing out', result)
    }) 
    .catch (error =>{
      console.error(error)
    })
  }

    return (
                 <div className='flex justify-around space-x-10 text-xl font-medium text-white mx-auto items-center'>
                 <img className='w-36 text-white ' src={logo} alt="" />
                  <div>
                  <fieldset className="w-full space-y-1 border text-white">
	<label htmlFor="Search" className="hidden">Search your Destination...</label>
	<div className="relative">
		<span className="absolute inset-y-0 left-0 flex items-center pl-2">
			<button type="button" title="search" className="p-1 focus:outline-none focus:ring">
			<CiSearch />
			</button>
		</span>
		<input type="search" name="Search" placeholder="Search your Destination..." className="w-40 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-[#FFFFFF33] " />
	</div>
</fieldset>
                  </div>
                  <div className='flex justify-between space-x-7'>
                    <NavLink className={({isActive}) => isActive ? 'text-primary font-bold': 'font-bold'} to='/'>News</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'text-primary font-bold': 'font-bold'} to='/destination'>Destination</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'text-primary font-bold': 'font-bold'} to='/blog'>Blog</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'text-primary font-bold': 'font-bold'} to='/content'>Contact</NavLink>
                    {
                      user ? 
                      <>
                      <span className='text-green-500'>{user.email}</span> 
                      <a onClick={handleSingOut} className='bg-yellow-700 border w-20' href="">Sing Up</a>
                      </>
                      :
                      <Link to='/login'>
                    <button className='bg-yellow-700 border w-20'>Login</button>
                    </Link>
                    }
                    
                  </div>
                 </div>
    );
};

export default Navbar;