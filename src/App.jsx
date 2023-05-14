import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GeneratePallete from './screen/generatePallete';
import Navbar from './components/Navbar';

function App() {
	return (
		<BrowserRouter>
			<div className='app flex flex-col items-center pb-20'>
				<Navbar />
				<Routes>
					<Route path='/generate-pallete' element={<GeneratePallete />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
