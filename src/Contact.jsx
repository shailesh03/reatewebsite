import React from 'react';

const  Contact = () => {
 
  return (
    <>
    <section id="ServiceSection-1" className="service-section-1-main mb-5">
        <div className="container">
            <div className="row">
                <div className="my-5">
                    <h1 className="text-center">Contact us</h1>
                </div>
            </div>
            <div className="row">
               <div className="col-md-6 col-10 mx-auto">
               <form>
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="text" name="fullname" className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mobile Number</label>
                        <input type="number" name="mobile" className="form-control" id="mobile"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" id="email"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
               </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Contact;
