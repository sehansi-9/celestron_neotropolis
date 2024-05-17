import React from 'react';
import styles from './DashboardSucessful.module.css';

const DashboardSuccessful = () => {
    return (
        <div className={styles.container}>
            <div className={styles.messageBox}>
                <h1>User/Admin Added/Updated Successfully!</h1>
                <button className={styles.continueButton}>Continue</button>
            </div>
        </div>
    );
};

export default DashboardSuccessful;
