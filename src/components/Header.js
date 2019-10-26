import React from "react";
import styled from "styled-components";
import { ReactComponent as UserCircleIcon } from "../assets/icons/user-solid-circle.svg";
import facebookUrl, {
  ReactComponent as Facebook
} from "../assets/facebook.svg";

export default function Header() {
  return (
    <ContainerWrapper>
      <Container>
        <Facebook />

        <Menu>
          <MenuText>Meu perfil</MenuText>
          <Icon />
        </Menu>
      </Container>
    </ContainerWrapper>
  );
}
const ContainerWrapper = styled.div`
  background-color: #4990e2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: bold;
`;
const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  height: 64px;
  max-width: 1024px;
`;
const Menu = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;
const MenuText = styled.span`
  font-size: 15px;
  margin-right: 1rem;
`;
const Icon = styled(UserCircleIcon)`
  fill: white;
  width: 2rem;
  height: 2rem;
`;
