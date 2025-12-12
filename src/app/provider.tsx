"use client";

import React, { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    // mutations: {
    //   onError: (error) => {
    //     let message = error.message;
    //     if (error instanceof AxiosError) {
    //       if (error.config?.toastOnError === false) return;
    //       message = error.response?.data?.message || error.message;
    //     }
    //   },
    // },
  },
});

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default AppProvider;
