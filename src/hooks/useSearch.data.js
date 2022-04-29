import {request} from "../utils/axios-utils";
import {useQuery} from "react-query";


const fetchSearchRequest = (searchData) => {
    return request({url: '/search', params: {q: searchData.queryKey[1]}})
}

export const useSearchData = (onSuccess, searchData) => {
    return (
        useQuery(['useSearch', searchData], fetchSearchRequest,
            {
                enabled: false,
                onSuccess,
                onError: (error) => {
                    console.log("data from error: ", error)
                }
            }
        )
    )
}

