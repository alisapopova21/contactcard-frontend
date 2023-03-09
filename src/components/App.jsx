import Card from "./Card";
import { useState, useEffect } from "react";

function App() {
  let [contactObject, setContactObject] = useState({});
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const response = await fetch("https://contactcard-backend-1nj1.onrender.com/api");
      const data = await response.json();

      setContactObject(data);
      setLoading(false);
    })();
  }, []);

  return (
    <Card
      loading={loading}
      first={contactObject.first}
      last={contactObject.last}
      twitter={contactObject.twitter}
      notes={contactObject.notes}
      avatar={contactObject.avatar}
    />
  );
}

export default App;
