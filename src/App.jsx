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
  {
    title: 'Der geheime Wald – Teil 2: Ein neuer Freund',
    content: `Die Kinder drehen sich um. Ein kleines Tier kommt schnell aus dem Gebüsch. <br /><br />

„Hilfe, ein Monster!“ kreischt Ryen. <br /><br />

„Nein, das ist nur ein Hund!“ ruft Yusra. <br /><br />

Der kleine Hund ist gelb und braun mit schwarzen Flecken. Seine dicke Nase ist feucht, und er schnüffelt an Micheles roten Schuhen. <br /><br />

„Der ist ja süß!“ sagt Ghihan. <br /><br />

Der Hund wedelt mit dem weißen Schwanz und läuft hin und her. Er bellt leise, als wollte er etwas sagen. Dann läuft er zum Tor und bleibt dort stehen. <br /><br />

„Er will, dass wir das Tor öffnen“, sagt Ryen. <br /><br />

„Was, wenn dahinter etwas Gefährliches ist?“ fragt Yusra. Ryen nickt.<br /><br />

„Dann beschützt uns der Hund!“ sagt Michele und grinst. <br /><br />

Langsam und mutig geht Michele zum Tor. Es sieht alt aus und hat einen langen Griff aus Eisen. Michele zieht den Griff nach unten. Das Tor quietscht laut, und dahinter sehen die Kinder etwas Erstaunliches: <br /><br />

Ein großer, verschneiter Garten liegt vor ihnen. Es ist vollkommen still und alles sieht geheimnisvoll und magisch aus. <br /><br />`
  },

  {
    title: 'Der geheime Wald – Teil 3: Der magische Garten',
    content: `Der Garten ist wunderschön. Der Schnee glitzert auf den trockenen Blumen und Büschen wie kleine Sterne. In der Mitte steht ein großer, runder Stein. <br /><br />
  
    „Was ist das?“ fragt Ghihan neugierig. <br /><br />
    
    „Da ist eine Schrift drauf!“ ruft Michele. <br /><br />
    
    Alle laufen zum Stein. Michele wischt den Schnee ganz weg. Darunter ist eine Botschaft eingeritzt. <br /><br />
    
    „Ich lese das vor“, sagt er. „Findet den Schatz, aber passt gut auf ihn auf!“ <br /><br />
    
    „Ein Schatz?“, fragt Yusra aufgeregt und voller Freude. <br /><br />
    
    „Ja! Wir müssen den Schatz finden!“ ruft Ryen aufgeregt. <br /><br />
  
    Alle sehen sich um, aber es ist kein Schatz zu sehen. Sie gehen weiter und schauen immer in alle Richtungen. <br /><br />

    Plötzlich bellt der Hund sehr laut und rennt zu einem alten Baum. Unter dem Baum liegt zwischen den Wurzeln etwas Kleines, das mit Schnee bedeckt ist. <br /><br />
    
    Die Kinder graben schnell mit den Händen im Schnee. Sie finden eine alte Truhe. Sie sieht so aus wie in einem Piratenfilm. <br /><br />`
  },

  {
    title: 'Der geheime Wald – Teil 4: ',
    content: `
     <br /><br />`
  },

  {
    title: 'Der geheime Wald – Teil 5: ',
    content: `
     <br /><br />`
  },

  {
    title: 'Der geheime Wald – Teil 6: ',
    content: `
     <br /><br />`
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
