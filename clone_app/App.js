import React from 'react';
import { ScrollView, StatusBar } from 'react-native';

import Nav from './src/components/Home/Nav';
import HeaderImage from './src/components/Home/HeaderImage'
import RoundedCard from './src/components/Home/RoundedCard';
import CircleImages from './src/components/Home/CircleImages';
import Footer from './src/components/Home/Footer';

export default function Home() {

    return (
      <>
        <Nav />

        <ScrollView>

          <StatusBar
            barStyle='dark-content'
            backgroundColor='transparent'
          />

          <HeaderImage />
          <CircleImages />
          <RoundedCard />
          
        </ScrollView>

        <Footer />
      </>
    );
}