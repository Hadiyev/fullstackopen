import { useState } from 'react';
import './App.css';

function App() {
  const [numGood, setNumGood] = useState(0);
  const [numNeutral, setNumNeutral] = useState(0);
  const [numBad, setNumBad] = useState(0);

  const giveFeedback = (value, setValue) => {
    setValue(value + 1);
  }

  const calculateAverageFeedback = () => {
    return (numGood + numBad + numNeutral)/3;
  }

  const calculatePositiveFeedbackPercentage = () => {
    return numGood/(numGood + numBad + numNeutral)*100;
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
      <p>average: {calculateAverageFeedback()}</p>
      {(numGood + numNeutral + numBad) !== 0 ? 
      <div>
        <p>positive: {calculatePositiveFeedbackPercentage()} %</p> 
      </div>
      : <p>There is not any feedback yet.</p>
      }
      
    </div>
  );
}

export default App;
