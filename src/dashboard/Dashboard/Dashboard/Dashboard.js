import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Dashboard.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import LanguageIcon from '@mui/icons-material/Language';
import PaymentsIcon from '@mui/icons-material/Payments';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import {
    NavLink
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import { Outlet, useNavigate } from 'react-router';

const drawerWidth = 220;
function Dashboard(props) {
    const { allFirebase } = useAuth();
    const { user, logout } = allFirebase;
    const navigate = useNavigate();
    const handleLogOut = () => {
        logout(navigate)
    }
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className="side-bar">
            <Toolbar style={{ alignItems: "center", justifyContent: "center" }}>
                <div className="text-center my-3">
                    <img style={{ height: "60px", width: "60px", borderRadius: "50%" }} className="img-fluid" src={user.photoURL} alt="logo" />
                    <h5 className="my-2">{user?.displayName}</h5>
                </div>
            </Toolbar>
            <Divider />
            <List>
                <NavLink className="side-menu" to='/'>
                    <ListItem button>
                        <ListItemIcon>
                            {<LanguageIcon className="side-icon" />}
                        </ListItemIcon>
                        Visit Site
                        <ListItemText />
                    </ListItem>
                </NavLink>
                <NavLink className="side-menu" to='/dashboard'>
                    <ListItem button>
                        <ListItemIcon >
                            {<DashboardIcon className="side-icon" />}
                        </ListItemIcon>
                        Dashboard
                        <ListItemText />
                    </ListItem>
                </NavLink>
                <NavLink className="side-menu" to='/dashboard/add-category'>
                    <ListItem button>
                        <ListItemIcon >
                            {<AddBusinessIcon className="side-icon" />}
                        </ListItemIcon>
                        Add Category
                        <ListItemText />
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink className="side-menu" to='/dashboard/products'>
                    <ListItem button>
                        <ListItemIcon >
                            {<ListAltIcon className="side-icon" />}
                        </ListItemIcon>
                        Products
                        <ListItemText />
                    </ListItem>
                </NavLink>
                <NavLink className="side-menu" to='/dashboard/add-product'>
                    <ListItem button>
                        <ListItemIcon >
                            {<AddBusinessIcon className="side-icon" />}
                        </ListItemIcon>
                        Add Product
                        <ListItemText />
                    </ListItem>
                </NavLink>
                <Divider /><Divider />
                <div className="side-menu dashboard-logout">
                    <ListItem onClick={handleLogOut} button>
                        <ListItemIcon>
                            {<LogoutIcon className="side-icon" />}
                        </ListItemIcon>
                        <span >Logout</span>
                        <ListItemText />
                    </ListItem>
                </div>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} className="main-part">
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar className="dashboard-header" >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {user?.email}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block', },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                className="dashboard-body"
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <div>
                    <Outlet>

                    </Outlet>
                </div>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;