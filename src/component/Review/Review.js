import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const Review = () => {
    const [review, setReview] = useState({})
    const [file, setFile] = useState(null)
    const handleBlur = (e) => {
        const newReview = {...review}
        newReview[e.target.name] = e.target.value;
        setReview(newReview)
    }
    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile)

    }
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', review.name)
        formData.append('title', review.title)
        formData.append('textarea', review.textarea)

        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
          console.log('data', data)
        })
        .catch(error => {
          console.log(error)
        })
    }
    return (
        <section className="container-fluid row">
           <Sidebar></Sidebar>
            <div className="pt-4 col-md-10" style={{position: "absolute", right: "0", background: "#F4FDFB"}}>
                <h3 className="text-brand p-4">Review</h3>
                <form onSubmit={handleSubmit} style={{background: "#fff"}} className="m-4 p-3 col-md-6">
                    
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your Name" />
                        <br/>    
                        <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Company’s name, Designation" />
                        <br/>
                        <textarea onBlur={handleBlur} name="textarea" className="form-control" cols="30" rows="5" placeholder="Description" />
                        <br/>
                        <input onChange={handleFileChange} type="file" className="form-control"  placeholder="Picture" />
                        <br/>
                    <button type="submit" className="btn-brand">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Review;