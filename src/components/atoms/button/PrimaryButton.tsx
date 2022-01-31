import React, { ReactNode, VFC, memo } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

const PrimaryButton: VFC<Props> = memo((props: Props) => {
  const { children } = props;
  return (
    <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
      {children}
    </Button>
  );
});

export default PrimaryButton;
