import { useState } from "react";

function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  function menuHandler() {
    setOpenMenu((prev) => !prev);
  }

  return (
    <>
      <div className=" bg-[url('/images/mobile/image-hero.jpg')] bg-center md:bg-[url('/images/desktop/image-hero.jpg')] md:bg-cover">
        <div className="flex flex-col">
          <div className="flex justify-between items-center px-8 py-10 text-white font-bold md:px-40">
            <h1 className="text-4xl">loopstudios</h1>
            <div className="space-x-6 hidden md:flex">
              <div className="group">
                <a href="#">About</a>
                <div className="group-hover:border-b mx-2"></div>
              </div>
              <div className="group">
                <a href="#">Products</a>
                <div className="group-hover:border-b mx-2"></div>
              </div>
              <div className="group">
                <a href="#">Careers</a>
                <div className="group-hover:border-b mx-2"></div>
              </div>
              <div className="group">
                <a href="#">Events</a>
                <div className="group-hover:border-b mx-2"></div>
              </div>
              <div className="group">
                <a href="#">Support</a>
                <div className="group-hover:border-b mx-2"></div>
              </div>
            </div>

            <div className={`${openMenu ? '' : 'hidden'} bg-black absolute min-h-screen right-0 left-0 bottom-0 md:hidden`}>
              <div className="flex flex-col mt-32 ml-20 space-y-6">
              <a className="hover:text-pink-500" href="#">About</a>
              <a className="hover:text-pink-500" href="#">Products</a>
              <a className="hover:text-pink-500" href="#">Careers</a>
              <a className="hover:text-pink-500" href="#">Events</a>
              <a className="hover:text-pink-500" href="#">Support</a>
              </div>
              
            </div>

            <div className="md:hidden">
              <button
                onClick={menuHandler}
                id="menu-btn"
                type="button"
                className={`${
                  openMenu ? "open" : ""
                } z-40  hamburger md:hidden focus:outline-none`}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </div>
          <div className="flex px-6 py-24 pb-44 max-w-4xl md:px-40 ">
            <div className=" text-white text-4xl md:text-6xl md:p-10 font-[350] tracking-wider border-2 p-5">
              <p>IMPRESSIVE EXPERIENCES THAT DELIVER</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex relative flex-col mt-20   px-8  max-w-[1200px] md:mx-auto md:my-32 md:flex-row">
        <img src="/images/mobile/image-interactive.jpg" className=" " alt="" />
        <div className="bg-white max-w-2xl space-y-6 text-center font-light tracking-widest py-8 md:absolute md:right-0 md:bottom-0 md:text-left md:-my-20  md:p-20">
          <h2 className="text-4xl md:text-6xl  ">
            THE LEADER IN INTERACTIVE VR
          </h2>
          <p className="text-xs leading-6 md:text-sm">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between space-y-8 max-w-[1200px] md:mx-auto md:space-y-0">
        <div className="flex justify-center md:justify-between my-16 px-8 ">
          <h2 className="text-4xl font-light md:text-5xl ">OUR CREATIONS</h2>
          <button className="hidden md:flex btn ">SEE ALL</button>
        </div>
        <div className="grid gap-4 px-6 md:grid-cols-4">
          <div className="relative flex group  transition-all  ">
            <img
              src="/images/mobile/image-deep-earth.jpg"
              className="md:hidden  group-hover:opacity-35 brightness-75 "
              alt=""
            />
            <img
              src="/images/desktop/image-deep-earth.jpg"
              className="hidden md:block group-hover:opacity-35 brightness-75 "
              alt=""
            />
            <h3 className=" absolute text-white text-2xl left-5 bottom-5 font-light group-hover:text-black  tracking-wide  group-hover:scale-110 group-hover:tracking-widest duration-75 max-w-[160px] ">
              DEEP EARTH
            </h3>
          </div>
          <div className="relative flex group  transition-all ">
            <img
              src="/images/mobile/image-night-arcade.jpg"
              className="md:hidden group-hover:opacity-35 brightness-75 "
              alt=""
            />
            <img
              src="/images/desktop/image-night-arcade.jpg"
              className="hidden md:block group-hover:opacity-35 brightness-75 "
              alt=""
            />
            <h3 className=" absolute text-white text-2xl left-5 bottom-5 font-light group-hover:text-black   group-hover:scale-110  transition-all group-hover:tracking-widest max-w-[160px] ">
              NIGHT ARCADE
            </h3>
          </div>
          <div className="relative flex group  transition-all ">
            <img
              src="/images/mobile/image-soccer-team.jpg"
              className="md:hidden group-hover:opacity-35 brightness-75 "
              alt=""
            />
            <img
              src="/images/desktop/image-soccer-team.jpg"
              className="hidden md:block group-hover:opacity-35 brightness-75 "
              alt=""
            />
            <h3 className=" absolute text-white text-2xl left-5 bottom-5 font-light group-hover:text-black   group-hover:scale-110 group-hover:tracking-widest max-w-[150px] transition-all ">
              SOCCER TEAM VR
            </h3>
          </div>
          <div className="relative flex group  transition-all ">
            <img
              src="/images/mobile/image-grid.jpg"
              className="md:hidden group-hover:opacity-35 brightness-75 "
              alt=""
            />
            <img
              src="/images/desktop/image-grid.jpg"
              className="hidden md:block group-hover:opacity-35 brightness-75 "
              alt=""
            />

            <h3 className=" absolute text-white text-2xl left-5 bottom-5 font-light group-hover:text-black   group-hover:scale-110 group-hover:tracking-widest max-w-[150px] transition-all ">
              THE GRID
            </h3>
          </div>
          <div className="relative flex group  transition-all ">
            <img
              src="/images/mobile/image-from-above.jpg"
              className="md:hidden group-hover:opacity-35 brightness-75 "
              alt=""
            />
            <img
              src="/images/desktop/image-from-above.jpg"
              className="hidden md:block group-hover:opacity-35 brightness-75 "
              alt=""
            />
            <h3 className=" absolute text-white text-2xl left-5 bottom-5 font-light group-hover:text-black   group-hover:scale-110 group-hover:tracking-widest max-w-[150px] transition-all ">
              FROM UP ABOVE VR
            </h3>
          </div>
          <div className="relative flex group  transition-all ">
            <img
              src="/images/mobile/image-pocket-borealis.jpg"
              className="md:hidden group-hover:opacity-35 brightness-75 "
              alt=""
            />
            <img
              src="/images/desktop/image-pocket-borealis.jpg"
              className="hidden md:block group-hover:opacity-35 brightness-75 "
              alt=""
            />
            <h3 className=" absolute text-white text-2xl left-5 bottom-5 font-light group-hover:text-black   group-hover:scale-110 group-hover:tracking-widest max-w-[150px] transition-all ">
              POCKET BOREALIS
            </h3>
          </div>
          <div className="relative flex group  transition-all ">
            <img
              src="/images/mobile/image-curiosity.jpg"
              className="md:hidden group-hover:opacity-35 brightness-75 "
              alt=""
            />
            <img
              src="/images/desktop/image-curiosity.jpg"
              className="hidden md:block group-hover:opacity-35 brightness-75 "
              alt=""
            />
            <h3 className=" absolute text-white text-2xl left-5 bottom-5 font-light group-hover:text-black   group-hover:scale-110 group-hover:tracking-widest max-w-[150px] transition-all ">
              THE CURIOSITY
            </h3>
          </div>
          <div className="relative flex group  transition-all ">
            <img
              src="/images/mobile/image-fisheye.jpg"
              className="md:hidden group-hover:opacity-35 brightness-75 "
              alt=""
            />
            <img
              src="/images/desktop/image-fisheye.jpg"
              className="hidden md:block group-hover:opacity-35 brightness-75 "
              alt=""
            />
            <h3 className=" absolute text-white text-2xl left-5 bottom-5 font-light group-hover:text-black group-hover:scale-110 group-hover:tracking-widest max-w-[150px] transition-all ">
              MAKE IT FISHEYE
            </h3>
          </div>
          <button className=" md:hidden btn py-1 my-6">SEE ALL</button>
        </div>
      </div>
      <div className="bg-black text-white flex flex-col py-8 mt-20 space-y-6 md:space-y-0 md:flex-row md:justify-between md:px-44 pb-20   ">
        <div className="flex flex-col  items-center text-center md:items-start space-y-6  ">
          <h3 className=" text-4xl font-bold">loopstudios</h3>
          <div className="md:flex space-y-8  md:space-x-6 md:space-y-0">
            <div className="group">
              <a href="#">About</a>
              <div className="border-b mx-4 my-1 opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="group">
              <a href="#">Careers</a>
              <div className="border-b mx-4 my-1 opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="group">
              <a href="#">Events</a>
              <div className="border-b mx-4 my-1 opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="group">
              <a href="#">Products</a>
              <div className="border-b mx-4 my-1 opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="group">
              <a href="#">Support</a>
              <div className="border-b mx-4 my-1 opacity-0 group-hover:opacity-100"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start space-y-6">
          <div className="flex space-x-4">
            <img src="/images/icon-facebook.svg" alt="" />
            <img src="/images/icon-twitter.svg" alt="" />
            <img src="/images/icon-pinterest.svg" alt="" />
            <img src="/images/icon-instagram.svg" alt="" />
          </div>
          <p className="text-slate-500">
            © 2022 Loopstudios. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
