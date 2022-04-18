import React from 'react';
import image1 from '../../../images/image1.jpg';
import image2 from '../../../images/image2.jpg';
import image3 from '../../../images/image3.jpg';

const Carousel = () => {
    return (
        <div className='container'>
            <div id="carouselExampleControls" class="carousel slide container m-3" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={image1} class=" w-100 img-fluid" alt="..." />
                    </div>
                    <div class="carousel-item ">
                        <img src={image2} class=" w-100 img-fluid" alt="..." />
                    </div>
                    <div class="carousel-item ">
                        <img src={image3} class=" w-100 img-fluid" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
};

export default Carousel;