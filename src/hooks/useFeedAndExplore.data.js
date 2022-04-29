import {useInfiniteQuery, useMutation, useQuery} from "react-query";
import {NoBaseURLRequest, request} from "../utils/axios-utils";
import {BASE_URL} from "../utils/config";


/* ---- Axios clients ---- */
/* ---- INFINITE REQUESTS  ---- */

const fetchInfiniteFeedRequest = (pageParam) => {
    return NoBaseURLRequest({url: `${pageParam}`})
}


const fetchPostParentCommentRequest = (pageParam) => {
    return NoBaseURLRequest({url: `${pageParam}`})
}


const fetchPostChildrenCommentRequest = (pageParam) => {
    console.log('request: ', pageParam)
    // return NoBaseURLRequest({url: `${pageParam}`})
    return NoBaseURLRequest({url: 'http://127.0.0.1:8000/comment/48/children_comments'})
}


/* ----  REQUESTS  ---- */

const fetchTopFiveRequest = () => {
    return request({url: `${BASE_URL}/top_five`})
}


const fetchPostExploreListRequest = (pageParam) => {
    return request({url: `${pageParam}`})
}


const fetchPostDetailRequest = (id) => {
    if (id.queryKey[1]) {
        return request({url: `/post/${id.queryKey[1]}`})
    }
}


const addPostRequest = postData => {
    return request({url: '/post/', method: 'post', data: postData})
}


const addLikeRequest = likeData => {
    return request({url: '/like/', method: 'post', data: likeData})
}


const deleteLikeRequest = likeData => {
    return request({url: '/like/0/', method: 'delete', data: likeData})
}


const addCommentRequest = commentData => {
    return request({url: '/comment/', method: 'post', data: commentData})
}


/* ---- ReactQuery hooks ---- */
export const usePostDetailData = (id) => {
    return (
        useQuery(['usePostDetail', id], fetchPostDetailRequest,
            {
                onError: (error) => {
                    console.log("data from error: ", error)
                }
            }
        )
    )
}


export const useAddPostData = onSuccess => {
    return (
        useMutation('addPost', addPostRequest,
            {
                onSuccess,
                onError: (error) => {
                    console.log("data from error: ", error)
                }
            }
        )
    )
}


export const useAddLikeData = onSuccess => {
    return (
        useMutation('addPost', addLikeRequest,
            {
                onSuccess,
                onError: (error) => {
                    console.log("data from error: ", error)
                }
            }
        )
    )
}


export const useDeleteLikeData = onSuccess => {
    return (
        useMutation('addPost', deleteLikeRequest,
            {
                onSuccess,
                onError: (error) => {
                    console.log("data from error: ", error)
                }
            }
        )
    )
}


export const useAddCommentData = onSuccess => {
    return (
        useMutation('addComment', addCommentRequest,
            {
                onSuccess,
                onError: (error) => {
                    console.log("data from error: ", error)
                }
            }
        )
    )
}


export const usePostExploreListData = (getNextPageParam) => {
    return (
        useInfiniteQuery(['usePostExploreList'], ({ pageParam = '/post/explore_post' }) =>
                fetchPostExploreListRequest(pageParam),
            {
                keepPreviousData: true,
                refetchOnWindowFocus: false,
                refetchOnReconnect: false,
                getNextPageParam,
                onError: (error) => {
                    console.log("data from error: ", error)
                }
            }
        )
    )
}


export const usePostFeedListData = (getNextPageParam) => {
    return (
        useInfiniteQuery(['usePostFeedList'], ({ pageParam = `${BASE_URL}/post` }) =>
                fetchInfiniteFeedRequest(pageParam),
            {
                keepPreviousData: true,
                refetchOnWindowFocus: false,
                refetchOnReconnect: false,
                getNextPageParam,
                onError: (error) => {
                    console.log("data from error: ", error)
                }
            }
        )
    )
}


export const useTopFiveData = () => {
    return (
        useQuery('useTopFive', fetchTopFiveRequest,
            {}
        )
    )
}


export const usePostParentCommentData = (onSuccess, url) => {
    return (
        useInfiniteQuery(['usePostParentComment'], ({ pageParam = url}) =>
                fetchPostParentCommentRequest(pageParam),
            {
                refetchOnWindowFocus: false,
                refetchOnReconnect: false,
                keepPreviousData: true,
                onSuccess,
                onError: (error) => {
                    console.log("data from error: ", error)
                }
            }
        )
    )
}


export const usePostChildrenCommentData = (onSuccess) => {

    return (
        useInfiniteQuery(['usePostChildrenComment'], ({ pageParam }) =>
            fetchPostChildrenCommentRequest(pageParam),
            {
                enabled: false,
                refetchOnWindowFocus: false,
                refetchOnReconnect: false,
                keepPreviousData: true,
                onSuccess,
                onError: (error) => {
                    console.log("data from error: ", error)
                }
            }
        )
    )
}

