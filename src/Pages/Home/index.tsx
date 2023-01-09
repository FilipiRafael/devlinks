import { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import {
  Container,
  Avatar,
  Title,
  ThemeSwicher,
  Link,
  Loader
} from './styles';

import { ThemeProvider } from 'styled-components';
import lightTheme from '../../themes/light';
import darkTheme from '../../themes/dark';

import { Brightness6Outlined } from '@mui/icons-material';

export const Home = () => {

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const switchTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const container = useRef<any>(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../assets/loader.json')
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container>
        {isLoading ? (
          <Loader className='container' ref={container} />
        ) : (
          <>
            <Avatar src='https://github.com/filipirafael.png' alt='Profile Image' />
            <Title>@filipi.rafael.7</Title>
            <ThemeSwicher onClick={switchTheme}>
              <Brightness6Outlined />
            </ThemeSwicher>
            <Link
              isDarkTheme={isDarkTheme}
              href='https://filipirafael.com'
              target='_blank'
            >
              Acesse meu portfólio
            </Link>
            <Link
              isDarkTheme={isDarkTheme}
              href='https://github.com/filipirafael'
              target='_blank'
            >
              Veja meus projetos no Github
            </Link>
            <Link
              isDarkTheme={isDarkTheme}
              href='https://www.linkedin.com/in/filipi-rafael-developer/'
              target='_blank'
            >
              Acesse meu Linkedin
            </Link>
            <Link
              isDarkTheme={isDarkTheme}
              href='https://www.instagram.com/filipi.rafael.7/'
              target='_blank'
            >
              Siga-me no Instagram
            </Link>
            <Link
              isDarkTheme={isDarkTheme}
              href='https://medium.com/@filipirafael.123'
              target='_blank'
            >
              Meus artigos no Medium
            </Link>
            <Link
              isDarkTheme={isDarkTheme}
              href='https://www.youtube.com/channel/UC_ac-cJ2QJicAg31hBDOH5Q'
              target='_blank'
            >
              Meu canal no Youtube
            </Link>
          </>
        )}
      </Container>
    </ThemeProvider>
  )
}