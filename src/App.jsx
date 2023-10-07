import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import { MainLayOut } from "./components/layouts/MainLayOut";
import { useState } from "react";
import Welcome from "./components/pages/Welcome";
import { MediaShowPage } from "./components/pages/Media/Show";
import { MediaEditPage } from "./components/pages/Media/Edit";
import { MediaAddPage } from "./components/pages/Media/Add";
import { DirectorAddPage } from "./components/pages/Directors/Add";
import { DirectorEditPage } from "./components/pages/Directors/Edit";
import { DirectorShowPage } from "./components/pages/Directors/Show";
import { GeneroAddPage } from "./components/pages/Generos/Add";
import { GeneroEditPage } from "./components/pages/Generos/Edit";
import { GeneroShowPage } from "./components/pages/Generos/Show";
import { ProductoresAddPage } from "./components/pages/Productores/Add";
import { ProductoresEditPage } from "./components/pages/Productores/Edit";
import { ProductoresShowPage } from "./components/pages/Productores/Show";
import { TiposAddPage } from "./components/pages/Tipos/Add";
import { TiposEditPage } from "./components/pages/Tipos/Edit";
import { TiposShowPage } from "./components/pages/Tipos/Show";

function App() {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<BrowserRouter>
			<MainLayOut isChecked={isChecked} setIsChecked={setIsChecked}>
				<Routes>
					<Route path="*" element={<NotFound></NotFound>} />
					<Route path="/" element={<Welcome></Welcome>} />

					<Route
						path="/directors"
						element={<DirectorShowPage></DirectorShowPage>}
					/>
					<Route
						path="/directors/add"
						element={
							<DirectorAddPage
								isChecked={isChecked}
							></DirectorAddPage>
						}
					/>
					<Route
						path="/directors/edit/:id"
						element={
							<DirectorEditPage
								isChecked={isChecked}
							></DirectorEditPage>
						}
					/>

					<Route
						path="/generos"
						element={<GeneroShowPage></GeneroShowPage>}
					/>
					<Route
						path="/generos/add"
						element={
							<GeneroAddPage
								isChecked={isChecked}
							></GeneroAddPage>
						}
					/>
					<Route
						path="/generos/edit/:id"
						element={
							<GeneroEditPage
								isChecked={isChecked}
							></GeneroEditPage>
						}
					/>

					<Route
						path="/media"
						element={<MediaShowPage></MediaShowPage>}
					/>
					<Route
						path="/media/add"
						element={
							<MediaAddPage isChecked={isChecked}></MediaAddPage>
						}
					/>
					<Route
						path="/media/edit/:id"
						element={
							<MediaEditPage
								isChecked={isChecked}
							></MediaEditPage>
						}
					/>

					<Route
						path="/productores"
						element={<ProductoresShowPage></ProductoresShowPage>}
					/>
					<Route
						path="/productores/add"
						element={
							<ProductoresAddPage
								isChecked={isChecked}
							></ProductoresAddPage>
						}
					/>
					<Route
						path="/productores/edit/:id"
						element={
							<ProductoresEditPage
								isChecked={isChecked}
							></ProductoresEditPage>
						}
					/>

					<Route
						path="/tipos"
						element={<TiposShowPage></TiposShowPage>}
					/>
					<Route
						path="/tipos/add"
						element={
							<TiposAddPage isChecked={isChecked}></TiposAddPage>
						}
					/>
					<Route
						path="/tipos/edit/:id"
						element={
							<TiposEditPage
								isChecked={isChecked}
							></TiposEditPage>
						}
					/>
				</Routes>
			</MainLayOut>
		</BrowserRouter>
	);
}

export default App;
