import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { Alert, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import MultiSelect from 'react-native-multiple-select';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const items = [
    { id: 0, name: 'itching' },
    { id: 1, name: 'skin_rash' },
    { id: 2, name: 'nodal_skin_eruptions' },
    { id: 3, name: 'continuous_sneezing' },
    { id: 4, name: 'shivering' },
    { id: 5, name: 'chills' },
    { id: 6, name: 'joint_pain' },
    { id: 7, name: 'stomach_pain' },
    { id: 8, name: 'acidity' },
    { id: 9, name: 'ulcers_on_tongue' },
    { id: 10, name: 'muscle_wasting' },
    { id: 11, name: 'vomiting' },
    { id: 12, name: 'burning_micturition' },
    { id: 13, name: 'spotting_ urination' },
    { id: 14, name: 'fatigue' },
    { id: 15, name: 'weight_gain' },
    { id: 16, name: 'anxiety' },
    { id: 17, name: 'cold_hands_and_feets' },
    { id: 18, name: 'mood_swings' },
    { id: 19, name: 'weight_loss' },
    { id: 20, name: 'restlessness' },
    { id: 21, name: 'lethargy' },
    { id: 22, name: 'patches_in_throat' },
    { id: 23, name: 'cough' },
    { id: 24, name: 'high_fever' },
    { id: 25, name: 'sunken_eyes' },
    { id: 26, name: 'breathlessness' },
    { id: 27, name: 'sweating' },
    { id: 28, name: 'dehydration' },
    { id: 29, name: 'indigestion' },
    { id: 30, name: 'headache' },
    { id: 31, name: 'yellowish_skin' },
    { id: 32, name: 'dark_urine' },
    { id: 33, name: 'nausea' },
    { id: 34, name: 'loss_of_appetite' },
    { id: 35, name: 'pain_behind_the_eyes' },
    { id: 36, name: 'back_pain' },
    { id: 37, name: 'constipation' },
    { id: 38, name: 'abdominal_pain' },
    { id: 39, name: 'diarrhoea' },
    { id: 40, name: 'mild_fever' },
    { id: 41, name: 'yellow_urine' },
    { id: 42, name: 'yellowing_of_eyes' },
    { id: 43, name: 'acute_liver_failure' },
    { id: 44, name: 'fluid_overload' },
    { id: 45, name: 'swelling_of_stomach' },
    { id: 46, name: 'swelled_lymph_nodes' },
    { id: 47, name: 'malaise' },
    { id: 48, name: 'blurred_and_distorted_vision' },
    { id: 49, name: 'phlegm' },
    { id: 50, name: 'throat_irritation' },
    { id: 51, name: 'redness_of_eyes' },
    { id: 52, name: 'sinus_pressure' },
    { id: 53, name: 'runny_nose' },
    { id: 54, name: 'congestion' },
    { id: 55, name: 'chest_pain' },
    { id: 56, name: 'weakness_in_limbs' },
    { id: 57, name: 'fast_heart_rate' },
    { id: 58, name: 'pain_during_bowel_movements' },
    { id: 59, name: 'pain_in_anal_region' },
    { id: 60, name: 'bloody_stool' },
    { id: 61, name: 'irritation_in_anus' },
    { id: 62, name: 'neck_pain' },
    { id: 63, name: 'dizziness' },
    { id: 64, name: 'cramps' },
    { id: 65, name: 'obesity' },
    { id: 66, name: 'swollen_legs' },
    { id: 67, name: 'puffy_face_and_eyes' },
    { id: 68, name: 'enlarged_thyroid' },
    { id: 69, name: 'brittle_nails' },
    { id: 70, name: 'swollen_extremeties' },
    { id: 71, name: 'excessive_hunger' },
    { id: 72, name: 'drying_and_tingling_lips' },
    { id: 73, name: 'slurred_speech' },
    { id: 74, name: 'knee_pain' },
    { id: 75, name: 'hip_joint_pain' },
    { id: 76, name: 'muscle_weakness' },
    { id: 77, name: 'stiff_neck' },
    { id: 78, name: 'swelling_joints' },
    { id: 79, name: 'movement_stiffness' },
    { id: 80, name: 'spinning_movements' },
    { id: 81, name: 'loss_of_balance' },
    { id: 82, name: 'unsteadiness' },
    { id: 83, name: 'weakness_of_one_body_side' },
    { id: 84, name: 'loss_of_smell' },
    { id: 85, name: 'bladder_discomfort' },
    { id: 86, name: 'foul_smell_of urine' },
    { id: 87, name: 'continuous_feel_of_urine' },
    { id: 88, name: 'passage_of_gases' },
    { id: 89, name: 'passage_of_gases' },
    { id: 90, name: 'toxic_look_(typhos)' },
    { id: 91, name: 'depression' },
    { id: 92, name: 'irritability' },
    { id: 93, name: 'muscle_pain' },
    { id: 94, name: 'altered_sensorium' },
    { id: 95, name: 'red_spots_over_body' },
    { id: 96, name: 'belly_pain' },
    { id: 97, name: 'abnormal_menstruation' },
    { id: 98, name: 'dischromic _patches' },
    { id: 99, name: 'watering_from_eyes' },
    { id: 100, name: 'increased_appetite' },
    { id: 101, name: 'polyuria' },
    { id: 102, name: 'family_history' },
    { id: 103, name: 'mucoid_sputum' },
    { id: 104, name: 'rusty_sputum' },
    { id: 105, name: 'lack_of_concentration' },
    { id: 106, name: 'visual_disturbances' },
    { id: 107, name: 'receiving_blood_transfusion' },
    { id: 108, name: 'receiving_unsterile_injections' },
    { id: 109, name: 'coma' },
    { id: 110, name: 'stomach_bleeding' },
    { id: 111, name: 'distention_of_abdomen' },
    { id: 112, name: 'history_of_alcohol_consumption' },
    { id: 113, name: 'fluid_overload' },
    { id: 114, name: 'blood_in_sputum' },
    { id: 115, name: 'prominent_veins_on_calf' },
    { id: 116, name: 'palpitations' },
    { id: 117, name: 'painful_walking' },
    { id: 118, name: 'pus_filled_pimples' },
    { id: 119, name: 'blackheads' },
    { id: 120, name: 'silver_like_dusting' },
    { id: 121, name: 'small_dents_in_nails' },
    { id: 122, name: 'inflammatory_nails' },
    { id: 123, name: 'blister' },
    { id: 124, name: 'red_sore_around_nose' },
    { id: 125, name: 'yellow_crust_ooze' },
];

const PatientSymptoms = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    const onSelectedItemsChange = (selectedItems) => {
      // Set Selected Items
      setSelectedItems(selectedItems);
      console.log(selectedItems)
    };
  
    const submitSymptoms = () => {
        console.log(selectedItems)
        fetch("http://10.0.2.2:3000/postDataToFlask", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "Symptoms":selectedItems
            })
        }) 
        .then (res => res.json())
        .then (async (data) => {
            try {
                console.log(res.json)
            } catch (e) {
                console.log(e)
                Alert.alert("Please try again!")
            }
        })
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
            selectText="Pick Items"
            searchInputPlaceholderText="Search Items..."
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            selectedItemTextColor="#CCC"
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{color: '#CCC'}}
            submitButtonColor="#48d22b"
            submitButtonText="Submit"
          />
          <Button
            title = "Submit Symptoms"
            onPress={submitSymptoms}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default PatientSymptoms;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
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
  });
