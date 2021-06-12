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
      backgroundColor: '#ebebeb',
      // border: '1px solid #122764',
      color: '#122764',
      fontSize: 16,
      width: '30vw',
      height: ".5rem",
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