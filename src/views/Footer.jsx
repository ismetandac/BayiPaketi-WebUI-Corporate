import React from 'react';
import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <>
            <section className="p-0 text-center mt-0 ">
                <footer className="bg-dark text-center text-white">
                    <div className="container p-4 pb-0">
                        <section className="m-0">
                            <a className="btn btn-outline-light btn-floating m-2 border-2" to="#" role="button" style={{borderRadius:"100%"}}><i className="bi bi-facebook"></i></a>
                            <a className="btn btn-outline-light btn-floating m-2 border-2" to="#" role="button" style={{borderRadius:"100%"}}><i className="bi bi-twitter"></i></a>
                            <a className="btn btn-outline-light btn-floating m-2 border-2" to="#" role="button" style={{borderRadius:"100%"}}><i className="bi bi-google"></i></a>
                            <a className="btn btn-outline-light btn-floating m-2 border-2" to="#" role="button" style={{borderRadius:"100%"}}><i className="bi bi-instagram"></i></a>
                            <a className="btn btn-outline-light btn-floating m-2 border-2" to="#" role="button" style={{borderRadius:"100%"}}><i className="bi bi-linkedin"></i></a>
                            <a className="btn btn-outline-light btn-floating m-2 border-2" to="#" role="button" style={{borderRadius:"100%"}}><i className="bi bi-github"></i></a>
                        </section>
                    </div>
                    <div className="text-center p-3 bg-dark fw-bold font-monospace">
                        Copyright © 2026
                        <a className="ms-2 text-white text-decoration-none" to="#">Yalinofis.com</a>
                    </div>
                </footer>
            </section>
        </>
    )
}