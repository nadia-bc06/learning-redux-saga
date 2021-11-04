import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import styles from "./styles";
import { STATUSES } from "../../constants";
import TaskList from "../../components/TaskList";
import { TaskForm } from "../../components/TaskForm";

const listTask = [
  {
    id: 1,
    title: "Read book",
    description: "Read material ui book",
    status: 0,
  },
  {
    id: 2,
    title: "Play football",
    description: "With my friend",
    status: 2,
  },
  {
    id: 3,
    title: "Play game",
    description: "",
    status: 1,
  },
];

export class TaskBoard extends Component {
  state = {
    open: false,
  };

  renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const filteredTask = listTask.filter(
            (task) => task.status === status.value
          );
          return (
            <TaskList
              key={index}
              tasks={filteredTask}
              status={status}
              index={index}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  renderForm = () => {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon /> Them moi cong viec
        </Button>

        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(TaskBoard);
