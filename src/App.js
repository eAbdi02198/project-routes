
import { useRoutes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Article from './Article';
import Addarticle from './Addarticle';
import Edditarticle from './Edditarticle';

function App() {
  let routes=useRoutes([
    {path:"/",element:<Home></Home>},
    {path:"/about",element:<About></About>},
    {path:"/article/:id",element:<Article></Article>},
    {path:"/addarticle",element:<Addarticle></Addarticle>},
    {path:"/edditarticle/:id",element:<Edditarticle></Edditarticle>},
  ])
  return (
<>
{routes}
</>
  );
}

export default App;
