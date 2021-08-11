import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import { CustomLink, NavBarContent } from './styles';
import SearchBar from './SearchBar';
import styled from 'styled-components'
import { useThemeContext } from '../context/ThemeStore';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        background: "linear-gradient(to right, rgba(28,44,65,1) 0%, #0e5b8b 50%)",
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,

    },
    drawerPaper: {
        width: drawerWidth,
        background: "linear-gradient(189deg, rgba(28,44,65,1) 0%, #1c4d6b 50%)",
        // height: "20px",
        color: '#fff',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'space-between',
    },

    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

const Footer = styled.footer`
    position: absolute;
    bottom: 2px;
    left: 1em;
`

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const { isMediaQuerySm } = useThemeContext()


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (

        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                        style={{ marginRight: 0 }}
                    >
                        <MenuIcon />
                    </IconButton>



                    <NavBarContent>

                        <a href="/"><img width="100px" src="https://fontmeme.com/permalink/210609/2be61abb18a6a45c288b615ff23704f6.png" alt="netflix-font" border="0" /></a>

                        <CustomLink href="/movie">Filmes</CustomLink>
                        <CustomLink href="/tv">Series</CustomLink>


                        <SearchBar />
                    </NavBarContent>
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}><CustomLink style={{ marginLeft: '2rem' }}>Menu</CustomLink>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon color="error" /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List className=" flex flex-col">
                    <ListItem>
                        <CustomLink href="/movie/">
                            Filmes
                        </CustomLink>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <CustomLink href="/tv/">
                            Series
                        </CustomLink>
                    </ListItem>
                    <ListItem>
                        <CustomLink href="/movie/top-rated/1">
                            Top IMDB
                        </CustomLink>
                        <a style={{ display: "none" }} href="/tv/top-rated/1"></a>
                    </ListItem>
                    <Divider />

                    <ListItem>
                        <CustomLink href="/release/1">
                            Lançamentos
                        </CustomLink>
                    </ListItem>
                    <ListItem className="self-end">

                    </ListItem>
                </List>

                <Footer>
                    <CustomLink className="block mb-2" href="/options">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Opções
                    </CustomLink>
                    Make with ❤️ by Frankllin</Footer>
            </Drawer>
        </div >
    );
}
