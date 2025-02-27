import {Avatar, Divider, Flex, Text, Image} from "@chakra-ui/react";
import {useState} from "react";
import {BsThreeDots} from "react-icons/bs";
import Actions from "./Actions";

const Comment = () => {
    const [liked, setLiked] = useState(false);
    return (
        <>
            <Flex>
                <Flex w={"full"} alignItems={"center"} gap={3}>
                    <Avatar src="/zuck-avatar.png" size={"md"} name="Mark Zuckerberg" />
                    <Flex>
                        <Text fontSize={"sm"} fontWeight={"bold"}>
                            markzukerberg
                        </Text>
                        <Image src="/verified.png" w="4" h={4} ml={4} />
                    </Flex>
                </Flex>

                <Flex gap={4} alignItems={"center"}>
                    <Text fontSize={"sm"} color={"gray.light"}>
                        1d
                    </Text>
                    <BsThreeDots />
                </Flex>
            </Flex>
            <Text fontSize={"sm"}>Hey, this looks great!</Text>
            {/* Actions component */}
            <Flex gap={3} my={3}>
                <Actions liked={liked} setLiked={setLiked} />
            </Flex>
            {/* Like count */}
            <Flex gap={2} alignItems={"center"}>
                <Text fontSize={"sm"} color={"gray.light"}>
                    {12 + (liked ? 1 : 0)} likes
                </Text>
            </Flex>

            <Divider my={4} />
        </>
    );
};

export default Comment;
