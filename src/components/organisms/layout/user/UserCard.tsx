import React, { memo, VFC } from "react";
import { Stack, Box, Image, Text } from "@chakra-ui/react";

type Props = {
  id: number;
  imageURL: string;
  userName: string;
  fullName: string;
  onClickUser: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { id, imageURL, userName, fullName, onClickUser } = props;
  return (
    <Box w="260px" bg="white" borderRadius="10px" shadow="md" p={4}>
      <Stack textAlign="center">
        <Image
          boxSize="100px"
          borderRadius="full"
          alt="プロフィール画像"
          src={imageURL}
          m="auto"
          _hover={{ cursor: "pointer", opacity: 0.8 }}
          // modalの起動を行うクリック時の処理の記載
          onClick={() => onClickUser(id)}
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="lg" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});

export default UserCard;
