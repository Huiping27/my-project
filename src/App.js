// src/App.js

import React from 'react';
import StackedBarChart from '.StackedBarChart'; // Hier './' verwenden, um auf eine Datei im selben Verzeichnis zu verweisen

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gestapeltes Balkendiagramm für Projektprozessmanagement</h1>
      </header>
      <main>
        <StackedBarChart />
      </main>
    </div>
  );
}

export default App;

