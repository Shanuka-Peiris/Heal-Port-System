import React, { useState, useEffect } from "react";
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

const NonPneumoniaList = ({ navigation }) => {
	const [nonPneumoniaList, setNonPneumoniaList] = useState(false);

	useEffect(() => {
		fetchFont()
			.then((e) => {
				console.log(e);
			})
			.catch((err) => {
				console.log(err);
			});

		axios
			.get("/app/v1/requests/staff/admin/doctor/pneumonia/negative")
			.then((res) => {
				console.log(res.data);
				const data = res.data;
				setNonPneumoniaList(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<View style={{ flex: 1, backgroundColor: "#b4d8ed", marginTop: 40 }}>
			<Image
				source={require("./../Images/x-ray-3.gif")}
				style={styles.imageGif}
			/>
			<FlatList
				data={nonPneumoniaList}
				keyExtractor={(item) => item.name}
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
									source={require("../Images/AO-1.png")}
									style={styles.image}
								/>
								<Text style={styles.name}>{item.name} </Text>

								<Text style={styles.nic}> NIC - {item.nic} </Text>
								<Text style={styles.tel}> Contact - {item.tel} </Text>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

export default NonPneumoniaList;

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: "#b4d8ed",
		alignItems: "center",
		justifyContent: "center",
		paddingLeft: 30,
		paddingRight: 30,
	},
	cover: {
		height: 100,
		width: "100%",
		marginBottom: 20,
	},
	button: {
		alignSelf: "stretch",
		alignItems: "center",
		padding: 6,
		backgroundColor: "#b4d8ed",
		width: 100,
		marginBottom: 80,
		borderRadius: 200,
		position: "absolute",
		top: 60,
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
		bottom: 25,
		left: 10,
	},
	imageGif: {
		height: 250,
		width: 400,
		backgroundColor: "#dae2f0",
		marginBottom: 5,
		resizeMode: "cover",
	},
	name: {
		fontSize: 20,
		left: 60,
		fontFamily: "YuseiMagic-Regular",
	},
	num: {
		left: 60,
		fontFamily: "YuseiMagic-Regular",
	},
	nic: {
		left: 60,
		fontFamily: "YuseiMagic-Regular",
	},
	tel: {
		left: 60,
		fontFamily: "YuseiMagic-Regular",
	},
});
