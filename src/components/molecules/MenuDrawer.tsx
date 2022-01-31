import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import React, { VFC, memo } from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

const MenuDrawer: VFC<Props> = memo((props) => {
  // propsの展開
  const { onClose, isOpen } = props;

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%">Top</Button>
            <Button w="100%">ユーザー一覧</Button>
            <Button w="100%">設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});

export default MenuDrawer;