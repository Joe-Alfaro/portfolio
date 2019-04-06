import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2vw;
  color: white;
  background: black;
  height: 60px;
  width: 96vw;
`;

const MainMenu = styled.nav`
  display: flex;
  width: 300px;
  height: 100%;
  a{
    width: 100px;
    display: flex;
    justify-content: center;
    font-weight: bold;
    align-items: center;
    height: 100%;
    color: white;
    text-decoration: none;
    &:hover{
      background-image: linear-gradient(to right, grey, lightgrey);
    }
  }
`;

const Navigation = () => {
  return(
    <NavBar>
      <h3>Joe Alfaro</h3>
      <MainMenu>
        <a href="">About Me</a>
        <a href="">Portfolios</a>
        <a href="">Contact Me</a>
      </MainMenu>
    </NavBar>
  );
}

export default Navigation;
