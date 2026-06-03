import './Home.css';
import React from 'react';
import dev from '../assets/devOps.png';
import { NavLink } from 'react-router-dom';
import { TrendingUp, Settings, ShieldCheck, Headset } from "lucide-react"



export default function Home() {

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
    <section className="relative min-h-screen bg-black  overflow-hidden mt-20  d-none">
      {/* Background decoration - abstract network graphic */}
      <div className="right-0 w-1/2 h-full pointer-events-none">
        <svg
          viewBox="0 0 600 600"
          className="absolute top-0 right-0 w-full h-full opacity-80"
          fill="none"
        >
          {/* Main circles */}
          <circle cx="400" cy="200" r="120" fill="#dc2626" fillOpacity="0.9" />
          <circle cx="350" cy="350" r="80" fill="#dc2626" fillOpacity="0.7" />
          <circle cx="480" cy="320" r="60" fill="#dc2626" fillOpacity="0.8" />
          <circle cx="300" cy="250" r="40" fill="#dc2626" fillOpacity="0.6" />
          <circle cx="520" cy="180" r="50" fill="#dc2626" fillOpacity="0.7" />
          <circle cx="280" cy="150" r="30" fill="#dc2626" fillOpacity="0.5" />
          <circle cx="450" cy="420" r="45" fill="#dc2626" fillOpacity="0.6" />
          <circle cx="380" cy="100" r="35" fill="#dc2626" fillOpacity="0.5" />
          <circle cx="550" cy="280" r="25" fill="#dc2626" fillOpacity="0.7" />
          <circle cx="320" cy="400" r="20" fill="#dc2626" fillOpacity="0.5" />

          {/* Small dots */}
          <circle cx="250" cy="200" r="8" fill="#dc2626" fillOpacity="0.8" />
          <circle cx="580" cy="350" r="10" fill="#dc2626" fillOpacity="0.6" />
          <circle cx="420" cy="480" r="12" fill="#dc2626" fillOpacity="0.5" />
          <circle cx="500" cy="100" r="8" fill="#dc2626" fillOpacity="0.7" />

          {/* Connecting lines */}
          <line x1="400" y1="200" x2="350" y2="350" stroke="#dc2626" strokeWidth="2" strokeOpacity="0.4" />
          <line x1="400" y1="200" x2="480" y2="320" stroke="#dc2626" strokeWidth="2" strokeOpacity="0.4" />
          <line x1="400" y1="200" x2="300" y2="250" stroke="#dc2626" strokeWidth="2" strokeOpacity="0.4" />
          <line x1="400" y1="200" x2="520" y2="180" stroke="#dc2626" strokeWidth="2" strokeOpacity="0.4" />
          <line x1="350" y1="350" x2="480" y2="320" stroke="#dc2626" strokeWidth="2" strokeOpacity="0.4" />
          <line x1="350" y1="350" x2="450" y2="420" stroke="#dc2626" strokeWidth="2" strokeOpacity="0.4" />
          <line x1="480" y1="320" x2="520" y2="180" stroke="#dc2626" strokeWidth="2" strokeOpacity="0.4" />
          <line x1="300" y1="250" x2="280" y2="150" stroke="#dc2626" strokeWidth="2" strokeOpacity="0.4" />
          <line x1="520" y1="180" x2="380" y2="100" stroke="#dc2626" strokeWidth="2" strokeOpacity="0.4" />

          {/* Tech icons as rectangles */}
          <rect x="370" y="170" width="60" height="60" rx="8" fill="white" fillOpacity="0.15" />
          <rect x="380" y="180" width="40" height="30" rx="4" fill="white" fillOpacity="0.3" />
          <rect x="385" y="215" width="30" height="8" rx="2" fill="white" fillOpacity="0.3" />

          <rect x="460" y="290" width="40" height="40" rx="6" fill="white" fillOpacity="0.15" />
          <circle cx="480" cy="310" r="12" stroke="white" strokeWidth="2" strokeOpacity="0.3" fill="none" />
          <path d="M476 306 L484 314 M484 306 L476 314" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-white
">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 italic">
            Sistemi Biz Kurarız
            <br />
            Siz Geleceği Yönetin!
          </h1>
          <p className="text-muted-foreground text-lg mb-2">
            Kurumsal dijital dönüşümünüz için uçtan uca çözümler:
          </p>
          <p className="text-muted-foreground text-lg mb-8">
            Analiz, entegrasyon, güvenlik ve destek.
          </p>
          {/* <a
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base rounded-md"
          >
            Detaylı Bilgi Al
          </a> */}
        </div>
      </div>
    </section>

     <div className="min-h-screen2 bg-[#e8e4dc] relative overflow-hidden">
      {/* Logo Badge - Top Right */}
      

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <p className="text-[#0ea5e9] font-medium text-sm md:text-base">
              IT Yönetimi & Danışmanlık
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a2e] leading-tight">
              Logo Yazılım
              <br />
              Çözümleri
            </h1>
            
            <div className="space-y-3 text-[#4a4a4a] text-sm md:text-base">
              <p>Kişiselleştirilebilir, hızlı, sade, pratik arayüz</p>
              <p>İşinizi bir üst seviyeye taşıyın</p>
              <p>Uzmanlık ürünümüz hakkında bilgi alın</p>
            </div>
            
            {/* <a 
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 py-6 rounded-full text-base font-medium"
            >
              Detaylar
            </a> */}
          </div>

          {/* Right Content - Image and Logo GO 3 */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Logo GO 3 Text */}
            

            {/* Person Image */}
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <img
                src="https://www.besyildizbilgisayar.com/assets/images/hero/home-infotechno-main-slider-slide-01-image-02.png"
                alt="İş profesyoneli tablet kullanıyor"
                width={600}
                height={700}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="bg-background py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-lg border border-border/10"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5">✓</span>
                    <span className="text-primary">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
  )
}
