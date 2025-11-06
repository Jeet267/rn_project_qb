import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.links}>
        <TouchableOpacity onPress={() => Linking.openURL('https://about.example.com')}>
          <Text style={styles.linkText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://contact.example.com')}>
          <Text style={styles.linkText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://privacy.example.com')}>
          <Text style={styles.linkText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>
        © {new Date().getFullYear()} OnlinePYQ. All rights reserved.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#6200ee',
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  links: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  linkText: {
    color: '#fff',
    marginHorizontal: 8,
    fontSize: 14,
  },
  footerText: {
    color: '#e5e5e5',
    fontSize: 12,
  },
});

export default Footer;
