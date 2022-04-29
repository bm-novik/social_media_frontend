import Typography from "@mui/material/Typography";
import {Link} from "@mui/material";

export const ProfilePageNameAndBio = ({data}) => {
    return (
        <>
            <Typography
                variant="h6"
                component="div"
                sx={{spacing: 1, '&.MuiTypography-root': {fontFamily: 'Quicksand'}}}>
                {data?.profile?.first_name} {data?.profile?.last_name}
                <Typography variant="body1"
                            sx={{spacing: 1, '&.MuiTypography-root': {fontFamily: 'Quicksand'}}}>
                    {data?.profile?.bio}
                </Typography>
            </Typography>
            <Link sx={{fontFamily: 'Quicksand', lineHeight:'4ch', fontSize: '2ch'}} href={data?.profile?.website} variant="body2">{data?.profile?.website}</Link>
        </>
    );
};
