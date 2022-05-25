import logo from "./logo.svg";
import "./App.css";

function App() {
  const getURL = "https://jsonplaceholder.typicode.com/users";
  const postURL =
    "https://dev.app.homecarepulse.com/Primary/?FlowId=7423bd80-cddb-11ea-9160-326dddd3e106&Action=api";

  const onSuccess = (response) => {
    return response.json().then((data) => {
      const users = data.map(mapUsers);
      console.log(users);

      let fetchData = {
        method: "POST",
        body:
          {
            userid: "andsettle1@gmail.com",
            password: "3d0612aa153448d3b8231d766e6ea910",
            outputtype: "Json",
          } + JSON.stringify(users),
        headers: new Headers({
          "Content-Type": "application/json; charset=UTF-8",
        }),
      };

      fetch(postURL, fetchData).then(onError);
    });
  };

  const mapUsers = (user) => {
    let newUsers = {
      first_name: user.name.split(" ")[0],
      last_name: user.name.split(" ")[1],
      company_name: user.company.name,
      company_full_address:
        user.address.street +
        ", " +
        user.address.suite +
        ", " +
        user.address.city +
        ", " +
        user.address.zipcode,
      website: user.website,
      phone: user.phone,
    };
    return newUsers;
  };

  const onError = (err) => {
    console.log(err);
  };

  fetch(getURL).then(onSuccess).catch(onError);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
