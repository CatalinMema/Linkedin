import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/SideBar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>
      {/* app body*/}

      {/*sideBar*/}
      {/*feed*/}
      {/*wid*/}
    </div>
  );
}

export default App;
