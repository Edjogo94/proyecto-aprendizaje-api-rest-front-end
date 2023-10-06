import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import { MainLayOut } from "./components/layouts/MainLayOut";
import { useState } from "react";
import Welcome from "./components/pages/Welcome";

function App() {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<BrowserRouter>
			<MainLayOut isChecked={isChecked} setIsChecked={setIsChecked}>
				<Routes>
					<Route path="*" element={<NotFound></NotFound>} />
					<Route path="/" element={<Welcome></Welcome>} />

					<Route path="/directors" element={<></>} />
					<Route path="/directors/add" element={<></>} />
					<Route path="/directors/edit" element={<></>} />

					<Route path="/generos" element={<></>} />
					<Route path="/generos/add" element={<></>} />
					<Route path="/generos/edit" element={<></>} />

					<Route path="/media" element={<></>} />
					<Route path="/media/add" element={<></>} />
					<Route path="/media/edit" element={<></>} />

					<Route path="/productores" element={<></>} />
					<Route path="/productores/add" element={<></>} />
					<Route path="/productores/edit" element={<></>} />

					<Route path="/tipos" element={<></>} />
					<Route path="/tipos/add" element={<></>} />
					<Route path="/tipos/edit" element={<></>} />
				</Routes>
			</MainLayOut>
		</BrowserRouter>
	);
}

export default App;
