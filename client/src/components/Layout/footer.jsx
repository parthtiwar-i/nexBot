import React from "react";
import { Flex, Input, Button } from "@chakra-ui/react";

const Footer = ({ message, setmessage, handleSend }) => {
  return (
    <Flex w="100%" mt="5" mx={"auto"}>
      <Input
        value={message}
        onChange={(e) => {
          setmessage(e.target.value);
        }}
        variant="filled"
        placeholder="Type Something..."
        border="none"
        borderRadius="none"
        borderLeftRadius="10px"
        size="lg"
        _focus={{
          border: "1px solid black",
        }}
      />
      <Button
        onClick={handleSend}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            handleSend;
          }
        }}
        size="lg"
        bg="black"
        color="white"
        borderRadius="none"
        borderRightRadius="10px"
        _hover={{
          bg: "white",
          color: "black",
          border: "1px solid black",
        }}
      >
        Send
      </Button>
    </Flex>
  );
};

export default Footer;
