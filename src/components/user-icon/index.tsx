import * as React from "react";
import {containerStyle} from "./styles"
import Box from "@mui/material/Box";


export const UserIcon = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    return (
        <Box style={containerStyle} onClick={handleOpenNavMenu}/>
    );
}