import Badge from "@mui/material/Badge";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import * as React from "react";




export function Notification(Props) {
    return (
            <IconButton
                size="large"
                color="inherit"
            >
                <Badge  color="secondary">
                    <FavoriteBorderIcon />
                </Badge>
            </IconButton>
    );
};
