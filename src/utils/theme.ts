import { StyleSheetProperties } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNativePaper {
    interface ThemeColors {
      success: string;
      warning: string;
      danger: string;
      info: string;
      bgPress: string;
    }
    interface Theme {
      styles: {
        helper: StyleSheetProperties;
        msg: StyleSheetProperties;
      };
    }
  }
}

// Custom Colors
const success = '#0d741e';
const warning = '#b97611';
const danger = '#dd1c66';
const info = '#0d99c4';
const bgPress = '#44550050';
const shadow = 'rgba(56, 54, 54, 0.24)';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // override default
    // primary: '#600EE6',
    // secondary: '#414757',
    // error: '#f13a59',

    /** custom colors */
    success,
    warning,
    danger,
    info,
    bgPress,
    shadow,
  },
  // Custom properties for theme
  styles: {
    helper: {
      color: DefaultTheme.colors.error,
      fontWeight: 'bold',
    },
    msg: {
      color: success,
      fontWeight: 'bold',
    },
  },
};

export default theme;

// https://callstack.github.io/react-native-paper/theming.html
