import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableOpacity,
	FlatList,
	Image,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import axios from "./axios";

const fetchFont = () => {
	return Font.loadAsync({
		"Ledger-Regular": require("../assets/fonts/Ledger-Regular.ttf"),
		Sacramento: require("../assets/fonts/Sacramento-Regular.ttf"),
		"Vidaloka-Regular": require("../assets/fonts/Vidaloka-Regular.ttf"),
		"YuseiMagic-Regular": require("../assets/fonts/YuseiMagic-Regular.ttf"),
	});
};

const Radiographer = ({ navigation }) => {
	// const [fontLoaded, setFontLoaded] = useState(false);
	const [pneumoniaList, setPneumoniaList] = useState(false);
	// const [state, setState] = useState();

	useEffect(() => {
		fetchFont()
			.then((e) => {
				console.log(e);
			})
			.catch((err) => {
				console.log(err);
			});

		axios
			.get("/app/v1/requests/staff/admin/doctor/pneumonia/positive")
			.then((res) => {
				console.log(res.data);
				const data = res.data;
				setPneumoniaList(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<View style={{ flex: 1, backgroundColor: "white", marginTop: 25 }}>
			<Image
				source={require("../Images/radiographer-2.gif")}
				style={{
					width: 400,
					height: 250,
					alignItems: "center",
					justifyContent: "center",
					marginTop: 10,
				}}
			/>
			<FlatList
				data={pneumoniaList}
				keyExtractor={(item) => item.firstName}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity style={{ margin: 10, margin: 20 }}>
							<View style={{ flex: 1, padding: 10 }}>
								<View
									style={[
										StyleSheet.absoluteFillObject,
										{ backgroundColor: "#3EAB90", borderRadius: 16 },
									]}
								/>
								<Image
									source={require("../Images/Radiographer.png")}
									style={styles.image}
								/>
								<Text style={styles.name}>
									{" "}
									{item.firstName + " " + item.lastName}{" "}
								</Text>
								<Text style={styles.num}> NIC - {item.nicNumber} </Text>

								<TouchableOpacity
									style={styles.button}
									onPress={() => pressHandler(item.userName)}
								>
									<Text style={styles.buttonText}>Upload</Text>
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

export default Radiographer;

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: "#CAE0DB",
		alignItems: "center",
		justifyContent: "center",
		paddingLeft: 30,
		paddingRight: 30,
	},
	button: {
		alignSelf: "stretch",
		alignItems: "center",
		padding: 6,
		backgroundColor: "#CAE0DB",
		width: 100,
		marginBottom: 80,
		borderRadius: 200,
		position: "absolute",
		top: 35,
		right: 10,
		borderColor: "white",
		borderWidth: 2,
	},
	buttonText: {
		color: "black",
		fontSize: 20,
		fontFamily: "YuseiMagic-Regular",
	},
	pic1: {
		width: 100,
		height: 100,
	},
	image: {
		height: 50,
		width: 50,
		position: "absolute",
		bottom: 9,
		left: 10,
	},
	name: {
		fontFamily: "YuseiMagic-Regular",
		fontSize: 18,
		left: 60,
	},
	num: {
		left: 60,
		fontFamily: "YuseiMagic-Regular",
	},
});
