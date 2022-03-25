import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import HomeIcon from '@mui/icons-material/Home';

export const Home = () => {
    return (
        <IconButton size="large" color="inherit">
            <Badge badgeContent={4} color="error">
                <HomeIcon />
            </Badge>
        </IconButton>
    );
};