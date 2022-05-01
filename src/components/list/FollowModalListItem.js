import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";

export const FollowModalListItem = ({follow, Button, handleProfileClick}) => {

    return (
        <ListItem
            sx={{' :hover': {backgroundColor: '#f3f3f3', cursor: 'pointer'}}}>
            <ListItemAvatar
                onClick={() => handleProfileClick(follow)}>
                <Avatar alt={follow.profile.first_name}
                        src={follow.profile.profile_pic}/>
            </ListItemAvatar>

            <ListItemText
                onClick={() => handleProfileClick(follow)}
                primary={
                    `${follow.username}`
                }
                secondary={
                    <>
                        <Typography
                            component="span"
                            variant="body2"
                        >
                            <br/>
                            {follow.profile.first_name} {follow.profile.last_name}
                        </Typography>
                    </>
                }
            />
            {Button(follow.profile.follow_status, follow)}
        </ListItem>
    );
};
