import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import InputBox from '../../../components/inputBox';
import SubmitButton from '../../../components/SubmitButton';
import axios from 'axios';

const Login = ({navigation}) => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [loading, setLoading] = useState(false);

 const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!email || !password){
        Alert.alert("Please fill empty boxes");
        setLoading(false);
        return;
      }
      const {data} = await axios.post('http://192.168.100.109:8080/api/v1/auth/login', {email, password});
      if (data && data.user && data.user.role === 0) {
        // If the user role is 1, navigate to HomeScreen
        navigation.navigate('HomeScreen');
      } else {
        // If the user role is not 1, display a message
        Alert.alert("Patient user not allowed. Please use the website for login.");
      }
      setEmail('');
      setPassword('');
      setLoading(false);
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
 };

 return (
    <View style={styles.container}>
      <Text style={styles.pagetital}>Login</Text>
      <View>
        <InputBox inputtitle={"Email"}
          value={email}
          setValue={setEmail}
          keyboardType="email-address"
          autoComplete="email"
        />
        <InputBox inputtitle={"Password"} 
          value={password} 
          setValue={setPassword}
          secureTextEntry={true}
        />
      </View>
      
      <SubmitButton btntitle="Login"
        loading={loading}
        handleSubmit={handleSubmit}
      />

      <Text style={styles.linkText}>Don't have an Account? <Text style={styles.link} onPress={() => navigation.navigate("SignUp")}>SignUp</Text></Text>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
 },
 pagetital: {
    marginBottom: 10,
    fontSize:30,
    color:"#3AAFA9",
    fontWeight:'bold'
 },
 linkText: {
    marginTop:15,
    fontSize:16,
    textAlign:"center"
 },
 link: {
    color: '#3AAFA9',
 }
});

export default Login;


