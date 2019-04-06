import React from 'react';

import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100vw;
  height: 100%;
`;

const Header = () => {
  return(
    <StyledHeader>
      <img src="../../images/header-image.jpg" />
      <h1>Header</h1>
      <p>Lorem Ipsum...</p>
    </StyledHeader>
  );
}

export default Header;
