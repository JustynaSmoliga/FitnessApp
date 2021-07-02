import React from "react";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import { SvgIconProps } from "@material-ui/core";
import RemoveRedEyeOutlinedIcon from "@material-ui/icons/RemoveRedEyeOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import EmojiEventsOutlinedIcon from "@material-ui/icons/EmojiEventsOutlined";
import NetworkCheckOutlinedIcon from "@material-ui/icons/NetworkCheckOutlined";
import {NavLink } from "react-router-dom";
import { mainTheme } from "../../theme/customMaterialUiTheme";
import { Divider } from "@material-ui/core";


const useStyles = makeStyles({
  root: {
    width: 280,
    color: "rgba(74, 72, 78, 0.7)",
   
  },
  logo: { color:mainTheme.palette.secondary.main },
  activeLink: {
    "&.MuiListItem-button&.active": {
        color: mainTheme.palette.text.primary,
        background: '#e7e7e7'
    },
  },
});

interface NewMenuItemProps {
  text: string;
  icon: React.ReactElement<SvgIconProps>;
  linkPath: string;
}

const NewMenuItem: React.FC<NewMenuItemProps> = (props) => {
  const classes = useStyles();

  return (
    <MenuItem
      className={classes.activeLink}
      component={NavLink}
      to={props.linkPath}
    >
      <ListItemIcon>{props.icon}</ListItemIcon>
      <Typography variant="inherit">{props.text}</Typography>
    </MenuItem>
  );
};

export default function Menu() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <MenuList>
        <p className={classes.logo}>FitnessApp</p>
        <Divider/>
        <NewMenuItem
          text="Overview"
          icon={<RemoveRedEyeOutlinedIcon fontSize="small" />}
          linkPath="/overview"
        />
        <NewMenuItem
          text="My diary"
          icon={<AssignmentOutlinedIcon fontSize="small" />}
          linkPath="/diary"
        />
        <NewMenuItem
          text="My goals"
          icon={<EmojiEventsOutlinedIcon fontSize="small" />}
          linkPath="/goals"
        />
        <NewMenuItem
          text="My weights"
          icon={<NetworkCheckOutlinedIcon fontSize="small" />}
          linkPath="/weights"
        />
        <NewMenuItem
          text="Log out"
          icon={<ExitToAppOutlinedIcon fontSize="small" />}
          linkPath="/login"
        />
        <Divider/>
        <p>Personal data button</p>
      </MenuList>
    </Paper>
  );
}
