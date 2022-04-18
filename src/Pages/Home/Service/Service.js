import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    const navigate = useNavigate();

    const navToServeDetail = (name) => {
        navigate(`/service/${name}`);
    }
    return (
        <div>
            <div class="card" >
                <img className='img-fluid' src={img} alt="" />
                <div class="card-body">
                    <h5 class="card-title">Name:{name}</h5>
                    <h5 class="card-title">Price:{price}</h5>
                    <p class="card-text"><small>{description}</small></p>
                    <button class="btn btn-primary" onClick={() => navToServeDetail(name)}>Check out</button>
                </div>
            </div>
            {/* <img className='img-fluid' src={img} alt="" />
            <h1>ID:{id}</h1>
            <h2>Name:{name}</h2>
            <h4>Price:{price}</h4>
            <p><small>{description}</small></p>
            <button class="btn btn-primary" onClick={() => navToServeDetail(id)}>Check out</button> */}
        </div>
    );
};

export default Service;