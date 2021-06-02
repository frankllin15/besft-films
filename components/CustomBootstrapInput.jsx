import InputBase from '@material-ui/core/InputBase';
import { fade, withStyles } from '@material-ui/core/styles';


const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
        
      },
    },
    input: {
      right: 0,
      borderRadius: 4,
      position: 'relative',
      backgroundColor: '#2e2946',
      border: '1px solid #dd2941',
      color: '#c4c4c4',
      fontSize: 16,
      width: '400px',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))(InputBase);

  export default BootstrapInput