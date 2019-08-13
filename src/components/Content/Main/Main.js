import React, { Component } from "react";

import "./Main.scss";
import {ReactComponent as Star} from '../../../assets/img/SVG/star.svg';
import {ReactComponent as LocationPin} from '../../../assets/img/SVG/location-pin.svg';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
  }

  componentDidMount() {
    fetch("http://quotes.rest/qod.json?category=inspire")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            quote: result.contents.quotes[0].quote,
            author: result.contents.quotes[0].author
          });
        },
        error => {
          console.log(error);
          this.setState({
            quote:
              "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
            author: "Aristotle - Greek philosopher"
          });
        }
      );
  }

  render() {
    return (
      <div className="Main">
        <div className="gallery">
          <div className="gallery__text-box">
            <h1 className="gallery__heading">
              <span className="gallery__heading--quote">{this.state.quote}</span>
              <span className="gallery__heading--author">
                {"-" + this.state.author}
              </span>
            </h1>
          </div>
        </div>
        <div className="overview">
              <h1 className="overview__heading">
                  Shanti Coaching Center <br /><span className="overview__heading-sub">(Sanjay Sharma)</span>
              </h1>
              <div className="overview__stars">
                <Star width="2.5rem" height="2.5rem" fill="var(--color-primary)" /><Star width="2.5rem" height="2.5rem" fill="var(--color-primary)" /><Star width="2.5rem" height="2.5rem" fill="var(--color-primary)" /><Star width="2.5rem" height="2.5rem" fill="var(--color-primary)" /><Star width="2.5rem" height="2.5rem" fill="var(--color-primary)" />
              </div>
              <div className="overview__location">
                <LocationPin width="2.5rem" height="2.5rem" fill="var(--color-primary)" />
                <button className="btn-inline">Bhajanpura, North-East Delhi</button>  
              </div>
              <div className="overview__rating">
                  <div className="overview__rating--count">16,643</div><span>Students and Counting within</span>
                  <div className="overview__rating--years">26 Years</div>
              </div>
          </div>
          <div className="detail">
            <div className="description">
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur condimentum orci, id rutrum urna mattis ut. Fusce facilisis justo mi, et tempor leo vehicula eget. Mauris id mollis ligula. In pulvinar ac est sit amet malesuada.
              </p>
              <p className="paragraph">
                cursus quam, sed vehicula arcu leo at odio. Maecenas tellus ex, rutrum a mollis nec, aliquam quis justo. Vivamus vulputate, libero nec rutrum vulputate, ante urna pretium libero, nec mattis ex tellus in est. Praesent auctor sagittis urna, hendrerit vehicula mauris vestibulum eu.
              </p>
              <ul className="list">
                <li className="list__item">hahahahhahah</li>
                <li className="list__item">hahahahhahah</li>
                <li className="list__item">hahahahhahah</li>
                <li className="list__item">hahahahhahah</li>
                <li className="list__item">hahahahhahah</li>
                <li className="list__item">hahahahhahah</li>
                <li className="list__item">hahahahhahah</li>
                <li className="list__item">hahahahhahah</li>
              </ul>
              <div className="recommend">
                <p className="recommend__count">
                  Lucy and 3 other friends recommend this.
                </p>
                <div className="recommend__friends">
                  <img src="#" alt="Friend 1" className="recommend__photo" />
                  <img src="#" alt="Friend 2" className="recommend__photo" />
                  <img src="#" alt="Friend 3" className="recommend__photo" />
                  <img src="#" alt="Friend 4" className="recommend__photo" />
                </div>
              </div>
            </div>
            <div className="user-reviews">
              user reviews
            </div>
          </div> 
      </div>
    );
  }
}

export default Main;
