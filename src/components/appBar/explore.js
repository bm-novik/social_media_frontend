import Badge from "@mui/material/Badge";
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import IconButton from "@mui/material/IconButton";
import * as React from "react";

export const Explore = () => {
    return (
        <IconButton
            size="large"
            color="inherit"
        >
            <Badge badgeContent={17} color="secondary">
                <ExploreOutlinedIcon />
            </Badge>
        </IconButton>
    );
};