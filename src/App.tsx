import { GlobalContextProvider } from "src/GlobalContext";
import { Router } from "src/Router";
import { theme } from "src/theme";
import { MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <GlobalContextProvider initialValue={{ name: "Mantine" }}>
        <Router />
      </GlobalContextProvider>
    </MantineProvider>
  );
}
