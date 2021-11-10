import './App.css';

function App() {
  return (
    <div className='App'>
      <div className="Container">
        <div className="Header">
          <h1 className="Header__logo">ToDo App</h1>
          <div className="Header__button">
            <div class="Header__item1">+</div>
            <div class="Header__item2">?</div>
          </div>
        </div>
      </div>
      <div className='Container'>
        <div className='Main'>
          <div className='Main__item'>
            <div className="Main__group">
              <input className="Main__point" type="checkbox"></input>
              <div className="Main__task">Have breakfast</div>
            </div>
            <input className="Main__fav" type="checkbox"></input>
          </div>
          <div className='Main__item'>
          <div className="Main__group">
              <input className="Main__point" type="checkbox"></input>
              <div className="Main__task">Do excercises</div>
            </div>
            <input className="Main__fav" type="checkbox"></input>

          </div>
          <div className='Main__item'>
          <div className="Main__group">
              <input className="Main__point" type="checkbox"></input>
              <div className="Main__task">Listen to music</div>
            </div>
            <input className="Main__fav" type="checkbox"></input>

          </div>
          <div className='Main__item'>
          <div className="Main__group">
              <input className="Main__point" type="checkbox"></input>
              <div className="Main__task">Read a book</div>
            </div>
            <input className="Main__fav" type="checkbox"></input>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
