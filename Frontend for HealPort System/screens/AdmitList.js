import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableOpacity,
	FlatList,
	Image,
	Alert,
} from "react-native";
import axios from "./axios";
import { StatusBar } from "expo-status-bar";

const AdmitList = ({ navigation }) => {
	const [admit, setAdmit] = useState([]);
	const [state, setState] = useState(true);

	const [curPatientsUserName, setCurPatientsUserName] = useState("");
	const [curPatientsFirstName, setCurPatientsFirstName] = useState("");
	const [curPatientsLastName, setCurPatientsLastName] = useState("");
	const [curPatientsContactNum, setCurPatientsContactNum] = useState("");
	const [curPatientsNicNum, setCurPatientsNicNum] = useState("");

	useEffect(() => {
		axios
			.get("/app/v1/requests/staff/admin/officer/pending")
			.then((res) => {
				// console.log(res.data);
				const data = res.data;
				setAdmit(data);
			})
			.catch((err) => {
				console.log(err);
			});

		console.log(state);
	}, [state]);

	const addToDischargeList = () => {
		axios
			.post("/app/v1/requests/staff/admin/officer/accepted", {
				userName: curPatientsUserName,
				firstName: curPatientsFirstName,
				lastName: curPatientsLastName,
				nicNumber: curPatientsNicNum,
				contactNumber: curPatientsContactNum,
			})
			.then((res) => {
				if (res.status == 200) {
					Alert.alert("Successfully admitted patient");
				}
			})
			.catch((err) => {
				Alert.alert("Something went wrong");
			});
	};

	const removeFromQueue = () => {
		axios
			.post("/app/v1/requests/staff/admin/officer/removing", {
				userName: curPatientsUserName,
			})
			.then((res) => {
				// console.log(res.data);
			})
			.catch((err) => {
				console.log("here", err);
			});
	};

	const saveAdmit = (ex1, ex2, ex3, ex4, ex5) => {
		setCurPatientsUserName(ex5);
		setCurPatientsFirstName(ex1);
		setCurPatientsLastName(ex2);
		setCurPatientsContactNum(ex3);
		setCurPatientsNicNum(ex4);

		addToDischargeList();
		removeFromQueue();

		setState(!state);
		console.log(state);
	};

	return (
		<View style={{ flex: 1, backgroundColor: "#b4d8ed", marginTop: 40 }}>
			<StatusBar style={"auto"} />
			<FlatList
				data={admit}
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
									source={require("../Images/AO-1.png")}
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
									onPress={() =>
										saveAdmit(
											item.firstName,
											item.lastName,
											item.contactNumber,
											item.nicNumber,
											item.userName,
										)
									}
								>
									<Text style={styles.buttonText}>Admit</Text>
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

export default AdmitList;

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: "#b4d8ed",
		alignItems: "center",
		justifyContent: "center",
		paddingLeft: 30,
		paddingRight: 30,
		marginTop: 40,
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
		top: 75,
		right: 2,
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
	name: {
		fontWeight: "700",
		fontSize: 18,
		left: 60,
		fontFamily: "YuseiMagic-Regular",
	},
	display: {
		left: 60,
		fontFamily: "YuseiMagic-Regular",
	},
});
