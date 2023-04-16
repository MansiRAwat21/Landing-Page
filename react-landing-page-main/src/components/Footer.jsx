import React from 'react'
import '../styles/Footer.css'
const Footer = () => {
  return (
    <>
    <footer className="ftco-footer ftco-section bg-dark text-light" >
    <div className="container" >
      <div className="row mb-5 mt-5">
        <div className="col-md mt-5">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Lets talk about</h2>

            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5 mt-5">
              <li className="ftco-animate">
                <a href="#">
                <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="ftco-animate">
                <a href="#">
                <i className="fas fa-envelope-open-text"></i>
                </a>
              </li>
              <li className="ftco-animate">
                <a href="#">
                <i class="fab fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4 ml-md-4 mt-5">
            <h2 className="ftco-heading-2 mb-3">Links</h2>
            <ul className="list-unstyled">
              <li>
                <a href="#home-section">
                <i class="fa-solid fa-arrow-right mr-2"></i>Home</a>
              </li>
              <li>
                <a href="#about-section">
                  <i class="fa-solid fa-arrow-right mr-2"></i>About</a>
              </li>
              <li>
                <a href="#skills-section">
                  <i class="fa-solid fa-arrow-right mr-2"></i>Plans</a>
              </li>
              <li>
                <a href="#projects-section">
                  <i class="fa-solid fa-arrow-right mr-2"></i>Feature</a>
              </li>
              <li>
                <a href="#contact-section">
                  <i class="fa-solid fa-arrow-right mr-2"></i>Policies</a>
              </li>
            </ul>
          </div>
        </div>
       
        <div className="col-md mb-4">
          <div className="ftco-footer-widget mb-5 mt-5">
            <h2 className="ftco-heading-2 mb-2">Have any Questions?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li>
                <i className="fa-solid fa-location-crosshairs mb-2 mt-3"></i>
                  <span className="text" > H.No 30-L , xxyz ,
                   Banglore</span>
                </li>
                <li>
                  <a href="#">
                  <i className="fa-solid fa-phone mb-2 mt-3"></i>
                    <span className="text mb-2"> +91-7000000</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                  <i className="fas fa-envelope-open-text mr-2 mt-3"></i>
                    <span className="text">
                      <span className="__cf_email__" data-cfemail="1e777078715e67716b6c7a71737f7770307d7173">
                        agua@gmail.com </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer