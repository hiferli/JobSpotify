import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

// Using useFetch Hook
import useFetch from '../../../hooks/useFetch' 

const Popularjobs = () => {
	const router = useRouter();
	
	// const isLoading = false;
	// const error = false;
	const { data , isLoading , error } = useFetch("search" , {
		query: 'React Developer',
		num_pages: 1
	})

	console.log(data)

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Popular Jobs</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn }>Show All</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.cardsContainer}>
				{
				isLoading ? (<ActivityIndicator size="large" color={COLORS.primary} />)
				: error ? (<Text>Something Went Wrong!</Text>)
				: (
					<FlatList 
						data={[1 , 2 , 3 , 4]}
						renderItem={( {item} ) => (
							<PopularJobCard item={item}/>						
						)}
						keyExtractor={item => item?.job_id}
						horizontal
						contentContainerStyle={{columnGap: SIZES.medium}}
					/>
				) 
				}
			</View>
		</View>
	)
}

export default Popularjobs