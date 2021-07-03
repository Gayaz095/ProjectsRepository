import React from 'react'
import Footer from './toDoApp/Footer'
import Header from './toDoApp/Header'
import ToDoList from './toDoApp/ToDoList'

function App() {
  return (
    <div className="App">
      <Header />
      <ToDoList />
      <Footer />
    </div>
  );
}

export default App;
