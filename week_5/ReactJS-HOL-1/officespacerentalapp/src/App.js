import './App.css';
import officeImage from './office.jpg';

function App() {

  const offices = [
    {
      name: "DBS",
      rent: 50000,
      address: "Chennai"
    },
    {
      name: "WeWork",
      rent: 75000,
      address: "Bangalore"
    },
    {
      name: "Regus",
      rent: 55000,
      address: "Hyderabad"
    }
  ];

  return (
    <div className="App">

      <h1>Office Space, at Affordable Range</h1>

      <img
        src={officeImage}
        alt="Office Space"
        width="400"
      />

      {
        offices.map((office, index) => (

          <div key={index} className="office-card">

            <h2>Name: {office.name}</h2>

            <h3
              style={{
                color: office.rent <= 60000 ? "red" : "green"
              }}
            >
              Rent: Rs. {office.rent}
            </h3>

            <h3>Address: {office.address}</h3>

          </div>

        ))
      }

    </div>
  );
}

export default App;