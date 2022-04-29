import {Fragment, useState} from "react";
import {BASE_URL} from "../../utils/config";
import {usePostChildrenCommentData} from "../../hooks/useFeedAndExplore.data";
import {Divider, ListItem, Stack} from "@mui/material";
import {StyledPinkTextButton} from "../button/Button.styles";
import List from "@mui/material/List";
import {Comment} from "./Comment";


export const ParentCommentList = ({comment}) => {

    const [nextChild, setNextChild] = useState(`${BASE_URL}/comment/${comment.id}/children_comments`)
    const [hasMoreChild, setHasMoreChild] = useState(undefined)


    const onChildSuccess = (data) => {
        const serverNext = data?.pages[(data.pages.length) - 1]?.data?.next
        setHasMoreChild(serverNext !== null)
        if (hasMoreChild) {
            setNextChild(serverNext)
        }
    }


    const {data: childData, fetchNextPage: fetchNextChild, isSuccess
    } = usePostChildrenCommentData(onChildSuccess, nextChild)

    return (
        <Stack sx={{width:'100%'}}>
            <Comment comment={comment} />

            {!comment?.last_comment &&
                <>
                    <Divider variant="inset" light={true} textAlign={'right'}
                             sx={{width: '19ch'}}
                    >
                        <StyledPinkTextButton
                            // onClick={() => console.log(comment.id)}
                            onClick={() => fetchNextChild({pageParam: nextChild})}
                            style={{
                                color: 'inherit',
                                fontWeight: 400,
                                background: 'transparent'
                            }}>
                            View replays
                        </StyledPinkTextButton>
                    </Divider>


                    {isSuccess &&
                        <List>
                            {childData?.pages.map((group, j) => {
                                return (
                                    <Fragment key={j}>
                                        {group?.data?.results.map(child => (
                                            <ListItem key={child.id} sx={{paddingLeft: '8ch'}}>
                                                <Comment comment={child} />
                                            </ListItem>
                                        ))}
                                    </Fragment>
                                )
                            })}
                        </List>
                    }
                </>
            }
        </Stack>
 );
};
