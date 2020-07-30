import React, {useState} from 'react';
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
import Checkscore from '../Components/Checkscore';
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
    const [currentPagename, setCurrentPagename] = useState("어서오세요");

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (e) => {
        console.log(e.currentTarget.name);
        setCurrentPagename(e.currentTarget.name); //페이지 이동시 해당 페이지의 이름을 가져와 맨위에 띄워주기 위함
        setAnchorEl(null);
    };


    return (
        <Router basename="/ggd_webapp">
            <div style={{position:'fixed'}}>
                <Button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                >
                    ▤
                </Button>
            </div>
            
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
                    <Link name="홈" className="linkitem" to="/" onClick={handleClose}><ListItemText primary="Home"></ListItemText></Link>
                   
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemIcon>
                        <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <Link name="표 보기" className="linkitem" to="/showall" onClick={handleClose}><ListItemText primary="ShowAll"></ListItemText></Link>
                   
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemIcon>
                        <DraftsIcon fontSize="small" />
                    </ListItemIcon>
                    <Link name="연습 하기" className="linkitem" to="/practice" onClick={handleClose}><ListItemText primary="Practice"></ListItemText></Link>
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemIcon>
                        <InboxIcon fontSize="small" />
                    </ListItemIcon>
                    <Link name="시험 보기" className="linkitem" to="/easytest" onClick={handleClose}><ListItemText primary="EasyTest"></ListItemText></Link>
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemIcon>
                        <InboxIcon fontSize="small" />
                    </ListItemIcon>
                    <Link name="성적 확인" className="linkitem" to="/checkscore" onClick={handleClose}><ListItemText primary={props.name + '의 점수확인'}></ListItemText></Link>
                </StyledMenuItem>
            </StyledMenu>
            <div style={{textAlign:"center", width:'100%'}}>
                <Route exact path="/" component={Homepage} />
                <Route path='/showall' component={Showall} />
                <Route path='/practice' component={Practice} />
                <Route path='/easytest' component={EasyTest} />
                <Route path='/checkscore' component={Checkscore} />
            </div>

        </Router>
    )
}

export default Navibar;