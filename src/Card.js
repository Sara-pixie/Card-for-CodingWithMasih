import './style/Card.css';
import image from "./images/coding_image.jpg";

export default function Card() {
  const cardInfo = {
    image,
    title: "Coding With Masih, Real World Projects, Real Experience!",
    contents: "Get experience working with a team of eager engineers, create amazing real-life projects, expand your horizons and earn money doing it!",
    stats: ["325,Heartbeat", "2750,Coffe Cups", "1000+, Lines of Code"]
  }
  let splitTitle = cardInfo.title.split(" ");
  let firstWord = splitTitle[0];
  let titleRest = splitTitle.slice(1).join(" ");
  return (
    <div className="Card">
      <div className="imageDiv">
        <img src={cardInfo.image} alt="card_image"></img>
      </div>
      <div className="infoDiv">
        <h1 className="title"><span className="firstWord">{firstWord}</span> {titleRest}</h1>
        <p className="paragraf">{cardInfo.contents}</p>
        <div className="stats">
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
    </div>
  );
}

