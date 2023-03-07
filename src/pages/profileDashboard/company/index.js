import React, { useState, useEffect } from 'react'
import Footer from '../../../components/Footer/Footer'
import Navbar from "../../../components/Navbar/Navbar";
import { Link } from 'react-router-dom'
import { getProfileById } from '../../../redux/actions/ProfileWorker'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ProfileCompany = () => {
  const {id} = useParams();
  console.log(id)
  const [isToggled, setIsToggled]= useState(false)
  const { data, loading, error } = useSelector((state) => state.profileWorkers);
  const navigate = useNavigate();
  console.log(data)
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileById(id));
  }, [dispatch, id]);
  return (
    <>
        <Navbar />
        <div id="container" className='w-[80vw] mx-auto mb-[50vh]'>
            <div className='bg-secondary min-h-[30vh] rounded-t-lg'></div>
            <img className='bg-header h-40 w-40 rounded-full -mt-20 mx-auto' />
            <div className='text-center'>
                <h2 className='font-bold mt-10 text-2xl'>PT. Martabat jaya abadi</h2>
                <p className='text-pale mt-2'>Financial</p>
                <p className='text-pale mt-2'>purwokerto, Jawa tengah</p>
                <p className='mt-2 mb-10 text-pale lg:px-52'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                <Link className='px-10 py-4 mt-10 rounded-md lg:border-2 border-secondary text-white hover:bg-white hover:text-secondary ease-in-out duration-300 font-semibold bg-secondary' to={`/editprofilecompany/${id}`}>Edit Profile</Link>
                <div id="social-media" className='flex flex-col mb-10 content-center justify-center b-10 mt-10 text-pale'>
                    <a className='px-2 mb-1 bg-none lg:block' href=''>Email</a>
                    <a className='px-2 mb-1 bg-none lg:block' href=''>Instagram</a>
                    <a className='px-2 mb-1 bg-none lg:block' href=''>Github</a>
                    <a className='px-2 bg-none lg:block' href=''>Git</a>
                </div>
            </div>
        </div>

        <Footer />
    </>
  )
}

export default ProfileCompany