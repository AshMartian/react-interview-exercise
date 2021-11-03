import React, { useEffect } from "react"
import {
    Button,
    Center,
    Heading,
    Text,
    Icon,
    Input,
    ScaleFade,
    OrderedList,
    Divider,
    ListItem,
    InputGroup, // Some Chakra components that might be usefull
    HStack,
    VStack,
    InputRightAddon,
} from "@chakra-ui/react"
import { Card } from '@components/design/Card'
import { searchSchoolDistricts, searchSchools, NCESDistrictFeatureAttributes, NCESSchoolFeatureAttributes } from "@utils/nces"


const Home: React.FC = () => {
    const [searching, setSearching] = React.useState(false)
    const [districtSearch, setDistrictSearch] = React.useState<NCESDistrictFeatureAttributes[]>([]);
    const [schoolSearch, setSchoolSearch] = React.useState<NCESSchoolFeatureAttributes[]>([]);
    
    (async () => { // see console for api result examples
        const demoDistrictSearch = await searchSchoolDistricts("Peninsula School District")
        console.log("District example", demoDistrictSearch)

        const demoSchoolSearch = await searchSchools("k", demoDistrictSearch[1].LEAID)
        console.log("School Example", demoSchoolSearch)
    })()
    
    return (
        <Center padding="100px" height="90vh">
            <ScaleFade initialScale={0.9} in={true}>
                <Card variant="rounded" borderColor="blue">
                    <Heading>School Data Finder</Heading>
                    <Text>
                    How would you utilize React.useEffect with the searchSchoolDistricts and searchSchools functions? <br />
                    Using <a href="https://chakra-ui.com/docs/principles" target="_blank">Chakra-UI</a> or your favorite UI toolkit, build an interface that allows the user to: <br />
                    <OrderedList>
                        <ListItem>Search for a district</ListItem>
                        <ListItem>Search for a school within the district (or bypass district filter)</ListItem>
                        <ListItem>View all returned data in an organized way</ListItem>
                    </OrderedList>
                    <Divider margin={4} />
                    Check the console for example of returned data. <b>Happy coding!</b>
                    </Text>
                </Card>
            </ScaleFade>
        </Center>
    );
};

export default Home