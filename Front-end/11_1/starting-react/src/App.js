
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['learn React', 'get a job', '???', 'profit'];

function App() {
  return (
    <ul>{tasks.map(item => task(item))}</ul>
  );
}

export default App;
