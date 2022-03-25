import {Container} from "@mui/material";
import Post from "./mediaCard";

const PostList = ({ data }) => {
    return (

        <Container maxWidth="sm">
            {data.map((post) =>

                <Post key={post.id} post={post}/>
            )}
        </Container>
    );
};

export default PostList