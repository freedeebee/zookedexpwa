// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
        black: string;
        darkGrey: string;
        lightGrey: string;
        primary: string;
        secondary: string;
    }
  }
}