import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';




function TabPanel(props) {
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
        <Box p={1}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {

    backgroundColor: "#1c2c41da",
    width: "100%",
    
    minHeight: '300px',
    maxHeight: 'auto',
    '& .MuiBox-root': {
      padding: 0
    }
  },
}));

export default function SimpleTabs({ imdb_id, type, data, videos, similarMedia }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#161f2b" }}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Assitir" {...a11yProps(0)} />
          {
            videos ?
              <Tab label="Thrilers" {...a11yProps(1)} />
              :
              ""
          }

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>

        <iframe  src={`https://embed.warezcdn.com/${type == "tv" ? "serie" : "filme"}/${imdb_id}`}  width="100%" height="400px" allowFullScreen={true} scrolling="no" frameBorder="0"></iframe>
      </TabPanel>
      
      <TabPanel value={value} index={1}>
        {videos ?
          videos.map((item, id) => (
            <div key={id} style={{ position: "relative", overflow: "visible", paddingTop: "56.25%", marginBottom: "8px" }}>
              <iframe style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0
              }} src={`https://www.youtube.com/embed/${item.key}`}  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </div>
          ))
          :
          ""
        }
      </TabPanel>

    </div>
  );
}
