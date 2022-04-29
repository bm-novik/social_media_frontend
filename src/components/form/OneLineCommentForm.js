import {useEffect, useState} from "react";
import {FormControl, Input, InputAdornment} from "@mui/material";
import {StyledPostCommentButton} from "../button/Button.styles";
import {MyFadePink, MyPink} from "../../utils/color-utils";
import {useAddCommentData} from "../../hooks/useFeedAndExplore.data";
import {useQueryClient} from "react-query";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

export const OneLineCommentForm = ({post}) => {
    const queryClient = useQueryClient()
    const [comment, setComment] = useState('')
    const [commentDisabled, setCommentDisabled] = useState(true)

    useEffect(() => {
        (comment.length === 0) ? setCommentDisabled(true) : setCommentDisabled(false)
    }, [comment])

    const onSuccess = (data) => {
        queryClient.invalidateQueries('usePostFeedList')
        queryClient.invalidateQueries('usePostParentComment')
    }

    const {mutate: commentAddData} = useAddCommentData(onSuccess)

    const handleChange = (text) => {
        setComment(text)
    }

    const handelClick = () => {
        commentAddData({
                parent: null,
                content_type: post.content_type,
                object_id: post.id,
                content: comment
            }
        )
        queryClient.invalidateQueries('usePostFeedList')
        setComment('')
    }
// TODO check disableUnderline
    return (
        <FormControl
            sx={{borderTop: 1, borderColor: 'rgba(213,213,213,0.44)'}}
            fullWidth variant="standard">
            <Input placeholder="Add comment..."
                   id="standard-adornment-password"
                   disableUnderline={true}
                   type='text'
                   sx={{marginLeft: '2ch', marginRight: '1ch', fontFamily: 'Quicksand'}}
                   value={comment}
                   onChange={(e) => handleChange(e.target.value)}
                   onKeyPress={(e) => {
                       if (e.key === 'Enter') {
                           if (!commentDisabled) handelClick()
                       }
                   }}

                   startAdornment={
                       <InputAdornment position="start">
                           <InsertEmoticonIcon/>
                       </InputAdornment>
                   }
                   endAdornment={
                       <InputAdornment position="end">
                           <StyledPostCommentButton
                               style={!commentDisabled ?
                                   {backgroundColor: 'transparent', color: MyPink} :
                                   {backgroundColor: 'transparent', color: MyFadePink}}
                               disableElevation
                               edge="end"
                               onClick={handelClick}
                           >
                               Post
                           </StyledPostCommentButton>
                       </InputAdornment>

                   }
            />
        </FormControl>
    );
};
