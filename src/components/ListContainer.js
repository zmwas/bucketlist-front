import React from 'react';

class ListContainer extends React.Component {
  render() {
    const styles = {
      root: {
        marginBottom: 24,
        marginRight: 24,
        width: '100%',
      },
      container: {
        border: 'solid 1px #d9d9d9',
        borderBottom: 'none',
        height: this.props.height,
        overflow: 'hidden',

      },

    };

    return (
      <div style={styles.root}>
        <div style={styles.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ListContainer;
