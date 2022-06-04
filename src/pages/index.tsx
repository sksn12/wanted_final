import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './Home/index'
import LoginPage from './Login/index'
import Layout from './Layout/index'
import NotFound from './NotFound/index'
import MapPage from './Map/index'
import SearchPage from './Serach/index'
import GraphPage from './Graph/index'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { loginState } from '../states/login'

const App = () => {
  const isLogin = useRecoilValue(loginState)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogin) navigate('login')
    else navigate('/')
  }, [isLogin, navigate])

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<HomePage />} />
        <Route path='/map' element={<MapPage />} />
        <Route path='/serach' element={<SearchPage />} />
        <Route path='/graph' element={<GraphPage />} />
      </Route>
      <Route path='*' element={<NotFound />} />
      <Route path='login' element={<LoginPage />} />
    </Routes>
  )
}

export default App
