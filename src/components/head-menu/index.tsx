import * as React from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';


import MenuItem from '@mui/material/MenuItem';


import {containerStyle} from "./styles"
import {arSD} from "@mui/material/locale";

interface IProps {
    vertical: ['bottom', 'top'],
    horizontal: 'left',
}

const pages = ['Gallery', 'About', 'For Teams'];
export const HeadMenu = ({vertical, horizontal}: IProps) => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <Box style={containerStyle}
             anchorEl={anchorElNav}
             anchorOrigin={{vertical[1]}}
             keepMounted
             transformOrigin={{vertical[0]}, {horizontal}}
             open={Boolean(anchorElNav)}
             onClose={handleCloseNavMenu}
             {pages.map((page) => (
                 <MenuItem key={page} onClick={handleCloseNavMenu}>
                     <Typography textAlign="center">{page}</Typography>
                 </MenuItem>
             ))}/>
    );
}
/// проблема с полями mui, пока не решила