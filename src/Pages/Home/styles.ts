import styled from 'styled-components';

interface ILink {
  isDarkTheme: boolean;
}

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: url(${props => props.theme.background.mobile});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 1920px) {
    background-image: url(${props => props.theme.background.desktop});
  }
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;

  margin-bottom: 0.5rem;

  border: 2px solid ${props => props.theme.colors.text};
`;

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: 300;
  color: ${props => props.theme.colors.text};

  margin-bottom: 2rem;
`;

export const ThemeSwicher = styled.button`
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #F5F5F5;
  border-radius: 50%;

  cursor: pointer;

  margin-bottom: 2rem;
  padding: 1rem;
`;

export const Link = styled.a<ILink>`
  width: 30%;
  height: 50px;
  background-color: transparent;

  margin: 1rem 0;

  border-radius: 0.5rem;
  border: 1px solid ${props => props.theme.colors.text};

  font-size: 1rem;
  font-weight: 400;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${props => props.theme.colors.text};
    color: ${props => props.isDarkTheme ? '#000' : '#FFF'};
  }

  @media (max-width: 600px) {
    width: 80%;
    margin: 0.5rem 0;
  }
`;

export const Loader = styled.div`
  width: 500px;

  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  @media (max-width: 600px) {
    width: 250px;
  }
`;