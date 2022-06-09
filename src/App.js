// import {getFeatured} from './apiCalls';
import {useState, useEffect} from 'react';
import Articles from './Components/Articles/Articles';
import Menu from './Components/Menu/Menu';
import {Route, Redirect} from 'react-router-dom';


const App = () => {

  // const [featuredSection, setFeaturedSection] = useState('home');




  return (
    <div className="App">
      <Menu />
      <Route exact path={'/'} render={() => {
        return <Redirect to='/home' />
      }}/>

      <Route path={'/:section'} render={({match}) => {

        return (
          <Articles
            section={
              match.params.section ?
              match.params.section :
              'home'
            }
          />
        )
      }}/>
    </div>
  )
};

export default App;
