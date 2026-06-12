import './Home.css';

import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dev from '../assets/devOps.png';
import { NavLink } from 'react-router-dom';
import { TrendingUp, Settings, ShieldCheck, Headset } from "lucide-react"
import reducer, { GetHomeData } from '../Data/data';
import { injectReducer } from '../store';
injectReducer('Data', reducer)



export default function Home() {
  const dispatch = useDispatch()

  const HomePage = useSelector((state) => state.Data.HomePage)
  console.log("page", HomePage)
  useEffect(() => {
    dispatch(GetHomeData({}))
  }, [dispatch]);

  const features = [
    {
      icon: TrendingUp,
      title: "Analiz",
      description: "Her ağın temeli doğru analizle atılır. Sistemi sizin için işler hale getiririz.",
      bullets: [
        "Profesyonel araçlarımız ile analiz.",
        "Nokta atışı analiz çözümlerimiz."
      ]
    },
    {
      icon: Settings,
      title: "Entegrasyon",
      description: "Sistemler konuşur, biz entegre ederiz. Sistekno ile tam uyum.",
      bullets: [
        "Teknolojiyi birleştirir, işinizi hazırlarız.",
        "Profesyonel çözümler bizimle üretilir."
      ]
    },
    {
      icon: ShieldCheck,
      title: "Güvenlik",
      description: "Sisteminizi güvenli hale getirirken, riskler hep dışarıda kalır.",
      bullets: [
        "Veri değil, tehditler dışarıda kalır.",
        "Güncel teknolojiyle donatılan sistem."
      ]
    },
    {
      icon: Headset,
      title: "Destek",
      description: "Siz işinize odaklanın, Sistekno sistemi güncel olarak ayakta tutar.",
      bullets: [
        "Canlı destek sistemiyle hep sizleyiz.",
        "Gözünüz arkada değil, daima önde."
      ]
    }
  ]


  return (<>
    <div dangerouslySetInnerHTML={{ __html: HomePage?.htmlPage }} />
  </>
  )
}
