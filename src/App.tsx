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
import { Toaster } from "./components/ui/toaster";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  const accessToken = localStorage.getItem("accessToken");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="sign-up"
            element={
              <ProtectedRoute
                isAllowed={accessToken ? true : false}
                redirectPath="/"
              >
                <SignUpPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="login"
            element={
              <ProtectedRoute
                isAllowed={accessToken ? true : false}
                redirectPath="/"
              >
                <LoginPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="wishlist"
            element={
              <ProtectedRoute
                isAllowed={accessToken ? true : false}
                redirectPath="/login"
              >
                <WishListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="cart"
            element={
              <ProtectedRoute
                isAllowed={accessToken ? true : false}
                redirectPath="/login"
              >
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="checkout"
            element={
              <ProtectedRoute
                isAllowed={accessToken ? true : false}
                redirectPath="/login"
              >
                <CheckOutPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="account"
            element={
              <ProtectedRoute
                isAllowed={accessToken ? true : false}
                redirectPath="/login"
              >
                <UserLayout />
              </ProtectedRoute>
            }
          >
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
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
