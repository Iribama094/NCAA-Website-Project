import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({children}) {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 700);
    return () => clearTimeout(timer);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <div
        style={{
          minHeight: "100vh",
          width: "100vw",
          overflow: "hidden",
          background: "#fff"
        }}
      >
        <div
          style={{
            transform: showContent ? "translateY(0)" : "translateY(40px)",
            opacity: showContent ? 1 : 0,
            transition: "transform 0.7s cubic-bezier(0.77,0,0.175,1), opacity 0.7s cubic-bezier(0.77,0,0.175,1)",
            minHeight: "100vh"
          }}
        >
          {children}
        </div>
      </div>
    </QueryClientProvider>
  );
}