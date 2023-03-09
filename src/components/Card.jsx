import "./Card.css";
import loadingGif from "../assets/loading-gif.gif";

function Card({ first, last, twitter, avatar, notes, loading }) {
  return (
    <div id="card">
      <div id="contact">
        {loading ? (
          <img src={loadingGif} alt="loading..." />
        ) : (
          <>
            <div>
              <img id="avatar" src={avatar} />
            </div>
            <div>
              <h1>
                {first} {last}
                <span>★</span>
              </h1>
              <p>
                <a
                  target="_blank"
                  href={`https://twitter.com/${twitter.toLowerCase()}`}
                >
                  {twitter}
                </a>
              </p>
              <p>{notes}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
