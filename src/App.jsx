import { QueryClient, QueryClientProvider } from "react-query"
import { Routes, Route } from "react-router-dom"
import AuthProvider from "./auth/Auth"
import AppContextProvider from "./context/AppContext"
import Error from "./pages/Error.page"
import Home from "./pages/Home.page"
import Login from "./pages/Login.page"
import ResetConfirmation from "./pages/ResetConfirmation.page"
import ResetPassword from "./pages/ResetPassword.page"
import Signup from "./pages/Signup.page"

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
              <Route path="/reset" element={<ResetPassword />} />
              <Route path="/confirm-reset" element={<ResetConfirmation />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </AppContextProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
