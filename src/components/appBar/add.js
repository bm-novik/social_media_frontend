import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import * as React from "react";

export const Add = () => {
    return (
        <IconButton
            size="large"
            color="inherit"
        >
            <Badge badgeContent={17} color="secondary">
                <AddCircleOutlineOutlinedIcon/>
            </Badge>
        </IconButton>

    );
};