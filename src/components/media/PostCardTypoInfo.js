import Typography from "@mui/material/Typography";
import {timeFromPost} from "../../utils/commonFunk";
import {StyledPinkTextButton} from "../button/Button.styles";
import Box from "@mui/material/Box";
import {Container} from "@mui/material";

export const PostCardTypoInfo = ({post}) => {
    const space = ' '

    return (
        <Container sx={{padding: '2ch'}}>
            <Typography sx={{marginTop: '2ch', fontFamily: 'Quicksand', fontSize: '0.8rem'}}>
                {(post?.like_count > 0) ?

                    <StyledPinkTextButton style={{
                        color: 'black',
                        fontWeight: 500,
                        background: 'transparent',
                        padding: 0,
                        justifyContent: 'flex-start'
                    }}>
                        {post?.like_count} likes
                    </StyledPinkTextButton>
                    :
                    'Be the first to like this post'}
            </Typography>

            <Typography sx={{marginTop: '2ch', fontFamily: 'Quicksand', fontSize: '0.65rem'}}>
                {timeFromPost(post?.date_created)}
            </Typography>
        </Container>
    )
}
