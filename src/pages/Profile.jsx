import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from "@chakra-ui/icons";
import {Tab,List, TabList, TabPanels ,Tabs,TabPanel, ListItem, ListIcon} from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{color:"white", bg:"purple.400"}}>Account info</Tab>
        <Tab _selected={{color:"white", bg:"purple.400"}}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4} >
            <ListItem>
              <ListIcon as={EmailIcon}/>
              Email: dip@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon}/>
              sdfdsf dsf sdfd df ds
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon}/>
              sdfds esdf dsfds f
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400"></ListIcon>
              sdfsdfds sdf sdf df dsfdsf
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400"></ListIcon>
              sdfsdfds sdf sdf df dsfdsf
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400"></ListIcon>
              sdfsdfds sdf sdf df dsfdsf
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400"></ListIcon>
              sdfsdfds sdf sdf df dsfdsf
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400"></ListIcon>
              sdfsdfds sdf sdf df dsfdsf
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
