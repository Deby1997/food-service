
import React from 'react';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import ProductDetail from '../ProductDetail/ProductDetail';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ProductDetail></ProductDetail>
        </div>
    );
};

export default Home;