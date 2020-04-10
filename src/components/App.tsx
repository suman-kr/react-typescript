import React from 'react';

import '../styles/index.css';

class App extends React.PureComponent {
	render() {
		return (
			<div>
				<h1>A react setup for typescript</h1>
				<h3>Webpack setup: To bundle .tsx and .ts files</h3>
				<h3>Babel setup: For compiling .tsx and .ts for browser JS</h3>
				<h3>Typings setup for react and babel packages and other packages which are not written in TS</h3>
				<h3>.babelrc for defining which presets to use</h3>
				<h3>tsconfig.json and tslint.json setup for configuration and linting</h3>
			</div>
		);
	}
}

export default App;