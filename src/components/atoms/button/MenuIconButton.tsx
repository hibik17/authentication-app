import React, { VFC, memo } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

type Props = {
  onOpen: () => void;
};
const MenuIconButton: VFC<Props> = memo((props: Props) => {
  const { onOpen } = props;

  return (
    <IconButton
      aria-label="ミューボタン"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
});

export default MenuIconButton;
