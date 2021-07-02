import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Alert,
	Image,
	ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import axios from "./axios";

const DiseaseScreen = ({ route, navigation }) => {
	var name = route.params.paramKey;
	var symptoms = route.params.paramKey1;

	const [disease, setDisease] = useState([]);
	// const [state, setState] = useState(false);
	const [animating, setAnimating] = useState(true);
	const [btnState, setBtnState] = useState(true);
	const [userDetails, setUserDetails] = useState();
	const [patientName, setPatientName] = useState();

	// ---------------------------------------------------------------------------------

	useEffect(() => {
		setPatientName(name);
		// console.log("name", patientName);

		async function fetchDisease() {
			axios
				.post("/app/v1/requests/patient/disease", {
					userName: name,
					symptoms: symptoms,
				})
				.then((res) => {
					setAnimating(false);
					setDisease(res.data);

					const response = res.data;

					if (response.includes("Pneumonia")) {
						console.log("Pneumonia positive");
						setBtnState(false);
						console.log("button state in disease", btnState);
					} else {
						console.log("negative");
						setBtnState(true);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}

		async function fetchUserInQueueDetails() {
			axios
				.post("/app/v1/requests/patient/admitDetails", {
					userName: name,
				})
				.then((res) => {
					// console.log("here", res.data);

					if (res.data == 1) {
						if (btnState == false) {
							setBtnState(true);
							console.log("button state in queue", btnState);
						}

						// } else {
						// 	if (btnState == true) {
						// 		setBtnState(false);
						// 	}
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}

		async function fetchUserDetails() {
			axios
				.post("/app/v1/requests/patient/details", {
					userName: name,
				})
				.then((res) => {
					// console.log(res.data);
					setUserDetails(res.data);
					// console.log("userDetails", userDetails);

					// userDetails.map((e) => {
					// 	console.log(e.contactNumber);
					// });
				})
				.catch((err) => {
					console.log(err);
				});
		}

		console.log("button state", btnState);

		fetchUserDetails();
		fetchUserInQueueDetails();
		fetchDisease();
	}, []);

	const saveSymptoms = () => {
		axios
			.post("/app/v1/requests/patient/symptom/save", {
				userName: name,
				symptoms: symptoms,
			})
			.then((res) => {
				console.log("response from submitting symptoms", res.data);

				if (btnState == false && res.status == 200) {
					setBtnState(true);
				}
			})
			.catch((err) => {
				console.log("err", err);
			});
	};

	const requestToAdmit = () => {
		if (btnState == false) {
			setBtnState(true);
		}
		saveSymptoms();

		// adding patient to queue
		var userName;
		var firstName;
		var lastName;
		var nicNumber;
		var contactNumber;

		userDetails.map((e) => {
			userName = e.userName;
			firstName = e.firstName;
			lastName = e.lastName;
			nicNumber = e.nicNumber;
			contactNumber = e.contactNumber;
		});

		// console.log(userName + " " + firstName + " " + lastName);

		axios
			.post("/app/v1/requests/patient/add/queue", {
				userName,
				firstName,
				lastName,
				nicNumber,
				contactNumber,
			})
			.then((res) => {
				console.log("last", res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<View style={styles.container}>
			<Image
				source={require("../Images/disease.png")}
				style={{ width: 400, height: 155 }}
			/>
			<Text style={styles.header}> DISEASES </Text>

			<ScrollView backgroundColor="#9fc9c0" borderColor="white" borderWidth={5}>
				<View style={styles.loader}>
					<ActivityIndicator animating={animating} color="white" size="large" />

					{disease &&
						disease.map((d, index) => (
							<Text style={styles.diseaseText} key={index}>
								{d}
							</Text>
						))}
				</View>
			</ScrollView>

			{btnState ? (
				<Text
					style={[
						{
							textAlign: "center",
							fontSize: 20,
							fontFamily: "YuseiMagic-Regular",
							color: "white",
							padding: 5,
							borderWidth: 3,
							borderColor: "#3EAB90",
							backgroundColor: "#3EAB90",
							borderRadius: 13,
							marginTop: 10,
						},
						!animating && { display: "none" },
					]}
				>
					Hello {patientName} your results will appear above. Thank you for your
					patience.
				</Text>
			) : (
				<TouchableOpacity
					style={styles.button}
					disabled={btnState}
					onPress={requestToAdmit}
				>
					<Text style={styles.buttonText}>Admit</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default DiseaseScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#CAE0DB",
		padding: 10,
		marginTop: 35,
	},
	header: {
		fontSize: 35,
		textAlign: "center",
		color: "black",
		marginBottom: 20,
		color: "#004644",
		fontFamily: "YuseiMagic-Regular",
	},
	diseaseText: {
		height: 50,
		width: 200,
		backgroundColor: "white",
		fontFamily: "YuseiMagic-Regular",
		fontSize: 20,
		textAlign: "center",
		marginTop: 40,
		borderRadius: 10,
		marginLeft: 90,
		padding: 10,
	},
	button: {
		width: 200,
		marginLeft: 90,
		marginBottom: 20,
		marginTop: 40,
		textAlign: "center",
		borderRadius: 10,
		padding: 10,
		borderWidth: 3,
		borderColor: "#3EAB90",
		backgroundColor: "#3EAB90",
		borderRadius: 13,
		borderColor: "white",
		borderWidth: 3,
	},
	buttonText: {
		textAlign: "center",
		fontSize: 20,
		fontFamily: "YuseiMagic-Regular",
		color: "white",
	},
	negative: {},
	loader: {
		height: 500,
		width: 355,
		textAlign: "center",
		marginTop: 20,
	},
});
