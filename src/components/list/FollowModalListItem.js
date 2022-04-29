import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";

export const FollowModalListItem = ({follower, isFollow, handleProfileClick}) => {

    return (
        <ListItem
            sx={{' :hover': {backgroundColor: '#f3f3f3', cursor: 'pointer'}}}>
            <ListItemAvatar
                onClick={() => handleProfileClick(follower)}>
                <Avatar alt={follower.profile.first_name}
                        src={follower.profile.profile_pic}/>
            </ListItemAvatar>

            <ListItemText
                onClick={() => handleProfileClick(follower)}
                primary={
                    `${follower.username}`
                }
                secondary={
                    <>
                        <Typography
                            component="span"
                            variant="body2"
                        >
                            <br/>
                            {follower.profile.first_name} {follower.profile.last_name}
                        </Typography>
                    </>
                }
            />
            {isFollow(follower.profile.follow_status, follower)}
        </ListItem>
    );
};
