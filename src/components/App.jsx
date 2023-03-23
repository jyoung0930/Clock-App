import { useState, useEffect } from "react";
import Time from "./Time";
import Info from "./Info";

export default function App() {
  const [quote, setQuote] = useState({});

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
  }, []);

  console.log(quote.content);
  console.log(quote.author);
  return (
    <div>
      <Time quoteData={quote} />
    </div>
  );
}
