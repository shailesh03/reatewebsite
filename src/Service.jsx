import React from 'react';
import Card from './Card';
import Sdata from './Sdata';


const  Service = () => {
  return (
    <>
    <section id="ServiceSection-1" className="service-section-1-main mb-5">
        <div className="container">
            <div className="row">
                <div className="my-5">
                    <h1 className="text-center">Our Services</h1>
                </div>
            </div>
            <div className="row gy-4">
                {
                    Sdata.map((val, ind) => {
                        return <Card key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                        />
                    })
                }
            </div>
        </div>
    </section>
    </>
  );
}

export default Service;
