import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { NavBar } from "./components/NavBar/NavBar"
import { Cart } from "./components/Cart/Cart";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CheckOut } from "./components/CheckOut/CheckOut"

const App = () => {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />

          <main>
            <Routes>

              <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'} />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="*" element={<h1>Error 404</h1>} />

            </Routes>
          </main>

          <footer>
            <p>Proyecto final para CH</p>
          </footer>

        </BrowserRouter>
      </CartContextProvider>

    </>
  )
}

export default App
