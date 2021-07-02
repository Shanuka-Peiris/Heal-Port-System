import React, { useState, useLayoutEffect } from "react";
import {
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	View,
	Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image, Input } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";

const fetchFont = () => {
	return Font.loadAsync({
		"Ledger-Regular": require("../assets/fonts/Ledger-Regular.ttf"),
		Sacramento: require("../assets/fonts/Sacramento-Regular.ttf"),
		"Vidaloka-Regular": require("../assets/fonts/Vidaloka-Regular.ttf"),
		"YuseiMagic-Regular": require("../assets/fonts/YuseiMagic-Regular.ttf"),
	});
};

const LoginScreenPatient = ({ navigation }) => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [fontLoaded, setfontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFont}
				onError={() => console.log("ERROR")}
				onFinish={() => {
					setfontLoaded(true);
				}}
			/>
		);
	}

	const pressHandler1 = () => {
		fetch("http://192.168.1.5:3000/patient/signIn", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				userName: userName,
				password: password,
			}),
		})
			.then((res) => res.json())
			.then(async (data) => {
				try {
					await AsyncStorage.setItem("token", data.token);
					console.log(data.token);
					navigation.replace("Symptoms", {
						paramKey: userName,
					});
				} catch (e) {
					console.log("Error", e);
					Alert.alert("Username or password is incorrect !");
				}
			});
		// navigation.replace('Symptoms')
	};

	const pressHandler = () => {
		navigation.push("Patient Registration");
	};

	return (
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<StatusBar style={"light"} />
			<Image
				source={require("../Images/login-1.png")}
				style={{
					width: 300,
					height: 300,
					marginBottom: 30,
					marginLeft: 8,
					marginTop: 5,
				}}
			/>

			<View style={styles.inputContainer}>
				<Input
					style={styles.input}
					placeholder="User Name"
					placeholderTextColor="#4d4d4d"
					autoFocus
					fontSize={20}
					type="text"
					value={userName}
					onChangeText={(text) => setUserName(text)}
				/>

				<Input
					style={styles.input}
					placeholder="Password"
					secureTextEntry={true}
					placeholderTextColor="#4d4d4d"
					fontSize={20}
					type="password"
					value={password}
					onChangeText={(text) => setPassword(text)}
				/>
			</View>
			<TouchableOpacity
				activeOpacity={0.5}
				style={styles.buttonLogin}
				onPress={pressHandler1}
			>
				<Text style={styles.buttonTextLogin}>Login</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.buttonRegister} onPress={pressHandler}>
				<Text style={styles.buttonTextRegister}>Register</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};

export default LoginScreenPatient;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		backgroundColor: "#CAE0DB",
	},
	inputContainer: {
		width: 300,
	},
	buttonLogin: {
		width: 200,
		marginTop: 10,
		textAlign: "center",
		borderRadius: 10,
		padding: 10,
		borderWidth: 3,
		borderColor: "#3EAB90",
		backgroundColor: "#3EAB90",
		borderRadius: 13,
		borderColor: "white",
		borderWidth: 2,
	},
	buttonRegister: {
		width: 200,
		marginTop: 10,
		textAlign: "center",
		borderRadius: 10,
		padding: 10,
		backgroundColor: "white",
		borderWidth: 3,
		borderColor: "#3EAB90",
	},
	buttonTextLogin: {
		textAlign: "center",
		fontSize: 20,
		fontFamily: "YuseiMagic-Regular",
		color: "white",
		fontSize: 23,
	},
	buttonTextRegister: {
		textAlign: "center",
		fontSize: 23,
		color: "black",
		fontFamily: "YuseiMagic-Regular",
	},
	input: {
		fontFamily: "YuseiMagic-Regular",
		color: "black",
	},
});
