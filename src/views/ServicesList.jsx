import React from 'react';
import ServiceCard from './ServiceCard';
import webDev from '../assets/webdev.png'
import softWare from '../assets/software.png'
import devOps from '../assets/devOps.png'
import marketing from '../assets/marketing.png'
import aiml from '../assets/aiml.png'
import cloud from '../assets/cloud.png'

export default function ServicesList() {
  return (
    <div className="container my-5 py-5">
      <div className="row pt-5">
        <div className="col-md-8 mx-auto text-center text-black">
          <h2 className="mb-4 display-4 text-black">Çözümlerimiz</h2>
          <p className="lead text-black">
            Sunmuş olduğumuz Logo Yazılım çözümleri ihtiyaçlarınıza yönelik, birbirini tamamlayan ve uyarlanabilir yazılımlar bütünü sunar.
          </p>

          <p>
            Alanında uzman, yetkin personel kadromuz ile birlikte firmalarınıza logo çözümleri ve desteğini vermekteyiz.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <ServiceCard img={webDev} name={'ERP Çözümleri '} />
        <ServiceCard img={webDev} name={'Kobi Çözümleri'} />
        <ServiceCard img={webDev} name={'İnsan Kaynakları Çözümleri'} />
        <ServiceCard img={webDev} name={'İş Akışı Çözümleri'} />
        <ServiceCard img={webDev} name={'CRM Çözümleri'} />
        <ServiceCard img={webDev} name={'Bayi Çözümleri'} />
      </div>
    </div>
  );
}