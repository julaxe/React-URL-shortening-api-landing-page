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
  function ShortenLink(props) {
    return (
      <div className="shorten-link">
        <div className="link">{props.link}</div>
        <div className="shortened-link">
          <p>{props.shortenLink}</p>
          <div className="shortened-button">Copy</div>
        </div>
      </div>
    );
  }
  function AdvancedStatistics(props) {
    const dataTest = [
      {
        link: "https://www.frontendmentor.io",
        shortenLink: "https://rel.ink/k4lKyk",
      },
      { link: "www.test.com", shortenLink: "https://rel.ink/lolaso" },
    ];
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
        {dataTest.map((obj) => (
          <ShortenLink link={obj.link} shortenLink={obj.shortenLink} />
        ))}
        <h2>Advanced Statistics</h2>
        <p className="advanced-statistics-text">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>

        <div className="statistics-container center">
          <Statistics logo={IconBrandRecognition} title="Brand Recognition">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </Statistics>
          <Statistics logo={IconDetailedRecords} title="Detailed Records">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
            <span className="greenBar"></span>
          </Statistics>
          <Statistics logo={IconFullyCustomizable} title="Fully Customizable">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </Statistics>
        </div>
      </div>
    );
  }
  function BoostYourLinks(props) {
    return (
      <div className="boost-your-links-today">
        <h2>Boost your links today</h2>
        <div className="get-started-icon center"> Get Started</div>
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
