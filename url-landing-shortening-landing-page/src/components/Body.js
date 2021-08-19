import React from "react";
import "../styles/body.css";
import Illustration from "../images/illustration-working.svg";
import IconBrandRecognition from "../images/icon-brand-recognition.svg";
import IconDetailedRecords from "../images/icon-detailed-records.svg";
import IconFullyCustomizable from "../images/icon-fully-customizable.svg";
import { useAsync } from "./Hooks";
const apiURL = "https://api.shrtco.de/v2";

function client(endpoint) {
  return fetch(`${apiURL}/${endpoint}`).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}
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
  const searchBarRef = React.useRef(null);
  const [links, setLinks] = React.useState([]);
  const { data, isError, isLoading, run } = useAsync([]);

  React.useEffect(() => {
    const parsedLinks = JSON.parse(localStorage.getItem("links") || "[]");
    setLinks(parsedLinks);
  }, []);

  React.useEffect(() => {
    if (data) {
      const repeatedLink = links.find(
        (e) => e.link === data.result.original_link
      );
      if (repeatedLink) {
        return;
      }
      setLinks([
        ...links,
        {
          link: data.result.original_link,
          shortenLink: data.result.full_short_link,
          clicked: false,
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  React.useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const handleOnClick = () => {
    if (isLoading) {
      return;
    }
    run(client(`shorten?url=${searchBarRef.current.value}`));
  };

  function Search(props) {
    return (
      <div className="search">
        <div>
          {isError ? (
            <div className="error-message">please provide a valid link</div>
          ) : (
            ""
          )}
          <input
            ref={searchBarRef}
            className="search-bar"
            type="text"
            placeholder="Shorten a link here..."
          />
        </div>
        <button className="search-button" onClick={handleOnClick}>
          {isLoading ? "Loading..." : "Shorten it!"}
        </button>
      </div>
    );
  }
  function ShortenLink(props) {
    function copyToClipboard(event) {
      const textToCopy = event.target.parentElement.children[0].textContent;
      navigator.clipboard.writeText(textToCopy);
      const newLinks = links.map((element) => {
        if (element.shortenLink === textToCopy) {
          return { ...element, clicked: true };
        }
        return { ...element, clicked: false };
      });
      setLinks(newLinks);
    }
    return (
      <div className="shorten-link">
        <div className="link">{props.link}</div>
        <div className="shortened-link">
          <p>{props.shortenLink}</p>
          {!props.clicked ? (
            <div className="shortened-button" onClick={copyToClipboard}>
              Copy
            </div>
          ) : (
            <div className="shortened-button clicked" onClick={copyToClipboard}>
              Copied!
            </div>
          )}
        </div>
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
        {links
          ? links.map((obj) => (
              <ShortenLink
                key={obj.link}
                link={obj.link}
                shortenLink={obj.shortenLink}
                clicked={obj.clicked}
              />
            ))
          : ""}
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
