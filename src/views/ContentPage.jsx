import './Home.css';

import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dev from '../assets/devOps.png';
import { NavLink } from 'react-router-dom';
import { TrendingUp, Settings, ShieldCheck, Headset } from "lucide-react"
import reducer, { GetContent, GetHomeData } from '../Data/data';
import { injectReducer } from '../store';
import { useLocation } from 'react-router';
injectReducer('Data', reducer)



export default function ContentPage() {
  const dispatch = useDispatch()
  const location = useLocation();



  const HomePage = useSelector((state) => state.Data.ContentPage)
  console.log("page", location)



  useEffect(() => {
    dispatch(GetContent(window.location.pathname))
  }, [window.location.pathname]);


  if (HomePage == null) {
    return <div class="my-5 pt-5  container"><div class="justify-content-center mb-5 pt-5 row h-screen">
      İçerik bulunamadı
    </div></div>;
  }


  return (<>
    <div dangerouslySetInnerHTML={{ __html: HomePage?.htmlPage }} />
  </>
  )
}
