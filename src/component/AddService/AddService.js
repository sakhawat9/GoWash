import React from 'react';
import { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    const [service, setService] = useState({});
    const [file, setFile] = useState(null)
    const handleBlur = (e) => {
        const newService = {...service};
        newService[e.target.name] = e.target.value;
        setService(newService);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', service.name);
        formData.append('price', service.price);
        formData.append('textarea', service.textarea);
      
        fetch('https://mighty-eyrie-38405.herokuapp.com/service', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
          alert("Service added successfully.")
        })
        .catch(error => {
          console.log(error)
        })
    }

    return (
        <section className="container-fluid row">
           <Sidebar></Sidebar>
            <div className="pt-4 col-md-10" style={{position: "absolute", right: "0", background: "#F4FDFB"}}>
                <h3 className="text-brand p-4">Add Service</h3>
                <form onSubmit={handleSubmit} style={{background: "#fff"}} className="m-4 p-3">
                <div className="form-group">
                        <label for="exampleInputPassword1">Enter Title</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter Title" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Description</label>
                        <textarea onBlur={handleBlur} name="textarea" className="form-control" cols="30" rows="5" placeholder="Enter Title" />
                    </div>
                    
                    <div className="form-group row">
                        <div className="col-md-6">
                            <label for="exampleInputPassword1">Upload a Image</label>
                            <input onChange={handleFileChange} type="file" className="form-control"  placeholder="Picture" />
                        </div>
                        <div className="col-md-6">
                            <label for="exampleInputPassword1">Price</label>
                            <input onChange={handleBlur} name="price" className="form-control"  placeholder="Price" />
                        </div>
                    </div>
                    
                    <button type="submit" className="btn-brand">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddService;