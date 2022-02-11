/* eslint-disable react-hooks/exhaustive-deps */
import {
  Spinner,
  Center,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";

import UserCard from "../organisms/layout/user/UserCard";
// axiosのcustom hook
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/layout/user/UserDetailModal";

export const UserManagement: VFC = memo(() => {
  // modalの起動や閉じる処理を行なってくれる関数の使用
  const { isOpen, onClose, onOpen } = useDisclosure();

  // ユーザーの取得などを行うcustom hooksの展開
  const { getUsers, users, loading } = useAllUsers();

  const onClickUser = useCallback((id: number) => {
    console.log(id);
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageURL="https:source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClickUser={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
