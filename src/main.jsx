import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import  store  from './app/store.jsx'
import { Provider } from 'react-redux'
import { AuthProvider } from './AuthContext.jsx'
import Dashboardpage from './pages/Dashboardpage.jsx'
import Transactionpage from './pages/Transactionpage.jsx'
import Accountspage from './pages/Accountspage.jsx'
import Managecardspage from './pages/Managecardspage.jsx'
import Loanmanagementpage from './pages/Loanmanagementpage.jsx'
import Paymentpage from './pages/Paymentpage.jsx'
import Loanpage from './pages/Loanpage.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Signuppage from './pages/Signuppage.jsx'
import Loginpage from './pages/Loginpage.jsx'
const router = createBrowserRouter([
  {
    children: [
      { path: "/dashboard", element: <Dashboardpage/> },
      { path: "/transactions", element: <Transactionpage/> },
      { path: "/accounts", element: <Accountspage/> },
      { path: "/managecards", element: <Managecardspage/> },
      { path: "/manageloans", element: <Loanmanagementpage/> },
      { path: "/payment", element: <Paymentpage/> },
      { path: "/loan", element: <Loanpage/> },
      { path: "/", element: <Loginpage/> },
      { path: "/signup", element: <Signuppage/> },
      
  


    ]
  }



]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
    <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition:Bounce
        theme="light"
        
/>
    
  </AuthProvider>
)
