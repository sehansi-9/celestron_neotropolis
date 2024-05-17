import React from 'react';
import styles from './Navbar_logged.module.css'; // Import CSS module for styling
import image from "../assets/neotropolis-logo.jpeg"

export default function Navbar({ username, onLogout }) {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={image} alt="Logo" />
      </div>
      <div className={styles.userInfo}>
        <span className={styles.username}>{username}</span>
        <button className={styles.logoutButton} onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}