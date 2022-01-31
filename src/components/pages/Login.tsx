import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, VFC, useState } from "react";
import PrimaryButton from "../atoms/button/PrimaryButton";
import { UserAuth } from "../../hooks/userAuth";
export const Login: VFC = memo(() => {
  // ログインする際のstateの宣言
  const [userId, setUserId] = useState("");

  // ログインを実行するhooksのimport
  const { login, loading } = UserAuth();

  //loginの実行をする関数
  const onClickLogin = () => login(userId);

  // ユーザーIDの情報が入力されたときに変更をかける変数
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            loading={loading}
            disabled={userId === ""}
            onClick={onClickLogin}
          >
            ログインボタン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
