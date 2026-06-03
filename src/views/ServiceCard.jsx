import React from 'react';
import './ServiceCard.css'

export default function ServiceCard({img, name}){
    return(
        <>
            <div className="col-lg-4 col-md-6 col-sm-12 p-3">
                <div className="card rounded-4">
                    <div className="img">
                        <img src={img} className="card-img-top" alt="" height={'218px'}/>
                    </div>
                    <hr style={{color:"white", margin:"0", padding:"0"}} />
                    <div className="card-body text-white">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text text-start">
                            Sektörel Tecrübeler ve Son Yazılım Teknolojileri Takip Edilerek , Logo Yazılım Platformu Üzerinde Geliştirilen Ve Logo Yazılım Ürünleriyle Uyumlu Çalışan , Firmalara Katma Değer Katan , İşletmelerin Verimliliklerini Arttırmaya Yönelik Yazılım Ürün ve Çözümleri İle Türkiye Genelinde Ve Yurt Dışında Satış ,Destek Ve Danışmanlık Hizmetleri Sunmaktadır.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}