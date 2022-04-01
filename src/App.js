import './App.css';
import Header from './components/Header/Header';

function App() {
  const isTrue = false;
  const bClass = 'primary'
  const bText = 'Click Me!'
  const onButtonClickHandler = () => {
    console.log('Button was clicked from App Compoennet!')
  }

  return (
    // JSX - HTML Template
    <div>
        <div className='container-fluid'>
          <Header text="Welcome to React!" btnText={bText} btnColor={bClass} buttonHandler={onButtonClickHandler} />
        </div>

        <div className="container">
          <p> { isTrue ? 'Yes' : 'No' } </p>
        </div>
    </div>
  );
}

export default App;