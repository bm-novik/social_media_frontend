import {CircularProgress, ListItem} from "@mui/material";

export const LoadingProgressListItem = ({notification, last}) => {
    return (
        <ListItem sx={{width: '40ch'}}>
            <CircularProgress color="secondary"/>
        </ListItem>
    )
}