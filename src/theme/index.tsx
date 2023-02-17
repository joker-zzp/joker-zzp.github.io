import {
  createTheme,
  PaletteMode
} from "@mui/material";


// 主紫/副蓝色 亮/暗 风格主题
export const purpleTheme = (mode: PaletteMode = 'light') => (
  createTheme({
    palette: {
      mode: mode,
      background: {
        default: mode === 'light' ? '#e1e2e1' : '#212121',
        paper: mode === 'light' ? '#e1e2e1' : '#212121'
      },
      common: {
        black: '#212121',
        white: '#e1e2e1',
      },
      primary: {
        main: '#9575cd',
        // main: mode === 'light' ? '#00bcd4' : '#80deea',
        contrastText: mode === 'light' ? '#e1e2e1' : '#212121'
      },
      secondary: {
        main: '#5c6bc0',
        contrastText: mode === 'light' ? '#e1e2e1' : '#212121'
      }
    },
  })
)
