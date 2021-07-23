import './style/Card.css';
import image from "./images/coding_image.jpg";

export default function Card() {
  const cardInfo = {
    image,
    title: "Coding With Masih, Real World Projects, Real Experience",
    contents: "Get experience working with a team of eager engineers, create amazing real-life projects, expand your horizons and earn money doing it!",
    stats: ["325,Heartbeat", "2750,Coffe Cups", "1000+, Lines of Code"]
  }
  return (
    <div className="Card">
      <img src={cardInfo.image} alt="card_image"></img>
      <h1>{cardInfo.title}</h1>
      <p>{cardInfo.contents}</p>
      <div>
        {cardInfo.stats.map(function(stat, index){
          let statSplit = stat.split(",");
          let number = statSplit[0];
          let word = statSplit[1];
          return (
            <div className="Stat" key={index}>
              <h2>{number}</h2>
              <p>{word}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

