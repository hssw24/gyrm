import React, { useState } from 'react';
import './App.css';

const storyParts = [
  {
    title: 'Der geheime Wald – Teil 1: Ein altes Tor im Schnee',
    content: `Es sind Weihnachtsferien. Yusra, Ghihan, Ryen und Michele spielen auf dem Schulhof. Es hat geschneit. Der ganze Hof ist weiß. Die Bäume und Büsche tragen dicke Schneemützen. <br /><br />

„Seht mal, wie schön der Wald aussieht!“ sagt Ghihan und zeigt auf die Bäume hinter dem Zaun. <br /><br />

Der kleine Wald am Schulhof war immer ein geheimnisvoller Ort. Im Winter wirkte er noch magischer. <br /><br />

„Ich habe gehört, da gibt es ein Tor“, sagt Michele. <br /><br />

„Ein Tor? Zu was?“ fragt Ryen. <br /><br />

„Vielleicht zu einer Schatzkammer“, sagt Michele mit funkelnden Augen. <br /><br />

Die Freunde laufen zum Zaun. Hinter einem großen Busch finden sie ein Loch. <br /><br />

„Sollen wir durchkriechen?“ fragt Yusra. <br /><br />

„Klar! Es ist doch niemand hier“, sagt Michele. <br /><br />

Einer nach dem anderen kriecht durch das Loch. Auf der anderen Seite ist der Wald still. Nur der Schnee knirscht unter ihren Schuhen. <br /><br />

„Da ist es!“ ruft Ghihan plötzlich. <br /><br />

Zwischen zwei großen, schneebedeckten Bäumen steht ein altes Tor. Es ist grün und voller Moos. Schneeflocken glitzern darauf wie kleine Sterne. <br /><br />

Michele streckt die Hand aus, um das Tor zu öffnen. Doch plötzlich hören sie ein Rascheln hinter sich. <br /><br />`
  },



  


  // Add the other story parts here...
];

function App() {
  const [currentPart, setCurrentPart] = useState(0);

  const handleNext = () => {
    if (currentPart < storyParts.length - 1) {
      setCurrentPart(currentPart + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPart > 0) {
      setCurrentPart(currentPart - 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>{storyParts[currentPart].title}</h3>
        <p dangerouslySetInnerHTML={{ __html: storyParts[currentPart].content }} />
        <div className="navigation-buttons">
          <button onClick={handlePrevious} disabled={currentPart === 0}>Zurück</button>
          <button onClick={handleNext} disabled={currentPart === storyParts.length - 1}>Weiter</button>
        </div>
      </header>
    </div>
  );
}

export default App;
