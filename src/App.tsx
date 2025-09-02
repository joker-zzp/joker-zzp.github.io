import { MantineProvider } from "@mantine/core"
import { defaultTheme } from "./theme"
import { useEffect } from "react"
import BasicRoute from "./router"
import { useLocation } from "react-router-dom"

function App() {
  const theme = {
    default: defaultTheme
  }
  // const [themeName, setThemeName] = useState<keyof typeof theme>("default")
  const { pathname } = useLocation()

  useEffect(() => {
    console.log(pathname);
  }, [pathname])

  return (
    <MantineProvider theme={theme.default}>
      <BasicRoute />
    </MantineProvider>
  )
}

export default App
