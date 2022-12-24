import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from "react-router-dom"
import AuthProvider from "./auth/Auth"
import Require from "./auth/Require"
import AppContextProvider from "./context/AppContext"
import Error from "./pages/Error.page"
import Home from "./pages/home/Home.page"
import Login from "./pages/authentication/Login.page"
import ResetConfirmation from "./pages/authentication/ResetConfirmation.page"
import ResetPassword from "./pages/authentication/ResetPassword.page"
import Signup from "./pages/authentication/Signup.page"

export const queryClient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppContextProvider>
          <div className=" app bg-white font-normal text-base text-dark">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/reset" element={<Require><ResetPassword /></Require>} />
              <Route path="/confirm-reset" element={<Require><ResetConfirmation /></Require>} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </AppContextProvider>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  )
}

export default App
