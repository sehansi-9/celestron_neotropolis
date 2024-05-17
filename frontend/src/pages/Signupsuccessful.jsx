import React from 'react';
import styles from './Signupsuccessful.module.css';

const SignupSuccessful = ({ dtpCode }) => {
    const handleContinue = () => {
        // Add logic for what happens when the user clicks "Continue"
        console.log("Continue button clicked");
    };

    return (
        <div className={styles.container}>
            hello
            <div className={styles.popup}>
                <h1>Sign Up Successful</h1>
                <p>Your token ID is <strong>{dtpCode}</strong></p>
                <button className={styles.continueButton} onClick={handleContinue}>Continue</button>
            </div>
        </div>
    );
};

export default SignupSuccessful;
