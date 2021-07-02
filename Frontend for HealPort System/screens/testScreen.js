import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "./axios";

const testScreen = () => {
	const [admittedList, setAdmittedList] = useState([]);

	useEffect(() => {
		axios
			.post("/retrieve/information/admitted", {
				userName: "sss",
			})
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<View>
			<Text></Text>
		</View>
	);
};

export default testScreen;

const styles = StyleSheet.create({});
