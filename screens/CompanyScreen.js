import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const CompanyScreen = ({ route }) => {
  const { companyName } = route.params;

  // Step 1: Sample DSA questions (can later fetch from backend)
  const dsaQuestions = [
    { id: '1', question: 'Reverse a linked list in groups of K.' },
    { id: '2', question: 'Find the intersection point of two linked lists.' },
    { id: '3', question: 'Implement LRU Cache using LinkedHashMap.' },
    { id: '4', question: 'Find the maximum subarray sum (Kadane’s algorithm).' },
    { id: '5', question: 'Detect a cycle in a directed graph.' },
    { id: '6', question: 'Find the kth largest element in an array.' },
    { id: '7', question: 'Implement binary search recursively and iteratively.' },
    { id: '8', question: 'Find the lowest common ancestor (LCA) in a binary tree.' },
  ];

  // Step 2: Render each question using FlatList
  const renderQuestion = ({ item }) => (
    <View style={styles.questionBox}>
      <Text style={styles.questionText}>• {item.question}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{companyName} DSA Questions 💼</Text>

      <FlatList
        data={dsaQuestions}
        keyExtractor={(item) => item.id}
        renderItem={renderQuestion}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 20,
    textAlign: 'center',
  },
  questionBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    elevation: 3,
  },
  questionText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
});

export default CompanyScreen;
