import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image,
	ScrollView,
} from "react-native";
import axios from "./axios";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const StaffMember = ({ route, navigation }) => {
	var name = route.params.paramKey;

	const [docState, setDocState] = useState(false);
	const [radState, setRadState] = useState(false);
	const [adminState, setAdminState] = useState(false);

	const pressHandler1 = () => {
		navigation.push("Doctor");
	};

	const pressHandler2 = () => {
		navigation.push("Radiographer");
	};

	const pressHandler3 = () => {
		navigation.push("Admission officer new");
	};

	useEffect(() => {
		axios
			.post("/app/v1/requests/staff/details", {
				userName: name,
			})
			.then((res) => {
				// console.log("Response", res.data);
				const staffType = res.data;

				if (staffType == "Doctor") {
					setAdminState(true);
					setRadState(true);
				} else if (staffType == "Radiographer") {
					setAdminState(true);
					setDocState(true);
				} else {
					setDocState(true);
					setRadState(true);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<View style={styles.StaffMember}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Image
					style={styles.tinyLogo}
					source={require("./../Images/staff-1.gif")}
				/>

				<TouchableOpacity
					style={styles.button}
					disabled={docState}
					onPress={pressHandler1}
				>
					<Text style={styles.buttonText}>Doctor </Text>
					{docState ? (
						<AntDesign name="lock" size={24} color="white" />
					) : (
						<AntDesign name="unlock" size={24} color="white" />
					)}
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					disabled={radState}
					onPress={pressHandler2}
				>
					<Text style={styles.buttonText}>Radiographer</Text>
					{radState ? (
						<AntDesign name="lock" size={24} color="white" />
					) : (
						<AntDesign name="unlock" size={24} color="white" />
					)}
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					disabled={adminState}
					onPress={pressHandler3}
				>
					<Text style={styles.buttonText}>Admission Officer</Text>
					{adminState ? (
						<AntDesign name="lock" size={24} color="white" />
					) : (
						<AntDesign name="unlock" size={24} color="white" />
					)}
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

export default StaffMember;

const styles = StyleSheet.create({
	StaffMember: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#CAE0DB",
	},
	tinyLogo: {
		width: 390,
		height: 360,
		marginBottom: 20,
		marginTop: 80,
		paddingBottom: 5,
		justifyContent: "center",
		alignItems: "stretch",
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		padding: 6,
		backgroundColor: "#3EAB90",
		marginTop: 30,
		marginBottom: 10,
		borderRadius: 13,
		borderColor: "white",
		borderWidth: 2,
		width: 250,
		height: 60,
		marginLeft: 80,
	},
	buttonText: {
		color: "white",
		fontSize: 25,
		fontFamily: "YuseiMagic-Regular",
	},
});
