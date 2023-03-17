import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/hero2.png";
import hero3 from "../../assets/images/hero3.png";
import { useNavigate } from "react-router-dom";

const LandingPages = () => {

  const navigate = useNavigate()

  const handleHome = () => {
    if(localStorage.getItem('@userLoginCompany')) {
      navigate('/homecompany')
    } else {
      navigate('/homeworker')
    }
  }
  return (
    <div>
      <Navbar />
      <header className="container max-w-5xl mx-auto flex min-[320px]:flex-col md:flex-row lg:flex-row sm:flex-col mt-6">
        <section className="basis-[50%]">
          <h1 className="text-text text-5xl font-semibold mt-12">
            Talenta terbaik negeri <br /> untuk perubahan <br /> revolusi 4.0
          </h1>
          <p className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <button onClick={handleHome} className="btn bg-secondary mt-8">Mulai Dari Sekarang</button>
        </section>
        <section className="basis-[50%] bg-cover bg- w-full h-full ">
          {" "}
          <img
            className="h-full w-full   shadow-xl mx-auto"
            src={hero1}
            alt="profil"
          ></img>
        </section>
      </header>
      <main className="container max-w-5xl mx-auto">
        <section className=" flex min-[320px]:flex-col md:flex-row lg:flex-row sm:flex-col mt-6">
          <div className="basis-[50%] bg-cover bg- w-full h-full ">
            {" "}
            <img
              className="h-full w-full   shadow-xl mx-auto"
              src={hero2}
              alt="profil"
            ></img>
          </div>
          <div className="basis-[50%]">
            <h1 className="text-text text-3xl font-semibold mt-12">
              Kenapa harus mencari tallent <br /> di peworld
            </h1>
            <ul className="mt-12">
              <li className="mt-8 text-lg"> ✅ Lorem ipsum dolor sit amet.</li>
              <li className="mt-8 text-lg"> ✅ Lorem ipsum dolor sit amet.</li>
              <li className="mt-8 text-lg"> ✅ Lorem ipsum dolor sit amet.</li>
              <li className="mt-8 text-lg"> ✅ Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
        </section>
        <section className=" flex min-[320px]:flex-col md:flex-row lg:flex-row sm:flex-col mt-6">
          <div className="basis-[50%]">
            <h1 className="text-text text-3xl font-semibold mt-12">
              Skill Tallent
            </h1>
            <p className="mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <div className="flex flex-row ">
              <ul className="basis-[50%]">
                <li className="mt-8 text-lg">✅ PHP</li>
                <li className="mt-8 text-lg">✅ JavaScripts</li>
                <li className="mt-8 text-lg">✅ Java</li>
                <li className="mt-8 text-lg">✅ Phyton</li>
              </ul>
              <ul className=" basis-[50%]">
                <li className="mt-8 text-lg">✅ Ruby</li>
                <li className="mt-8 text-lg">✅ Golang</li>
                <li className="mt-8 text-lg">✅ C++</li>
                <li className="mt-8 text-lg">✅ 10+ bahasa lainya</li>
              </ul>
            </div>
          </div>
          <div className="basis-[50%] bg-cover bg- w-full h-full ">
            {" "}
            <img
              className="h-full w-full   shadow-xl mx-auto"
              src={hero3}
              alt="profil"
            ></img>
          </div>
        </section>
        <section className="text-text text-3xl font-semibold mt-12">
          <h1 className="text-center">Their opinion about peworld </h1>
          <div className="mt-10 grid grid-cols-1 gap-7 p-3 mx-[1rem] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item.id}
                className="card bg-base-100 shadow-xl  hover:cursor-pointer p-2"
              >
                <figure>
                  <img
                    className="h-28 w-28 shadow-xl rounded-full p-2"
                    src="https://placeimg.com/200/280/arch"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body p-2 text-center">
                  <h2 className="card-title self-center">Sutiwo Panggoro</h2>
                  <p className="text-lg">Web Development</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className=" grid grid-cols-2">
            <button className="btn  bg-secondary col-start-auto text-white mx-auto">
              ◁ Back
            </button>
            <button className="btn  bg-secondary  col-end-auto text-white mx-auto">
              Next ▷
            </button>
          </div>
        </section>
        <section className="mt-8 mb-8">
          <div className="flex flex-row bg-secondary p-12 rounded-tl-3xl rounded-br-3xl">
            <h1 className="text-white mx-auto text-xl basis-[50%] ">
              Lorem ipsum dolor sit amet
            </h1>
            <div className="mx-auto basis-[50%] ">
              <button className="btn text-secondary bg-white ">
                Mulai Dari Sekarang
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LandingPages;
