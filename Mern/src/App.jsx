import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");


  function handleSubmit(ev) {
    ev.preventDefault();     

    const url = import.meta.env.VITE_REACT_APP_API_URL +'/transaction' ;
    fetch(url, {
      method: "POST",
      headers: { "Content-type": "applicatipn/json" },
      body: JSON.stringify({ name, description, datetime }),
    }).then((response) => {
      response.json().then(json => {
        console.log('result', json);
      });
    });
  }

  return (
    <>
      <main>
        <h1>
          Rs 400 <span>.00</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="basics">
            <input
              type="text"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              placeholder="+200 new mi tv"
            />
            <input
              type="datetime-local"
              value={datetime}
              onChange={(ev) => setDatetime(ev.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
              placeholder="description"
            />
          </div>
          <button type="submit">Add new transcation</button>
        </form>

        <div className="transcations">
          <div className="transaction">
            <div className="left">
              <div className="name">
                New samsung tv
                <div className="description">It was time fpr new tv</div>
              </div>
            </div>
            <div className="right">
              <div className="price red">
                - Rs500
                <div className="datetime">05-07-2024</div>
              </div>
            </div>
          </div>
        </div>
        <div className="transcations">
          <div className="transaction">
            <div className="left">
              <div className="name">
                Whirpool Ac sale
                <div className="description">
                  It was time for new refrigretor
                </div>
              </div>
            </div>
            <div className="right">
              <div className="price green">
                + Rs500
                <div className="datetime">05-07-2024</div>
              </div>
            </div>
          </div>
        </div>
        <div className="transcations">
          <div className="transaction">
            <div className="left">
              <div className="name">
                iphone
                <div className="description">It was time fpr new phone</div>
              </div>
            </div>
            <div className="right">
              <div className="price red">
                - Rs900
                <div className="datetime">05-07-2024</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
