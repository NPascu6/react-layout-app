import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/logo.svg';

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1em',
    },
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5em',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '45px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    borderRadius: '0px',
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
    color: 'white',
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    color: 'white',
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.8,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.norboOrange,
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
}));

const Header = ({
  value, setValue, selectedIndex, setSelectedIndex,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [anchor, setAnchor] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (e, valueToChange) => {
    setValue(valueToChange);
  };

  const handleClick = (e) => {
    if (anchor !== e.currentTarget) {
      setAnchor(e.currentTarget);
      setOpenMenu(true);
    }
  };

  const handleClose = () => {
    setAnchor(null);
    setOpenMenu(false);
  };

  const menuOptions = [
    {
      name: 'Custom Software Development',
      link: '/customsoftware',
    },
    {
      name: 'Custom iOS & Android Development',
      link: '/mobiledevelopment',
    },
    {
      name: 'Custom Web Application Development',
      link: '/customwebapplications',
    },
  ];

  const drawerOptions = [
    {
      id: 0,
      nameText: 'Home',
      to: '/',
    },
    {
      id: 1,
      nameText: 'Services',
      to: '/services',
      ariaOwnes: 'simple-menu',
      ariaHasPopUp: true,
      onMouseOver: (e) => handleClick(e),
    },
    {
      id: 2,
      nameText: 'About',
      to: '/about',
    },
    {
      id: 3,
      nameText: 'Contact',
      to: '/contact',
    },
  ];

  const handleMenuItemClick = (e, index) => {
    setAnchor(null);
    setOpenMenu(false);
    setSelectedIndex(index);
  };

  useEffect(() => {
    switch (window.location.pathname) {
    case '/':
      setValue(0);
      break;
    case '/customsoftware':
      setValue(1);
      setSelectedIndex(0);
      break;
    case '/mobiledevelopment':
      setValue(1);
      setSelectedIndex(1);
      break;
    case '/customwebapplications':
      setValue(1);
      setSelectedIndex(2);
      break;
    case '/services':
      setValue(1);
      break;
    case '/about':
      setValue(2);
      break;
    case '/estimate':
      setValue(5);
      break;
    case '/contact':
      setValue(3);
      break;
    default:
      break;
    }
  }, [value, setValue, selectedIndex, setSelectedIndex, menuOptions, drawerOptions]);

  const tabs = (
    <>
      <Tabs
        value={value}
        className={classes.tabContainer}
        onChange={handleChange}
        indicatorColor="primary"
      >
        {drawerOptions.map((option) => (
          <Tab
            key={option.id}
            aria-owns={option.ariaOwnes ? option.ariaOwnes : null}
            aria-haspopup={option.ariaHasPopUp ? option.ariaHasPopUp : null}
            onMouseOver={option.onMouseOver}
            className={classes.tab}
            label={option.nameText}
            component={Link}
            to={option.to}
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        to="/estimate"
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => setValue(5)}
      >
        Free Estimate
      </Button>
      <Menu
        style={{ zIndex: 1402 }}
        keepMounted
        classes={{ paper: classes.menu }}
        id="simple-menu"
        anchorEl={anchor}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {
          menuOptions.map((option, i) => (
            <MenuItem
              key={option.link}
              onClick={(event) => {
                setValue(1);
                handleClose();
                handleMenuItemClick(event, i);
              }}
              selected={i === selectedIndex}
              component={Link}
              to={option.link}
              classes={{ root: classes.menuItem }}
            >
              {option.name}
            </MenuItem>
          ))
        }
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        classes={{ paper: classes.drawer }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {
            drawerOptions.map((option) => (
              <ListItem
                key={option.id}
                selected={value === option.id}
                classes={{ selected: classes.drawerItemSelected }}
                className={classes.drawerItem}
                onClick={() => { setOpenDrawer(false); setValue(option.id); }}
                divider
                button
                component={Link}
                to={option.to}
              >
                <ListItemText
                  className={classes.drawerItem}
                  disableTypography
                >
                  {option.nameText}
                </ListItemText>
              </ListItem>
            ))
          }
          <ListItem
            className={classes.drawerItemEstimate}
            selected={value === 4}
            classes={{ root: classes.drawerItemSelected, selected: classes.drawerItemSelected }}
            onClick={() => { setOpenDrawer(false); setValue(4); }}
            divider
            button
            component={Link}
            to="/estimate"
          >
            <ListItemText
              className={classes.drawerItem}
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>

      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar color="primary" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              disableRipple
            >
              <img
                className={classes.logo}
                alt="company logo"
                src={logo}
              />
            </Button>
            {
              matches ? drawer : tabs
            }
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  // eslint-disable-next-line react/require-default-props
  window: PropTypes.func,
};

Header.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};
