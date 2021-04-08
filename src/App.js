import React from 'react'
import './App.css';
import ProfileComponent from './profile/profileComponent'
import imgg from './developer.jpg'


const slim={
  FullName : "Slim El Ghoul",
  Bio : "Goding !!",
  Profession : "jobless"
};

function App() {
  const handleName = (name) => {
    alert(`this is ${name} portfolio`)
  }
  return (
    <div className="App">
      <ProfileComponent FullName={slim.FullName} Bio={slim.Bio} Profession={slim.Profession} handleName={handleName} >
         <div>
         <img src={imgg} />
         </div>
          </ProfileComponent>
      </div>
  );
}


export default App;


