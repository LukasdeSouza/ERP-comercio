import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import InventoryIcon from '@mui/icons-material/Inventory';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';

import { Menu, MenuItem, Stack } from '@mui/material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useState } from 'react';

const drawerWidth = 270;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(

  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const menuItems = [
  {
    label: 'Financeiro',
    icon: <AccountBalanceWalletIcon sx={{ color: '#9CC4E4' }} />
  },
  // {
  //   label: 'Produtos',
  //   icon: <InventoryIcon sx={{ color: '#9CC4E4' }} />
  // },
  {
    label: 'Despesas',
    icon: <LocalAtmIcon sx={{ color: '#9CC4E4' }} />
  },
  {
    label: 'Funcionarios',
    icon: <EngineeringIcon sx={{ color: '#9CC4E4' }} />
  },
  {
    label: 'Clientes',
    icon: <EmojiPeopleIcon sx={{ color: '#9CC4E4' }} />
  },
  {
    label: 'Contratos',
    icon: <DescriptionIcon sx={{ color: '#9CC4E4' }} />
  }
]

const RootLayout = ({ children }) => {
  const navigate = useNavigate()
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const location = useLocation()
  const openMenu = Boolean(anchorEl);

  const isAuthenticated = () => {
    let token = localStorage.getItem('@ERP-token')
    if (!token) {
      navigate('/')
    }
  }

  const onClickNavigate = (index, text) => {
    let textLabel = text.label.toLowerCase()
    navigate(`/${textLabel}`)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onClickLogout = () => {
    localStorage.removeItem('@ERP-token');
    navigate('/', { replace: true })
  }


  useEffect(() => {
    isAuthenticated()
  }, [])

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} elevation={0}>
        <Toolbar sx={{ background: '#fff' }} >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon color='primary' />
          </IconButton>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            width={'100%'}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              fontFamily={'Poppins'}
              color={"#1976d2"}>
              ERP Serviços
            </Typography>
            <IconButton onClick={handleClick}>
              <AccountCircleIcon
                sx={{ color: '#1976d2', fontSize: '32px' }} />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem
                onClick={() => navigate('/perfil')}
                sx={{ fontFamily: 'Poppins', fontSize: 14, fontWeight: 300 }}>
                Perfil
              </MenuItem>
              <MenuItem
                onClick={() => navigate('/configuracoes')}
                sx={{ fontFamily: 'Poppins', fontSize: 14, fontWeight: 300 }}>
                Configurações
              </MenuItem>
              <MenuItem
                onClick={onClickLogout}
                sx={{ fontFamily: 'Poppins', fontSize: 14, fontWeight: 300 }}>
                Sair
              </MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            background: "#1960a7",
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ display: "flex", alignItems: "center" }}>
          <Typography color={'#fff'} fontFamily={'Poppins'} flexGrow={0.4}>Logo Empresa</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon color='#fff' /> : <ChevronRightIcon color='#fff' />}
          </IconButton>
        </DrawerHeader>
        <List>
          {menuItems.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                sx={{
                  ...(location.pathname.includes(text.label.toLowerCase()) && {
                    borderRight: '4px solid',
                    borderRightColor: '#eee',
                    background: '#1250a7',
                  })
                }}
                onClick={(e) => onClickNavigate(index, text)}>
                <ListItemIcon sx={{ color: "#fff", minWidth: 48 }}>
                  {text.icon}
                </ListItemIcon>
                <Typography
                  fontFamily={'Poppins'}
                  fontSize={14}
                  fontWeight={300}
                  color={'#fff'}>
                  {text.label}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
      <Toaster position='top-center' />
    </Box>
  );
}

export default RootLayout