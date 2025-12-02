import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Demo DSA questions for each company
const companyQuestions = {
  Google: [
    { id: '1', question: 'Reverse a linked list in groups of K.' },
    { id: '2', question: 'Find the intersection point of two linked lists.' },
    { id: '3', question: 'Implement LRU Cache using LinkedHashMap.' },
    { id: '4', question: 'Find the kth largest element in an array.' },
    { id: '5', question: 'Implement binary search recursively and iteratively.' },
  ],
  Microsoft: [
    { id: '1', question: 'Find the maximum subarray sum (Kadane’s algorithm).' },
    { id: '2', question: 'Detect a cycle in a directed graph.' },
    { id: '3', question: 'Find the lowest common ancestor (LCA) in a binary tree.' },
    { id: '4', question: 'Check if a binary tree is a binary search tree (BST).' },
    { id: '5', question: 'Find the diameter of a binary tree.' },
  ],
  Tekion: [
    { id: '1', question: 'Find the kth largest element in an array.' },
    { id: '2', question: 'Implement binary search recursively and iteratively.' },
    { id: '3', question: 'Find the first non-repeating character in a string.' },
    { id: '4', question: 'Find the missing number in an array of 1 to N.' },
    { id: '5', question: 'Implement a stack using queues.' },
  ],
  Coinbase: [
    { id: '1', question: 'Find the lowest common ancestor (LCA) in a binary tree.' },
    { id: '2', question: 'Design a blockchain-based ledger system.' },
    { id: '3', question: 'Implement a queue using stacks.' },
    { id: '4', question: 'Detect a loop in a linked list.' },
    { id: '5', question: 'Find the longest increasing subsequence in an array.' },
  ],
  Oracle: [
    { id: '1', question: 'Optimize SQL queries for large datasets.' },
    { id: '2', question: 'Design a scalable database schema.' },
    { id: '3', question: 'Implement a trie and perform insert/search operations.' },
    { id: '4', question: 'Merge two sorted linked lists.' },
    { id: '5', question: 'Sort a stack using recursion.' },
  ],
  Amazon: [
    { id: '1', question: 'Implement a cache system for product searches.' },
    { id: '2', question: 'Design a recommendation system.' },
    { id: '3', question: 'Evaluate a postfix expression.' },
    { id: '4', question: 'Check if a string has balanced parentheses.' },
    { id: '5', question: 'Rotate an array by K positions.' },
  ],
  Netflix: [
    { id: '1', question: 'Optimize video streaming algorithm.' },
    { id: '2', question: 'Design a content delivery system.' },
    { id: '3', question: 'Find the majority element in an array (Boyer-Moore).' },
    { id: '4', question: 'Implement a graph using adjacency list.' },
    { id: '5', question: 'Perform BFS and DFS on a graph.' },
  ],
  Tesla: [
    { id: '1', question: 'Implement route optimization for self-driving cars.' },
    { id: '2', question: 'Design an energy-efficient battery management system.' },
    { id: '3', question: 'Detect cycle in an undirected graph.' },
    { id: '4', question: 'Topological sort of a directed acyclic graph (DAG).' },
    { id: '5', question: 'Find the shortest path in a weighted graph (Dijkstra’s algorithm).' },
  ],
};

const CompanyScreen = ({ route }) => {
  const { companyName } = route.params;
  const dsaQuestions = companyQuestions[companyName] || [];

  const renderQuestion = ({ item }) => (
    <View style={styles.questionBox}>
      <Text style={styles.questionText}>• {item.question}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Demo heading */}
      <Text style={styles.demoText}>
        This is a demo of top 5 questions. 🔒 All questions and latest updates are unlocked after payment.
      </Text>

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
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
  demoText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ff5722',
    marginBottom: 10,
    textAlign: 'center',
  },
  title: { fontSize: 24, fontWeight: 'bold', color: '#6200ee', marginBottom: 20, textAlign: 'center' },
  questionBox: { backgroundColor: '#fff', borderRadius: 12, padding: 15, marginBottom: 12, elevation: 3 },
  questionText: { fontSize: 16, color: '#333', lineHeight: 22 },
});

export default CompanyScreen;
