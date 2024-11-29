import { useContext } from "react";
import { GlobalContext } from "src/GlobalContext";
import { Anchor, Text, Title } from "@mantine/core";
import classes from "./Welcome.module.css";

export const Welcome = () => {
  const { name } = useContext(GlobalContext);

  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{" "}
        <Text inherit variant="gradient" component="span" gradient={{ from: "pink", to: "yellow" }}>
          {name}
        </Text>
      </Title>

      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Vite project includes a minimal setup, if you want to learn more on Mantine +
        Vite integration follow{" "}
        <Anchor href="https://mantine.dev/guides/vite/" size="lg">
          this guide
        </Anchor>
        . To get started edit pages/Home.page.tsx file.
      </Text>
    </>
  );
};
