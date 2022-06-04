import { Routes, Route } from 'react-router-dom'
import HomePage from './Home/index'
import LoginPage from './Login/index'
import Layout from './Layout/index'
import NotFound from './NotFound/index'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<HomePage />} />
      </Route>
      <Route path='*' element={<NotFound />} />
      <Route path='login' element={<LoginPage />} />
    </Routes>
  )
}

export default App
