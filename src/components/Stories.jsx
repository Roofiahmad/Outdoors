import React from "react";
import story_image1 from '../assets/img/nat-8.jpg'
import story_image2 from '../assets/img/nat-9.jpg'
import videomp4 from '../assets/img/video.mp4'
import videowebm from '../assets/img/video.webm'

export default function Stories() {
  return (
    <section className="section-stories">
        <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
                <source src={videomp4} type="video/mp4"/>
                <source src={videowebm} type="video/webm"/>
                Your browser is not supported!
            </video>
        </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">we make people genuinely happy</h2>
      </div>
      <div className="row">
          <div className="story">
              <figure className="story__shape">
                  <img src={story_image1} alt="story_image" className="story__image"/>
                  <figcaption className="story__caption">
                      Mary Smith
                  </figcaption>
              </figure>
              <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">I had the best ever with my family</h3>
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque rem officiis ipsum fuga impedit. Totam, voluptatum? Animi assumenda nostrum quae tempore magni neque! Nesciunt praesentium mollitia officia nemo, corporis necessitatibus nobis exercitationem nihil odio, repellendus, beatae ducimus provident iure?
                  </p>
              </div>
          </div>
      </div>
      <div className="row">
          <div className="story">
              <figure className="story__shape">
                  <img src={story_image2} alt="story_image" className="story__image"/>
                  <figcaption className="story__caption">
                      Jack Wilson
                  </figcaption>
              </figure>
              <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">WOW! My life is completely different now</h3>
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque rem officiis ipsum fuga impedit. Totam, voluptatum? Animi assumenda nostrum quae tempore magni neque! Nesciunt praesentium mollitia officia nemo, corporis necessitatibus nobis exercitationem nihil odio, repellendus, beatae ducimus provident iure?
                  </p>
              </div>
          </div>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <a href="#" className="button-text">Read all stories &rarr;</a>
      </div>
    </section>
  );
}
