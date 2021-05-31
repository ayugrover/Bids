import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CustomerDetails from './components/CustomerDetails';
import CustomersList from './components/CustomersList';
//import Route from './components/Route';

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

/*function App() {
    const [data, setData] = useState([]);

    useEffect(() =>{
        async function fetchData(){
        const result = await intense_tor.get('/');
        setData(result.data);
    }
    fetchData();
    },[]);
    
    return (
       <div>
          <BrowserRouter>
            <div>
                <switch>
                    <Route exact path="/" component={CustomersList}/>
                    <Route exact path="/CustomerDetails/:id" component={CustomerDetails}/>
                </switch>
            </div>
           </BrowserRouter>
           
       </div>
      );
    }*/

    export default App;