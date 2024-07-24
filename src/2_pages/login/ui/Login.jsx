import { useNavigate } from "react-router-dom";

import { S } from "./style";
import { useGetRedirectUrl } from "../api/useGetRedirectUrl";
import { useGetAccountExist } from "../api/useGetAccountExist";

export const Login = () => {
  const navigate = useNavigate();

  const [getRedirectUrl] = useGetRedirectUrl();
  useGetAccountExist();

  return (
    <S.PageContainer>
      <S.LoginContainer>
        <S.Logo onClick={() => navigate("/")} />
        <S.GoogleLoginBtn onClick={getRedirectUrl}>
          <S.GoogleLogo />
        </S.GoogleLoginBtn>
      </S.LoginContainer>
    </S.PageContainer>
  );
};
