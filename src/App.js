import React from 'react';
import Header from './component/header/index';
import Headline from './component/headline/index';
import './App.scss';

function App() {
	const tempArr = [
		{
			fName: 'Joe',
			lName: 'Bloggs',
			email: 'joe.bloggs@gmail.com',
			age: 24,
			onlineStatus: true
		}
	];

	return (
		<div className='App'>
			<Header />
			<section className='main'>
				<Headline
					header='Posts'
					desc='Click the button to render Posts'
					tempArr={tempArr}
				/>
			</section>
		</div>
	);
}

export default App;
