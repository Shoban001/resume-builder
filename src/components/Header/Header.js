import React from "react";

import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";

import  Body from '../Body/Body';


function Header() {
  return (
    <div>
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <div>Resume</div> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <div>It's free</div>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
    
    </div>
    
  );
}

export default Header;
