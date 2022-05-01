import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import {useEffect, useState} from "react";
import {useAddLikeData, useDeleteLikeData} from "../../../hooks/useFeedAndExplore.data";
import {useQueryClient} from "react-query";

export const Like = ({object, did_like, size='medium'}) => {
    const queryClient = useQueryClient()
    const [like, setLike] = useState(false)

    useEffect(() => {setLike(did_like)}, [])

    const onSuccess = (data) => {
        queryClient.invalidateQueries('usePostFeedList')
        queryClient.invalidateQueries('usePostParentComment')
        queryClient.invalidateQueries('usePostDetail')
        queryClient.invalidateQueries('usePostExploreList')

    }

    const {mutate: likeAddData} = useAddLikeData(onSuccess)
    const {mutate: likeDeleteData} = useDeleteLikeData(onSuccess)


    const handleClick = (object) => {
        const data = {content_type: object.content_type, object_id: object.id}
        like ? likeDeleteData(data) : likeAddData (data)
        setLike(!like)
    }


    return (
        <>
            {
                like ?
                    <IconButton color={'warning'}
                        size='large' onClick={() => handleClick(object)}>
                        <FavoriteOutlinedIcon color={'warning'} fontSize={size}/>
                    </IconButton>
                    :
                    <IconButton size='large' onClick={() => handleClick(object)}>
                        <FavoriteBorderIcon fontSize={size}/>
                    </IconButton>
            }
        </>
    );
};

