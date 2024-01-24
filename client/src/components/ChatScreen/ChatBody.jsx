import React from "react";
import { VStack, Text, Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import bot from "../../assets/nexBot.png";
import user from "../../assets/user.jpg";

const ChatBody = ({ message, who }) => {
  return (
    <VStack w={["100%", "80%"]} spacing={"4"} m={3}>
      <Box display={"flex"} mr={who == 'bot' ? "auto" : 'none'} ml={who == 'bot' ? 'none' : 'auto'}>
        <Image src={who == 'bot' ? bot : null} display={who == 'user' && "none"} boxSize="40px" borderRadius={"10px"} p={"0 5px"} />
        <Box
          background={who == 'bot' ? 'none' : "#6862626b"}
          border={"1px"}
          borderRadius={"5px"}
          padding={"2"}
          alignSelf={"flex-end"}
          maxW={"100%"}
          overflowWrap="break-word"
          whiteSpace="pre-wrap"
          height={"auto"}
        >
          <Text>{message}</Text>
        </Box>
        <Image src={who == 'user' ? user : null} display={who == 'bot' && "none"} boxSize="40px" borderRadius={"10px"} p={"0 5px"} />
      </Box>
    </VStack>
  );
};

export default ChatBody;
