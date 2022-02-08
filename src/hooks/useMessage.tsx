import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";

export const useMessage = () => {
  const toast = useToast();

  const showMessage = useCallback((props: Props) => {
    toast({
      position: "top",
      duration: 2000,
      isClosable: true,
    });
  }, []);
  return { showMessage };
};