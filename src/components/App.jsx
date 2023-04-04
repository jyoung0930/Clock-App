import { useState, useEffect } from "react";
import Time from "./Time";

export default function App() {
  const [quote, setQuote] = useState({});
  const [data, setData] = useState({});
  const [newData, setNewData] = useState(false);
  const [newQuote, setNewQuote] = useState(false);
  const [location, setLocation] = useState({});
  const [open, setIsOpen] = useState(false);
  const [evening, setIsEvening] = useState(true);

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

  // Get user location
  useEffect(() => {
    fetch(
      "https://api.ipbase.com/v2/info?apikey=sPAFvbdvxCIaolV2qbA796DvequeucnbIdALPtr1"
    )
      .then((res) => res.json())
      .then((info) => {
        console.log(info);
        setLocation({
          city: info.data.location.city.name,
          state: info.data.location.region.name,
        });
      });
  }, []);

  // Get time based on IP address
  useEffect(() => {
    fetch("http://worldtimeapi.org/api/ip")
      .then((res) => res.json())
      .then((data) => {
        setData({
          time: data.datetime.slice(11, 16),
          hour: parseInt(data.datetime.slice(11, 14)),
          abbreviation: data.abbreviation,
          day_of_week: data.day_of_week,
          day_of_year: data.day_of_year,
          timeZone: data.timezone,
          week_number: data.week_number,
        });
      });
  }, [newData]);

  // Reset data for new time
  useEffect(() => {
    const interval = setInterval(() => setNewData((prev) => !prev), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Time
        quoteData={quote}
        data={data}
        newQuote={setNewQuote}
        location={location}
        open={open}
        setIsOpen={setIsOpen}
        hour={data.hour}
        evening={evening}
        setIsEvening={setIsEvening}
      />
    </div>
  );
}
