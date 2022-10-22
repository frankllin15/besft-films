import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import json2mq from 'json2mq';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
      color: '#fff',
    }
},
    
}));

export default function PaginationControlled({page, setPage, maxPage, scrollTo}) {
  const classes = useStyles();
  const isMediaQuerySm = useMediaQuery(
    json2mq({
      maxWidth: 600,
    })
  )

 
  const handleChange = (event, value) => {
    setPage(value);

    if (scrollTo)
      scrollTo.current.scrollIntoView()
    else
    window.scrollTo({
        top: 0,
        left: 100,
        // behavior: 'smooth'
      })
  };

  return (
    <div className={classes.root}>
      <Typography>Page: {page}</Typography>
      <Pagination size={isMediaQuerySm?'small' : 'large'} color={'secondary'}  count={maxPage} page={page} onChange={handleChange} />
    </div>
  );
}
