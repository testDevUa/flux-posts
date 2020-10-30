import './App.css';
import Header from './Header/Header';
import Posts from './Posts/Posts';

function App(props) {
  return (
    <div className="App">
      <Header />
      <div className="App-wrapper">
        <Posts state={props.state} stateUpdate={props.stateUpdate}/>
      </div>
    </div>
  );
}

export default App;
