import React from 'react'
import { styled, alpha } from '@mui/material/styles';

import Toolbar from '@mui/material/Toolbar';

import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';

import styles from './style.module.css';

const Search = () => {

    const Search1 = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '15ch',

            },
        },
    }));
    return (
        <div className={styles.SearchBox}>


            <Search1 className={styles['search']}>
                <SearchIconWrapper>
                    <SearchIcon sx={{ color: 'grey' }} />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}

                />
            </Search1>
            {/* <Toolbar sx={{ backgroundColor: 'white', borderRadius: '10px' }} >

            </Toolbar> */}
        </div>
    )
}

export default Search;



















