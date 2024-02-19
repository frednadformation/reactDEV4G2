import React, { useReducer } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import ComponentA from './components/ComponentA';
import DataFetchingOne from './components/DataFetchingOne';
import DataFilm from './components/DataFilm';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import DataFetchAll from './components/DataFetchAll';
import DataTodos from './components/DataTodos';
import DataTodosReducer from './components/DataTodosReducer';
import DataAllposts from './components/DataAllposts';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Profil from './components/Profil/Profil';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Developpement from './components/Services/Developpement/Developpement';
import Marketing from './components/Services/Marketing/Marketing';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import GestionPost from './components/Admin/GestionPost/GestionPost';
import FetchOneContact from './components/Contact/FetchOneContact';
import FetchAllContact from './components/Contact/FetchAllContact';
import { RedButton, GreenButton, BlueButton } from './components/Button.style';
import { AppContainer } from './components/AppContainer.style';
import NewContact from './components/Contact/NewContact';
import Inscription from './components/User/Inscription';
import Connexion from './components/User/Connexion';
import UserPage from './components/User/UserPage';
import ImageUpload from './components/ImageUpload';
import FileUploadForm from './components/FileUploadForm';
import NewPost from './components/NewPost';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import SuperHero from './components/SuperHeros';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import UserGreetings from './components/UserGreetings';
// import AdminTest from './components/AdminTest';
// import NameList from './components/NameList';
// import Inline from './components/Inline';
// import Stylesheets from './components/Stylesheets';
// import Form from './components/Form';
// import Newsletter from './components/Newsletter';

export const CountContext = React.createContext();

function App() {

  const initialState = 0;
  const reducer = (state, action) =>{
    switch(action){
      case 'increment':
        return state +1
      case 'decrement':
        return state - 1
      case 'reset':
        return initialState
      default :
        return state
    }
  }
  const [count, dispatch] = useReducer(reducer, initialState);



  return (
    <div className="App">       
      {/* <h1>React c'est genial !</h1> */}
          {/* <Greet prenom = "Thomas" age="35 ans">
            Thomas adore react ! Et c'est cool !
          </Greet>
          <Greet prenom = "John" age="20 ans"  />
          <Greet prenom = "Toto" age="21 ans"  />
          <Greet prenom = "Tata" age="89 ans"  />
          <Greet prenom = "Jojo" age="17 ans"  />
          
          
           <Welcome prenom="Tom" age="3 ans"/> 
          <Welcome prenom="Max" age="8 ans"/>  */}
{/*
        <SuperHero prenom = "Bruce" superheros = "Batman">
        This is children props
        </SuperHero>
        <SuperHero prenom = "Clark" superheros = "Superman" />
        <SuperHero prenom = "Diana" superheros = "Wonder Woman" /> */}
        {/* <Message />
        <Counter value={40} /> */}
        {/* <FunctionClick />
        <ClassClick />
        <UserGreetings />
        <AdminTest /> */}
        {/* <NameList />
        <Inline />
        <Stylesheets primary={true} /> */}

        {/* <Form /> */}
        {/* <Newsletter /> */}
    {/* <CountContext.Provider
      value={{countState : count, countDispatch : dispatch}}
    >
    <ComponentA />
  </CountContext.Provider> */}

  {/* <DataFetchingOne /> */}
  {/* <DataFilm /> */}
  {/* <UserProvider value="Fred" >
    <ComponentC />
  </UserProvider> */}

  {/* <DataFetchAll /> */}
  {/* <DataTodos /> */}
  {/* <DataTodosReducer /> */}
  {/* <DataAllposts /> */}

  <Navbar />
  <Link to="https://expressbackenddev4g2-jv4h.onrender.com/logout">Se deconnecter</Link>
  <AppContainer>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/services' element={<Services />}>
      <Route path='/services/developpement' element={<Developpement />} />
      <Route path='/services/marketing' element={<Marketing />} />
    </Route>
    <Route path='/profil/:id' element={<Profil />} />

    <Route path='/admin' element={<Admin />} >
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/gestionpost" element={<GestionPost />} />
    </Route>

    <Route path='/contact/:id' element={<FetchOneContact />}/>
    
    <Route path='/allcontacts/' element={<FetchAllContact />}/>
    <Route path='/newcontact/' element={<NewContact />}/>
    <Route path='/inscription/' element={<Inscription />}/>
    <Route path='/connexion/' element={<Connexion />}/>
    <Route path='/userpage/' element={<UserPage />}/>

    <Route path='/imageupload/' element={<ImageUpload />}/>
    <Route path='/imageuploads/' element={<FileUploadForm/>}/>
    
    <Route path='/newpost/' element={<NewPost/>}/>

    <Route path='/*' element={<NotFound />} />

  </Routes>
  </AppContainer>

    </div>
  );
}

export default App;
