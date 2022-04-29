import SearchIcon from "@mui/icons-material/Search";
import {Search, SearchIconWrapper, StyledInputBase} from "./Searchbar.styles";
import {useState} from "react";
import {useSearchData} from "../../../hooks/useSearch.data";

export const Searchbar = () => {
    // React State
    const [searchInput, setSearchInput] = useState('')


    const onSuccess = (data) => {
        console.log(data)
        console.log('123')

    }

    const {isSuccess, refetch } = useSearchData(onSuccess, searchInput)

// React Query boilerPlate
    const handelClick = () => {
        if (searchInput !== '') refetch(searchInput)
        setSearchInput('')
    }

    {isSuccess&& console.log('666')}

    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                value={searchInput}
                onClick={handelClick}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={(e) => {if (e.key === 'Enter') handelClick(e)}}
            />
        </Search>
    )
}
