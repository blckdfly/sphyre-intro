import logo from './assets/sphyre-logo.svg';
import logoText from './assets/sphyre-text.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <img src={logoText} className="Text-logo" alt="logo" />
                <div className="text-container">
                    <p className="tagline">Who You Are, Finally Yours</p>
                </div>
                <p className="copyright">© 2025 Sphyre. All rights reserved.</p>
            </header>
        </div>
    );
}

export default App;
