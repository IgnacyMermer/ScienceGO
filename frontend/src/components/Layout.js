import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        width: 240,
    }
}));

export default function Layout(props) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <AppBar
                position="fixed"
            >
                <Toolbar style={{marginLeft: !open ? '0px':'240px', transition: '0.22s'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        style={{display: !open?'flex': 'none'}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Science GO
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
                style={{width: '240px'}}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Strona główna', 'Czat', 'Forum', 'Kalkulatory', 'Teoria'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Ustawienia', 'Twoje konto'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main style={{paddingTop: '64px', marginLeft: open ? '240px': '0', backgroundColor: '#8469bf', 
            minHeight: '100vh', transition: '0.22s'}}>
                {props.children}
            </main>
        </div>
    )
}
