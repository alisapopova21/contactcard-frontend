import './Card.css';

function Card({first, last, twitter, avatar, notes}) {
  return (
    <div id="card">
      <div id="contact">
        <div>
          <img src={avatar} />
        </div>
        <div>
          <h1>
            {first} {last}
            <span>★</span>
          </h1>
          <p>
            <a target="_blank" href={`https://twitter.com/${twitter.toLowerCase()}`}>
              {twitter}
            </a>
          </p>
          <p>{notes}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;