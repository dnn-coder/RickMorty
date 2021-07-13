import { useEffect, useState } from 'react';
import './App.css';
import LocationInfo from './components/LocationInfo';
import SearchBox from './components/SearchBox'
import { getRickQuotes } from './services/getRickQuotes'
function App() {
    const [data, setData] = useState('');
    const [queryTerm, setQueryTerm] = useState(Math.floor(Math.random()*108));


  

    useEffect(()=> {
      if (queryTerm){
        const func = async () => {
        const res = await getRickQuotes(queryTerm)
        
        setData(res)
        }
        func()
      }
    }, [queryTerm])

   
    const handleSearch = query => {
      setQueryTerm(query)
    }
  
  return (
    <div className="App">
      <header className="App-header">
       <SearchBox onSearch={handleSearch}/>
        <LocationInfo
        key={data.id} 
        name={data.name} 
        type={data.type} 
        dimension={data.dimension}
        residents={data.residents}
     />
      </header>
    </div>
  );
}

export default App;
