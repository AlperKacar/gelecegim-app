import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/revize3.png";
const Icon = styled.div`
  position: fixed;
  background-image: url(https://media.beinconnect.com.tr/Assets/BC/images/_error-page/bg-image.jpg);
  background-size: cover;
  background-position: 65% 0;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;
const Header = styled.div`
  height: 50px;
  width: 100%;
  background-image: linear-gradient(to right, #001e42 0, #a71d8e);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    width: 135px;
    height: 34px;
  }
`;
const ContentWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(https://media.beinconnect.com.tr/Assets/BC/images/_error-page/img-shadow.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .notFound {
    width: 1150px;
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 1rem;
  color: white;
`;

const Message = styled.p`
  font-size: 20px;
  margin-bottom: 1rem;
  color: white;
`;

const HomeLink = styled(Link)`
  line-height: 50px;
  font-size: 14px;
  padding: 0.7rem 1.5rem;
  background-color: #a71d8e;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #8b176d;
  }
`;

function PageNotFound() {
  return (
    <div>
      <Helmet>Sayfa Bulunamadı</Helmet>
      <Header>
        <img className="logo" src={logo} alt="Geleceğim logo" />
      </Header>
      <Icon>
        <ContentWrapper>
          <div className="notFound">
            <Title>404</Title>
            <Message>
              Üzgünüz, aradığınız sayfayı bulamadık.
              <br />
              Ana sayfaya dönerek diğer içeriklere ulaşabilirsiniz.
            </Message>
            <HomeLink to="/">Ana Sayfa</HomeLink>
          </div>
        </ContentWrapper>
      </Icon>
    </div>
  );
}

export default PageNotFound;
