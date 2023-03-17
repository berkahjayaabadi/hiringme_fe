import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import job from "../../assets/images/icon/job.png";

const Experience = () => {
  const [experience, setExperience] = useState([]);
  const { id } = useParams();
  const getExperienceById = (id) => {
    return axios.get(
      `https://gas-crack-production.up.railway.app/api/v1/experience/${id}`
    );
  };

  useEffect(() => {
    getExperienceById(id)
      .then((response) => {
        // data yang diterima dari server
        setExperience(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div>
      <section className="flex flex-col">
        {experience.map((item) => (
          <div className="flex flex-row mb-7 mt-7 md:text-start lg:text-start sm:text-center min-[320px]:text-center">
            <div className="basis-[30%]">
              <img
                className="h-20 w-20   shadow-xl mx-auto"
                src={job}
                alt="profil"
              ></img>
            </div>
            <div className="basis-[70%]">
              <h1 className="font-semibold text-xl text-header">
                {item.experience_role}
              </h1>
              <h1 className="font-semibold text-lg text-pale mt-1">
                {item.experience_company}
              </h1>
              <h1 className="font-semibold text-sm text-pale mt-1">
                {item.experience_start} - {item.experience_end}
              </h1>
              <p className="text-pale text-sm mt-1">
                {" "}
                {item.experience_description}{" "}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Experience;
