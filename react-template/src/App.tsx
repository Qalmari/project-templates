import { useEffect } from 'react';
import './App.css';
import { useManagers } from './contexts/StoreContext';
import { Link, Route, Routes } from 'react-router-dom';
import { Observer } from 'mobx-react-lite';

function App(): JSX.Element {
  const { thingManager } = useManagers();

  // You should obviously replace this with something better
  // And be in another file
  const HomePage = (): JSX.Element => {
    return (
      <>
        <h1>Hello! this is home page!</h1>
        <p>Yay, the page is working!</p>
      </>
    );
  };

  // You should obviously replace this with something better
  // And be in another file
  const ThingsPage = (): JSX.Element => {
    return (
      <Observer>
        {() => (
          <>
            <h1>This is a thing to do</h1>
            <p>{thingManager?.suggestedThing?.activity ?? 'Nothing todo'}</p>
          </>
        )}
      </Observer>
    );
  };

  useEffect(() => {
    thingManager.loadThingTodo();
  }, []);

  return (
    <div className="App">
      <nav>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/things">Things to do</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path="/things" element={<ThingsPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
