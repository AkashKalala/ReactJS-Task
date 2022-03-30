import '../CSS/App.css';
import Header from './Header';
import Body from './Body';

function App() {
  return (
    <div className="App">
      <div className="App-Total">
        <header className="App-header">
          <Header />
        </header>
        <div className="App-Body">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
