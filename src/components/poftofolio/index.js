import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Portofolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const { id } = useParams();
  const getPortfolioById = (id) => {
    return axios.get(
      `https://gas-crack-production.up.railway.app/api/v1/portfolio/${id}`
    );
  };

  useEffect(() => {
    getPortfolioById(id)
      .then((response) => {
        // data yang diterima dari server
        setPortfolio(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div>
      <div className="grid grid-cols-3 gap-1 mt-2">
        {portfolio.map((item) => (
          <div>
            <img
              className="h-35 w-40   shadow-xl mx-auto"
              src={`https://gas-crack-production.up.railway.app/public/uploads/images/${item.portfolio_image}`}
              alt="profil"
            ></img>
            <div className=" mx-auto text-center font-semibold mt-2 ">
              {item.portfolio_name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portofolio;
