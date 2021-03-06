import useStyles from "../ResetPassword/style";
import {Avatar, Container, CssBaseline, Typography} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, {useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {emailConfirm} from "../../store/auth/actions"
let timer;
const EmailConfirm = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const {hash} = useParams();
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            dispatch(emailConfirm(hash, user))
                .then(() => {
                    history.push("/");
                })
        }, 1500);
        return () => {
            clearTimeout(timer)
        }

    }, [dispatch, history, hash, user]);


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5" align={"center"}>
                    Congratulations!
                </Typography>
                <br/>
                <Typography component="h1" variant="h5" align={"center"}>
                    Your email has been successfully verified!
                </Typography>

            </div>
        </Container>
    );
}

export default EmailConfirm;