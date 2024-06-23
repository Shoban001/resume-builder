import React from "react";
import styles from '../HomePage/home.module.css';
import { Link } from "react-router-dom";
import resumehead from '../../assets/resumehead.png';
function Sample(){
    return(
        <div class={styles.banner}>
        <div class={styles.navbar}>
            <img src={resumehead} class="logo"/>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><a href="#">Category</a>
                <div class={styles.category}>
                    <ul>
                        <li><Link>Fresher</Link></li>
                        <li><Link to='/resume'>Experience</Link></li>
                    </ul>
                </div>
                </li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </div>
        </div>
    );
}
export default Sample;