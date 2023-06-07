import { useState } from "react";
import { View , ScrollView , SafeAreaView } from "react-native";
import { Link, Stack , useRouter } from "expo-router";

import {COLORS , icons , images , SIZES } from '../constants'
import { Nearbyjobs , Popularjobs , ScreenHeaderBtn , Welcome } from '../components'

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>

      <Stack.Screen options= 
        {{ 
        	headerStyle: { backgroundColor: COLORS.lightWhite } ,
			headerShadowVisible: false,
			headerLeft: () => (
					<ScreenHeaderBtn iconUrl = {icons.menu} dimentions = "60%">

					</ScreenHeaderBtn>
				)
			 , 
			headerRight: () => (
					<ScreenHeaderBtn iconUrl = {icons.profile} dimentions = "100%">

					</ScreenHeaderBtn>
				)
			,
			headerTitle: ""
        }} 
    	/>

		<ScrollView showsVerticalScrollIndicator={false}>
			<View 
				style={{
					flex: 1,
					padding: SIZES.medium
				}}
			>
				<Welcome/>
				<Popularjobs />
				<Nearbyjobs />
			</View>
		</ScrollView>
    </SafeAreaView>
  );
}