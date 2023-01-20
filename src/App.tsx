import React, {lazy, Suspense} from 'react'
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from "react-router-dom"
import AuthProvider from "./auth/Auth"
import Require from "./auth/Require"
import AppContextProvider from "./context/AppContext"
import { FlowActionControl } from "./components/dashboard/flows/FlowContainer"
const AirtimeFlow = lazy(() => import('./components/dashboard/flows/Airtime/AirtimeFlow'))
const Error = lazy(() => import('./pages/Error/Error.page'));
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard.page'));
const Login = lazy(() => import('./pages/authentication/Login.page'));
const ResetConfirmation = lazy(() => import('./pages/authentication/ResetConfirmation.page'));
const ResetPassword = lazy(() => import('./pages/authentication/ResetPassword.page'));
const Signup = lazy(() => import('./pages/authentication/Signup.page'));
const Menu = lazy(() => import('./components/ui/Menu'));
const Home = lazy(() => import('./components/dashboard/Home'));
const Wallet = lazy(() => import('./components/dashboard/Wallet'));
const Transaction = lazy(() => import('./components/dashboard/Transaction'));
const Beneficiaries = lazy(() => import('./components/dashboard/Beneficiaries'));
const Analytics = lazy(() => import('./components/dashboard/Analytics'));
const Settings = lazy(() => import('./components/dashboard/Settings'));
const Refer = lazy(() => import('./components/dashboard/Refer'));
const Profile = lazy(() => import('./components/dashboard/Profile'));
const Help = lazy(() => import('./components/dashboard/Help-Support'));
const Notifications = lazy(() => import('./components/dashboard/Notifications'));

export const queryClient = new QueryClient()


export const Loader = () => {
  return (
    <div className=' w-full h-full flex items-center justify-center'>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppContextProvider>
          <div className=" app bg-[#FAFAFA] font-normal text-base text-dark relative overflow-x-hidden">
            <Suspense fallback={<div className='w-screen h-screen'><Loader /></div>}>
              <Menu />
              <Routes>
                <Route path="/" element={<Dashboard Component={<Home route='/'/>} />} />
                <Route path="/buy-airtime" element={<Dashboard Component={<Home route='buy-airtime'/>} />} />
                <Route path='/top-up'>
                  <Route path='airtime'>
                    <Route path='1' element={<FlowActionControl Component={<AirtimeFlow route='1' />} />} />
                    <Route path='2' element={<FlowActionControl Component={<AirtimeFlow route='2' />} />} />
                    <Route path='3' element={<FlowActionControl Component={<AirtimeFlow route='3' />} />} />
                    <Route path='4' element={<FlowActionControl Component={<AirtimeFlow route='4' />} />} />
                  </Route>
                </Route>
                <Route path="/buy-data" element={<Dashboard Component={<Home route='buy-data'/>} />} />
                <Route path="/air-to-cash" element={<Dashboard Component={<Home route='air-to-cash'/>} />} />
                <Route path="/wallet" element={<Dashboard Component={<Wallet />} />} />
                <Route path="/transactions" element={<Dashboard Component={<Transaction />} />} />
                <Route path="/beneficiaries" element={<Dashboard Component={<Beneficiaries />} />} />
                <Route path="/analytics" element={<Dashboard Component={<Analytics />} />} />
                <Route path="/notifications" element={<Dashboard Component={<Notifications />} />} />
                <Route path="/help" element={<Dashboard Component={<Help />} />} />
                <Route path="/profile" element={<Dashboard Component={<Profile />} />} />
                <Route path="/settings" element={<Dashboard Component={<Settings />} />} />
                <Route path="/refer" element={<Dashboard Component={<Refer />} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/reset" element={<Require><ResetPassword /></Require>} />
                <Route path="/confirm-reset" element={<Require><ResetConfirmation /></Require>} />
                <Route path="*" element={<Suspense fallback={<div className='w-screen h-screen'><Loader /></div>}><Error /></Suspense>} />
              </Routes>
            </Suspense>
          </div>
        </AppContextProvider>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  )
}

export default App
