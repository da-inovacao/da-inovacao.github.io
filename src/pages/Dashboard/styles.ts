import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  /* background: #f004; */
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const Panel = styled.div`
  display: flex;
  flex: 1;
  max-width: 50%;
  margin: 1rem;
  padding: 1rem;
  flex-direction: column;
  /* border: 1px solid lightgray; */
  border-radius: 3px;
  /* background: #0f04; */

  @media (max-width: 800px) {
    max-width: 100%;
  }
`

export const PanelContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`

export const InsertContainer = styled.div`

`
