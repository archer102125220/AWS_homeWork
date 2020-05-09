import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { withStyles } from '@material-ui/core/styles';
import dad from '../assets/dad.jpg';

const styles = {
  normal: {
    fontFamily: 'Georgia, sans-serif',
    marginTop: '3em',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'normal',
    letterSpacing: '-1px',
  },
  welcome: {
    height: '775px',
    background: `url(${dad}) no-repeat center 0`,
    backgroundSize: '542px 700px',
  },
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

});


class IndexPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.normal}>
        <h3 className={classes.title}>1310731045<br/>資管四A<br/>陳柏杰</h3>
        <div className={classes.welcome} />
      </div>
    );
  }
  static propTypes = {
    classes: PropTypes.object.isRequired,
    users: PropTypes.array,
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(IndexPage));
