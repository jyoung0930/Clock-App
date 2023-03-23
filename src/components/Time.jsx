import moonIcon from "../assets/desktop/icon-moon.svg";
import sunIcon from "../assets/desktop/icon-sun.svg";
import downArrow from "../assets/desktop/icon-arrow-down.svg";
import upArrow from "../assets/desktop/icon-arrow-up.svg";

export default function Time({ quoteData }) {
  return (
    <main className="time_section">
      <div className="time_padding">
        <section className="quote">
          <p className="quote_heading">"{quoteData.content}"</p>
          <p className="quote_author">{quoteData.author}</p>
        </section>
        <section className="time_button_section">
          <div className="time_info">
            <p className="time_greeting">
              <img src={moonIcon} alt="weather icon" /> GOOD EVENING, IT'S
              CURRENTLY
            </p>
            <p className="time">23:14</p>
            <p className="country">IN LONDON, UK</p>
          </div>

          <div className="button">
            <p>MORE</p>
            <div className="arrow_container">
              <img src={downArrow} alt="arrow" />
            </div>
          </div>
        </section>
      </div>
      {/* conditionally render info box */}
      {/* <div className="info-box"></div> */}
    </main>
  );
}
