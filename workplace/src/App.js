import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Hermite Technologies
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

function App2() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Ff /><hr/>
                    <Route exact path='/' component={Home}/>
                    <Route path='/About' component={About}/>
                </div>
            </Router>
        </div>
    );
}

export default App;
