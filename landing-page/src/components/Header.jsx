import { StyledHeader, Nav, Logo } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button bg="">Try it Free</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
