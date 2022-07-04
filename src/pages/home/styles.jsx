import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 4px;
  padding: 0px;
  margin: 6px;

  svg {
    margin-right: 8px;
  }

  h1 {
    font-family: Roboto;
    font-size: 22px;
    color: #121212;
  }
`;

export const Form = styled.form`
  max-width: 560px;
  margin: 80px auto;
  display: flex;
  justify-content: center;

  input {
    font-size: 16px;
    width: 500px;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
  }

  button {
    width: 95px;
    background: #f9c29d;
    margin-left: 0px;
    border-radius: 4px;
    border: 0.5px solid #f4a27e;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #fff;
  max-width: 555px;
  margin: auto;
  border-radius: 5px;
  text-decoration: none;

  img {
    width: 120px;
    border-radius: 110px;
    margin: 10px;
  }

  span {
    font-size: 2rem;
    font-weight: 500;
    color: #3a3a3a;
  }

  p {
    margin: 5px;
    font-size: 1.5rem;
    color: #1f282c;
    text-align: center;
  }
`;
