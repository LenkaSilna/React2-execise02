import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import equals from 'fast-deep-equal';
import TimeDisplay from './components/TimeDisplay';
import TagClouds from './components/TagClouds';

const App = () => {
  
  const names = ['jana', 'pavel', 'eva', 'jitka', 'radek', 'zuzka', 'ondra']
  //names.unshift('romana');
  //const newNames = names.concat();
  //names.push('hanka');
  //newNames.pop()
  //newNames.splice(3);
  const end = {...names}
  console.log(end);

  const ticket = { from: 'Praha', to: 'Lisabon', currency: 'EUR', price: 115 }
  console.log({...ticket, duration: '2h'})

  //const reversed = names.reverse()
  //console.log(reversed)

  const addToIndex = (items, element, index) => {
    return console.log([...items.slice(0, index), element, ...items.slice(index)])
  };

  addToIndex([10, 23, 4], 6, 5)

  const revert = (arr) => {
    return console.log(arr.reverse())
  }

  revert(names)

  const remove = (arr, index) => {
    return console.log(arr.slice(index))
  }
  remove(names, 3)

  function array_move(arr, old_index, new_index) {

    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; 
};

console.log(array_move([names], 2, 4)); 

const a = [1, 2, 3]
const b = a
a.push(4)
console.log(b);
console.log(a === b);
console.log('shallow:', a === b);
console.log('deep:', equals(a, b));



  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>Webová aplikace</h1>
      </header>
      <main>
        <p>
          Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí{" "}
          <a href="https://www.npmjs.com/package/create-czechitas-app">create-czechitas-app</a>
          .
        </p>
        <TimeDisplay />
        <TagClouds />
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
