import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>

            <h3>Welcome to service detail:{serviceId}</h3>
            <Link to='/checkout'>
                <button className='btn btn-primary'>CheckOut</button>
            </Link>

        </div>
    );
};

export default ServiceDetail;