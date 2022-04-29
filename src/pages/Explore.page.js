// React
import {useState, Fragment, useEffect} from "react";

// MUI
import ImageList from '@mui/material/ImageList';
import Box from "@mui/material/Box";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@material-ui/core/Button";

// 3d party
import {useInView} from 'react-intersection-observer'

// React-Query hooks
import {usePostExploreListData} from "../hooks/UseDataControl";

// Components
import {StyledImageTextBox} from "../components/boxs/Box.styles";
import {PostDetailsModal} from "../components/modalPages/PostDetails.modal.page";
import {StyledExploreImageItemList, StyledProfileImageListItem} from "../components/list/List.styles";
import {WindowLoader} from "../components/layout/icons/Loader";


function srcset(image, size, rows = 1, cols = 1) {
    return (
        {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
        }
    )
}

const Explore = () => {
    // State management
    const {ref, inView} = useInView()
    const [clickedPost, setClickedPost] = useState(null)
    const [postModalOpen, setPostModalOpen] = useState(false)

    const division = 12

    useEffect(() => {
        if (inView) fetchNextPage()
    }, [inView])

    const getNextPageParam = (_lastPage, pages) => pages[(pages.length) - 1].data.next ?? undefined

    const {data, fetchNextPage, isLoading, isFetching, isFetchingNextPage, hasNextPage}
        = usePostExploreListData(getNextPageParam)

    const handlePostModalClick = ({post}) => {
        setClickedPost(post?.id)
        setPostModalOpen(!postModalOpen)
    }

    return (
        <>
            {(isLoading || isFetching || isFetchingNextPage) && <WindowLoader/>}
            <Box sx={{display: 'flex', flexDirection: 'column', height: '20ch', width: '125ch', mb: 12}}>

                <PostDetailsModal
                    open={postModalOpen}
                    handleModalClick={handlePostModalClick}
                    post={clickedPost}
                />

                {data?.pages.map((group, index) => {
                    return (
                        <Fragment key={index}>
                            <ImageList
                                sx={{width: "100%", overflowY: 'unset'}}
                                cols={3}
                                gap={24}
                                variant="quilted"
                            >
                                {group?.data?.results.map((post, i) => (
                                    <StyledExploreImageItemList
                                        key={post?.image}
                                        cols={(i % division === 0) ? 2 : 1}
                                        rows={(i % division === 0) ? 2 : 1}
                                        onClick={() => {
                                            handlePostModalClick({post})
                                        }}
                                    >
                                        <img
                                            {...srcset(post?.image, 121, (i % division === 0) ? 2 : 1, (i % division === 0) ? 2 : 1)}
                                            sx={{display: 'block', width: '100%', height: 'auto%'}}
                                            alt={post?.title} loading="lazy"
                                        />

                                        <StyledProfileImageListItem container>
                                            <StyledImageTextBox component="span">
                                                <FavoriteIcon sx={{marginRight: '0.5ch'}}/> {post.like_count}
                                            </StyledImageTextBox>
                                            <StyledImageTextBox component="span">
                                                <ChatBubbleOutlinedIcon
                                                    sx={{marginRight: '0.5ch'}}/> {post.comment_count}
                                            </StyledImageTextBox>
                                        </StyledProfileImageListItem>


                                    </StyledExploreImageItemList>
                                ))}
                            </ImageList>
                        </Fragment>
                    )
                })}
                <div>
                    <Button
                        sx={{display: 'none'}}
                        ref={ref}
                        onClick={() => fetchNextPage()}
                        disabled={!hasNextPage || isFetchingNextPage}
                    />
                </div>
            </Box>
        </>
    )
        ;
}


export default Explore