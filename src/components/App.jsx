import Card from './Card';
import { useState, useEffect } from 'react';

function App() {
  let [contactObject, setContactObject] = useState({
    first: "Unknown",
    last: "Unknown",
    twitter: "@",
    notes: "",
    avatar: ""
  });

  useEffect(async () => {
    const response = await fetch('/api');
    const data = await response.json();

    setContactObject(data);
  }, []);

  return (
    <Card
      first={contactObject.first}
      last={contactObject.last}
      twitter={contactObject.twitter}
      notes={contactObject.notes}
      avatar={contactObject.avatar}
    />
  );
}

export default App;
