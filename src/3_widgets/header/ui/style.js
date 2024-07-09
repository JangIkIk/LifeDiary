import styled from "styled-components";

import logo from "@shared/assets/imges/logo.png";

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.major};
`;

const Logo = styled.img.attrs({
  src: logo,
  alt: "logo",
})`
  width: 80px;
  border-radius: 10px;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 99px;
`;

const RightElemContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 12px;
`;

const BtnContainer = styled.div`
  white-space: nowrap;
`;

export const S = {
  HeaderContainer,
  Logo,
  ProfileImg,
  RightElemContainer,
  BtnContainer,
};
