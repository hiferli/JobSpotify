
import { useState } from 'react'
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	FlatList,
} from 'react-native'

import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const jobTypes = ['Full-Time', 'Part-Time', 'Contractor'];

const Welcome = ({ searchTerm , setSearchTerm , handleClick }) => {
	const router = useRouter();
	const [activeJobType, setActiveJobType] = useState('Full-Time');

	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello, Ishaan...</Text>
				<Text style={styles.welcomeMessage}>What a lovely weather to find you a perfect job!</Text>
			</View>

			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>

					<TextInput
						style={styles.searchInput}
						value={searchTerm}
						onChange={(text) => { setSearchTerm(text) }}
						placeholder="What's there on your mind?"
					/>

				</View>

				<TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
					<Image
						source={icons.search}
						resizeMode='contain'
						style={styles.searchBtnImage}
					/>
				</TouchableOpacity>
			</View>

			<View style={styles.tabsContainer}>
				<FlatList
					data={jobTypes}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.tab(activeJobType, item)}
							onPress={() => {
								setActiveJobType(item);
								router.push(`search/${item}`)
							}}
						>
							<Text style={styles.tabText(activeJobType, item)}>{item}</Text>
						</TouchableOpacity>
					)}
					
					horizontal
					contentContainerStyle={{
						columnGap: SIZES.small
					}}
					keyExtractor={item => item}
				/>
			</View>
		</View>
	)
}

export default Welcome