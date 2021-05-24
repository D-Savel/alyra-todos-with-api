import Todos from "./components/Todos"
import ColorModeContainer from "./components/ColorModeContainer"
import Navigation from './components/Navigation'
import Login from './components/Login'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <ColorModeContainer>
      <Navigation>
        <div className="container my-4">
          <h1 className="text-center">ToDos App</h1>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/todos">
              <Todos />
            </Route>
          </Switch>
        </div>
      </Navigation>
    </ColorModeContainer>
  )
}

export default App