import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

export const queryClient = new QueryClient()

const ReactQueryProvider = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

export default ReactQueryProvider
