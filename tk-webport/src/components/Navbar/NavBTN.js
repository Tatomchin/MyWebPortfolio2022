import styles from './Navbar.module.css'
// import React, { useState, useEffect } from 'react';

function NavBTN() {
    
    return (
        <div className={styles.NavSpace}>
            <a href="#Skills"><div className={styles.BTN}>SKILLS</div></a>
            <a href="#Contact"><div className={styles.BTN}>CONTACT</div></a>
            <a href="#Projects"><div className={styles.BTN}>PROJECTS</div></a>
        </div>
    )
}

export default NavBTN;





