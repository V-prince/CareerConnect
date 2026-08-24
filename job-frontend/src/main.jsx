import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from 'react-router-dom'
import { ScrollToTop } from './components/scrolltotop/ScrollToTop.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider >
    <BrowserRouter>
      <ScrollToTop/>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#ffffff",
            color: "#18181b",
            border: "1px solid #e4e4e7",
            borderRadius: "14px",
            padding: "14px 18px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
            fontSize: "14px",
            fontWeight: "500",
            marginTop: "70px",
          },

          success: {
            iconTheme: {
              primary: "#16a34a",
              secondary: "#ffffff",
            },
            style: {
              borderLeft: "5px solid #16a34a",
            },
          },

          error: {
            iconTheme: {
              primary: "#dc2626",
              secondary: "#ffffff",
            },
            style: {
              borderLeft: "5px solid #dc2626",
            },
          },

          loading: {
            iconTheme: {
              primary: "#2563eb",
              secondary: "#ffffff",
            },
            style: {
              borderLeft: "5px solid #2563eb",
            },
          },
        }}
      />
      <App />
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
