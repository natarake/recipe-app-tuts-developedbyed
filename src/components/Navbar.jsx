import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

const Navbar = () => {
  return (
    <Nav>
      <GiKnifeFork />
      <Logo to={"/"}>CODE GRYL</Logo>
    </Nav>
  );
};

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
`;

const Nav = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-content: center;
  svg {
    font-size: 2rem;
  }
`;

export default Navbar;
