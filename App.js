import React, {useEffect, useState} from 'react';
import {WithSplashScreen} from './Splash';
import {StatusBar} from 'react-native';

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppReady(true);
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <StatusBar barStyle={'light-content'} backgroundColor="#1A2024" />
      {/* //Eğer navigationın varsa */}
      {/* <Navigation /> */}
    </WithSplashScreen>
  );
}