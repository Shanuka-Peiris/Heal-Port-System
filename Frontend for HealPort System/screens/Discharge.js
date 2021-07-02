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
import axios from "./axios";
import { StatusBar } from "expo-status-bar";

const Discharge = ({ navigation }) => {
	const [discharge, setDischarge] = useState([]);
	const [state, setState] = useState(true);

	const [curPatientsUserName, setCurPatientsUserName] = useState("");

	useEffect(() => {
		axios
			.get("/app/v1/requests/staff/admin/officer/admitted")
			.then((res) => {
				// console.log(res.data);
				const data = res.data;
				setDischarge(data);
			})
			.catch((err) => {
				console.log(err);
			});

		console.log(state);
	}, [state]);

	const removeFromNonPneumoniaList = () => {
		axios
			.post("/app/v1/requests/staff/admin/doctor/pneumonia/negative/remove", {
				userName: curPatientsUserName,
			})
			.then((res) => {
				console.log("Successfully removed");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const removeFromPneumoniaList = () => {
		axios
			.post("/app/v1/requests/staff/admin/doctor/pneumonia/positive/remove", {
				userName: curPatientsUserName,
			})
			.then((res) => {
				console.log("Successfully removed");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const dischargePatient = (ex5) => {
		setCurPatientsUserName(ex5);

		axios
			.post("/app/v1/requests/staff/admin/officer/discharging", {
				userName: curPatientsUserName,
			})
			.then((res) => {
				console.log("Successfully discharged");
			})
			.catch((err) => {
				console.log(err);
			});

		removeFromPneumoniaList();
		removeFromNonPneumoniaList();

		setState(!state);
	};

	return (
		<View style={{ flex: 1, backgroundColor: "#b4d8ed", marginTop: 40 }}>
			<StatusBar style={"auto"} />
			<FlatList
				data={discharge}
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
									source={require("../Images/AO-3.png")}
									style={styles.image}
								/>
								<Text style={styles.name}>
									{" "}
									{item.firstName + " " + item.lastName}{" "}
								</Text>
								<Text style={styles.display}>
									{" "}
									User Name - {item.userName}{" "}
								</Text>
								<Text style={styles.display}> NIC - {item.nicNumber} </Text>
								<Text style={styles.display}>
									{" "}
									Contact No - {item.contactNumber.toString()}{" "}
								</Text>

								<TouchableOpacity
									style={styles.button}
									onPress={() => dischargePatient(item.userName)}
								>
									<Text style={styles.buttonText}>Discharge</Text>
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

export default Discharge;

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
		width: 120,
		marginBottom: 80,
		borderRadius: 200,
		position: "absolute",
		top: 80,
		right: 1,
		borderColor: "white",
		borderWidth: 2,
	},
	buttonText: {
		color: "black",
		fontSize: 18,
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
	name: {
		fontSize: 20,
		left: 60,
		fontFamily: "YuseiMagic-Regular",
	},
	display: {
		left: 60,
		fontFamily: "YuseiMagic-Regular",
	},
});
