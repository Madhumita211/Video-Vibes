import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import vvLogo from "../images/vv ll.png";
import vvLogoMobile from "../images/vv ll.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { BsMic } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";

import { Context } from "../context/contextApi";
import Loader from "../shared/loader";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, mobileMenu, setMobilemenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if((event?.key === "Enter" || event === "searchButton") && searchQuery?.length > 0) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };
  
  const mobileMenuToggle = () => {
    setMobilemenu(!mobileMenu);
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

    const [isListening, setIsListening] = useState(false);
  
    const toggleListening = () => {
      if (isListening) {
        recognition.stop();
        recognition.removeEventListener('result', handleRecognitionResult);
      } else {
        recognition.start();
        recognition.addEventListener('result', handleRecognitionResult);
      }
      setIsListening(!isListening);
    };
  
    const handleRecognitionResult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
    };
  
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-slate-400 dark:bg-black">
      {loading && <Loader />}

      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div className="flex md:mr-6 cursor-pointer items-center bg-slate-400 justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]" onClick={mobileMenuToggle}>
            {!mobileMenu ? (
              <SlMenu className="text-black text-xl" />
            ) : (
              <CgClose className="text-black text-xl" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-9 items-center">
          <img
          className="h-full dark:md:block" 
          src={vvLogo} 
          alt="Video Vibes" 
          />
          <img
          className="h-full hidden" 
          src={vvLogoMobile} 
          alt="Video Vibes" 
          />
        </Link>
      </div>
      <div className="group flex items-center">
          <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#000000] rounded-l-3xl group-focus-within:border-slate-700 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
            <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
              <IoIosSearch className="text-black text-xl"/>
            </div>
            <input 
              type="text"
              className="bg-transparent outline-none text-black pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              placeholder="Search"
              value={searchQuery}
            />
          </div>
          <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-black/[0.1]"
          onClick={() => searchQueryHandler
          ("searchButton")}
          >
            <IoIosSearch className="text-black text-xl"/>
          </button>
          <div className="flex">
            <div className="flex border-l-0">
              
              <button 
          onClick={toggleListening}
          className={` md:w-[60px] md:h-10 flex items-center justify-center ml-2 h-10 w-10 border-[#010101] rounded-full hover:bg-black/[0.1] ${
            isListening ? 'bg-slate-500' : ''
          }`}
        >
          <BsMic className="text-black text-xl cursor-pointer"/>
          </button>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex">
            <Link to={`/VideoUpload`}>
            <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <RiVideoAddLine className="text-black text-xl cursor-pointer"/>
            </div>
            </Link>
            <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <FiBell className="text-black text-xl cursor-pointer"/>
            </div>
            
          </div>
          <Link to={`/LoginPage.jsx`}>
          {/* <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
              <img src="https://xsgames.co/randomusers/assets/avatars/female/10.jpg" alt="Avatar"/>
          </div> */}
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <RxAvatar className="text-black text-xl cursor-pointer"/>
          </div>
          </Link>
        </div>
    </div>
  );
};

export default Header;
