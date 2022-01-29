import React from 'react'
import Form from '../parts/Form'
const AboutUs = () => {
    
    return (
        <>
        <div className="about row">
            <div className="col-sm-12 mb-5 p-0">
                <h1>O nas</h1>
            </div>
            <div className="row">
                <div className="about-info col-md-6 d-flex align-items-center">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi voluptatum, qui sapiente velit, beatae architecto eaque repudiandae accusantium, facere ratione officiis? Natus quasi aliquid, corporis repellat modi voluptatum autem eum.</p>
                </div>
                <div className="about-info col-md-6 d-flex align-items-center">
                    <img className="img-fluid" src="https://via.placeholder.com/630x600" alt=""/>     
                </div>
            </div>
            <div className="row mt-5">
                <div className="about-info col-md-6 d-flex align-items-center">
                    <img className="img-fluid" src="https://via.placeholder.com/630x600" alt=""/>     
                </div>  
                <div className="about-info col-md-6 d-flex align-items-center">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi voluptatum, qui sapiente velit, beatae architecto eaque repudiandae accusantium, facere ratione officiis? Natus quasi aliquid, corporis repellat modi voluptatum autem eum.</p>
                </div> 
            </div>
                
        </div>
        <Form />
        </>
    )
}

export default AboutUs
