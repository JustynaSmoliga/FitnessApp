import React from "react";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import { SvgIconProps } from "@material-ui/core";
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
import NetworkCheckOutlinedIcon from '@material-ui/icons/NetworkCheckOutlined';

const useStyles = makeStyles({
  root: {
    width: 230,
  },
});

interface NewMenuItemProps {
  text: string;
  icon: React.ReactElement<SvgIconProps>;
}

const NewMenuItem: React.FC<NewMenuItemProps> = (props) => {
  return (
    <MenuItem>
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
        <NewMenuItem
          text="Overview"
          icon={<RemoveRedEyeOutlinedIcon fontSize="small" />}
        />
        <NewMenuItem
          text="My diary"
          icon={<AssignmentOutlinedIcon fontSize="small" />}
        />
        <NewMenuItem text="My goals" icon={<EmojiEventsOutlinedIcon fontSize="small" />} />
        <NewMenuItem text="My weights" icon={<NetworkCheckOutlinedIcon fontSize="small" />} />
        <NewMenuItem text="Log out" icon={<ExitToAppOutlinedIcon fontSize="small" />} />
      </MenuList>
    </Paper>
  );
}

// import React from 'react';
// import PropTypes from 'prop-types';
// import MenuList from '@material-ui/core/MenuList';
// import MenuItem from '@material-ui/core/MenuItem';
// import Paper from '@material-ui/core/Paper';
// import { withStyles } from '@material-ui/core/styles';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';

// const styles = theme => ({
//   menuItem: {
//     '&:focus': {
//       backgroundColor: theme.palette.primary.main,
//       '& $primary, & $icon': {
//         color: theme.palette.common.white,
//       },
//     },
//   },
//   primary: {},
//   icon: {},
// });

// function ListItemComposition(props) {
//   const { classes } = props;

//   return (
//     <Paper>
//       <MenuList>
//         <MenuItem className={classes.menuItem}>
//           <ListItemIcon className={classes.icon}>
//             <SendIcon />
//           </ListItemIcon>
//           <ListItemText classes={{ primary: classes.primary }} inset primary="Sent mail" />
//         </MenuItem>
//         <MenuItem className={classes.menuItem}>
//           <ListItemIcon className={classes.icon}>
//             <DraftsIcon />
//           </ListItemIcon>
//           <ListItemText classes={{ primary: classes.primary }} inset primary="Drafts" />
//         </MenuItem>
//         <MenuItem className={classes.menuItem}>
//           <ListItemIcon className={classes.icon}>
//             <InboxIcon />
//           </ListItemIcon>
//           <ListItemText classes={{ primary: classes.primary }} inset primary="Inbox" />
//         </MenuItem>
//       </MenuList>
//     </Paper>
//   );
// }

// ListItemComposition.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ListItemComposition);
