import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";
import UserCard from "../organisms/layout/user/UserCard";
export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      {[...Array(10)].map(() => (
        <WrapItem>
          <UserCard
            imageURL="https:source.unsplash.com/random"
            userName="ジャケえ"
            fullName="okada takumi"
          />
        </WrapItem>
      ))}
    </Wrap>
  );
});
