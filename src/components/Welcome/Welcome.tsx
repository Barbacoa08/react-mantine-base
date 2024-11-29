import { useGlobalContext } from "src/GlobalContext";
import { Anchor, Text, Title } from "@mantine/core";

import "./Welcome.css";

export const Welcome = () => {
  const { name } = useGlobalContext();

  return (
    <>
      <Title className="title" ta="center" mt={100}>
        Welcome to{" "}
        <Text inherit variant="gradient" component="span" gradient={{ from: "pink", to: "yellow" }}>
          {name}
        </Text>
      </Title>

      <Text ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Vite project includes a minimal setup, if you want to learn more on Mantine +
        Vite integration follow{" "}
        <Anchor href="https://mantine.dev/guides/vite/" size="lg">
          this guide
        </Anchor>
        . To get started edit pages/Home.page.tsx file.
      </Text>

      <Text ta="center" className="margin-top">
        To learn more about this project visit <Anchor href="/about">About</Anchor>
      </Text>

      <Text ta="center" className="margin-top">
        Want to see the checkout page? Visit <Anchor href="/checkout">Checkout</Anchor>
      </Text>
    </>
  );
};
