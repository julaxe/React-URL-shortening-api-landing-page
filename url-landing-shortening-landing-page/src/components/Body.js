import React from "react";
import "../styles/body.css";
import Illustration from "../images/illustration-working.svg";
import IconBrandRecognition from "../images/icon-brand-recognition.svg";
import IconDetailedRecords from "../images/icon-detailed-records.svg";
import IconFullyCustomizable from "../images/icon-fully-customizable.svg";

function GetStarted(props) {
  return (
    <div className="get-started">
      <img src={Illustration} alt="illustration of a person working" />
      <div className="presentation">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <div className="get-started-icon">Get Started</div>
      </div>
    </div>
  );
}
function ShortenIt(props) {
  function Search(props) {
    return (
      <div className="search">
        <input
          className="search-bar"
          type="text"
          placeholder="Shorten a link here..."
        />
        <button className="search-button">Shorten it!</button>
      </div>
    );
  }
  function AdvancedStatistics(props) {
    function Statistics(props) {
      return (
        <div className="statistics">
          <div className="statistics-logo">
            <img src={props.logo} alt="logo" />
          </div>
          <h3>{props.title}</h3>
          <p>{props.children}</p>
        </div>
      );
    }
    return (
      <div className="advanced-statistics">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <Statistics logo={IconBrandRecognition} title="Brand Recognition">
          Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instill confidence in your content.
        </Statistics>
        <Statistics logo={IconDetailedRecords} title="Detailed Records">
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </Statistics>
        <Statistics logo={IconFullyCustomizable} title="Fully Customizable">
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </Statistics>
      </div>
    );
  }
  function BoostYourLinks(props) {
    return (
      <div className="boost-your-links-today">
        <h2>Boost your links today</h2>
        <div className="get-started-icon"> Get Started</div>
      </div>
    );
  }
  return (
    <div className="shorten-it">
      <Search />
      <AdvancedStatistics />
      <BoostYourLinks />
    </div>
  );
}
export default function Body() {
  return (
    <div className="body">
      <GetStarted />
      <ShortenIt />
    </div>
  );
}
