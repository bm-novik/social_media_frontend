import {Link, useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {Avatar} from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import {timeFromPost} from "../../utils/commonFunk";

export const CommentHeader = ({ post }) => {
    const navigate = useNavigate()
    const space = ' '

        return (
                <CardHeader
                    sx={{underline: "none", '&.MuiCardHeader-root': {alignItems: 'flex-start'}}}
                    avatar={
                        <Avatar
                            sx={{cursor: 'pointer'}}
                            onClick={() => navigate(`/${post.author.id}`)}
                            alt={post?.author?.profile.first_name}
                            src={post?.author?.profile.profile_pic}
                            loading="lazy"
                        />
                    }
                    title ={
                        <Typography variant="body2" sx={{fontFamily: 'Quicksand', fontSize: '1.85ch', color: "black"}}>
                            <Link to={`/${post?.author.id}`}
                                  onClick={() => console.log(`${post?.author.id}`)}
                                  style={{
                                      textDecoration: 'none',
                                      cursor: 'pointer',
                                      color: 'inherit',
                                      fontWeight: 600
                                  }}>
                                {/*TODO nickName*/}
                                {post?.author.profile.first_name}{space}
                            </Link>
                            {post?.content}
                        </Typography>
                    }
                    subheader ={
                        <Typography sx={{marginTop: '2ch', fontFamily: 'Quicksand', fontSize: '0.775rem'}}>
                            {timeFromPost(post?.date_created)}
                        </Typography>
                }
                />
        );
    }
;

