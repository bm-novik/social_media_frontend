import {ListItem} from "@mui/material";
import {CommentHeader} from "./CommentHeader";
import {usePostParentCommentData} from "../../hooks/useFeedAndExplore.data";
import {Fragment, useState} from "react";
import List from "@mui/material/List";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from "@mui/material/IconButton";
import {MyPink} from "../../utils/color-utils";
import {ParentCommentList} from "./ParentCommentList";


export const CommentList = ({post, url}) => {

    const [nextParent, setNextParent] = useState(url)
    const [hasMoreParent, setHasMoreParent] = useState(undefined)

    const onParentSuccess = (data) => {
        const serverNext = data?.pages[(data.pages.length) - 1]?.data?.next
        setHasMoreParent(serverNext !== null)
        if (hasMoreParent) {
            setNextParent(serverNext)
        }
    }

    const {
        data: parentData, fetchNextPage: fetchNextParentPage , isLoading: isParentLoading, isFetching:isParentFetching}
        = usePostParentCommentData(onParentSuccess, nextParent)

    return (
        <List sx={{
            width: '100%', bgcolor: 'background.paper', maxHeight: '91.5ch', height: '100%', overflow: 'scroll', paddingBottom: 0,
            borderBottom: 'groove', borderTop: 'groove', borderColor: '#f1f1f170', borderBlockWidth: '1px',
            '&::-webkit-scrollbar': {width: '0.5px'},
            '&::-webkit-scrollbar-thumb': {width: '0.5px'},
        }}>
            <ListItem key='first' sx={{padding: 0, width: '100%'}}>
                <CommentHeader post={post}/>
            </ListItem>


            {parentData?.pages.map((group, i) => {
                return (
                    <>
                        <Fragment key={i}>
                            {group?.data?.results.map(parent => (
                                <ListItem key={parent.id} sx={{padding: 0}}>
                                    <ParentCommentList comment={parent} />
                                </ListItem>
                            ))}
                        </Fragment>
                        {hasMoreParent &&
                            <ListItem key='add' sx={{justifyContent: 'center'}}>
                                <IconButton
                                    onClick={() => fetchNextParentPage({pageParam: nextParent})}
                                    aria-label="delete" size="small">
                                    <AddCircleOutlineIcon sx={{color: MyPink}} fontSize="small"/>
                                </IconButton>
                            </ListItem>
                        }
                    </>
                )
            })}
        </List>
    );
};
