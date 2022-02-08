import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
};
export const useMessage = () => {
  const toast = useToast();

  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props;
      toast({
        // 同じ名称のものはわざわざ値を割り振らなくても値を渡すことができる。
        title,
        status,
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    },
    [toast]
  );
  return { showMessage };
};
