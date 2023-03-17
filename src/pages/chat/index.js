import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import userPlaceholder from '../../assets/images/user-placeholder.png'
import { BsSend } from 'react-icons/bs'

const Chat = () => {
  return (
    <div>
        <section>
            <Navbar />
        </section>
        <section className='mx-10 flex h-[70vh] relative'>
            <div className='bg-white rounded-xl shadow-xl px-5 w-[25vw]'>
                <p className='border-b-2 py-2'>
                    Chat
                </p>
                <div className='flex flex-row items-center py-3 justify-start cursor-pointer hover:scale-110 ease-in-out duration-200'>
                    <img src={userPlaceholder} className='w-11 h-11 rounded-full'/>
                    <div className='px-3'>
                        <p>Perusahaan A</p>
                        <p className='text-pale' >Permisi kak, mau tanya...</p>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-xl shadow-xl px-5 ml-10 w-[75vw]'>
                <p className='border-b-2 py-2'>Perusahaan A</p>

                <div className='flex absolute bottom-5'>
                    <input type='text' placeholder='type message ..' className='placeholder::text-slate-400 border-2 py-3 px-2 rounded-3xl w-[60vw]' />
                    <div  className='text-white bg-secondary p-4 rounded-full mx-5 cursor-pointer hover:bg-indigo-800 ease-in-out duration-200 hover:scale-110'>
                    <BsSend size={20} />
                    </div>
                </div>

            </div>
        </section>
        <section className='mt-10'>
            <Footer />
        </section>
    </div>
  )
}

export default Chat