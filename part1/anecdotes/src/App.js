import { useState } from 'react';
import './App.css';

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})

  const assignRandomNumberToSelected = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const vote = () => {
    const copyVotes = votes;
    if (isNaN(copyVotes[selected])) {
      copyVotes[selected] = 0;
    }
    else {
      copyVotes[selected] +=1;
    }
    setVotes(copyVotes);
  }

  const getLargestNumber = (numbers) => {
    let largestNumber = 0;
    if (numbers && Object.keys(numbers).length !== 0){
      largestNumber = Object.keys(numbers).reduce(function(a, b){ return numbers[a] > numbers[b] ? a : b });
    }
    return largestNumber;
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {isNaN(votes[selected]) ? '0' : votes[selected]} votes</p>
      <button onClick={() => vote()}>vote</button>
      <button onClick={() => assignRandomNumberToSelected()}>next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[getLargestNumber(votes)]}</p>
    </div>
  )
}

export default App;
