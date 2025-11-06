import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { supabase } from '../supabase'; // if you used supabase.js, update the extension

const SignupScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSignup = async () => {
    if (!email || !password || !fullName) {
      Alert.alert('Missing fields', 'Please fill all fields.');
      return;
    }
    setSubmitting(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName }
        }
      });
      if (error) throw error;

      // If email confirmations are ON, user must confirm via email.
      Alert.alert('Check your email', 'Please confirm your email to complete signup.');
      navigation.navigate('Login');
    } catch (err) {
      Alert.alert('Signup failed', err.message ?? 'Unknown error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>

      <TextInput
        placeholder="Full Name"
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        autoCapitalize="words"
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup} disabled={submitting}>
        <Text style={styles.buttonText}>{submitting ? 'Signing up...' : 'Signup'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#6200ee', textAlign: 'center', marginBottom: 20 },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  button: { backgroundColor: '#6200ee', padding: 12, borderRadius: 8, marginTop: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  link: { color: '#6200ee', textAlign: 'center', marginTop: 15 },
});

export default SignupScreen;