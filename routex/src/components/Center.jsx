import React from 'react'
import './Center.css'

function Center() {
  return (
    <div className="container">
    <div className="row">
        {/* Left side: 4 Images (2x2 grid, no gaps) */}
        <div className="col-md-6">
            <div className="row no-gutters">
                <div className="col-6 p-0">
                    <img src="https://plus.unsplash.com/premium_photo-1724691156679-5e42bb8ead52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" className="img-fluid" alt="Image 1" />
                </div>
                <div className="col-6 p-0">
                    <img src="https://images.unsplash.com/photo-1726564594505-52d6ace52710?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" className="img-fluid" alt="Image 2" />
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-6 p-0">
                    <img src="https://images.unsplash.com/photo-1726334577920-04fcd95cdb2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" className="img-fluid" alt="Image 3" />
                </div>
                <div className="col-6 p-0">
                    <img src="https://plus.unsplash.com/premium_photo-1721257104653-1d92cb44e11b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D" className="img-fluid" alt="Image 4" />
                </div>
            </div>
        </div>

        {/* Right side: Text, Checkbox Options, and Button */}
        <div className="col-md-6 d-flex align-items-center">
            <div className="text-box">
                <h6>ABOUT US</h6>
                <h3>Unknown Wanderlust <br/> your Journey into</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quos culpa aliquid, reiciendis optio doloremque unde com</p>
           <div className='d-flex'>
                <div className="form-check mb-3  ">
                    <input className="form-check-input" type="checkbox" id="option1" />
                    <label className="form-check-label" htmlFor="option1">
                        Safety Guides
                    </label>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>

                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="option2" />
                    <label className="form-check-label" htmlFor="option2">
                        Passport Assistance
                    </label>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>

                <button className="btn btn-primary">Read More</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Center