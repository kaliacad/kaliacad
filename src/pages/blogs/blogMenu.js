import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Home, MobileFriendly, Sms } from "@mui/icons-material";
import { AppBar } from "@mui/material";
import Homeblogs from "./homeblogs";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BlogMenus({search}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   

      <Box
        component={"main"}
        sx={{
          flexGrow: 1,
          pt: 10,
          pl: 3,
          mr: 5,
          mt:-8
        }}
      >
        <Box >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <AppBar position="static" sx={{bgcolor:"#fff"}} >
                <Tabs
                value={value}
                onChange={handleChange}
                >
                <Tab label="Home" {...a11yProps(0)} 
                iconPosition="start"
                icon={<Home sx={{color:"blue", fontSize:20}} />} />

                <Tab label="Article" {...a11yProps(1)} 
                iconPosition="start"  
                icon={<MobileFriendly sx={{color:"grey", fontSize:20}} />}
                />

                <Tab label="Post" {...a11yProps(2)} 
                iconPosition="start"  
                icon={<Sms sx={{color:"green", fontSize:20}} />}
                />
                </Tabs>
            </AppBar>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Homeblogs search={search} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>

          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>

          </CustomTabPanel>
        </Box>
      </Box>
  );
}