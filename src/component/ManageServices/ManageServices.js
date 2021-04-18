import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import Manage from '../Manage/Manage';

const ManageServices = () => {
    const [manageService, setManageService] = useState([])
    useEffect(() => {
        fetch(`https://mighty-eyrie-38405.herokuapp.com/service`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setManageService(data)
        })
    },[])
    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10" style={{ position: "absolute", right: "0", background: "#F4FDFB" }} >
            <h3 className="text-brand p-4">Manage Services</h3>
                <div className="row">
                    {
                        manageService.length === 0 ?
                        <div className="text-center w-100">
                             <Spinner animation="grow" />
                         </div>
                        :
                         manageService.map(service => <Manage service={service} key={service._id}></Manage>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageServices;