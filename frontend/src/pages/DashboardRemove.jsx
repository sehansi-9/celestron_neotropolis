import React from 'react';
import styles from './DashboardRemove.module.css';

const DashboardRemoved = () => {
    return (
        <div className={styles.container}>
            <div className={styles.messageBox}>
                <h1>User/Admin Added/Payment Removed!!!</h1>
                <button className={styles.continueButton}>Continue</button>
            </div>
        </div>
    );
};

export default DashboardRemoved;
