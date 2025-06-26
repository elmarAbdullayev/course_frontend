import React from 'react'
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return <div>

    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
    
    </div>
};


export default Home;