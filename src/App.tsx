import { Box, Flex, Grid, MantineProvider, Text } from "@mantine/core"
import { defaultTheme } from "./theme"
import { useState } from "react"
import { selectLanguage } from "./language"

function App() {
  const theme = {
    default: defaultTheme
  }
  const [themeName, setThemeName] = useState<keyof typeof theme>("default")
  const lang = selectLanguage()

  return (
    <MantineProvider theme={theme[themeName]}>
      <Grid>
        <Grid.Col span={4}>1</Grid.Col>
        <Grid.Col span={4}>2</Grid.Col>
      </Grid>
    </MantineProvider>
  )
}

export default App
