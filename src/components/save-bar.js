import React from 'react';
import 'react/addons';

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

export default class SaveBar extends React.Component {
  render() {
    return (
      <ReactCSSTransitionGroup transitionName='bottom-bar'>
      {
        !this.props.file || !this.props.file.changed ? null :
          <button style={styles.button}
                  onClick={this.props.save.bind(this, undefined)}
                  className='bottom-bar'
                  key='bottom-bar'>
            Save
          </button>
      }
      </ReactCSSTransitionGroup>
    );
  }
}

const styles = {
  button: {
    position: 'relative',
    background: '#2ecc71',
    fontSize: '2em',
    width: '100%',
    padding: '15px 0',
    boxShadow: '0 0 5px 2px #10582F',
    transition: 'all .3s ease',
    color: '#fff'
  }
}
