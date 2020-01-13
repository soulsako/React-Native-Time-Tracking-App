import React, { Component } from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";
export default class EditableTimer extends Component {
  state = {
    editFormOpen: false
  };
  handleFormClose = () => this.setState({ editFormOpen: false });

  handleEditPress = () => this.openForm();

  openForm = () => this.setState({ editFormOpen: true });

  closeForm = () => this.setState({ editFormOpen: false });

  handleSubmit = timer => {
    const { onFormSubmit } = this.props;
    onFormSubmit(timer);
    this.closeForm();
  };

  render() {
    const { id, title, project, elapsed, isRunning } = this.props;
    const { editFormOpen } = this.state;
    if (editFormOpen) {
      return (
        <TimerForm
          id={id}
          title={title}
          project={project}
          onFormClose={this.handleFormClose}
          onFormSubmit={this.handleSubmit}
        />
      );
    }
    return (
      <Timer
        id={id}
        title={title}
        project={project}
        elapsed={elapsed}
        isRunning={isRunning}
        onEditPress={this.handleEditPress}
      />
    );
  }
}
