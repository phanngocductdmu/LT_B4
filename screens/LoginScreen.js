import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Account } from '../data/account'; // Import dữ liệu tài khoản
import { AuthContext } from '../context/AuthContext'; // Import AuthContext

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    const user = Account.find(
      (acc) => acc.username === username && acc.password === password,
    );

    if (user) {
      login(user);

      navigation.navigate('Settings');
    } else {
      alert('Tài khoản hoặc mật khẩu không đúng!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tên đăng nhập:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Nhập tên đăng nhập"
      />
      <Text style={styles.label}>Mật khẩu:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Nhập mật khẩu"
        secureTextEntry
      />
      <TouchableOpacity style={styles.vDangNhap} onPress={handleLogin}>
        <Text style={styles.tDangNhap}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  label: {
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 10,
    fontSize: 16,
  },
  vDangNhap: {
    height: 50,
    backgroundColor: '#4283ec',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  tDangNhap: {
    color: '#Fff',
    fontSize: 16,
  },
});

export default LoginScreen;
