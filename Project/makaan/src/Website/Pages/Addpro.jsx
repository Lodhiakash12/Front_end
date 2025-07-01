import React, { useState } from 'react';
import Header from '../Common/Header';
import Navbar from '../Common/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Addpro() {
    const navigate = useNavigate();

    const [form, setform] = useState({
        id: "",
        type: "",
        img: "",
        price: "",
        title: "",
        add: "",
        badge: ""
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Validation rules
    const validateForm = () => {
        const newErrors = {};

        // Badge validation (Sell/Rent)
        if (!form.badge.trim()) {
            newErrors.badge = "Please select Sell or Rent";
        } else if (!['sell', 'rent'].includes(form.badge.toLowerCase())) {
            newErrors.badge = "Please enter either 'Sell' or 'Rent'";
        }

        // Type validation
        if (!form.type.trim()) {
            newErrors.type = "Property type is required";
        } else if (form.type.trim().length < 2) {
            newErrors.type = "Property type must be at least 2 characters";
        }

        // Price validation
        if (!form.price.trim()) {
            newErrors.price = "Price is required";
        } else if (isNaN(form.price) || parseFloat(form.price) <= 0) {
            newErrors.price = "Please enter a valid price (numbers only)";
        }

        // Image URL validation
        if (!form.img.trim()) {
            newErrors.img = "Image URL is required";
        } else {
            // Basic URL validation
            const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
            if (!urlPattern.test(form.img)) {
                newErrors.img = "Please enter a valid image URL";
            }
        }

        // Title validation
        if (!form.title.trim()) {
            newErrors.title = "Property title is required";
        } else if (form.title.trim().length < 5) {
            newErrors.title = "Title must be at least 5 characters long";
        } else if (form.title.trim().length > 100) {
            newErrors.title = "Title must be less than 100 characters";
        }

        // Address validation
        if (!form.add.trim()) {
            newErrors.add = "Property address is required";
        } else if (form.add.trim().length < 10) {
            newErrors.add = "Please provide a complete address (minimum 10 characters)";
        }

        return newErrors;
    };

    const getchange = (e) => {
        const { name, value } = e.target;
        
        setform({
            ...form,
            id: new Date().getTime().toString(),
            [name]: value
        });

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ""
            });
        }
    };

    const handlelist = async (e) => {
        e.preventDefault();
        
        // Validate form
        const formErrors = validateForm();
        
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setIsSubmitting(true);
        
        try {
            const res = await axios.post("http://localhost:3000/list", form);
            
            // Success - reset form and redirect
            setform({
                id: "",
                type: "",
                img: "",
                price: "",
                title: "",
                add: "",
                badge: ""
            });
            
            setErrors({});
            navigate("/listmanage");
            
        } catch (error) {
            console.error("Error submitting form:", error);
            setErrors({ submit: "Failed to submit property. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <Header/>
            <Navbar title="Add Property" name="Add Property" />
            <div className='container mt-5'>
                <form onSubmit={handlelist}>
                    <div className="row g-3">
                        {/* Sell/Rent Badge */}
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input 
                                    type="text" 
                                    value={form.badge} 
                                    name='badge' 
                                    onChange={getchange} 
                                    className={`form-control ${errors.badge ? 'is-invalid' : ''}`}
                                    id="Badge" 
                                    placeholder="Sell or Rent" 
                                />
                                <label htmlFor="Badge">Sell/Rent</label>
                                {errors.badge && <div className="invalid-feedback">{errors.badge}</div>}
                            </div>
                        </div>

                        {/* Property Type */}
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input 
                                    type="text" 
                                    value={form.type} 
                                    name='type' 
                                    onChange={getchange} 
                                    className={`form-control ${errors.type ? 'is-invalid' : ''}`}
                                    id="type" 
                                    placeholder="Property Type" 
                                />
                                <label htmlFor="type">Type</label>
                                {errors.type && <div className="invalid-feedback">{errors.type}</div>}
                            </div>
                        </div>

                        {/* Price */}
                        <div className="col-6">
                            <div className="form-floating">
                                <input 
                                    type="number" 
                                    value={form.price} 
                                    name='price' 
                                    onChange={getchange} 
                                    className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                                    id="price" 
                                    placeholder="Price" 
                                    min="0"
                                    step="0.01"
                                />
                                <label htmlFor="price">Price</label>
                                {errors.price && <div className="invalid-feedback">{errors.price}</div>}
                            </div>
                        </div>

                        {/* Image URL */}
                        <div className="col-6">
                            <div className="form-floating">
                                <input 
                                    type="url" 
                                    value={form.img} 
                                    name='img' 
                                    onChange={getchange} 
                                    className={`form-control ${errors.img ? 'is-invalid' : ''}`}
                                    id="img" 
                                    placeholder="Image URL" 
                                />
                                <label htmlFor="img">Image URL</label>
                                {errors.img && <div className="invalid-feedback">{errors.img}</div>}
                            </div>
                        </div>

                        {/* Title */}
                        <div className="col-12">
                            <div className="form-floating">
                                <input 
                                    type="text" 
                                    value={form.title} 
                                    name='title' 
                                    onChange={getchange} 
                                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                                    id="title" 
                                    placeholder="Property Title" 
                                    maxLength="100"
                                />
                                <label htmlFor="title">Title</label>
                                {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                                <small className="text-muted">{form.title.length}/100 characters</small>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="col-12">
                            <div className="form-floating">
                                <textarea 
                                    className={`form-control ${errors.add ? 'is-invalid' : ''}`}
                                    value={form.add} 
                                    name='add' 
                                    onChange={getchange} 
                                    placeholder="Property Address" 
                                    id="address" 
                                    style={{ height: 100 }} 
                                />
                                <label htmlFor="address">Address</label>
                                {errors.add && <div className="invalid-feedback">{errors.add}</div>}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="col-12">
                            {errors.submit && (
                                <div className="alert alert-danger" role="alert">
                                    {errors.submit}
                                </div>
                            )}
                            <button 
                                className="btn btn-primary w-100 py-3" 
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Adding Property...
                                    </>
                                ) : (
                                    'Add Property'
                                )}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Addpro;