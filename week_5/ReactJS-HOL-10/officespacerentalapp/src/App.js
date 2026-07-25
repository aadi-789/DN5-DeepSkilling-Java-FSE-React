import "./App.css";

function App() {

  const heading = "Office Space";

  const officeImage = "office.jpg";

  const offices = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore"
    },
    {
      Name: "WeWork",
      Rent: 90000,
      Address: "Hyderabad"
    }
  ];

  return (
    <div className="container">

      <h1>{heading}, at Affordable Range</h1>

      <img
        src={officeImage}
        alt="Office Space"
        width="300"
        height="200"
      />

      {
        offices.map((office, index) => (

          <div key={index} className="office-card">

            <h2>Name: {office.Name}</h2>

            <h3
              style={{
                color: office.Rent <= 60000 ? "red" : "green"
              }}
            >
              Rent: Rs. {office.Rent}
            </h3>

            <h3>
              Address: {office.Address}
            </h3>

          </div>

        ))
      }

    </div>
  );
}

export default App;