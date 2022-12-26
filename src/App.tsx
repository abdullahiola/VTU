import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from "react-router-dom"
import AuthProvider from "./auth/Auth"
import Require from "./auth/Require"
import AppContextProvider from "./context/AppContext"
import Error from "./pages/Error/Error.page"
import Dashboard from "./pages/dashboard/Dashboard.page"
import Login from "./pages/authentication/Login.page"
import ResetConfirmation from "./pages/authentication/ResetConfirmation.page"
import ResetPassword from "./pages/authentication/ResetPassword.page"
import Signup from "./pages/authentication/Signup.page"
import Menu from "./components/ui/Menu"
import Home from "./components/dashboard/Home"
import Wallet from "./components/dashboard/Wallet"
import Transaction from "./components/dashboard/Transaction"
import Beneficiaries from "./components/dashboard/Beneficiaries"
import Analytics from "./components/dashboard/Analytics"
import Profile from "./components/dashboard/Profile"
import Help from "./components/dashboard/Help-Support"
import Notifications from "./components/dashboard/Notifications"

export const queryClient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppContextProvider>
          <div className=" app bg-white font-normal text-base text-dark relative overflow-x-hidden">
            <Menu />
            <Routes>
              <Route path="/" element={<Dashboard Component={Home} />} />
              <Route path="/home" element={<Dashboard Component={Home} />} >
                <Route path=":dashboard" element={<Dashboard Component={Home} />}></Route>
              </Route>
              <Route path="/wallet" element={<Dashboard Component={Wallet} />} />
              <Route path="/transactions" element={<Dashboard Component={Transaction} />} />
              <Route path="/beneficiaries" element={<Dashboard Component={Beneficiaries} />} />
              <Route path="/analytics" element={<Dashboard Component={Analytics} />} />
              <Route path="/notifications" element={<Dashboard Component={Notifications} />} />
              <Route path="/help" element={<Dashboard Component={Help} />} />
              <Route path="/profile" element={<Dashboard Component={Profile} />} />
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
