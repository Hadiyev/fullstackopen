import { useState } from 'react';
import Statistics from './Statistics';
import './App.css';

function App() {
  const [numGood, setNumGood] = useState(0);
  const [numNeutral, setNumNeutral] = useState(0);
  const [numBad, setNumBad] = useState(0);

  const giveFeedback = (value, setValue) => {
    setValue(value + 1);
  }

  return (
    <div className="App">
      <h1>give feedback</h1>
      <button onClick={ () => giveFeedback(numGood, setNumGood)}>good</button>
      <button onClick={ () => giveFeedback(numNeutral, setNumNeutral)}>neutral</button>
      <button onClick={ () => giveFeedback(numBad, setNumBad)}>bad</button>
      <h2>statistics</h2>
      <p>good: {numGood}</p>
      <p>neutral: {numNeutral}</p>
      <p>bad: {numBad}</p>
      <Statistics numGood = {numGood} numNeutral = {numNeutral} numBad = {numBad}/>
    </div>
  );
}

export default App;
