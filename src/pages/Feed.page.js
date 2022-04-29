// React
import { Fragment, useEffect } from "react";
import { useRecoilValue } from "recoil";

// MUI
import { Stack } from "@mui/material";
import Button from "@material-ui/core/Button";
import Card from "@mui/material/Card";

// 3d party
import {  useInView  } from 'react-intersection-observer'

// React-Query hooks
import { usePostFeedListData } from "../hooks/UseDataControl";

// Recoil global state
import { AuthenticatedAtom } from "../recoil/atom/AtomStore";

// Components
import { StyledColumnDividedFeedBox, StyledPostColumnFeedBox } from "../components/boxs/Box.styles";
import { StyledSecondaryMenuTypography } from "../components/typography/Typography.styles";
import { useTopFiveData } from "../hooks/useFeedAndExplore.data";
import { SuggestedCardHeader } from "../components/media/SuggestedCard";
import { WindowLoader } from "../components/layout/icons/Loader";
import { Post } from "../components/media/mediaCard";



const Feed = () => {
    // State management
    const { ref, inView } = useInView()
    const user = useRecoilValue(AuthenticatedAtom)

    // React-Query logic
    useEffect(() => {
        if (inView) fetchNextPage()
    }, [inView])

    const getNextPageParam = (_lastPage, pages) => pages[(pages.length) - 1].data.next ?? undefined

    const {data: SuggestedProfiles} = useTopFiveData()
    const {data, fetchNextPage, isLoading, isFetching, isFetchingNextPage, hasNextPage}
        = usePostFeedListData(getNextPageParam)


    return (
        <>
            {(isLoading || isFetching) && <WindowLoader/>}
            <StyledColumnDividedFeedBox>

                <StyledPostColumnFeedBox>
                        {data?.pages.map((group, i) => {
                            return (
                                <Fragment key={i}>
                                    {group?.data?.results.map(post => (
                                        <Post sx={{'& .MuiTypography-root': {fontFamily: 'QuickSand'}}} key={post.id}
                                              post={post}/>
                                    ))}
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
                </StyledPostColumnFeedBox>
                <Card sx={{
                    display: 'flex',
                    backgroundColor: 'transparent',
                    top: '6.25ch',
                    boxShadow: 'none',
                    position: 'sticky'
                }}>
                    <Stack sx={{position: 'fixed'}}>

                        <SuggestedCardHeader id={user.profileId} first={user.firstName} last={user.lastName}
                                             nickName={user.nickname} image={user.image} text={true}/>

                        <StyledSecondaryMenuTypography sx={{paddingLeft: '2.25ch'}}>
                            Suggestions For You
                        </StyledSecondaryMenuTypography>

                        {SuggestedProfiles?.data.map(profile => (
                            <SuggestedCardHeader
                                key={`profile${profile?.profile?.id}`}
                                id={profile?.profile?.id}
                                first={profile?.profile?.first_name}
                                nickName={profile?.username}
                                last={profile?.profile?.last_name} image={profile?.profile?.profile_pic}
                                text={false}/>
                        ))}
                    </Stack>
                </Card>

            </StyledColumnDividedFeedBox>
        </>
    )
}

export default Feed