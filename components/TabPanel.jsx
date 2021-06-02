import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SimilarMedia from './SimilarMedia'

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
        <Box p={3}>
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
    // flexGrow: 1,
    backgroundColor: "#1c2c41",
    width: "100%",
    // height: '100%',
    minHeight: '300px',
    maxHeight: 'auto',
    
  },
}));

export default function SimpleTabs({id, type, overview, videos}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#161f2b"}}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Sobre" {...a11yProps(0)} />
          <Tab label="Similares" {...a11yProps(1)} />
          <Tab label="Thrilers" {...a11yProps(2)} />
        
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
    {overview}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SimilarMedia id={id} type={type}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        {videos ? 
          videos.map((item, id) => (
            
            <iframe key={id} width="560" height="315" src={`https://www.youtube.com/embed/${item.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          ))
        :
        ""
      }
      </TabPanel>
      
    </div>
  );
}
