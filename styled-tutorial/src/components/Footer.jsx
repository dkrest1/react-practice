import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";

import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";
const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="white logo" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              obcaecati dolorem explicabo, necessitatibus omnis eveniet
              veritatis recusandae debitis! Aliquid sit adipisci consectetur
              inventore dolorum magni qui sunt delectus odit pariatur.
            </li>
            <li>+1-526-373027-82</li>
            <li>hubble@example.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Carrer</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy; 2022 Huddle. All Rights Reserved </p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
