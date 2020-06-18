import React from 'react';
import './App.css';

function indexOf(array, value) {
  var counter = 0;
  for (let i = 0; i < array.length; i++) {
      counter++;
      console.log("counter in loop: ", counter);
      if (array[i] === value) {
          return counter;
      }
  }
  
};

function binarySearch(arr, value) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let counter = 1;
  while (leftPointer < rightPointer) {
     
      let midpoint = Math.round((leftPointer + rightPointer)/2);
      if(value === arr[midpoint]) {
        console.log("counter: ", counter);
          return counter;
      }
      else if (value < arr[midpoint]) {
          rightPointer = midpoint - 1;
          midpoint = Math.round((leftPointer + rightPointer)/2);
          counter++;
          console.log("counter in loop: ", counter);
      }
      else if (value > arr[midpoint]) {
          leftPointer = midpoint + 1;
          midpoint = Math.round((leftPointer + rightPointer)/2);
          counter++;
          console.log("counter in loop: ", counter);
      }
  }
  
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: '',
      counter: 0
    } 
    this.makeArray = this.makeArray.bind(this);
    
  }

  makeArray() {
    let numbersArray = [];
    let intArray = []
    const numbers = "89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5";
    numbersArray = numbers.split(" ");
    console.log("numbersArray: ", numbersArray);
    for(let i = 0; i < numbersArray.length; i++) {
      intArray.push(parseInt(numbersArray[i]))
    }
    console.log("intArray: ", intArray);
    return intArray;
  }

  handleInputChange = (ev) => {
    console.log(ev.target.value);
    this.setState({
        number: ev.target.value
    })
  }

  LinearSearch = (e) => {
    var numbersArray = this.makeArray();
    const number = parseInt(this.state.number);
    e.preventDefault();
    console.log("You clicked Linear Search!");
    console.log("NUMBER: ", number);
    var counter = indexOf(numbersArray, number)
  
    this.setState({
      counter: counter
    })
    console.log("counter: ", counter);
    return counter;
  }

  BinarySearch = (e) => {
   
    console.log("You clicked Binary Search!");
    var numbersArray = this.makeArray();
    console.log("numbersArray: ", numbersArray);
    const number = parseInt(this.state.number);
    console.log("number: ", number);
    var counter = binarySearch(numbersArray, number);
    e.preventDefault();
    this.setState({
      counter: counter
    })
    console.log("counter: ", counter);
    return counter;
  }
  render() {
    
    return (
      <main className="App">
        <header>
          <h1>DSA Search Algorithms</h1>
        </header>
        <form>
          <input type="text" id="numbers" name="numbers" onChange={this.handleInputChange} />
          <button onClick={this.LinearSearch}>Linear Search</button>
          <button onClick={this.BinarySearch}>Binary Search</button>
        </form>
       
        <div className = "search-results">
          Number of Searches: {this.state.counter}
        </div>
      </main>
    );
  }
  
}

export default App;
