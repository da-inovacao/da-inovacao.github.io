import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: .5rem 1rem;
  margin-bottom: .5rem;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  display: flex;
  flex: 1;
`;

export const Text = styled.span``;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  background: #eee9;
  border: 3px;
  padding: 0.5rem 0.5rem;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const DateText = styled.span`
  font-size: .7rem;
`
