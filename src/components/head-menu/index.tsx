import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import {Styles} from "./styles"
import {open} from "fs";
import Menu from '@mui/material/Menu';
import {UserIcon} from "../user-icon";
// interface IProps {
//     vertical: string,
//     horizontal: "left"
// }

const pages = ['Gallery', 'About', 'For Teams'];
export const HeadMenu = () => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <Box style={Styles.containerStyle}>
            <UserIcon/>
             <Menu
             anchorEl={anchorElNav}
             anchorOrigin={{
                 vertical: 'bottom',
                 horizontal: 'left',
             }}
             keepMounted
             transformOrigin={{
                 vertical: 'top',
                 horizontal: 'left',
             }}
             open={Boolean(anchorElNav)}
             onClose={handleCloseNavMenu} style={Styles.menuStyle}>
             {pages.map((page) => (
                 <MenuItem key={page} onClick={handleCloseNavMenu}>
                     <Typography textAlign="center">{page}</Typography>
                 </MenuItem>)
             )}
            </Menu>
        </Box>
    );
}
