import Login from './pages/login';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import './App.css';
import Feeds from './pages/feeds';
import Profile from './pages/profile';
import MyProfile from './pages/myprofile';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        
         <Routes>
                 <Route exact path='/' element={< Login />}></Route>
                 <Route exact path='/home' element={< Feeds />}></Route>
                 <Route exact path='/profile/:id' element={< Profile />}></Route>
                 <Route exact path='/myprofile' element={< MyProfile />}></Route>
          </Routes>
         
    </div>
      </BrowserRouter> 
  );
}

export default App;
