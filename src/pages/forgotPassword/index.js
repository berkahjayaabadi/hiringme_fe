import React from 'react'
import { Link } from 'react-router-dom'
const ForgotPassword = () => {
  return (
    <>
        <div className='lg:flex max-h-screen lg:p-10 overflow-y-hidden'>
            <div id="auth-img" className='w-fit mx-auto hidden lg:block lg:flex-1 bg-blend-overlay sm:hidden'>
                {/* <img className='h-screen p-10' src={require('../../assets/img/auth/auth-img-placeholder.svg').default} /> */}
                <div id="auth-bg-overlay" className='w-full h-full'>
                    <div className='flex p-10'>
                        <img className="px-1" src={require('../../assets/img/auth/brand-logo.svg').default} />
                        <p className='pl-2 text-white font-semibold'>Peworld</p>
                    </div>

                    <h1 className='font-bold text-4xl leading-normal text-white p-20'>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
                </div>
            </div>


            <div id="auth-form" className="p-10 text-white h-screen lg:flex-1 lg:text-start lg:mt-10">
                <h2 className='text-lg font-bold md:text-center lg:text-header lg:text-xl lg:text-start'>Reset Password</h2>
                <p className='mb-5 mt-3 md:text-center lg:text-text lg:text-start'>You need to change your password to activate your account</p>

                <form className='md:flex md:flex-col md:w-3/4 md:mx-auto lg:w-full'>
                
                    <label for="password"  className='lg:text-pale lg:text-sm'>
                    Kata sandi
                    </label>
                    <input className='block w-full h-10 mt-2 rounded-s p-2 mb-5 lg:border lg:border-placeholder' type="password" placeholder='Masukan kata sandi'/>
                    
                    <label for="password-confirm"  className='lg:text-pale lg:text-sm'>
                    Konfirmasi kata sandi
                    </label>
                    <input className='block w-full h-10 mt-2 rounded-s p-2 mb-5 lg:border lg:border-placeholder' type="password" placeholder='Ulangi kata sandi'/>


                    <button type='submit' className='mb-4 mt-5 w-full px-4 py-2 rounded-sm block bg-primary font-semibold'>Reset password</button>

                </form>

            </div>
        </div>
      </>
  )
}

export default ForgotPassword