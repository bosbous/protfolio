import React from "react";
import wordle from "../assets/portfolio/wordle.png";
import bank from "../assets/portfolio/bank.png";
import dashboard from "../assets/portfolio/dashboard.png";
import movie from "../assets/portfolio/movie.png";
function handle(e, id) {
  if (e === "Demo") {
    switch (id) {
      case 1:
        window.location.href = "https://1wordle1.netlify.app";
        break;

      case 2:
        window.location.href = "https://1bankwebsite1.netlify.app";
        // window.location.href =
        //   "https://theadmin-frontend.onrender.com/dashboard";
        break;
      case 3:
        window.location.href = "https://theadmin-frontend.onrender.com";
        break;

      case 4:
        window.location.href = "https://1movieapp1.netlify.app";
        break;

      default:
        break;
    }
  } else {
    switch (id) {
      case 1:
        window.location.href = "https://github.com/bosbous/wordle";

        break;

      case 2:
        window.location.href = "https://github.com/bosbous/bankwebsite";

        break;

      case 3:
        window.location.href = "https://github.com/bosbous/fullstack-admin";
        break;
      case 4:
        window.location.href = "https://github.com/bosbous/movieland";

        break;
      default:
        break;
    }
  }

  console.log(e);
  console.log(id);
}

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: wordle,
    },
    {
      id: 2,
      src: bank,
    },
    {
      id: 3,
      src: dashboard,
    },
    {
      id: 4,
      src: movie,
    },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div
              key={id}
              className=" shadow-md  shadow-gray-600 rounded-lg relative right-12 sm:static md:static "
            >
              <img
                src={src}
                alt=""
                className="rounded-md  duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={(e) => handle(e.target.innerHTML, id)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={(e) => handle(e.target.value, id)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
