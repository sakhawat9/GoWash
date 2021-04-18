import React from 'react';

const Testimonial = ({review}) => {
    const {name, title, img, textarea} = review;
    return (
        <div className="col-md-6 col-lg-4">
            <div style={{border: '1px solid gray'}} className="p-4 rounded mb-5">
                <div className="row">
                    <img style={{width: '70px', height: '70px', borderRadius: '50%'}} src={`data:image/jpeg;base64,${review.image.img}`} alt=""/>
                    <div>
                        <h3>{name}</h3>
                        <p>{title}</p>
                    </div>
                </div>
                <p>{textarea} </p>
            </div>
        </div>
    );
};

export default Testimonial;