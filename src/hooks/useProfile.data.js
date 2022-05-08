import {NoBaseURLRequest, request} from "../utils/axios-utils";
import {useInfiniteQuery, useMutation, useQuery} from "react-query";
import {BASE_URL} from "../utils/config";


/* ---- Axios clients ---- */
/* ---- Fetch infinite Request ---- */

const fetchUserInfinitePostsRequest = (pageParam) => {
    return NoBaseURLRequest({url: `${pageParam}`})
}

/* ---- Fetch Request ---- */

const fetchUserProfileDetailsRequest = (pageParam) => {
    return request({url: `${pageParam}/profile/`})
}

const fetchNotificationsRequest = () => {
    return request({url: '/notifications'})
}

const fetchUserPostsRequest = (id) => {
    return request({url: `/post/${id.queryKey[1]}/user_post`})
}


const fetchUserFollowersRequest = id => {
    return request({url: `/${id.queryKey[1]}/followers`})
}

const fetchUserFollowingsRequest = id => {
    return request({url: `/${id.queryKey[1]}/following`})
}

const CreateFollowRequest = object_id => {
    return request({url: `/follower/`, method: 'post', data: object_id,})
}

const DeleteFollowingRequest = object_id => {
    return request({url: `/follower/stop_follow/`, method: 'delete', data: object_id,})
}

const UpdateProfilePictureRequest = imageData => {
    return request({url: `/update/profile_pic/`, method: 'put', data: imageData,})
}

const DeleteFollowerRequest = object_id => {
    return request({url: `/follower/remove_follower/`, method: 'delete', data: object_id,})
}


// React-Query
export const useNotificationsData = (onSuccess, onError) => {
    return useQuery('notification', fetchNotificationsRequest, {
        enabled: false,
        onSuccess,
        onError,
    })
}


export const useFollowingData = (id) => {
    return (
        useQuery(['useFollowing', id], fetchUserFollowingsRequest,
            {
                // enabled:false,
                keepPreviousData: true,
                refetchOnWindowFocus: false,
                refetchOnReconnect: false,
                onError: (error) => {
                    console.error("data from error: ", error)
                }
            }
        )
    )
}


export const useFollowersData = (id) => {
    return (
        useQuery(['useFollowers', id], fetchUserFollowersRequest,
            {
                // enabled:false,
                keepPreviousData: true,
                refetchOnWindowFocus: false,
                refetchOnReconnect: false,
                onError: (error) => {
                    console.error("data from error: ", error)
                }
            }
        )
    )
}


export const useFollowCreateData = (onSuccess) => {
    return (
        useMutation('useAddFollow', CreateFollowRequest,
            {
                onSuccess,
                onError: (error) => {
                    console.error("data from error: ", error)
                }
            }
        )
    )
}


export const useFollowerDeleteData = (onSuccess) => {
    return (
        useMutation('useDeleteFollower', DeleteFollowerRequest,
            {
                onSuccess,
                onError: (error) => {
                    console.error("data from error: ", error)
                }
            }
        )
    )
}

export const useFollowingDeleteData = (onSuccess) => {
    return (
        useMutation('useDeleteFollowing', DeleteFollowingRequest,
            {
                onSuccess,
                onError: (error) => {
                    console.error("data from error: ", error)
                }
            }
        )
    )
}


export const useUpdateProfilePictureData = (onSuccess) => {
    return (
        useMutation('useUpdateProfilePicture', UpdateProfilePictureRequest,
            {
                onSuccess,
                onError: (error) => {
                    console.error("data from error: ", error)
                }
            }
        )
    )
}


export const useProfileDetailData = (id) => {
    return (
        useQuery(['useProfileDetail', id], ({ pageParam = id }) =>
            fetchUserProfileDetailsRequest(pageParam),
            {
                onError: (error) => {
                    console.error("data from error: ", error)
                }
            }
        )
    )
}


export const useProfilePostListData = (getNextPageParam, id) => {
    return (
        useInfiniteQuery(['useProfilePostList'], ({ pageParam = `${BASE_URL}/post/${id}/user_post` }) =>
                fetchUserInfinitePostsRequest(pageParam),
            {
                keepPreviousData: true,
                refetchOnWindowFocus: false,
                refetchOnReconnect: false,
                getNextPageParam,
                onError: (error) => {
                        console.error("data from error: ", error)
                }
            }
        )
    )
}



