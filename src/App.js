import './App.css';
import Home from './components/Home/Home';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <h1>Hello... Welcome to React!</h1>
      <Home></Home> <br />
      <Button />
      <Button color="danger" text="Submit" />
      <Button color="warning" />
      <Button text="Click Here" />
    </div>
  );
}

export default App;