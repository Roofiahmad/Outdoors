import React from "react";
import nat8 from "../assets/img/nat-8.jpg";
import nat9 from "../assets/img/nat-9.jpg";

export default function Popup() {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={nat8} alt="tour photo" className="popup__img" />
          <img src={nat9} alt="tour photo" className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">&times;</a>
          <h2 className="heading-secondary u-margin-bottom-small">Start Booking Now</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; Please read this terms before booking
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellat suscipit veritatis inventore hic expedita, quo error quis impedit eveniet voluptatibus, sunt in eum esse ipsum velit laudantium nobis. Architecto ex ea a quaerat et magni ipsum ipsam suscipit quod iure accusantium consectetur iste voluptatem vel, aperiam autem delectus dicta veniam quas dolor minus enim provident! Delectus enim architecto ut? Ipsum aut minus cumque sunt error enim eos. Nisi, amet.
          </p>
          <a href="#" className="btn btn--green">
            Book now
          </a>
        </div>
      </div>
    </div>
  );
}
