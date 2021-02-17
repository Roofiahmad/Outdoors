import React from "react";

export default function FeaturesSection() {
  return (
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-world"></i>
            <h3 className="heading-tertiary">Explore the world</h3>
            <p className="feature-box__text">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur facilis ad, impedit eos iure id.
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-compass"></i>
            <h3 className="heading-tertiary">Meet nature</h3>
            <p className="feature-box__text">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur facilis ad, impedit eos iure id.
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-map"></i>
            <h3 className="heading-tertiary">find your way</h3>
            <p className="feature-box__text">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur facilis ad, impedit eos iure id.
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-heart"></i>
            <h3 className="heading-tertiary">live a healtier life</h3>
            <p className="feature-box__text">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur facilis ad, impedit eos iure id.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
