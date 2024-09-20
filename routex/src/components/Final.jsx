import React from 'react';
import './Final.css'; // Separate CSS file for styles

function Final() {
    return (
        <div className="container">
            <div className="row">
                {/* First Div */}
                <div className="col">
                    <div className="text-center">
                        <img src="https://icons.getbootstrap.com/assets/icons/airplane-fill.svg" alt="airplane icon" width="50" height="50" />
                        <h4>RouteX</h4>
                        <p>Embark on your journey with RouteX, your trusted partner in travel.</p>
                        <div>
                            <a href="#" className="social-icon">Facebook</a>
                            <a href="#" className="social-icon">Twitter</a>
                        </div>
                    </div>
                </div>

                {/* Second Div */}
                <div className="col">
                    <h4>Service Menu</h4>
                    <ul>
                        <li>✔ Mistakes To Avoid</li>
                        <li>✔ Your Startup Guide</li>
                        <li>✔ Knowing About Fonts</li>
                        <li>✔ Design Insights</li>
                    </ul>
                </div>

                {/* Third Div */}
                <div className="col">
                    <h4>Useful Links</h4>
                    <ul>
                        <li>✔ Latest News</li>
                        <li>✔ Careers</li>
                        <li>✔ General Inquiries</li>
                        <li>✔ Case Studies</li>
                    </ul>
                </div>

                {/* Fourth Div */}
                <div className="col">
                    <h4>Gallery</h4>
                    <div className="gallery-row">
                        <div className="gallery-col">
                            <img src="https://images.unsplash.com/photo-1726734211714-cecc17926c04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" className="img-fluid" />
                        </div>
                        <div className="gallery-col">
                            <img src="https://images.unsplash.com/photo-1692533436686-5c04084a8296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D" alt="Image 2" className="img-fluid" />
                        </div>
                        <div className="gallery-col">
                            <img src="https://images.unsplash.com/photo-1726487646639-ec039193792f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="Image 3" className="img-fluid" />
                        </div>
                        <div className="gallery-col">
                            <img src="https://plus.unsplash.com/premium_photo-1724691156679-5e42bb8ead52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" alt="Image 4" className="img-fluid" />
                        </div>
                        <div className="gallery-col">
                            <img src="https://images.unsplash.com/photo-1726533815259-8fe320ac2493?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt="Image 5" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Final;
