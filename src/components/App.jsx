import { useState, useEffect } from "react";
import Time from "./Time";
import Info from "./Info";

export default function App() {
  const [quote, setQuote] = useState({});
  const [location, setLocation] = useState({});

  // // Generate quote
  // useEffect(() => {
  //   fetch("https://api.quotable.io/random")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setQuote({
  //         content: data.content,
  //         author: data.author,
  //       });
  //     });
  // }, []);

  // // Get user location
  // useEffect(() => {
  //   fetch(
  //     "https://api.ipbase.com/v2/info?apikey=sPAFvbdvxCIaolV2qbA796DvequeucnbIdALPtr1"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  // // Get time based on IP address
  // useEffect(() => {
  //   fetch("http://worldtimeapi.org/api/ip")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div>
      <Time quoteData={quote} />
    </div>
  );
}
