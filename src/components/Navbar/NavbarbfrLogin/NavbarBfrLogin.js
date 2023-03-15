import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {BsBuildingsFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'


const NavbarBfrLogin = () => {
  const navigate = useNavigate()
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const [isOpenRegist, setIsOpenRegist] = useState(false)

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <h2 className="btn btn-ghost normal-case text-xl">Peworld</h2>
      </div>
      <div className="flex-none gap-5">
        <button onClick={() => {
          setIsOpenLogin(!isOpenLogin)
          setIsOpenRegist(false)
          }} className="btn btn-outline btn-primary font-bold">Masuk</button>
        {isOpenLogin && (
                        <div className='hidden absolute md:flex flex-col items-start right-36 top-20 shadow-2xl bg-white py-4 w-52 border-[1px] rounded-xl text-center text-text'>
                            <div onClick={() => navigate('/loginworker')} className='py-2 w-full flex border-b items-center justify-around cursor-pointer'>
                                <FaUserAlt size={25} className='text-text mx-3 ' />
                                <p>Worker</p>
                            </div>
                            <div onClick={() => navigate('/logincompany')} className='py-2 w-full flex items-center justify-around cursor-pointer'>
                                <BsBuildingsFill size={25} className='text-text mx-3' />
                                <p>Company</p>
                            </div>                            
                        </div>
                    )}
        <button onClick={() => {
          setIsOpenRegist(!isOpenRegist)
          setIsOpenLogin(false)
        }} className="btn btn-active btn-primary font-bold">Daftar</button>
        {isOpenRegist && (
                        <div className='hidden absolute md:flex flex-col items-start right-10 top-20 shadow-2xl bg-white py-4 w-52 border-[1px] rounded-xl text-center text-text'>
                            <div onClick={() => navigate('/registworker')} className='py-2 w-full flex border-b items-center justify-around cursor-pointer'>
                                <FaUserAlt size={25} className='text-text mx-3 ' />
                                <p>Worker</p>
                            </div>
                            <div onClick={() => navigate('/registcompany')} className='py-2 w-full flex items-center justify-around cursor-pointer'>
                                <BsBuildingsFill size={25} className='text-text mx-3' />
                                <p>Company</p>
                            </div>                            
                        </div>
                    )}
      </div>
    </div>
  );
};

export default NavbarBfrLogin;
