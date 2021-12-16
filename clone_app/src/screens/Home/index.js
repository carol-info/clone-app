import React from 'react';
import { ScrollView } from 'react-native';

import Nav from '../../components/Home/Nav';
import HeaderImage from '../../components/Home/HeaderImage'
import RoundedCard from '../../components/Home/RoundedCard';
import CircleImages from '../../components/Home/CircleImages';
import Footer from '../../components/Home/Footer';

export default function Home() {

    return (
        <>
            <Nav />

            <ScrollView>
                <HeaderImage />
                <CircleImages />
                <RoundedCard />
            </ScrollView>

            <Footer />
        </>
    );
}