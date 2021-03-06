import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './AddPlayerInput.css';
import PositionSelect from './PositionSelect'

class AddPlayerInput extends Component {
  render() {
    const { positionList } = this.props;
    return (
      <div>
        <input
        type="text"
        autoFocus={true}
        className={classnames('form-control inlineBlock', styles.addPlayerInput)}
        placeholder="Type the name of a player"
        value={this.state.name}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)}
        />
        <PositionSelect positionList={positionList} onSelectChange={this.handleSelectChange.bind(this)} />
      </div>
      
    );
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      optionId: 0,
    };
  }

  handleSelectChange(optionId){
    this.setState({ optionId: optionId });
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.addPlayer(name,this.state.optionId);
      this.setState({ name: '' });
    }
  }
}

AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default AddPlayerInput;
