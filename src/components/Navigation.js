import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Navigation = (props) => {
  const { children } = props
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li className="list-unstyled">
              <Link className="pe-5 text-decoration-none" to="/Home">Home</Link>
              <Link className="pe-5 text-decoration-none" to="/todos">Todos</Link>
              <Link className="pe-5 text-decoration-none" to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
      {children}
    </Router>
  );
}

export default Navigation