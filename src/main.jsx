import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes';
import AuthProviders from './Providers/AuthProviders';
import {
RouterProvider,
} from "react-router-dom";

import {  HelmetProvider } from 'react-helmet-async';

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'


const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProviders>
  <QueryClientProvider client={queryClient}>
  <HelmetProvider>
  <div className='max-w-screen-xl mx-auto'>

<RouterProvider router={router} /></div>
  </HelmetProvider>
    </QueryClientProvider>
  </AuthProviders>
  </StrictMode>,
)
