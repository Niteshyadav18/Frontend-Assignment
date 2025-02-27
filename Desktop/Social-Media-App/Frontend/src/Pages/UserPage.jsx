import {useEffect, useState} from "react";
import UserHeader from "../component/UserHeader";
import UserPost from "../component/UserPost";
import {useParams} from "react-router-dom";
import {Spinner, Flex} from "@chakra-ui/react";
import useShowToast from "../hooks/useShowToast";

const UserPage = () => {
    const [user, setUser] = useState(null);
    const {username} = useParams();
    const showToast = useShowToast();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await fetch(`/api/users/profile/${username}`);
                const data = await res.json();
                if (data.error) {
                    showToast("Error", data.error, "error");
                    return;
                }
                setUser(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getUser();
    }, [username, showToast]);

    if (!user && loading) {
        return (
            <Flex justifyContent={"center"}>
                <Spinner size="xl" />;
            </Flex>
        );
    }

    if (!user) return null;

    return (
        <>
            <UserHeader user={user} />
            <UserPost likes={120} replies={481} postImg="/post1.png" postTitle="Let's talk about threads." />
            <UserPost likes={121} replies={18} postImg="/post2.png" postTitle="Nice to meet u." />
            <UserPost likes={160} replies={31} postImg="/post3.png" postTitle="Cool post." />
        </>
    );
};

export default UserPage;
