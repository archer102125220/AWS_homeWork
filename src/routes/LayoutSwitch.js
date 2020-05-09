import React, { Component } from 'react';
import { Switch } from 'dva/router';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import themCofing from './../../theme';
import GlobalLayout from './../layouts/GlobalLayout';

const theme = createMuiTheme(themCofing);


const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(
    class LayoutSwitch extends Component {

        render() {
            const { props } = this;
            const { children } = props;
            return (
                <ThemeProvider theme={theme}>
                    {
                        <GlobalLayout {...props}>
                            <Switch {...props}>{children}</Switch>
                        </GlobalLayout>
                    }
                </ThemeProvider>);
        }
        static propTypes = {
            children: PropTypes.any,
            history: PropTypes.any,
            SOCKET_UserList: PropTypes.func,
        };
    }
);
