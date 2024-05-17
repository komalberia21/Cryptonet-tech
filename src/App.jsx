import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState({});

  //fetching data when the component mounts
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?page=1&results=1&seed=abc");
        const data = await response.json();
       //console.log(data.results, "dataresult");
        setResult(data.results[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }};
    fetchdata();
  },[]);

//destructing info from result
  const { picture, name, gender, phone } = result;

  // funtion to make first letter capital
  const capitalizeFirstLetter = (string) => {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
  };

  return (
    <div className='main'>
      {/*note: this can also be made a separate card components and pass result as prop */}
      <div className="container">
        <div className="img-container">
          <img src={picture?.large} alt="Profile" />
        </div>
        <div className="info">
          <div className="name">
            <p>{name?.title} {name?.first} {name?.last}</p>
          </div>
          <p>{capitalizeFirstLetter(gender)}</p>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
