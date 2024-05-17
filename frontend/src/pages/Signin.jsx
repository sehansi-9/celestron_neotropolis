import React, { useState } from 'react';
import styles from './Signin.module.css';

const Signin = () => {
    const [formData, setFormData] = useState({
        userName: '',
        otp: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log(formData);
    };

    return (
        <div className={styles.signinContainer}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit} className={styles.signinForm}>
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
                    name="otp"
                    placeholder="OTP Code"
                    value={formData.otp}
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
                <button type="submit" className={styles.signinButton}>Sign In</button>
            </form>
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
    );
};

export default Signin;
