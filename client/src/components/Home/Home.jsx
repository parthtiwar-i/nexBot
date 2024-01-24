import { Box, Heading, VStack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import ChatBody from "../ChatScreen/ChatBody";
import Footer from "../Layout/footer";
import axios from "axios";
const Home = () => {
  const msgEnd = useRef(null);
  const [message, setmessage] = useState("");
  const [responseData, setResponseData] = useState([
    {
      text: "hi i am nexBot how can i help you!!",
      isBot: true,
    },
  ]);
  const handleSend = async () => {
    try {
      const response = await axios.post("http://localhost:3000/", {
        message: message,
      });
      const text = message;
      setmessage("");
      setResponseData([...responseData, { text, isBot: false }]);

      setResponseData([
        ...responseData,
        { text: message, isBot: false },
        { text: response, isBot: true },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [responseData]);

  return (
    <VStack
      h={"100vh"}
      p={["8", "12"]}
      display={"flex"}
      justifyContent={"center"}
    >
      <Heading textAlign={"center"} mb={"3"}>
        NexBot
      </Heading>
      <Box
        h={"90%"}
        w={"full"}
        alignSelf={"center"}
        overflow={"hidden"}
        overflowY={"scroll"}
        scrollBehavior={"smooth"}
        width={"100%"}
      >
        {responseData.map((message, i) => (
          <ChatBody
            key={i}
            message={message.text}
            who={message.isBot == true ? "bot" : "user"}
          />
        ))}
        <ChatBody
          message={"hello there can you help me with something "}
          who={'user'}
        />
        <div ref={msgEnd}></div>
      </Box>
      <Footer
        message={message}
        setmessage={setmessage}
        handleSend={handleSend}
      />
    </VStack>
  );
};

export default Home;
