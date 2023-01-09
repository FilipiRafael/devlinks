import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
    },
    background: {
      desktop: string;
      mobile: string;
    }
  }
}