import './App.css';
import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import RepositoryList from './components/RepositoryList';

function App() {
  const [repoArr, setRepoArr] = useState([]);

  const onRepoDatas = (items) => {
    let tempArr = [];
    for (let i = 0; i<items.length ; i++) {
      tempArr.push({
        id: items[i].id,
        title: items[i].name,
        createDate: items[i].created_at,
        url: items[i].html_url,
        writer: items[i].owner ?  items[i].owner.login : 'unknown',
      })
    }
    setRepoArr([...tempArr]);
  }
  
  return (
    <div className="App">
      <div className="containerr">
        <SearchBar onDatas={onRepoDatas}/>
        <RepositoryList repoList={repoArr} />
      </div>
    </div>
  );
}

export default App;
