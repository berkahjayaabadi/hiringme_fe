import React from "react";
// import axios from "axios";
import Navbar from "../../../components/Navbar/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Footer from "../../../components/Footer/Footer";
import { getCompanyById } from "../../../redux/actions/ProfileCmpny";
import { useParams } from "react-router-dom";

const HireWorker = () => {
  // const [data, setProduct] = React.useState([]);

  // const { id } = useParams();

  // // const navigate = useNavigate();

  // const getCompanyById = (id) => {
  //   return axios.get(`http://localhost:5000/api/v1/auth/users/${id}`);
  // };

  // React.useEffect(() => {
  //   getCompanyById(id)
  //     .then((response) => {
  //       // data yang diterima dari server
  //       setProduct(response.data.data);
  //       console.log(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [id]);
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.profileCompany);
  console.log(data, "Halo");
  console.log(loading, "Loading");
  console.log(error, "Error");
  // console.log(loading);
  const { id } = useParams();
  console.log(id, "ini id");

  useEffect(() => {
    dispatch(getCompanyById(id));
  }, [dispatch, id]);

  // if (loading) return <div>Loading...</div>;
  return (
    <div>
      <navbar className="shadow-lg">
        <Navbar />
      </navbar>
      <main className="container max-w-5xl mx-auto flex min-[320px]:flex-col md:flex-row lg:flex-row sm:flex-col mt-6 ">
        <section className="md:basis-[30%] lg:basis-[30%] sm:basis-0 min-[320px]:basis-0">
          <div className="flex flex-col md:text-start lg:text-start sm:text-center min-[320px]:text-center">
            <img
              className="h-40 w-40  rounded-full shadow-xl mx-auto"
              src="https://placeimg.com/200/280/arch"
              alt="profil"
            ></img>
            <h1 className="font-semibold text-2xl text-header mt-4">
              {data?.name}
            </h1>
            <h1 className="font-semibold text-lg text-header mt-2">
              Web Development
            </h1>
            <h1 className="text-pale mt-2">🏠 {data?.email}</h1>
            <h1 className="text-pale mt-2">📞 {data?.phone}</h1>
            <p className="text-pale mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
              Curabitur eu lacus fringilla, vestibulum risus at.
            </p>
          </div>
          <div className="flex flex-col md:text-start lg:text-start sm:text-center min-[320px]:text-center">
            <h1 className="font-semibold text-2xl text-header mt-4">Skill</h1>
            <div className="grid grid-cols-3 gap-1 mt-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                <div className="bg-primary text-white rounded-lg m-auto p-1 ">
                  JavaScripts
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="lg:basis-[70%] md:basis-[70%] sm:basis-0 min-[320px]:basis-0">
          <div className="lg:ml-12 md:ml-12 sm:mt-12 min-[320px]:mt-12 md:text-start lg:text-start sm:text-center min-[320px]:text-center">
            <h1 className="font-semibold text-4xl text-header ">
              {data?.name}
            </h1>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
          </div>
          <form className="lg:ml-12 md:ml-12 sm:mt-12 min-[320px]:mt-12 md:text-start lg:text-start sm:text-center min-[320px]:text-center">
            <div className=" mt-12 ">
              <div className="form-control mx-auto">
                <label className="block text-text mb-2">
                  Tujuan tentang pesan ini
                </label>
                <select className="select select-bordered w-full">
                  <option disabled selected>
                    Project
                  </option>
                  <option>Freelance</option>
                  <option>Part Time</option>
                  <option>Full Time</option>
                </select>
              </div>
            </div>
            <div className=" mt-4">
              <label className="block text-text mb-2">Deskripsi</label>
              <textarea
                className="appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="description"
                rows="5"
                placeholder="Deskripsikan/jelaskan lebih detail "
              ></textarea>
            </div>
            <div className=" mt-4">
              <button className="bg-primary hover:bg-white hover:text-black text-white font-bold rounded w-full p-2">
                Kirim
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default HireWorker;
