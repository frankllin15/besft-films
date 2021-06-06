import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
      color: '#fff'
    }
},
    
}));

export default function PaginationControlled({page, setPage, maxPage}) {
  const classes = useStyles();
 
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({
        top: 0,
        left: 100,
        behavior: 'smooth'
      })
  };

  return (
    <div className={classes.root}>
      <Typography>Page: {page}</Typography>
      <Pagination size={'large'} color={'secondary'}  count={maxPage} page={page} onChange={handleChange} />
    </div>
  );
}
