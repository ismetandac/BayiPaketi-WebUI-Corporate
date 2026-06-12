import './Navbar.css';
import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import Signup from './Signup';
import Signin from './Signin';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import reducer, { GetMenuList } from '../Data/data';
import { injectReducer } from '../store';
injectReducer('Data', reducer)

export default function Navbar({ isAuth, setIsAuth }) {

  const dispatch = useDispatch()

  const MenuList = useSelector((state) => state.Data.MenuList)

  // console.log("MenuList", MenuList)

  useEffect(() => {
    dispatch(GetMenuList({}))
  }, [dispatch]);

  const signOut = () => {
    setIsAuth({ name: '', email: '', auth: false });
  }

  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const handleOpenSignin = () => {
    setOpenSignin(true);
    setOpenSignup(false);
  };

  const handleCloseSignin = () => {
    setOpenSignin(false);
  };

  const handleOpenSignup = () => {
    setOpenSignup(true);
    setOpenSignin(false);
  };

  const handleCloseSignup = () => {
    setOpenSignup(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top">
        <div className="container-fluid flex justify-center items-center justify-items-center w-full">
          <NavLink className="navbar-brand2  w-20" to="/">
            <img src="/logo.png" alt="Yalın Ofis" className="d-inline-block align-text-top h-20" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse2 navbar-collapse grow-0! " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              {MenuList && MenuList?.map((item, index) => (
                // <li key={index}>{item}</li>
                <li className="nav-item" key={index}>
                  <NavLink className="nav-link" to={item.url} aria-current="page">{item.name}</NavLink>
                </li>
              ))}
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/" aria-current="page">Anasayfa</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">Hakkımızda</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/services">Çözümlerimiz</NavLink>
              </li>


              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">İletişim</NavLink>
              </li> */}


            </ul>
            <img src="https://www.dogruyazilim.com/images/unvanlar4.png" alt="Unvanlar" className="d-inline-block align-text-end h-20 w-full"  />

            {/* {
              (isAuth.auth) ?
                <Button variant="primary" onClick={signOut}>Sign Out</Button>
                :
                <Button variant="primary" onClick={handleOpenSignin}>Sign In</Button>
            } */}
          </div>
        </div>
      </nav>


      {/* <Signin show={openSignin} handleClose={handleCloseSignin} openSignup={handleOpenSignup} setIsAuth={setIsAuth} />
      <Signup show={openSignup} handleClose={handleCloseSignup} openSignin={handleOpenSignin} /> */}
    </>
  );
}
