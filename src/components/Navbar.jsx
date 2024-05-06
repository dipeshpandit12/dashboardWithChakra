import React from 'react'
import { Flex,Box,Button,Text,Heading,Spacer, HStack,useToast, Avatar, AvatarBadge } from '@chakra-ui/react';
import { UnlockIcon } from '@chakra-ui/icons';

export default function Navbar() {
  const toast=useToast()

  const showToast=()=>{
    toast({
      title:"Logged out",
      description:"Successfully logged out",
      duration:5000,
      isClosable:true,
      status:"success",
      position:"top",
      icon:<UnlockIcon/>
    });
  }
  return (
    // <div>
    //     <Flex bg="gray.200" justifyContent="space-between" wrap="wrap" gap="2">
    //         <Box w="150px" h="50px" bg="red">1</Box>
    //         <Box w="150px" h="50px" bg="yellow">2</Box>
    //         <Box w="150px" h="50px" bg="orange" flexGrow="1">3</Box>
    //         <Box w="150px" h="50px" bg="green" flexGrow="2">4</Box>
    //     </Flex>
    // </div>

    <Flex as="nav" p="10px" mb="40px" alignItems="center">
        <Heading as='h1'>Dojo Tasks</Heading>
        <Spacer/>
        <HStack spacing="20px">
            <Avatar name='mario' src='/img/mario.png'>
              <AvatarBadge width="1.3em" bg="teal.500">
                <Text fontSize="xs" color="white">3</Text>
              </AvatarBadge>
            </Avatar>
            <Text>dipe@gmail.com</Text>
            <Button colorScheme='purple' onClick={showToast}>Logout</Button>
        </HStack>
    </Flex>
  )
}
