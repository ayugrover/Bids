import React, {useState, useEffect} from 'react';
import intense_tor from './apis/intense_tor';
import CustomersList from './components/CustomersList';

function App() {
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
           <CustomersList data={data} />
       </div>
      );
    }

    export default App;