import React from 'react';
import logo1  from '../../img/code3.jpg'
import logo2 from '../../img/code1.jpg'
import logo3 from '../../img/code4.jpg'
const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={logo1} class="d-block w-100 imgs" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Welcome to Aditya Website</h5>
                    <p>Technology ,News, Software Development</p>
                    <button class="btn btn-danger me-2">Technology</button>
                    <button class="btn btn-danger me-2">Web development</button>
                    <button class="btn btn-danger me-2">Tech Fun</button>
                </div>
            </div>
            <div className="carousel-item">
                <img src={logo2} className="d-block w-100 imgs" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Welcome to Aditya Website</h5>
                    <p>Technology ,News, Software Development</p>
                    <button className="btn btn-danger me-2">Technology</button>
                    <button className="btn btn-danger me-2">Web development</button>
                    <button className="btn btn-danger">Tech Fun</button>
                </div>
            </div>
            <div className="carousel-item">
                <img src={logo3} className="d-block w-100 imgs" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Welcome to Aditya Website</h5>
                    <p>Technology ,News, Software Development</p>
                    <button className="btn btn-danger me-2">Technology</button>
                    <button className="btn btn-danger me-2">Web development</button>
                    <button className="btn btn-danger">Tech Fun</button>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Carousel
