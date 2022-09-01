import dog4you from "../img/dog4youlogo.png";
import note_taker from "../img/note-taker.png";
import weather from "../img/weather.png";
import league from "../img/league-quiz.png";
import nosql from "../img/NoSql.PNG";
import vivachat from "../img/VivaChat.png";

export default function Portfolio() {
  return (
    <section className="portfolioContainer">
      <h2 className="portfolioTitle">Portfolio</h2>
      <div className="portfolioGrid">
        <div className="card">
          <h3 class="projectName">Dog for You</h3>
          <a href="https://thegabe101.github.io/Project-1-Rainer-Matt-Ming-Gabe/">
            <img className="image" src={dog4you} alt="dog 4 you "></img>
          </a>
        </div>
        <div className="card">
          <h3 class="projectName">Note Taker</h3>
          <a href="https://herokuminiprojectming.herokuapp.com/notes">
            <img className="image" src={note_taker} alt="note taker img"></img>
          </a>
        </div>
        <div className="card">
          <h3 class="projectName">Weather Dashboard</h3>
          <a href="https://github.com/zmzhong1/weather_dashboard">
            <img
              className="image"
              src={weather}
              alt="weather dashboard img "
            ></img>
          </a>
        </div>
        <div className="card">
          <h3 class="projectName">League Quiz</h3>
          <a href="https://github.com/zmzhong1/League-Quiz">
            <img className="image" src={league} alt="league quiz img "></img>
          </a>
        </div>
        <div className="card">
          <h3 class="projectName">Social Network API</h3>
          <a href="https://github.com/zmzhong1/NoSQL_SocialNetworkAPI">
            <img className="image" src={nosql} alt="nosql img "></img>
          </a>
        </div>
        <div className="card">
          <h3 class="projectName">Viva Chat</h3>
          <a href="https://vivachat.herokuapp.com/">
            <img className="image" src={vivachat} alt="Viva Chat img "></img>
          </a>
        </div>
      </div>
    </section>
  );
}
