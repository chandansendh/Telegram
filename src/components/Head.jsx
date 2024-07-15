import React, { useState } from 'react';
import { IoMenu, IoPersonAddOutline, IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaUserGroup } from 'react-icons/fa6';
import { MdOutlineCall, MdPersonPinCircle, MdWbSunny } from 'react-icons/md';
import { FiBookmark, FiUser } from 'react-icons/fi';
import { GoQuestion } from 'react-icons/go';
import { IoMdSearch } from 'react-icons/io';
import { BsMoonStarsFill } from 'react-icons/bs';
import Card from './card';

export const Head = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={`head ${isChecked ? "light" : ""}`}
        onClick={() => {
          if (isOpen) setIsOpen(false);
        }}
      >
        <div className="sandwich-icon" onClick={toggleMenu}>
          <IoMenu className="icon" />
        </div>
        <div className="telegram">Teligram</div>
        <div className="search">
          <IoMdSearch className="search" />
        </div>
      </div>
      <div className={`slide ${isOpen ? "slide open" : ""} ${isChecked ? "light-slide" : ""}`}>
        <div className={`menu-head ${isChecked ? "light" : ""}`}>
          <div className="profile">
            <div className="profile-pic">SJ</div>
            <div className="mode">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <MdWbSunny className="sun" />
              <BsMoonStarsFill className="moon" />
            </div>
          </div>
          <div className="name">Shone Jogi</div>
          <div className="num">+91 30907456</div>
        </div>
        <ul className="menu-list" >
          <li className={`fas ${isChecked ? "light-fas" : ""}`}>
            <CgProfile className={`menu-icon ${isChecked ? "light-menu-icon" : ""}`} />
            My Profile
          </li>
          <hr />
          <li className={`fas ${isChecked ? "light-fas" : ""}`}>
            <FaUserGroup className={`menu-icon ${isChecked ? "light-menu-icon" : ""}`} />
            New Group
          </li>
          <li className={`fas ${isChecked ? "light-fas" : ""}`}>
            <FiUser className={`menu-icon ${isChecked ? "light-menu-icon" : ""}`} />
            Contacts
          </li>
          <li className={`fas ${isChecked ? "light-fas" : ""}`}>
            <MdOutlineCall className={`menu-icon ${isChecked ? "light-menu-icon" : ""}`} />
            Calls
          </li>
          <li className={`fas ${isChecked ? "light-fas" : ""}`}>
            <MdPersonPinCircle className={`menu-icon ${isChecked ? "light-menu-icon" : ""}`} />
            People Nearby
          </li>
          <li className={`fas ${isChecked ? "light-fas" : ""}`}>
            <FiBookmark className={`menu-icon ${isChecked ? "light-menu-icon" : ""}`} />
            Saved Messages
          </li>
          <li className={`fas ${isChecked ? "light-fas" : ""}`}>
            <IoSettingsOutline className={`menu-icon ${isChecked ? "light-menu-icon" : ""}`} />
            Settings
          </li>
          <hr />
          <li className={`fas ${isChecked ? "light-fas" : ""}`}>
            <IoPersonAddOutline className={`menu-icon ${isChecked ? "light-menu-icon" : ""}`} />
            Invite Friends
          </li>
          <li className={`fas ${isChecked ? "light-fas" : ""}`}>
            <GoQuestion className={`menu-icon ${isChecked ? "light-menu-icon" : ""}`} />
            Telegram Features
          </li>
        </ul>
      </div>
      <Card light={isChecked}/>
    </>
  );
}
