import React, { useState, useEffect } from "react";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import { Link, useParams, useNavigate } from "react-router-dom";
import Portofolio from "../../../components/poftofolio";
import Experience from "../../../components/workExperience";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { getProfileById } from "../../../redux/actions/ProfileWorker";
import axios from "axios";
import {AiOutlinePhone} from 'react-icons/ai'
import {IoLocationOutline} from 'react-icons/io'
import {CiLocationOn} from 'react-icons/ci'
//import { useDispatch, useSelector } from "react-redux";
// import Footer from "../../../components/Footer/Footer";
//import { getProfileById } from "../../../redux/actions/ProfileWorker";

const ProfileWorker = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [worker, setWorker] = useState([]);
  const [skill, setSkill] = useState([]);
  const [active, setActive] = useState('Portofolio')
  const { id } = useParams();
  const getProfileWorkerById = (id) => {
    return axios.get(
      `https://gas-crack-production.up.railway.app/api/v1/users/${id}`
    );
  };
  const getSkillWorkerById = (id) => {
    return axios.get(
      `https://gas-crack-production.up.railway.app/api/v1/skills/${id}`
    );
  };

  const handleActive = (e) => {
    setActive(e.target.innerText)
  }

  useEffect(() => {
    getProfileWorkerById(id)
      .then((response) => {
        // data yang diterima dari server
        setWorker(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    getSkillWorkerById(id)
      .then((response) => {
        // data yang diterima dari server
        setSkill(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <>
      <Navbar />
      <div className="bg-secondary w-full h-[30vh] hidden lg:block"></div>
      <div className="lg:flex lg:-mt-40 lg:mx-20">
        <div className="bg-secondary text-center w-full lg:text-start px-5 pb-20 text-white pt-1 lg:flex-1 lg:mx-10 lg:bg-white lg:rounded-lg lg:px-10">
          <div className="flex flex-col mb-7 md:text-start lg:text-start sm:text-center min-[320px]:text-center">
            <img
              className="h-40 w-40  rounded-full shadow-xl mx-auto"
              src={`https://gas-crack-production.up.railway.app/public/uploads/images/${worker.image}`}
              alt="profil"
            ></img>
            <h1 className="font-semibold text-2xl text-header mt-4">
              {worker.name}
            </h1>
            <h1 className="font-semibold text-lg text-header mt-2">
              {worker.jobType}
            </h1>
            <h1 className="text-pale mt-2 flex item-center"><CiLocationOn size={25} className='mr-3 font-bold'/> {worker.address} </h1>
            <h1 className="text-pale mt-2 flex items-center "><AiOutlinePhone size={25} className="mr-3" /> {worker.phone}</h1>
            <p className="text-pale mt-2">{worker.bio}</p>
          </div>

          <Link
            className="flex content-center justify-center px-40 py-5 border border-white bg-white text-secondary rounded-md font-bold  hover:text-white hover:bg-indigo-900 lg:w-full lg:text-white lg:bg-secondary"
            to={`/hirecompany/${id}`}
          >
            Hire
          </Link>

          <div className="flex flex-col md:text-start lg:text-start sm:text-center min-[320px]:text-center">
            <h1 className="font-semibold text-2xl text-header mt-4">Skill</h1>
            <div className="grid grid-cols-3 gap-1 mt-2">
              {skill.map((item) => (
                <div className="bg-primary text-white px-3 py-1 rounded-lg m-auto p-1 ">
                  {item.skill_name}
                </div>
              ))}
            </div>
          </div>

          <div id="social-media" className="pb-10 mt-10 lg:text-pale">
            <a className="px-2 mb-1 bg-none lg:block" href="">
              Email : {worker.email}
            </a>
            <a className="px-2 mb-1 bg-none lg:block" href="">
              Instagram : {worker.instagram}
            </a>
            <a className="px-2 mb-1 bg-none lg:block" href="">
              Github : {worker.github}
            </a>
            <a className="px-2 bg-none lg:block" href="">
              Git : {worker.gitlab}
            </a>
          </div>
        </div>

        <div className=" bg-white mb-32 lg:grow rounded-lg min-h-[40vh]">
          <div
            id="portoexperience"
            className="flex justify-evenly lg:justify-start lg:gap-2 p-3" 
          >
            <button
              id="portofolio"
              onClick={handleActive}
              className={active === 'Portofolio' ? "pr-5 font-bold text-header border-b-4 border-secondary " : "pr-5 font-bold text-header border-b-4 border-transparent "}
            >
              Portofolio
            </button>
            <button
              id="experience"
              onClick={handleActive}
              className={active === 'Pengalaman Kerja' ? "pr-5 font-bold text-header border-b-4 border-secondary " : "pr-5 font-bold text-header border-b-4 border-transparent "}
            >
              Pengalaman Kerja
            </button>
          </div>
          <div>{active === 'Pengalaman Kerja' ? <Experience /> : <Portofolio />}</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProfileWorker;
