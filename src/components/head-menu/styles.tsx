import * as React from 'react'
import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});
const containerStyle = {

    [theme.breakpoints.down('xs')]: {
        display: 'flex'
    },
    [theme.breakpoints.up('xs')]: {
        display: 'none'
    }
};

const menuStyle = {
    [theme.breakpoints.down('xs')]: {
        display: 'block'
    },
    [theme.breakpoints.up('xs')]: {
        display: 'none'
    }

}

export const Styles =  {
    containerStyle,
    menuStyle
};