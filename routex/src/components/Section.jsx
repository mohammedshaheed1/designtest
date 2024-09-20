import React from 'react';
import './Section.css';

function Section() {
  return (
    <div>
      <div className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-4 text-white title">Journey with Confidence</h1>
              <h1 className="display-4 text-white title">Migrate with Us</h1>
              <p className="lead text-white description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus beatae magni debitis cumque distinctio.<br/>
                Id harum esse corporis atque, dolorum placeat.
              </p>
              <button className="btn-custom">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
