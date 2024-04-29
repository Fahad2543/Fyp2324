import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';

const SignUp = () => {
  const [pharmacyname, setPharmacyname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState(''); 
  const [licensenumber, setLicensenumber] = useState('');
  const [role, setRole] = useState(1); // User role is set to 1 by default
  const [showPassword, setShowPassword] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://192.168.100.9:8080/api/v1/auth/register', {
        pharmacyname,
        email,
        password,
        phone,
        address,
        city,
        licensenumber,
        role, // Include the role in the request
      });
      if (res && res.data.success) {
        showMessage({
          message: res.data.message,
          type: 'success',
        });
        navigation.navigate('Login');
      } else {
        showMessage({
          message: res.data.message,
          type: 'danger',
        });
      }
    } catch (error) {
      console.log(error);
      showMessage({
        message: 'Something went wrong',
        type: 'danger',
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^03\d{9}$/;
    setIsPhoneValid(phoneRegex.test(number));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.contentContainer}>
          <Text style={styles.pageTitle}>MedLocate</Text>
          <TextInput
            value={pharmacyname}
            onChangeText={(text) => setPharmacyname(text)}
            style={styles.input}
            placeholder="Pharmacy Name"
            autoFocus
          />
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            placeholder="Enter Your Email"
            keyboardType="email-address"
          />
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            placeholder="Enter Your Password"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.showHideButton}>
            <Text style={styles.showHideButtonText}>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
          <TextInput
            value={phone}
            onChangeText={(text) => {
              setPhone(text);
              validatePhoneNumber(text);
            }}
            style={styles.input}
            placeholder="Enter Your Phone"
            keyboardType="phone-pad"
          />
          {!isPhoneValid && <Text style={styles.errorText}>Invalid phone number. It should start with 03 and be 11 digits long.</Text>}
          <TextInput
            value={address}
            onChangeText={(text) => setAddress(text)}
            style={styles.input}
            placeholder="Enter Your Address"
          />
          <TextInput
            value={city}
            onChangeText={(text) => setCity(text)}
            style={styles.input}
            placeholder="Enter Your City"
          />
          <TextInput
            value={licensenumber}
            onChangeText={(text) => setLicensenumber(text)}
            style={styles.input}
            placeholder="Enter License Number"
          />
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          {/* <Text style={styles.linkText}>
            <TouchableOpacity onPress={() => navigation.navigate('PharmacySignup')}>
              <Text style={styles.link}>Login as Pharmacy</Text>
            </TouchableOpacity>
          </Text> */}
          <Text style={styles.linkText}>
            @MedLocate 23-24{' '}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}>Already have an account? Login</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    padding: 20,
  },
  pageTitle: {
    marginBottom: 10,
    fontSize: 30,
    color: "#3AAFA9",
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#3AAFA9',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  linkText: {
    marginTop: 15,
    fontSize: 16,
    textAlign: "center",
  },
  link: {
    color: '#3AAFA9',
  },
  showHideButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  showHideButtonText: {
    color: '#3aafa9',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignUp;
