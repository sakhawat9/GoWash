import React from 'react';

const AllBookings = ({bookings}) => {
    const {image, textarea, name} = bookings;
    return (
        
            <div className="col-md-6">
                <div className="bookingList-style">
                    <div className="row">
                        <div className="col">
                        <img src={`data:image/jpeg;base64,${image.img}`} alt="" />
                        </div>
                        <div className="col">
                        
                        </div>
                    </div>
                        <h3>{name}</h3> 
                        <p>{textarea}</p>
                </div>
            </div>

    );
};

export default AllBookings;



