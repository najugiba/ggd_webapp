import React from 'react';
import '../CSSs/Navibar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import EasyTest from '../Components/EasyTest';
import HardTest from '../Components/HardTest';
import Showall from '../Components/Showall';
import Practice from '../Components/Practice';
import Homepage from '../Components/Homepage';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);



function Navibar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Router basename="/ggd_webapp">
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                ▤
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemIcon>
                        <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <Link className="linkitem" to="/" onClick={handleClose}><ListItemText primary="Home"></ListItemText></Link>
                   
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemIcon>
                        <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <Link className="linkitem" to="/showall" onClick={handleClose}><ListItemText primary="ShowAll"></ListItemText></Link>
                   
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemIcon>
                        <DraftsIcon fontSize="small" />
                    </ListItemIcon>
                    <Link className="linkitem" to="/practice" onClick={handleClose}><ListItemText primary="Practice"></ListItemText></Link>
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemIcon>
                        <InboxIcon fontSize="small" />
                    </ListItemIcon>
                    <Link className="linkitem" to="/easytest" onClick={handleClose}><ListItemText primary="EasyTest"></ListItemText></Link>
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemIcon>
                        <InboxIcon fontSize="small" />
                    </ListItemIcon>
                    <Link className="linkitem" to="/hardtest" onClick={handleClose}><ListItemText primary="HardTest"></ListItemText></Link>
                </StyledMenuItem>
            </StyledMenu>
            <div style={{textAlign:"center", width:'80%'}}>
                <p className="hello_p">{props.name}님 환영합니다.</p>
                <Route exact path="/" component={Homepage} />
                <Route path='/showall' component={Showall} />
                <Route path='/practice' component={Practice} />
                <Route path='/easytest' component={EasyTest} />
                <Route path='/hardtest' component={HardTest} />
            </div>

        </Router>
    )
}

export default Navibar;