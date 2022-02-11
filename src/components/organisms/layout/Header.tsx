import React, { useCallback } from "react";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import MenuDrawer from "../../molecules/MenuDrawer";
import MenuIconButton from "../../atoms/button/MenuIconButton";

export const Header = () => {
  // drawerのstateを管理するモジュールの使用
  const { isOpen, onOpen, onClose } = useDisclosure();

  // 画面遷移の関数の記載
  const history = useHistory();

  // homeへの遷移
  const onClickHome = useCallback(() => history.push("/home"), [history]);

  // user管理画面への遷移
  const onClickManagement = useCallback(
    () => history.push("/home/user_management"),
    [history]
  );

  // 設定画面への遷移
  const onClickSetting = useCallback(
    () => history.push("/home/setting"),
    [history]
  );

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading
            as="a"
            fontSize={{ base: "md", md: "lg" }}
            onClick={onClickHome}
          >
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickManagement={onClickManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
};
