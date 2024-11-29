import { GlobalContext } from "src/GlobalContext";
import { Router } from "src/Router";
import { theme } from "src/theme";
import { MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <GlobalContext.Provider value={{ name: "Mantine" }}>
        <Router />
      </GlobalContext.Provider>
    </MantineProvider>
  );
}
