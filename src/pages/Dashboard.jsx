import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Heading,Text,Container,Box, filter,Flex, SimpleGrid,Card, CardHeader, CardBody, CardFooter, HStack, Button, Divider, Avatar } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
// make the data live like server: json-server -w ./data/db.json 
// make project live: npm run dev
export default function Dashboard() {

  const tasks=useLoaderData();

  // const boxStyles={
  //   p:"10px",
  //   bg:"purple.400",
  //   color:"white",
  //   m:"10px",
  //   textAlign:"center",
  //   filter:"blur(2px)",
  //   ':hover':{
  //     color:"black",
  //     bg:"blue.200"
  //   }
  // }
  return (
  //   <Container as="section" maxW="6xl" minW="1xl" py="20px">
  //     <Heading my="30px" p="10px">Dipesh Pandit</Heading>
  //     <Text ml="30px" color="blue.300" fontWeight="bold" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis delectus, sunt tenetur, facere aspernatur maxime esse ipsa excepturi voluptatum doloremque quas quo non nisi ut porro! Nobis sunt placeat ex?
  //     Autem vel quis accusantium deserunt in earum sunt doloremque. Voluptate laboriosam praesentium illum quae accusantium ducimus est! Delectus unde quod quo beatae, labore officia obcaecati velit ab quis deserunt!
  //     Quam facilis veritatis sapiente. Ea similique velit nihil dolorum expedita quibusdam voluptatibus temporibus, harum eligendi saepe aliquid nulla. Cupiditate nihil unde perferendis repellendus ducimus adipisci et! Corporis aliquam consequatur nisi.
  //     Ipsum laborum modi eum voluptate illum voluptas debitis totam nihil temporibus ea? Doloribus quas deserunt inventore! Distinctio tenetur labore deleniti voluptas? Porro quisquam dicta repudiandae sequi cum, placeat doloribus voluptatem.</Text>
  //     <Box my="30px" p="20px" bg="orange">
  //       <Text color="white">This is a box</Text>
  //     </Box>
  //     <Box sx={boxStyles}>
  //       hello, diwas
  //     </Box>
  //   </Container>

  <SimpleGrid p={10} spacing={10} minChildWidth={300}>
    {tasks && tasks.map(task=>(
      <Card key={task.id} borderTop="8px" borderColor="purple.400" bg="white">
        <CardHeader>
          <Flex gap={5}>
            <Avatar src={task.img}/>
            <Box>
              <Heading as="h3" size="sm">{task.title}</Heading>
              <Text>by {task.author}</Text>
            </Box>
          </Flex>
        </CardHeader>
        <CardBody color="gray.500">
        <Text>{task.description}</Text>
        </CardBody>
        <Divider borderColor="gray.200"/>
        <CardFooter>
          <HStack>
            <Button variant="ghost" leftIcon={<ViewIcon/>}>Watch</Button>
            <Button variant="ghost" leftIcon={<EditIcon/>}>Comment</Button>
          </HStack>
        </CardFooter>
      </Card>
    ))}
  </SimpleGrid>
)
}

export const tasksLoader=async()=>{
  const res=await fetch('http://localhost:3000/tasks');
  return res.json();
}