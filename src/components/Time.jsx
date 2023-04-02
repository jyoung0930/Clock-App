import moonIcon from "../assets/desktop/icon-moon.svg";
import sunIcon from "../assets/desktop/icon-sun.svg";
import downArrow from "../assets/desktop/icon-arrow-down.svg";
import upArrow from "../assets/desktop/icon-arrow-up.svg";
import refreshIcon from "../assets/desktop/icon-refresh.svg";
import Info from "./Info";

export default function Time({
  quoteData,
  newQuote,
  data,
  location,
  open,
  setIsOpen,
}) {
  return (
    <main className="time_section">
      <div className="time_padding">
        {!open && (
          <section className="quote">
            <p className="quote_heading">
              "{quoteData.content}"
              <img
                onClick={() => newQuote((prev) => !prev)}
                src={refreshIcon}
                alt="icon"
              />
            </p>
            <p className="quote_author">{quoteData.author}</p>
          </section>
        )}
        <section className="time_button_section">
          <div className="time_info">
            <p className="time_greeting">
              <img src={moonIcon} alt="weather icon" /> GOOD EVENING
              <span className="mobile_cut">, IT'S CURRENTLY</span>
            </p>
            <p className="time">
              {data.time}
              <span className="abbreviation">{data.abbreviation}</span>
            </p>
            <p className="country">
              {location.city}, {location.state}
            </p>
          </div>

          <div onClick={() => setIsOpen((prev) => !prev)} className="button">
            <p>MORE</p>
            <div className="arrow_container">
              <img src={open ? upArrow : downArrow} alt="arrow" />
            </div>
          </div>
        </section>
      </div>
      {/* conditionally render info box */}
      {open && <Info timeInfo={data} />}
    </main>
  );
}
