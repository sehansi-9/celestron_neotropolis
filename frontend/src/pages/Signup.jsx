import React, { useState } from 'react';
import styles from './Signup.module.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        mobileNumber: '',
        nationalId: '',
        vehicleNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreement: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log(formData);
    };

    return (
        <div className={styles.signupContainer}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className={styles.signupForm}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="userName"
                    placeholder="User Name"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="nationalId"
                    placeholder="National ID"
                    value={formData.nationalId}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="vehicleNumber"
                    placeholder="Vehicle Number"
                    value={formData.vehicleNumber}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <div className={styles.checkboxContainer}>
                    <input
                        type="checkbox"
                        name="agreement"
                        checked={formData.agreement}
                        onChange={handleChange}
                        required
                    />
                    <label>I agree to the terms and conditions</label>
                </div>
                <button type="submit" className={styles.signupButton}>Sign Up</button>
            </form>
            <p>Already have an account? <a href="/login">Log in</a></p>
        </div>
    );
};

export default Signup;
