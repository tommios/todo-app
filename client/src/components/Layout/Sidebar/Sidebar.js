import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {logoutUser} from "../../../store/auth/actions"
import {Paper, Avatar, Box, Button} from "@material-ui/core";
import NotesOutlinedIcon from "@material-ui/icons/NotesOutlined";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import useStyles from "./style";

const Sidebar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const username = useSelector((state) => state.auth.user.username);
    let history = useHistory();

    const handleClickLogout = () => {
        dispatch(logoutUser())
        history.push("/login");
    }

    return (
        <>
            <Avatar alt="user-avatar" src="" className={classes.avatar}/>
            <Paper className={classes.userInfo}>{username}</Paper>
            <Box m={2} className={classes.menu}>
                <Box m={2}>
                    <Button startIcon={<NotesOutlinedIcon/>} className={classes.btn}>Todo</Button>
                </Box>
                <Box m={2}>
                    <Button startIcon={<AccountBoxOutlinedIcon/>} className={classes.btn}>Account</Button>
                </Box>
                <Box m={2}>
                    <Button startIcon={<ExitToAppOutlinedIcon/>}
                            onClick={handleClickLogout} className={classes.btn}>Logout</Button>
                </Box>
            </Box>
        </>
    );
};

export default Sidebar;
