import { useState, useEffect } from "react";
import dayjs from "dayjs";
import Time from "./Time";
import Info from "./Info";

export default function App() {
  const [quote, setQuote] = useState({});
  const [data, setData] = useState({});
  const [newData, setNewData] = useState(false);
  const [newQuote, setNewQuote] = useState(false);
  const [location, setLocation] = useState({});

  // Generate quote
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote({
          content: data.content,
          author: data.author,
        });
      });
  }, [newQuote]);

  // // Get user location
  // useEffect(() => {
  //   fetch(
  //     "https://api.ipbase.com/v2/info?apikey=sPAFvbdvxCIaolV2qbA796DvequeucnbIdALPtr1"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  // Get time based on IP address
  useEffect(() => {
    fetch("http://worldtimeapi.org/api/ip")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData({
          time: data.datetime.slice(11, 16),
          abbreviation: data.abbreviation,
          day_of_week: data.day_of_week,
          day_of_year: data.day_of_year,
          timeZone: data.timezone,
          week_number: data.week_number,
        });
      });
  }, [newData]);

  // Reset data for new time
  setInterval(() => {
    setNewData((prev) => !prev);
  }, 60000);

  return (
    <div>
      <Time quoteData={quote} data={data} newQuote={setNewQuote} />
    </div>
  );
}
