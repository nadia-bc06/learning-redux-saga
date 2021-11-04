import { withStyles, ThemeProvider } from '@material-ui/styles';
import styles from './styles';
import TaskBoard from '../TaskBoard';
import theme from '../../common/Theme';

function App(props) {
  // var {classes} = props;
  return (
    <ThemeProvider theme={theme}>
      <TaskBoard />
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
