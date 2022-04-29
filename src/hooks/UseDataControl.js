import {useSearchData} from "./useSearch.data";
import {useCheckAuthenticationData, useLoginData, useRegisterData} from "./UseAuth.data";
import {useAddPostData, usePostDetailData, usePostExploreListData, usePostFeedListData} from "./useFeedAndExplore.data";
import {
    useFollowCreateData, useFollowerDeleteData,
    useFollowersData, useFollowingDeleteData,
    useFollowingData,
    useProfileDetailData,
    useProfilePostListData
} from "./useProfile.data";

// Search
export {useSearchData}

// Auth
export { useLoginData, useRegisterData, useCheckAuthenticationData,
     }

//Feed
export { useAddPostData, usePostFeedListData, usePostDetailData, usePostExploreListData }

// Profile
export { useProfilePostListData, useProfileDetailData, useFollowersData,
    useFollowingData, useFollowCreateData, useFollowerDeleteData,
    useFollowingDeleteData }
