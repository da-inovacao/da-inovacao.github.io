import styled from 'styled-components'
import { FormControl, Accordion}from 'react-bootstrap'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 2rem;
  padding-bottom: 1rem;
`

export const PresentationsContiner = styled.div``

export const DateText = styled.span`
  font-size: 0.8rem;
  align-self: flex-end;
  margin-right: 0.5rem;
  color: #ccc;
`

export const Input = styled(FormControl)`
  /* font-size: 1.5rem; */
`

export const Presentation = styled(Accordion)``
