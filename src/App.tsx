import { Button, ChakraProvider } from "@chakra-ui/react";
// import "./styles.css"
import { theme } from "./theme/theme";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Button colorSchema="teal">ボタン</Button>
    </ChakraProvider>
  );
};
