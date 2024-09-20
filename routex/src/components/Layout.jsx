import React from 'react';
import "./LogoLayout.css";

function Layout() {
    return (
        <div className="container mt-4">
            <h6>OUR SERVICES</h6>
            <h1 className="mb-4">Adventure Unleashed <br /> Discover Your Next</h1>
            <div className="row">
                {/* Card Item 1 */}
                <div className="col-md-4 mb-3">
                    <div className="card text-center">
                        <div className="card-body d-flex flex-column align-items-center">
                        <img src="https://icons.getbootstrap.com/assets/icons/airplane-fill.svg" alt="airplane icon" width="30" height="30" />
                            <h5 className="card-title mt-3">Food and Wine Tours</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio reiciendis explicabo. A modi officiis eaque quae fuga iure repellendus, alias fugiat animi, repellat tempore nemo! Qui nemo alias veniam!</p>
                        </div>
                    </div>
                </div>
                
                {/* Card Item 2 */}
                <div className="col-md-4 mb-3">
                    <div className="card text-center">
                        <div className="card-body d-flex flex-column align-items-center">
                        <img src="https://icons.getbootstrap.com/assets/icons/airplane-fill.svg" alt="airplane icon" width="30" height="30" />
                            <h5 className="card-title mt-3">Travel Opportunities</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus impedit asperiores facilis. Provident temporibus rem animi deserunt ipsam, pariatur debitis amet laudantium.</p>
                        </div>
                    </div>
                </div>

                {/* Card Item 3 */}
                <div className="col-md-4 mb-3">
                    <div className="card text-center">
                        <div className="card-body d-flex flex-column align-items-center">
                            <img src="https://icons.getbootstrap.com/assets/icons/airplane-fill.svg" alt="airplane icon" width="30" height="30" />
                            <h5 className="card-title mt-3">Solo Travel Planning</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repudiandae, assumenda labore quia debitis ipsum mollitia explicabo consequatur nam cum, deleniti sunt et dolorem aperiam expedita!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
