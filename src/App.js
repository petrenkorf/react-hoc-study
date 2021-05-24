import './App.css';
import { useState} from "react";
import NewsCard from "./components/NewsCard";
import Advertising from "./components/Advertising";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(0);

  const onChangeAuthentication = (e) => setIsAuthenticated(Boolean(parseInt(e.target.value)));

  return (
    <div className="App">
      <header className="App-header">
        <select onChange={onChangeAuthentication}>
          <option value='0'>Guest</option>
          <option value='1'>Authenticated</option>
        </select>
        Authenticated: {isAuthenticated ? 'Yes' : 'No' }

        <NewsCard loginStatus={isAuthenticated}></NewsCard>
        <NewsCard loginStatus={isAuthenticated}></NewsCard>
        <NewsCard loginStatus={isAuthenticated}></NewsCard>
        <NewsCard loginStatus={isAuthenticated}></NewsCard>
        <Advertising loginStatus={isAuthenticated} />
      </header>
    </div>
  );
}

/* I probably should not be passing the authentication status as a prop,
   but for an example, this is good enough
*/

export default App;
