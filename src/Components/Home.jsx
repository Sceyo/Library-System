import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import Feature from './Feature'
import logo from './Logo.png'
import student from './student.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>


export default function Home(){
    return(
       <div class = "container-fluid">
          <Navbar/>
          <div class ="body1">
                <img src={logo} alt="Logo" style={{ width: '200px', height: '200px', position: 'relative', left: '600px'}} /> 
                <h1 style={{top: '150px',position: 'relative',width: '100%'}}>Welcome to the Library</h1>
            </div>
            <hr class="featurette-divider"/>
          <div class = "body2">
            <Feature/>
          </div>
          <hr class="featurette-divider"/>
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading fw-normal lh-1">Why reading is important</h2>
              <p class="lead">Reading is essential due to its multifaceted benefits. It serves as a gateway to knowledge, offering a diverse range of information and insights across various subjects. Moreover, it plays a pivotal role in language development, enhancing vocabulary, grammar, and comprehension skills. Apart from cognitive stimulation, reading is a means of relaxation and escapism, providing a break from everyday stresses. Additionally, it nurtures empathy by exposing individuals to different perspectives and characters, contributing to a better understanding of others. Overall, reading is crucial for personal growth, fostering continuous learning, intellectual expansion, and the exploration of different ideas and viewpoints.</p>
            </div>
            <div class="col-md-5">
            <img src={student} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" alt="Student" /></div>
          </div>
          <hr class="featurette-divider"/>
          <Footer/>
       </div>
    )
}