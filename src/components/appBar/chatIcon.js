import Badge from "@mui/material/Badge";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import * as React from "react";
import IconButton from "@mui/material/IconButton";


export function Chat(Props) {
    return (
            <IconButton size="large" color="inherit">
                <Badge badgeContent={4} color="error">
                    <ChatOutlinedIcon />
                </Badge>
            </IconButton>
    );
};

