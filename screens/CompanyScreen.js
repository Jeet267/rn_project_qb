import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CompanyScreen = ({ route }) => {
  const { companyName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{companyName} Questions 💼</Text>

      {/* Placeholder content — replace with actual question data later */}
      <View style={styles.questionBox}>
        <Text style={styles.questionText}>Coming soon: {companyName} interview questions!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 20,
  },
  questionBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 3,
    width: '90%',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default CompanyScreen;
