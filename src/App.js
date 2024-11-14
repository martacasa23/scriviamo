import Navbar from "./components/navbar";
import React, { Component } from 'react';
import Card from "./components/card";
import 'bootstrap/dist/css/bootstrap.min.css';



import drago from './images/drago.png.png';
import logo from './images/logo.png.png';
import book from './images/book.png';

class App extends Component{
  state= {cards:[
    {id: 0,autore: "Marta Casadei", titolo: 'La Biblioteca Di Fiori', immagine: book},
    { id: 1, autore: "Laura Rossi", titolo: 'Manuale di scrittura', immagine: logo},
    
  ]
}

  render() {
  return (
    <>
   <Navbar/>
   <div className='container'>
   <h1> Pronto per la tua prossima storia?</h1>
   <hr/>
   <div className="row">
   { this.state.cards.map(card=>(
    <Card
    key={card.id}
    onNavigate={this.handleNavigate}
    card={card}/>
   ))}
   </div>
   </div>
   </>
  );
}
}

export default App;
