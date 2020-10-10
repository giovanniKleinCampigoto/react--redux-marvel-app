import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo } from './styles';
import logo from '../../assets/images/react-icon.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} />
      </Link>
    </Container>
  );
};

export default Header;
