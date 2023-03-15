import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const RegistCompany = () => {
    const [registForm, setRegistForm] = useState({
        name:'',
        email: '',
        password: '',
        phone:'',
        company:'',
        company_role:'',
    })
    const [validate, setValidate] = useState({error: false, message: ''})
    const navigate = useNavigate()
    const handleRegist = (event)=> {
        event.preventDefault()
        axios({
            url: 'https://gas-crack-production.up.railway.app/api/v1/auth/registercompany',
            method:"POST",
            data: registForm
        }).then((res)=> {
            console.log(res.data.data);
            console.log(res.data.message);
            navigate(`/logincompany`);
        }).catch((err)=> {
            setValidate({error: true, message: err.response})
        })
    }
  return (
    <>
        <div className='lg:flex h-[130vh] lg:p-10'>
            <div id="auth-img" className='w-fit mx-auto hidden lg:block lg:flex-1 bg-blend-overlay sm:hidden'>
                {/* <img className='h-screen p-10' src={require('../../assets/img/auth/auth-img-placeholder.svg').default} /> */}
                <div id="auth-bg-overlay" className='w-full h-full'>
                    <div className='flex p-10'>
                        <img className="px-1" src={require('../../../assets/img/auth/brand-logo.svg').default} />
                        <p className='pl-2 text-white font-semibold'>Peworld</p>
                    </div>

                    <h1 className='font-bold text-4xl leading-normal text-white p-20'>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
                </div>
            </div>

            <div id="auth-form" className="px-10 text-white h-screen lg:flex-1 lg:text-start">
                <h2 className='text-lg font-bold md:text-center lg:text-header lg:text-xl lg:text-start'>Helo, Pewpeople</h2>
                <p className='mb-5 mt-3 md:text-center lg:text-text lg:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>

                <form onSubmit={handleRegist} className='md:flex md:flex-col md:w-3/4 md:mx-auto lg:w-full'>
                    <label for="name" className='lg:text-pale lg:text-sm'>
                        Nama
                    </label>
                    <input onChange={(e)=> setRegistForm({
                              ...registForm,
                            name: e.target.value
          })} className='block w-full h-10 mt-2 rounded-sm p-2 text-header mb-4 lg:border lg:border-placeholder' type="text" placeholder='Masukan nama lengkap'/>
                    <label for="email" className='lg:text-pale lg:text-sm'>
                        Email
                    </label>
                    <input onChange={(e)=> setRegistForm({
                              ...registForm,
                            email: e.target.value
          })} className='block w-full h-10 mt-2 rounded-sm p-2 text-header mb-4 lg:border lg:border-placeholder' type="email" placeholder='Masukan alamat email'/>
                    <label for="company-name" className='lg:text-pale lg:text-sm'>
                        Perusahaan
                    </label>
                    <input onChange={(e)=> setRegistForm({
                              ...registForm,
                            company: e.target.value
          })} className='block w-full h-10 mt-2 rounded-sm p-2 text-header mb-4 lg:border lg:border-placeholder' type="text" placeholder='Masukan nama perusahaan'/>
                    <label for="company_role" className='lg:text-pale lg:text-sm'>
                        Bidang perusahaan
                    </label>
                    <input onChange={(e)=> setRegistForm({
                              ...registForm,
                            company_role: e.target.value
          })} className='block w-full h-10 mt-2 rounded-sm p-2 text-header mb-4 lg:border lg:border-placeholder' type="text" placeholder='Masukan bidang perusahaan'/>
                    <label for="phone" className='lg:text-pale lg:text-sm'>
                        No.handphone
                    </label>
                    <input onChange={(e)=> setRegistForm({
                              ...registForm,
                            phone: e.target.value
          })} className='block w-full h-10 mt-2 rounded-sm p-2 mb-4 lg:border text-header lg:border-placeholder' type="text" placeholder='Masukan nomor handphone'/>
                    <label for="password" className='lg:text-pale lg:text-sm'>
                        Kata sandi
                    </label>
                    <input onChange={(e)=> setRegistForm({
                              ...registForm,
                            password: e.target.value
          })} className='block w-full h-10 mt-2 rounded-sm p-2 mb-4 lg:border text-header lg:border-placeholder' type="password" placeholder='Masukan kata sandi'/>

                    <label for="password-confirm"  className='lg:text-pale lg:text-sm'>
                    Konfirmasi kata sandi
                    </label>
                    <input onChange={(e)=> setRegistForm({
                              ...registForm,
                            password: e.target.value
          })} className='block w-full h-10 mt-2 rounded-s p-2 mb-5 lg:border text-header lg:border-placeholder' type="password" placeholder='Ulangi kata sandi'/>

                    <button type='submit' className='mb-4 mt-5 w-full px-4 py-2 rounded-sm block bg-primary font-semibold'>Daftar</button>

                </form>
                    <p className='text-header mt-4 text-center'>Sudah punya akun? <Link className='text-primary' to="/login">Masuk disini</Link></p>

            </div>
        </div>
      </>
  )
}

export default RegistCompany
