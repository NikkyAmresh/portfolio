import React, { Component } from "react";
import "../../css/about.css";
import PreloaderElement from "../containers/PreloaderElement";
import TextSplit from "../containers/TextAnimation";

class About extends Component {
  constructor() {
    super();
    this.state = { isLoading: true };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 1500);
  }

  render() {
    if (this.state.isLoading) {
      return <PreloaderElement />;
    }
    return (
      <div className="about_content">
        <span className="tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div className="about_main">
          <div className="left_side">
            <span className="tag_h1">&lt;h1&gt;</span> <br />
            <TextSplit className="text_h1">About me</TextSplit>
            <span className="tag_h1">&lt;h1/&gt;</span> <br />
            <TextSplit className="left_side_text" splitBy="words">
              Hello, I am 23-year-old developer from Nikky Amresh.
            </TextSplit>
            <TextSplit className="left_side_text" splitBy="words">
              Everything started with passion to web technologies (HTML, CSS).
              In 2016 I started to learn all about web development.
            </TextSplit>
            <TextSplit className="left_side_text" splitBy="words">
              Year later I got my first commercial work as a junior front-end
              developer in a small agency located in UA, Lviv. There I first got
              acquainted with Angular.
            </TextSplit>
            <TextSplit className="left_side_text" splitBy="words">
              Having worked there for a couple of months I changed the job. It
              was a German company and I was as freelancer for a long-term job.
            </TextSplit>
            <TextSplit className="left_side_text" splitBy="words">
              In multinational team we were building large Single Page
              Application like HR tool using React.
            </TextSplit>
            <TextSplit className="left_side_text" splitBy="words">
              Now I'm testing myself in freelance, but I'm open to any
              suggestions!
            </TextSplit>
          </div>
          <div className="player">
            {/* <img
              className="insta_iframe"
              width="320"
              height="440"
              src="https://www.instagram.com/p/CkHSlSEjtTs/embed"
              frameBorder="0"
            /> */}
            {/* <div
              className="badge-base LI-profile-badge insta_iframe"
              data-locale="en_US"
              data-size="medium"
              data-theme="light"
              data-type="HORIZONTAL"
              data-vanity="nikky-amresh"
              data-version="v1"
            >
              <a
                className="badge-base__link LI-simple-link"
                href="https://in.linkedin.com/in/nikky-amresh?trk=profile-badge"
              >
                Nikky Amresh
              </a>
            </div> */}
          </div>
        </div>
        <span className="tags">
          &nbsp;&nbsp;&nbsp;&lt;/body&gt; <br /> &lt;/html&gt;
        </span>
      </div>
    );
  }
}

export default About;
