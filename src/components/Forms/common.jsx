import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  border-radius: 8px;
  outline: none;
  /* Change Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: black;
    -webkit-box-shadow: 0 0 0px 1000px #eee inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  &:focus {
    border: 1px solid black;
  }
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid var(--deep-purple-100);
  background-color: var(--deep-purple-100);
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 80ms ease-in;
  margin: 15px 0;
`;

export const StyledLink = styled(Link)`
  color: var(--deep-purple-100);
  font-size: 14px;
  text-decoration: none;
  &:hover {
    color: var(--ligt-purple-100);
  }
`;

export const BlackLink = styled(StyledLink)`
  color: var(--black-100);
`;
