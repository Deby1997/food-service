import React from 'react';

const ProductDetail = () => {
    return (
        <div>
            <h3>Short List of Items</h3>
            <table class="table container">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td> veg. Burger</td>
                        <td>80</td>

                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Sandwitch</td>
                        <td>70</td>

                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Biriyani</td>
                        <td>170</td>

                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Fuchka</td>
                        <td>80</td>

                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Noodles</td>
                        <td>100</td>

                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Fish</td>
                        <td>90</td>

                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>Salad</td>
                        <td>120</td>

                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>Cake</td>
                        <td>250</td>

                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td>Grilled Meat</td>
                        <td>370</td>

                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td>Chocolate</td>
                        <td>300</td>

                    </tr>


                </tbody>
            </table>
        </div>
    );
};

export default ProductDetail;