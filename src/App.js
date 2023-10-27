import React from 'react';
import './App.css'; // Import your CSS styles here
import Game from './components/Game'; // Import your Tic-Tac-Toe game component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* You can add a title or header here */}
      </header>
      <main>
        <Game /> {/* Render your Tic-Tac-Toe game component here */}
      </main>
    </div>
  );
}

export default App;
