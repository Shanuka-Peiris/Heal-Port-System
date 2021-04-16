import React, { useState, useEffect, setServerData } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

const items = [
    { id: "itching", name: 'Itching' },
    { id: "skin_rash", name: 'Skin Rash' },
    { id: "nodal_skin_eruptions", name: 'Nodal Skin Eruptions' },
    { id: "continuous_sneezing", name: 'Continuous Sneezing' },
    { id: "shivering", name: 'Shivering' },
    { id: "chills", name: 'Chills' },
    { id: "joint_pain", name: 'Joint Pain' },
    { id: "stomach_pain", name: 'Stomach Pain' },
    { id: "acidity", name: 'Acidity' },
    { id: "ulcers_on_tongue", name: 'Ulcers On Tongue' },
    { id: "muscle_wasting", name: 'Muscle Wasting' },
    { id: "vomiting", name: 'Vomiting' },
    { id: "burning_micturition", name: 'Burning Micturition' },
    { id: "spotting_ urination", name: 'Spotting Urination' },
    { id: "fatigue", name: 'Fatigue' },
    { id: "weight_gain", name: 'Weight Gain' },
    { id: "anxiety", name: 'Anxiety' },
    { id: "cold_hands_and_feets", name: 'Cold Hands And Feet' },
    { id: "mood_swings", name: 'Mood Swings' },
    { id: "weight_loss", name: 'Weight Loss' },
    { id: "restlessness", name: 'Restlessness' },
    { id: "lethargy", name: 'Lethargy' },
    { id: "patches_in_throat", name: 'Patches In Throat' },
    { id: "cough", name: 'Cough' },
    { id: "high_fever", name: 'High Fever' },
    { id: "sunken_eyes", name: 'Sunken Eyes' },
    { id: "breathlessness", name: 'Breathlessness' },
    { id: "sweating", name: 'Sweating' },
    { id: "dehydration", name: 'Dehydration' },
    { id: "indigestion", name: 'Indigestion' },
    { id: "headache", name: 'Headache' },
    { id: "yellowish_skin", name: 'Yellowish Skin' },
    { id: "dark_urine", name: 'Dark Urine' },
    { id: "nausea", name: 'Nausea' },
    { id: "loss_of_appetite", name: 'Loss Of Appetite' },
    { id: "pain_behind_the_eyes", name: 'Pain Behind The Eyes' },
    { id: "back_pain", name: 'Back Pain' },
    { id: "constipation", name: 'Constipation' },
    { id: "abdominal_pain", name: 'Abdominal Pain' },
    { id: "diarrhoea", name: 'Diarrhoea' },
    { id: "mild_fever", name: 'Mild Fever' },
    { id: "yellow_urine", name: 'Yellow Urine' },
    { id: "yellowing_of_eyes", name: 'Yellowing Of Eyes' },
    { id: "acute_liver_failure", name: 'Acute Liver Failure' },
    { id: "fluid_overload", name: 'Fluid Overload' },
    { id: "swelling_of_stomach", name: 'Swelling Of Stomach' },
    { id: "swelled_lymph_nodes", name: 'Swelled Lymph Nodes' },
    { id: "malaise", name: 'Malaise' },
    { id: "blurred_and_distorted_vision", name: 'Blurred And Distorted Vision' },
    { id: "phlegm", name: 'Phlegm' },
    { id: "throat_irritation", name: 'Throat Irritation' },
    { id: "redness_of_eyes", name: 'Redness Of Eyes' },
    { id: "sinus_pressure", name: 'Sinus Pressure' },
    { id: "runny_nose", name: 'Runny Nose' },
    { id: "5congestion4", name: 'Congestion' },
    { id: "chest_pain", name: 'Chest Pain' },
    { id: "weakness_in_limbs", name: 'Weakness In Limbs' },
    { id: "fast_heart_rate", name: 'Fast Heart Rate' },
    { id: "pain_during_bowel_movements", name: 'Pain During Bowel_Movements' },
    { id: "pain_in_anal_region", name: 'Pain In Anal Region' },
    { id: "bloody_stool", name: 'Bloody Stool' },
    { id: "irritation_in_anus", name: 'Irritation In Anus' },
    { id: "neck_pain", name: 'Neck Pain' },
    { id: "dizziness", name: 'Dizziness' },
    { id: "cramps", name: 'Cramps' },
    { id: "obesity", name: 'Obesity' },
    { id: "swollen_legs", name: 'Swollen Legs' },
    { id: "puffy_face_and_eyes", name: 'Puffy Face And Eyes' },
    { id: "enlarged_thyroid", name: 'Enlarged Thyroid' },
    { id: "brittle_nails", name: 'Brittle Nails' },
    { id: "swollen_extremeties", name: 'Swollen Extremeties' },
    { id: "excessive_hunger", name: 'Excessive Hunger' },
    { id: "drying_and_tingling_lips", name: 'Drying And Tingling Lips' },
    { id: "slurred_speech", name: 'Slurred Speech' },
    { id: "knee_pain", name: 'Knee Pain' },
    { id: "hip_joint_pain", name: 'Hip Joint Pain' },
    { id: "muscle_weakness", name: 'Muscle Weakness' },
    { id: "stiff_neck", name: 'Stiff Neck' },
    { id: "swelling_joints", name: 'Swelling Joints' },
    { id: "movement_stiffness", name: 'Movement Stiffness' },
    { id: "spinning_movements", name: 'Spinning Movements' },
    { id: "loss_of_balance", name: 'Loss Of Balance' },
    { id: "unsteadiness", name: 'Unsteadiness' },
    { id: "weakness_of_one_body_side", name: 'Weakness Of One Body Side' },
    { id: "loss_of_smell", name: 'Loss Of Smell' },
    { id: "bladder_discomfort", name: 'Bladder Discomfort' },
    { id: "foul_smell_of urine", name: 'Foul Smell Of Urine' },
    { id: "continuous_feel_of_urine", name: 'Continuous Feel Of Urine' },
    { id: "passage_of_gases", name: 'Passage Of Gases' },
    { id: "yellow_crust_ooze", name: 'Yellow Crust Ooze' },
    { id: "toxic_look_(typhos)", name: 'Toxic Look' },
    { id: "depression", name: 'Depression' },
    { id: "irritability", name: 'Irritability' },
    { id: "muscle_pain", name: 'Muscle Pain' },
    { id: "altered_sensorium", name: 'Altered Sensorium' },
    { id: "red_spots_over_body", name: 'Red Spots Over Body' },
    { id: "belly_pain", name: 'Belly Pain' },
    { id: "abnormal_menstruation", name: 'Abnormal Menstruation' },
    { id: "dischromic _patches", name: 'Dischromic Patches' },
    { id: "watering_from_eyes", name: 'Watering From Eyes' },
    { id: "increased_appetite", name: 'Increased Appetite' },
    { id: "polyuria", name: 'Polyuria' },
    { id: "family_history", name: 'Family History' },
    { id: "mucoid_sputum", name: 'Mucoid Sputum' },
    { id: "rusty_sputum", name: 'Rusty Sputum' },
    { id: "lack_of_concentration", name: 'Lack Of Concentration' },
    { id: "visual_disturbances", name: 'Visual Disturbances' },
    { id: "receiving_blood_transfusion", name: 'Receiving Blood Transfusion' },
    { id: "receiving_unsterile_injections", name: 'Receiving Unsterile Injections' },
    { id: "coma", name: 'Coma' },
    { id: "stomach_bleeding", name: 'Stomach Bleeding' },
    { id: "distention_of_abdomen", name: 'Distention Of Abdomen' },
    { id: "history_of_alcohol_consumption", name: 'History Of Alcohol Consumption' },
    { id: "red_sore_around_nose", name: 'Red Sore Around Nose' },
    { id: "blood_in_sputum", name: 'Blood In Sputum' },
    { id: "prominent_veins_on_calf", name: 'Prominent Veins On Calf' },
    { id: "palpitations", name: 'Palpitations' },
    { id: "painful_walking", name: 'Painful Walking' },
    { id: "pus_filled_pimples", name: 'Pus Filled Pimples' },
    { id: "blackheads", name: 'Blackheads' },
    { id: "silver_like_dusting", name: 'Silver Like Dusting' },
    { id: "small_dents_in_nails", name: 'Small Dents In Nails' },
    { id: "inflammatory_nails", name: 'Inflammatory Nails' },
    { id: "blister", name: 'Blister' }
];

