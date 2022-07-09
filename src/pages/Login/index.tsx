import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '~/assets/images/logo.svg'
import api from '~/services/Api'
import {
  Button,
  Container,
  Content,
  ErrorText,
  Img,
  ImgContainer,
  ImgText,
  Input,
  Label,
} from './styles'

const Login: React.FC = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [isLogging, setIsLogging] = useState(false)
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleLogin = async () => {
    setIsLogging(true)
    const { status, data, ...res } = await api.post(
      '/login',
      { login, password },
      { validateStatus: () => true, withCredentials: true }
    )

    console.log(res)

    if (status.toString().startsWith('2')) {
      setIsLogging(false)
      navigate('../dashboard')
    } else {
      setIsLogging(false)
      setError(data.message)
    }
  }

  return (
    <Container>
      <Content>
        <ImgContainer>
          <Img src={logo} alt='logo' />
          <ImgText>
            Inov<span style={{ fontWeight: 500 }}>Ação</span>
          </ImgText>
        </ImgContainer>
        {error && <ErrorText>{error}</ErrorText>}
        <Label>Login</Label>
        <Input type='text' value={login} onChange={(e) => setLogin(e.target.value)} />
        <Label>Senha</Label>
        <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleLogin} disabled={isLogging == true}>
          Entrar
        </Button>
      </Content>
    </Container>
  )
}

export default Login
