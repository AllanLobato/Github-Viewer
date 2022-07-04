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

export const User = styled.div`
  flex-direction: row;
  background: #fff;
  max-width: 700px;
  margin: 80px auto;
  align-items: center;
  border-radius: 8px;
  height: 270px;

  svg {
    margin-top: 20px;
    margin-left: 20px;
  }

  img {
    width: 110px;
    border-radius: 65px;
  }

  span {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 24px;
    margin-top: 15px;
    margin-bottom: 10px;
    color: #121212;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Repositories = styled.ul`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 95%;
    padding: 14px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translatey(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 1.5rem;
        color: #3d3d4d;
      }

      p {
        font-size: 1rem;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
