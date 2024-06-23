import React from "react";
import style from './About.module.css';
import styles from '../HomePage/home.module.css';
import { Link } from "react-router-dom";
import resumehead from '../../assets/resumehead.png';
import { MapPin,Mail,Phone } from "react-feather";

function About(){
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
            <div class={style.about}>
                <div class={style.head}>
                <h2>About Us</h2>
                <p>Our team of experts has carefully crafted the resume builder tool, ensuring that it is user-friendly and offers a wide range of customization options to cater to different industries and job roles. We are constantly updating our platform to ensure that it is up-to-date with the latest industry trends and resume formatting styles.</p>
                </div>
            <div class={style.containers}>
                <div class={style.contactInfo}>
                <div class={style.box}>
                    <div class={style.icon}><MapPin/></div>
                    <div class={style.text}>
                        <h3>Address</h3>
                        <p>No:3/448,<br/>Korai Road, Annai Indhra Nagar,<br/>
                            Shanmugapuram, Chennai-600099.<br/></p>
                    </div>
                </div>
                <div class={style.box}>
                    <div class={style.icon}><Mail/></div>
                    <div class={style.text}>
                        <h3>E-Mail</h3>
                        <p>Bharathi15800@gmail.com</p>
                    </div>
                </div>
                <div class={style.box}>
                    <div class={style.icon}><Phone/></div>
                    <div class={style.text}>
                        <h3>Phone Number</h3>
                        <p>9941152295</p>
                    </div>
                </div>
                </div>
            
            <div class={style.contactForm}>
                <form>
                    <h2>Send Message</h2>
                    <div class={style.inputBox}>
                        <input type='text' name='' placeholder="Full Name" required='required'/>
                    </div>
                    <div class={style.inputBox}>
                        <input type='text' name='' placeholder="E-mail" required='required'/>
                    </div>
                    <div class={style.inputBox}>
                        <textarea required='required' placeholder="Type Your Message"></textarea>
                    </div>
                    <div class={style.inputBox}>
                        <input type='submit' name="" value='Send'/>
                    </div>
                </form>
            </div>
            </div>
            </div>
        </div>
    );
}
export default About;