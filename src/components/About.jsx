import React from "react";
import photo_1 from "../assets/img/nat-1-large.jpg";
import photo_2 from "../assets/img/nat-2-large.jpg";
import photo_3 from "../assets/img/nat-3-large.jpg";

export default function About() {
  const compositionImage = [
    {
      src: photo_1,
      alt: "photo_1",
      classname: "composition__photo--p1",
    },
    {
      src: photo_2,
      alt: "photo_2",
      classname: "composition__photo--p2",
    },
    {
      src: photo_3,
      alt: "photo_3",
      classname: "composition__photo--p3",
    },
  ];
  
  return (
    <div>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Exciting tours for adventurous people
          </h2>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-botton-small">
              You're going to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              animi repudiandae vel omnis quod impedit, eos temporibus quia
              commodi illum autem quos magni sequi debitis, inventore
              repellendus in at nesciunt!
            </p>
            <h3 className="heading-tertiary u-margin-botton-small">
              Live adventures like you never have before
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              repellat. Voluptates, itaque? Aliquid cumque minus laborum, modi
              perferendis eos error id nesciunt quas, eius sequi? Maiores ipsam
              illo quaerat autem!
            </p>
            <a href="#" className="button-text">
              Learn more &rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              {compositionImage.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`composition__photo ${image.classname}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
