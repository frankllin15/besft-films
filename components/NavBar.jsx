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

                        <a href="/"><img width={isMediaQuerySm ? "90px" : "150"} src="https://fontmeme.com/permalink/210609/2be61abb18a6a45c288b615ff23704f6.png" alt="netflix-font" border="0" /></a>

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
                <List>
                    <ListItem>
                        <CustomLink href="/movie/">
                            Filmes
                        </CustomLink>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <CustomLink href="/tv">
                            Series
                        </CustomLink>
                    </ListItem>
                    <ListItem>
                        <CustomLink href="/top-rated">
                            Top IMDB
                        </CustomLink>
                    </ListItem>
                    <Divider />
                   
                    <ListItem>
                        <CustomLink href="release">
                            Lançamentos
                        </CustomLink>
                    </ListItem>
                </List>
                <Footer>Make with ❤️ by Frankllin</Footer>
            </Drawer>
        </div >
    );
}
