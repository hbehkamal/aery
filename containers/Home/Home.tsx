"use client";

import { AppBar, Box, Tab, Tabs } from "@mui/material";
import SwipeableViews from "react-swipeable-views";

import { Search } from "@/components";
import { a11yTabProps } from "@/utils";

import useHome from "./Home.hook";
import { TabPanel } from "@/components";

const Home = () => {
  const { tab, handleTabChange, handleSwipeView } = useHome();
  return (
    <Box>
      <AppBar position="static">
        <Search />
        <Tabs
          value={tab}
          onChange={handleTabChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="Select date"
        >
          <Tab label="Today" {...a11yTabProps(0)} />
          <Tab label="Tomorrow" {...a11yTabProps(1)} />
          <Tab label="10 Days" {...a11yTabProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews axis="x" index={tab} onChangeIndex={handleSwipeView}>
        <TabPanel value={tab} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={tab} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={tab} index={2}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};

export default Home;
