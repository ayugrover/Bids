import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CustomerDetails from './components/CustomerDetails';
import CustomersList from './components/CustomersList';

class App extends React.Component{
    render(){
        return (
            <div>
               <BrowserRouter>
                 <div>
                     <Switch>
                         <Route exact path="/" component={CustomersList}/>
                         <Route exact path="/CustomerDetails/:id" component={CustomerDetails}/>
                     </Switch>
                 </div>
                </BrowserRouter>
                
            </div>
           );
    }

}

    export default App;