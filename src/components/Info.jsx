export default function Info({ timeInfo }) {
  return (
    <section className="info">
      <div className="info_details cz">
        <p>CURRENT ZONE</p>
        <h2>{timeInfo.timeZone}</h2>
      </div>
      <div className="info_details doy">
        <p>DAY OF THE YEAR</p>
        <h2>{timeInfo.day_of_year}</h2>
      </div>
      <div className="info_details dow">
        <p>DAY OF THE WEEK</p>
        <h2>{timeInfo.day_of_week}</h2>
      </div>
      <div className="info_details wn">
        <p>WEEK NUMBER</p>
        <h2>{timeInfo.week_number}</h2>
      </div>
    </section>
  );
}
