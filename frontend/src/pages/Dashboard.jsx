import React from 'react';
import styles from './Dashboard.module.css'; 
import { User } from "@phosphor-icons/react";

export default function Dashboard() {
  return (
    <div className={styles['background-image']}> {/* Apply background image here */}
      <div className={styles['home-container']}>
        <div className={styles['welcome-msg']}>Hello, Welcome to Neotropolis!</div>
        <img className={styles['map-image']} src="https://www.mapz.com/static/assets/images/startseite/berlin_multicolor%402x.png" alt="home-map" />

        <div className={styles['user-details-container']}>
          <User size={320} className={styles['icon']} /> {/* Adjust icon size */}
          <div className={styles['user-details']}>
            <h2>User Details</h2>
            <ul>
              <li><label>Name </label><div className={styles['user-info']}>: Celestron </div>  </li>
              <li> <label>ID </label><div className={styles['user-info']}>: 20242024</div> </li>
              <li><label>Vehicle Number</label> <div className={styles['user-info']}>: CEL 3030 </div> </li>
              <li><label>City </label><div className={styles['user-info']}>: Colombo </div> </li>
            </ul>
          </div>
        </div>

        <div class="payment-info">
          <div className={styles['payment-info-container']}>
            <div className={styles['payment-info-item']}>Card Number</div>
            <div className={styles['payment-info-item']}></div>
            <div className={styles['payment-info-item']}>Payment Info 3</div>
            <div className={styles['payment-info-item']}>Payment Info 4</div>
          </div>
        </div>
      </div>
    </div>
  );
}