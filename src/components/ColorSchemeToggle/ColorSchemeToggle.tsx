import { Button, Group, Text, useMantineColorScheme } from "@mantine/core";

import "./ColorSchemeToggle.css";

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <div className="color-scheme-container">
      <Text>To adjust the Color Scheme, select from the options below.</Text>

      <Group mt="xl">
        <Button onClick={() => setColorScheme("light")}>Light</Button>
        <Button onClick={() => setColorScheme("dark")}>Dark</Button>
        <Button onClick={() => setColorScheme("auto")}>Auto</Button>
      </Group>
    </div>
  );
}
