import React from 'react';

export default function ContactUs() {
  return(
    <div className="col-lg-6 col-md-10 my-5">
      <div className="card shadow-sm h-100 rounded-4">
        <div className="card-body text-white text-start p-4 pb-3" style={{backgroundColor:"#000000c4"}}>
          <h2 className="card-title text-center mb-4">İletişim</h2>
          <ul className="list-unstyled">
            <li className="mb-3 text-truncate">
              <i className="bi bi-geo-alt pe-2"></i>
              <span>Gevhernesibe, Atatürk Blv. No:86, 38010 Kocasinan/Kayseri</span>
            </li>
            <li className="mb-3 text-truncate">
              <i className="bi bi-envelope-at pe-2"></i>
              <span>info@yalinofis.com</span>
            </li>
            <li className="mb-3 text-truncate">
              <i className="bi bi-telephone pe-2"></i>
              <span>+90 000 000 00 00</span>
            </li>
            <li className="text-truncate">
              <i className="bi bi-clock pe-2"></i>
              <span>Pazartesi - Cuma: 9:00  - 18:00 </span>
            </li>
          </ul>
          <div className="embed-responsive embed-responsive-21by9 pt-2">
            <iframe
              className="embed-responsive-item rounded-3"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d923.0485669185377!2d35.47980823166354!3d38.72632147538958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b121d30618171%3A0x11ce2b7f7aab0de7!2sGevhernesibe%2C%20Atat%C3%BCrk%20Blv.%20No%3A86%2C%2038010%20Kocasinan%2FKayseri!5e1!3m2!1str!2str!4v1780232938799!5m2!1str!2str"
              style={{ border: 0, width: '100%', height: '199px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}