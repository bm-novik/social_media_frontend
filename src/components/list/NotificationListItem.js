import {Avatar, Divider, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";
import {BASE_URL, IMAGE_URL} from "../../utils/config";

export const NotificationListItem = ({notification, last, handleClick}) => {
    console.log(notification)
    return (
        <>
            <ListItem onClick={() => handleClick(notification)}>
                <ListItemAvatar>
                    <Avatar alt={`${notification.sender.profile.first_name}`}
                            src={`${IMAGE_URL}${notification.sender.profile.profile_pic}`}/>
                </ListItemAvatar>
                <ListItemText
                    primary={`${notification.sender.profile.first_name} ${notification.sender.profile.last_name}`}
                    secondary={
                        <>
                            <Typography
                                component="span"
                                variant="body2"
                            >
                                {notification.notification_massage}
                            </Typography>
                        </>
                    }
                />
            </ListItem>
            {(!last) ? null : <Divider variant="inset" component="li"/>}
        </>
    );
};
