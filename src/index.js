import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Login from 'page/login/login.js';
import AuthRoute from 'component/authroute/authroute';
import Register from 'page/register/register';
import 'antd-mobile/dist/antd-mobile.min.css';
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import reducers from './reducer'
import './config'
import './style.scss'
const theme = createMuiTheme({
	palette: {
		primary: 
		{
			light: '#c8e4fb',
			main: '#bbdefb',
			contrastText: '#829baf',
		},
		secondary: {
			light: '#f27573',
			main: '#ef5350',
			contrastText: '#a73a38',
		},
	},
});


const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
))
function BBB(){
	return <h2>123123</h2>
}
ReactDom.render(
	(<Provider store={store}>
		<BrowserRouter>
			<MuiThemeProvider theme={theme}>
			<AuthRoute />
				<Switch>
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/bbb' component={BBB} />
				</Switch>
			</MuiThemeProvider>
		</BrowserRouter>
	</Provider>),
	document.getElementById('app')
)
