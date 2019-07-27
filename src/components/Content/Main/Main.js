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
      </div>
    );
  }
}

export default Main;
