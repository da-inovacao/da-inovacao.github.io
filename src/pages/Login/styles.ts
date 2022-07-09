import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;

  @media (max-width: 848px) {
    max-height: 90%;
  }
`

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 2rem;

  @media (max-width: 848px) {
    border: 0px;
    max-width: 90%;
  }
`

export const Input = styled.input`
  padding: 0.5rem 0.7rem;
  border: 1px solid #ccc;
  border-radius: 3px;
`

export const Label = styled.label`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`

export const ImgContainer = styled.div``

export const Img = styled.img`
  max-width: 3rem;
`

export const ImgText = styled.span`
  font-size: 1.2rem;
`

export const Button = styled.button`
  width: 60%;
  margin-top: 3rem;
  padding: 0.7rem;
  background: #0591e7;
  border: 0px;
  border-radius: 3px;
  align-self: center;
  color: #fff;
  font-weight: 500;

  &:disabled {
    background: #ccc;
  }
`

export const ErrorText = styled.span`
  color: #7E0000;
  align-self: center;
  margin-top: 1rem;
`
