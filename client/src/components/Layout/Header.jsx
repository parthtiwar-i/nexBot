import React from "react";
import {
  VStack,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import {
  RiMenu5Fill,
  RiLogoutBoxLine,
  RiDashboardFill,
  RiUser2Fill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

const LinkButton = ({ url = "/", title = "Home", onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button
      width={"280px"}
      variant={"ghost"}
      // colorScheme='purple'
      justifyContent={"flex-start"}
    >
      {title}
    </Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ColorModeSwitcher />

      <Button
        onClick={onOpen}
        colorScheme="purple"
        width={"12"}
        height={"12"}
        rounded="full"
        position={"fixed"}
        top={"6"}
        left={"6"}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer onClose={onClose} isOpen={isOpen} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={"1px"}>NexBot</DrawerHeader>
          <DrawerBody>
            <VStack
              position={"absolute"}
              bottom={"4"}
              left={"4"}
              alignItems={"flex-start"}
              spacing={"4"}
            >
              <LinkButton onClick={window.location.reload} title="New Chat" onClose={onClose} />
              <LinkButton url="/" title="Home" onClose={onClose} />
              <LinkButton url="/history" title="History" onClose={onClose} />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
