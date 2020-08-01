import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EasyTest from '../Components/EasyTest';
import Checkscore from '../Components/Checkscore';
import Showall from '../Components/Showall';
import Practice from '../Components/Practice';
import Homepage from '../Components/Homepage';
import '../CSSs/Navibar2.css';
const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 'auto'
    },
};

class Navibar2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            toptitle : '',
        };
    }
    handleDrawerToggle = (e) => {
        this.setState({ 
        toggle: !this.state.toggle,
        toptitle : e.target.name
     })
    }
    render() {
        const { classes } = this.props;
        const { toptitle } = this.state;
        return (
            <Router basename="/ggd_webapp">
                <div className={classes.root}>
                    <AppBar className="Top_bar" position="static" style={{display:'block'}}>
                        <IconButton className={classes.menuButton} id="hamburgerMenu" color="inherit" onClick={this.handleDrawerToggle}>
                            <MenuIcon />  
                        </IconButton>
                        <p className="Top_bar_text">{toptitle}</p>
                    </AppBar>
                    <Drawer open={this.state.toggle}>
                        <div className="Navibar_imgbox">이미지</div>
                        <MenuItem onClick={this.handleDrawerToggle}><Link name="홈" className="linkitem" to="/" >홈페이지</Link></MenuItem>
                        <MenuItem id="구구단 표" onClick={this.handleDrawerToggle}><Link name="구구단표 보기" className="linkitem" to="/showall">구구단 표</Link></MenuItem>
                        <MenuItem id="연습 하기" onClick={this.handleDrawerToggle}><Link name="연습 하기" className="linkitem" to="/practice">연습 하기</Link></MenuItem>
                        <MenuItem id="시험 보기" onClick={this.handleDrawerToggle}><Link name="시험 보기" className="linkitem" to="/easytest">시험 보기</Link></MenuItem>
                        <MenuItem id="성적 확인" onClick={this.handleDrawerToggle}><Link name="성적 확인" className="linkitem" to="/checkscore">{this.props.name}의 성적 확인</Link></MenuItem>

                    </Drawer>
                </div>
                <div style={{textAlign:"center", width:'100%'}}>
                <Route exact path="/" component={Homepage} />
                <Route path="/showall" component={Showall} />
                <Route path="/practice" component={Practice} />
                <Route path="/easytest" component={EasyTest} />
                <Route path="/checkscore" component={Checkscore} />
            </div>
            </Router>
        );
    }
}

export default withStyles(styles)(Navibar2);
