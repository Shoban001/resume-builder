import React from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resumebg from '../../assets/resume.jpg';
import resumehead from '../../assets/resumehead.png';
import styles from './home.module.css';
import home from '../HomePage/home';
import Page from '../Page/page';
import { useNavigate } from "react-router-dom";


function Home()
{
    const navigate=useNavigate();

    function handleClick()
    {
        navigate('/resume')
    }

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
        <div class={styles.content}>
            <h1>BUILD YOUR RESUME NOW !!!</h1>
            <p> Create a resume quickly, easily, and for free with our resume maker! In just minutes, <br/>build a resume to take your career to the next level.
            </p>
            <div>
               <a href="#"><button type="button" onClick={handleClick}><span></span> BUILD NOW!</button></a> 
               <Link to='/sample'><button type="button"><span></span> SEE SAMPLE RESUMES</button></Link>
            </div>
        </div>
    </div>
    );
}
export default Home;