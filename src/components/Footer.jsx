import React from "react";
import logo1 from "../assets/img/logo-green-1x.png";
import logo2 from "../assets/img/logo-green-2x.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo-box">
        <img srcSet={`${logo1} 1x, ${logo2} 2x`} alt="Full Logo" className="footer__logo" />
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Company
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Contact us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Career
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              Built my{" "}
              <a href="#" className="footer__link">
                Jonas Schmedtmann
              </a>{" "}
              for his online course{" "}
              <a href="#" className="footer__link">
                Advance CSS and Sass
              </a>
              . Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to
              use this webpage for both personal and commercial use, but not
              claim it as your own design. A credit to the origina author, Jonas
              Schmedtmann, is highly appreciated!
            </p>
          </div>
        </div>
    </div>
  );
}
