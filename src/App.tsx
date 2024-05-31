import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootLayout, UserLayout } from "./components";
import {
  AboutPage,
  AllProductsPage,
  CartPage,
  CheckOutPage,
  ContactUsPage,
  HomePage,
  LoginPage,
  PageNotFound,
  ProductDetailsPage,
  SignUpPage,
  UserAddressPage,
  UserOrderPage,
  UserPaymentPage,
  UserProfilePage,
  WishListPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="wishlist" element={<WishListPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckOutPage />} />
          <Route path="account" element={<UserLayout />}>
            <Route index element={<UserProfilePage />} />
            <Route path="address" element={<UserAddressPage />} />
            <Route path="payment" element={<UserPaymentPage />} />
            <Route path="all-orders" element={<UserOrderPage />} />
          </Route>
          <Route path="about" element={<AboutPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="all-products" element={<AllProductsPage />} />
          <Route path="all-products/:id" element={<ProductDetailsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
