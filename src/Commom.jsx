import React from 'react';
import { NavLink } from 'react-router-dom';

const  Commom = (props) => { 
  return (
    <>
        <section id="HomeSection-1" className="home-section-1-main">
            <div className="container ">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6  pt-5 pt-lg-0 order-2 order-lg-1">
                        <h1>{props.name} <strong className="brandname">SBTechnical</strong></h1>
                        <p className="my-3">
                            We are the team of telented developer making website
                        </p>
                        <div className="my-5">
                            <NavLink className="btn-get-started" to="{props.visit}">{props.btname}</NavLink>
                        </div>
                    </div>
                    <div className="col-md-6 order-2 order-1 order-lg-2">
                        <img src={props.imgsrc} className="img-fluid" alt="img1" />
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default Commom;