const DATA = [

    {
        name: "aaa"
    },
    {
        name: "bbb ",
    },
    {
        name: "Pneumonia",
    },
    {
        name: "ccc",
    },
    {
        name: "ddd",
    },
    {
        name: "eee",
    },
];

const PatientSymptoms = ({ route, navigation }) => {
    // Data Source for the SearchableDropdown
    const [selectedItems, setSelectedItems] = useState([]);

    const onSelectedItemsChange = (selectedItems) => {
        // Set Selected Items
        setSelectedItems(selectedItems);
        console.log(selectedItems)
    };

    const submitSymptoms = () => {
        // navigation.push('Admission Officer')
        fetch('http://10.0.2.2:3000/getSymptoms', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: "Test123",
                symptoms: selectedItems
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData)

            })
            .catch((error) => {
                console.log(error)
                Alert.alert("Something went wrong. Please try again!")
            })
    }

    const pressHandler = () => {
        navigation.push('Admission Officer')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>

                <MultiSelect
                    hideTags
                    items={items}
                    uniqueKey="id"
                    onSelectedItemsChange={onSelectedItemsChange}
                    selectedItems={selectedItems}
                    selectText="Select Symptoms"
                    searchInputPlaceholderText="Search Symptoms...."
                    onChangeInput={(text) => console.log(text)}
                    tagRemoveIconColor="#CCC"
                    tagBorderColor="#CCC"
                    tagTextColor="#CCC"
                    selectedItemTextColor="#FF0000"
                    selectedItemIconColor="#FF0000"
                    itemTextColor="#0000ff"
                    displayKey="name"
                    searchInputStyle={{ color: '#000' }}
                    hideSubmitButton
                />

                <Button
                    title="Submit"
                    onPress={submitSymptoms}
                />

                <Text style={styles.heading}>Diseases</Text>

                <FlatList
                    data={DATA}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => {
                        return <TouchableOpacity style={{ margin: 10, margin: 5 }}>
                            <View style={{ flex: 1, padding: 5 }}>

                                <View
                                    style={[
                                        StyleSheet.absoluteFillObject,
                                        { backgroundColor: '#b4d8ed', borderRadius: 16, }
                                    ]} />
                                <Text style={styles.name} > {item.name} </Text>

                            </View>

                        </TouchableOpacity>
                    }}
                />
                

            </View>

            <TouchableOpacity
                style={styles.button} 
                onPress={pressHandler}>
                <Text style={styles.buttonText} >Admit</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default PatientSymptoms

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        marginTop: 30,
        marginBottom: 40
    },
    titleText: {
        padding: 8,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    headingText: {
        padding: 8,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 6,
        backgroundColor: '#456b82',
        width: 100,
        marginBottom: 10,
        borderRadius: 200,
        position: 'absolute',
        top: 570,
        right: 150,
        borderColor: 'white',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
    name: {
        fontWeight: '700',
        fontSize: 18,
        left: 60,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 10,
    }
});