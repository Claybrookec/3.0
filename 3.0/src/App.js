import logo from './logo.svg';
import './App.css';

function App() {
  return (
 <div className="header">
    <div className="title">
      <h1>3.0</h1>
      <p>Track. Measure. Optimize.</p>
    </div> 
    <div>
      <button className="sign-up">Sign Up</button>
      <button className="log-in">Login</button>
    </div>
    <div>
    <form>
      <h2>Longevity Habits Weekly Frequency</h2>
      <div className="checkbox-container-cardio">
      <label htmlFor="cardio">Cardio</label>
        <input className="cardio-checkbox" type="checkbox"></input>
        <input className="cardio-checkbox" type="checkbox" ></input>
        <input className="cardio-checkbox" type="checkbox" ></input>
        <input className="cardio-checkbox" type="checkbox" ></input>
      </div>
      <div className="checkbox-container-cardio">
      <label htmlFor="cardio">Strength Training</label>
        <input className="cardio-checkbox" type="checkbox"></input>
        <input className="cardio-checkbox" type="checkbox" ></input>
        <input className="cardio-checkbox" type="checkbox" ></input>
        <input className="cardio-checkbox" type="checkbox" ></input>
      </div>
      <div className="checkbox-container-cardio">
      <label htmlFor="cardio">Stability Training</label>
        <input className="cardio-checkbox" type="checkbox"></input>
        <input className="cardio-checkbox" type="checkbox" ></input>
        <input className="cardio-checkbox" type="checkbox" ></input>
      </div>
      <div className="checkbox-container-cardio">
      <label htmlFor="cardio">DNS Movements</label>
        <input className="cardio-checkbox" type="checkbox"></input>
      </div>
      <div className="checkbox-container-cardio">
      <label htmlFor="cardio">Pulling Motion Training</label>
        <input className="cardio-checkbox" type="checkbox"></input>
        <input className="cardio-checkbox" type="checkbox" ></input>
      </div>
      <div className="checkbox-container-cardio">
      <label htmlFor="cardio">Farmers Carries</label>
        <input className="cardio-checkbox" type="checkbox"></input>
        <input className="cardio-checkbox" type="checkbox" ></input>
      </div>
      <div className="checkbox-container-cardio">
      <label htmlFor="cardio">Hip Hinge Movements</label>
        <input className="cardio-checkbox" type="checkbox"></input>
        <input className="cardio-checkbox" type="checkbox" ></input>
      </div>
      <div className="checkbox-container-cardio">
      <label htmlFor="cardio">VO2 MAX Cardio</label>
        <input className="cardio-checkbox" type="checkbox"></input>
      </div>
    </form>
    </div>
    <div className="menu-icon">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  </div>
  
   
  

  );
}

export default App;
