import styles from './login.module.scss'
import { AiOutlineCheckCircle, AiOutlineEyeInvisible, AiFillCheckCircle } from 'react-icons/ai'
import { MdVisibility } from 'react-icons/md'
import { HiInformationCircle } from 'react-icons/hi'
import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { emailCheck, loginVal } from 'utils/validation'
import { loginState } from 'states/login'
import { useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const setLogin = useSetRecoilState(loginState)
  const navigate = useNavigate()

  const [isIdVisible, setIsIdVisible] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const [loginFalse, setLoginFalse] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('userId')) navigate('/')
  }, [navigate])

  const handleVisible = () => {
    setIsPasswordVisible((prev) => !prev)
  }

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    emailCheck(id) ? setIsIdVisible(true) : setIsIdVisible(false)
    const { value } = e.currentTarget
    setId(value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setPassword(value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (emailCheck(id) && password.length !== 0) {
      if (loginVal(id, password)) {
        sessionStorage.setItem('userId', 'youngman')
        setLogin(sessionStorage.getItem('userId'))
        navigate('/')
      } else setLoginFalse(true)
    }
  }

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <aside className={styles.aside}>
          <h1>안녕하세요</h1>
          <p>로그인을 하시면 개발자 김영만에 대한 </p>
          <p>소개가 이어집니다.</p>

          <p className={styles.subTitle}>made By. young man kim</p>
        </aside>
        <div className={styles.right}>
          <div className={styles.infoIcon}>
            <HiInformationCircle size='30px' fill='#7190d7' />
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.idBox}>
              <input type='text' placeholder='id' onChange={handleIdChange} value={id} />
              {isIdVisible ? <AiFillCheckCircle size='20px' fill='#7190d7' /> : <AiOutlineCheckCircle size='20px' />}
            </div>
            <div className={styles.passwordBox}>
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder='password'
                onChange={handlePasswordChange}
                value={password}
              />
              {isPasswordVisible ? (
                <MdVisibility size='20px' fill='#7190d7' onClick={handleVisible} />
              ) : (
                <AiOutlineEyeInvisible size='20px' onClick={handleVisible} />
              )}
            </div>
            {loginFalse && <p className={styles.errorMessage}>id와 password를 확인하세요</p>}
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
