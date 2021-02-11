import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {grey} from '@material-ui/core/colors';
import { createMuiTheme} from '@material-ui/core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/logo.png'

const theme =createMuiTheme({
    palette:{
      primary:{
        main:grey[900]
      },
    }
  })
  

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  // footer: {
  //   backgroundColor:grey[700],
  //   marginTop: theme.spacing(8),
  //   padding: theme.spacing(6, 0),
  // },
}));

export default function Footer() {
  const classes = useStyles();
 

  return (
    // <footer className={classes.footer}>
    //   <Container maxWidth="lg">
    //     <Typography variant="h6" align="center" gutterBottom>
    //      Online Education
    //     </Typography>
    //     <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
    //     All rights reserved 2021
    //     </Typography>
    //     <Copyright />
    //   </Container> <h5 className="text-uppercase">ONLINE EDUCATION</h5>
    // </footer>
    <footer className="bg-primary text-white text-center text-lg-start">
  <div className="container p-4">
    <div className="row pt-5">
      <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
      <h4 className="text-uppercase mb-3 ">ONLINE EDUCATION</h4>
      <img src={logo} width ='75' alt="logo" ></img>
      
        <p >
        Local / International School Syllabus<br />
        Professional Courses<br />
        Personality development courses<br />
        Social Development courses<br />  
        </p>
        <ul id="menu">
          <li><i class="fab fa-facebook-f"></i></li>
          <li><i class="fab fa-instagram"></i></li>
          <li><i class="fab fa-linkedin-in"></i></li>
          <li><i class="fab fa-youtube"></i></li>
          <li><i class="fab fa-google-plus"></i></li>
        </ul> 
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h4 className="text-uppercase mb-4">Useful Links</h4>
        <hr className="text-white col-10 bolder" />

        <ul className="list-unstyled mb-0">
          <li className="mb-3">
            <a href="#!" className="text-decoration-none text-white"><i class="fas fa-angle-right"></i> About Us</a>
          </li>
          <li className="mb-3">
            <a href="#!" className="text-decoration-none text-white"><i class="fas fa-angle-right"></i> Contact Us</a>
          </li>
          <li className="mb-3">
            <a href="#!" className="text-decoration-none text-white"><i class="fas fa-angle-right"></i> Privacy Policy</a>
          </li>
          <li className="mb-3">
            <a href="#!" className="text-decoration-none text-white"><i class="fas fa-angle-right"></i> Terms and Conditions</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h4 className="text-uppercase mb-4">Courses We offer</h4>
        <hr className="text-white col-10 bolder" />
        <ul className="list-unstyled mb-0">
          <li className="mb-3">
            <a href="#!" className="text-decoration-none text-white"><i class="fas fa-angle-right"></i> Local / International School Syllabus</a>
          </li>
          <li className="mb-3">
            <a href="#!" className="text-decoration-none text-white"><i class="fas fa-angle-right"></i> Professional Courses</a>
          </li>
          <li className="mb-3">
            <a href="#!" className="text-decoration-none text-white"><i class="fas fa-angle-right"></i> Personality development courses</a>
          </li>
          <li className="mb-3">
            <a href="#!" className="text-decoration-none text-white"><i class="fas fa-angle-right"></i> Social Development courses</a>
          </li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ">
        
        <h4 className="text-uppercase mb-4">Contact Us</h4>
        <hr className="text-white col-10 bolder" />
        <h6 className="mt-3" ><i class="fas fa-map-marker-alt"></i> Address</h6>
        <p >
        Tutor Educational Institute Pvt Ltd .<br />
        Number 78, Jaela Road Ekala.<br />
        </p>
        <h6 ><i class="fas fa-phone"></i> Phone</h6>
        <p >
        0701900264<br />
        0770244992<br />
        </p>
      </div>



    </div>
  </div>
  <div className="text-center p-5 bg-dark"  >
  
    © 2021 Copyright at
    <a className="text-decoration-none text-white" href="#"> OnlineEducation.com</a>
  </div>
</footer>

    

  );
}

