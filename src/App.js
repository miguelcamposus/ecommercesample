import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './pages/homepage/homepage.styles.scss';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  
  unsuscribeFromAuth = null

  componentDidMount(){
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
      this.setState({currentUser: userAuth});
    })
  }
  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }
  render(){
  return (
    <div>
      <Header currentUser ={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component = {HomePage} />
        <Route  path='/shop' component = {ShopPage} />
        <Route  path='/signin' component = {SignInAndSignUp} />
      </Switch>
    </div>
  );
}
}
export default App;
