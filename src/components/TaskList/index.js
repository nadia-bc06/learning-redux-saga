import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import TaskItem from '../TaskItem';

export class TaskLits extends Component {
	render() {
        const {classes, tasks , status, index} = this.props;
		return (
			<Grid item md={4} xs={12} key={index}>
				<Box mt={2} mb={2}>
					{' '}
					<div className={classes.status}>{status.label}</div>
				</Box>
				<div className={classes.wrapperListTask}>
					{tasks.map((task) => {
						return (
                            <TaskItem key={task.id} status={status} task={task}/>
						);
					})}
				</div>
			</Grid>
		);
	}
}

export default withStyles(styles)(TaskLits);
