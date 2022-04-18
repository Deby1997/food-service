import React from 'react';
import image from '../../images/IMG20201022201031.jpg';

const About = () => {
    return (
        <div>
            <div class="card w-25 text-center" >
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5>Name:Deby Sarker</h5>
                    <p class="card-text">I want to be a professional web developer in future.</p>
                </div>
            </div>
        </div>
    );
};

export default About;