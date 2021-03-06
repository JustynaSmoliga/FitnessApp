import React from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PoolOutlinedIcon from "@material-ui/icons/PoolOutlined";
import EmojiFoodBeverageOutlinedIcon from "@material-ui/icons/EmojiFoodBeverageOutlined";
import ExposureOutlinedIcon from "@material-ui/icons/ExposureOutlined";
import Meals from "../meals/Meals";
import AddWeight from "../add-weight/AddWeight";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

export default function DiaryNavBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          centered
          aria-label="full width tabs example"
        >
          <Tab
            label={
              <div>
                <EmojiFoodBeverageOutlinedIcon
                  style={{ verticalAlign: "middle", marginRight: "15px" }}
                />
                Meals
              </div>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <div>
                <PoolOutlinedIcon
                  style={{ verticalAlign: "middle", marginRight: "15px" }}
                />
                Exercises
              </div>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <div>
                <ExposureOutlinedIcon
                  style={{ verticalAlign: "middle", marginRight: "15px" }}
                />
                Weight
              </div>
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Meals />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Exercises component
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <AddWeight />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
