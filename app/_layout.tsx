import { AuthProvider, useAuth } from "@/lib/auth-context";
import { Stack, useRouter, useSegments } from "expo-router";
import React, { useEffect, useState } from "react";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { user, isLoading } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const inAuthGroup = segments[0] === "auth";
    if (mounted && !user && !inAuthGroup && !isLoading) {
      router.replace("/auth");
    } else if (!mounted && user && inAuthGroup && !isLoading) {
      router.replace("/");
    }
  }, [mounted, user, segments, router, isLoading]);

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RouteGuard>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </RouteGuard>
    </AuthProvider>
  );
}