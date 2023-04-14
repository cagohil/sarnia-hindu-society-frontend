import React from 'react';
import ContactFoarm from './contactFoarm';



const Contact = () => {
    return (
          <div className="pt-3 pb-3 pl-3 pr-3 " style={{fontFamily:'Georgia, Times New Roman, Times, seri'}}>
            <ContactFoarm/>
    <div className="container-fluid contact-container p-0 ">
    <div style={{maxWidth:'1400px', margin:"auto"}}>
                <div className='map'>
                    <div >
                    <iframe title='map'className="map-style" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.1727892603303!2d-82.4019201!3d42.9746337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88259cc5b5978ccf%3A0x22020c816248f77a!2s217%20College%20Ave%20N%2C%20Sarnia%2C%20ON%20N7T%206B5%2C%20Canada!5e0!3m2!1sen!2sin!4v1673511604286!5m2!1sen!2sin"></iframe>
                    </div>
                </div>
                </div>
           </div>
        </div>
        
    );
}
export default Contact