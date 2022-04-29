// React
import { useState, Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

// MUI
import { Grid } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import Button from "@material-ui/core/Button";

// 3d party
import {  useInView  } from 'react-intersection-observer'

// React-Query hooks
import {
    useProfileDetailData,
    useProfilePostListData,
    useFollowersData,
    useFollowingData
} from "../hooks/useProfile.data";

// Recoil global state
import { AuthenticatedAtom } from "../recoil/atom/AtomStore";

// Components
import { MySecondary } from "../utils/color-utils";
import { FollowingModal } from "../components/modalPages/Following.modal.page";
import { ProfilePageHeader } from "../components/header/profilePage/ProfilePageHeader";
import { FollowersModal } from "../components/modalPages/Followers.modal.page";
import { StyledTabControllerBox } from "../components/boxs/Box.styles";
import { ProfilePageImageList } from "../components/list/ListControl";
import { WindowLoader } from "../components/layout/icons/Loader";
import { ProfileTabsControl } from "../components/tabs/ProfileTabControl";
import { PostDetailsModal } from "../components/modalPages/PostDetails.modal.page";
import { AuthUserProfilePageHeader } from "../components/header/profilePage/AuthUserProfilePageHeader";

const UserProfile = () => {
    // State control
    let {id} = useParams()
    const auth = useRecoilValue(AuthenticatedAtom)
    const { ref, inView } = useInView()

    // Post State control
    const [clickedPost, setClickedPost] = useState(null)

    // Modal State control
    const [postModalOpen, setPostModalOpen] = useState(false)
    const [followersModalOpen, setFollowersModalOpen] = useState(false)
    const [isUser, setIsUser] = useState(null)
    const [followingModalOpen, setFollowingModalOpen] = useState(false)
    const [value, setValue] = useState('post');

    // Handlers
    const handlePostModalClick = ({post}) => {
        setClickedPost(post?.id)
        setPostModalOpen(!postModalOpen)
    }

    const handleFollowersModalClick = (isUser) => {
        if (isUser === 'user') {
            setIsUser(true)
        } else {
            setIsUser(false)
        }
        if (!followersModalOpen) followersRefetch()
        setFollowersModalOpen(!followersModalOpen)
    }

    const handleFollowingModalClick = (isUser) => {
        if (isUser === 'user') {
            setIsUser(true)
        } else {
            setIsUser(false)
        }
        if (!followingModalOpen) followingRefetch()
        setFollowingModalOpen(!followingModalOpen)
    }

    const handleTabChange = (newValue) => {
        setValue(newValue);
    }

    // React-Query Logic
    useEffect(() => {
        if (inView) fetchNextPage()
    }, [inView])

    const getNextPageParam = (_lastPage, pages) => pages[(pages.length) - 1].data.next ?? undefined

    const { data, fetchNextPage, isLoading, isFetching, isFetchingNextPage, hasNextPage }
        = useProfilePostListData(getNextPageParam, id)
    const {isSuccess: userDataIsSuccess, data: userData, isLoading: isProfileDataLoading}
        = useProfileDetailData(id)
    const {isSuccess: FollowerIsSuccess, isLoading: FollowerIsLoading, data: followersData, refetch: followersRefetch}
        = useFollowersData(id)
    const {
        isSuccess: FollowingIsSuccess, isLoading: FollowingIsLoading, data: followingData, refetch: followingRefetch}
        = useFollowingData(id)

    return (
        <>
            {(isLoading || isFetching || isProfileDataLoading) && <WindowLoader/>}
            {/* MODALS */}
            <PostDetailsModal
                open={postModalOpen}
                handleModalClick={handlePostModalClick}
                post={clickedPost}
            />

            <FollowingModal
                open={followingModalOpen}
                handleModalClick={handleFollowingModalClick}
                data={followingData?.data}
                isSuccess={FollowingIsSuccess}
                isLoading={FollowingIsLoading}
                isUser={isUser}
            />

            <FollowersModal
                open={followersModalOpen}
                handleModalClick={handleFollowersModalClick}
                data={followersData?.data}
                isSuccess={FollowerIsSuccess}
                isLoading={FollowerIsLoading}
                isUser={isUser}
            />

            {/* PAGE LAYOUT */}
            <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="baseline"
                sx={{maxWidth: '125ch'}}
            >
                {/* HEADER */}
                <Grid item sx={{display: 'flex', height: '20ch', maxWidth: '125ch', mb: 12, mx: 'auto'}}>
                    {userDataIsSuccess &&
                    (userData?.data?.id === auth.profileId) ?
                        <AuthUserProfilePageHeader
                            data={userData?.data}
                            handleFollowersModalClick={handleFollowersModalClick}
                            handleFollowingModalClick={handleFollowingModalClick}
                        /> :
                        <ProfilePageHeader
                            data={userData?.data}
                            handleFollowersModalClick={handleFollowersModalClick}
                            handleFollowingModalClick={handleFollowingModalClick}
                        />
                    }
                </Grid>

                {/* BODY */}
                <Grid item sx={{
                    borderTop: 'groove',
                    borderColor: MySecondary,
                    borderBlockWidth: '1px',
                    width: '100%',

                }}>
                    {/* TABS SELECTION*/}
                    <TabContext value={value}>
                        <StyledTabControllerBox sx={{'& .MuiTabs-flexContainer': {justifyContent: 'space-around'}}}>
                            <ProfileTabsControl handleChange={handleTabChange}/>
                        </StyledTabControllerBox>
                        <TabPanel value='post'>

                            {/* IMAGE GALLERY*/}
                                {data?.pages.map((group, i) => {
                                    return (
                                        <Fragment key={i}>
                                            <ProfilePageImageList group={group?.data?.results}
                                                                  handleModalClick={handlePostModalClick}/>

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
                        {/*    TO BE IMPLEMENTED*/}
                        </TabPanel>
                        <TabPanel value='save'>saved items</TabPanel>
                        <TabPanel value='tagged'>tagged</TabPanel>

                    </TabContext>


                </Grid>
            </Grid>
        </>
    )
}

export default UserProfile