import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [appIsReady, setAppIsReady] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    async function prepare() {
      try {
        // Mantenemos visible el Splash Screen del escudo por 2.5 segundos
        await new Promise(resolve => setTimeout(resolve, 2500));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 5000); // 5 seg. de intro del gif

      return () => clearTimeout(timer);
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  if (showIntro) {
    return (
      <View style={{ flex: 1, backgroundColor: '#ffffffff', justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar style="light" />
        <Image
          source={require('@/assets/images/fonts_tri/enner_valencia.gif')}
          style={{ width: 300, height: 300 }}
          contentFit="contain"
        />
      </View>
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="detalle/[anio]" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
