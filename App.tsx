import React, {useEffect} from 'react';
import AppLoading from 'expo-app-loading';
import * as Notificatioins from 'expo-notifications'

import Routes from './src/routes'

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'
import { PlantProps } from './src/libs/storage';

export default function App() {

  const [fonstsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  // useEffect(()=>{
  //   const subscription = Notificatioins.addNotificationReceivedListener(
  //     async notification => {
  //       const data =  notification.request.content.data.plant as PlantProps;
  //       console.log(data)
  //   });

  //   return () => subscription.remove();

  // },[])


  if(!fonstsLoaded)
    return <AppLoading />

  return (
    <Routes />
  );
}


