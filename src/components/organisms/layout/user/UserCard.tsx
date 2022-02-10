import React, { memo, VFC } from "react";
import { Stack, Box, Image, Text } from "@chakra-ui/react";

type Props = {
  imageURL: string;
  userName: string;
  fullName: string;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { imageURL, userName, fullName } = props;
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
