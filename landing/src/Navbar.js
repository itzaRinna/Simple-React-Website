import React from 'react';
import styles from './Navbar.module.css'; 

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}><a href="#">Home</a></li>
        <li className={styles.item}><a href="#">About</a></li>
        <li className={styles.item}><a href="#">Services</a></li>
        <li className={styles.item}><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;