// Ronald, Erico e Daniel do Carmo
import { Image, Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card, TextInput, Button } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <Image source={require('./assets/user.png')} style={styles.usericon}/>
    <TextInput
      style={{margin:10}}
      label="Login"
      mode="outlined"
    

    />
       <TextInput
      secureTextEntry={true}
      style={{margin:10}}
      label="Senha"
      mode="outlined"
      right={<TextInput.Icon icon="eye" />}
    />
    <Button
    mode="contained"
    icon="login"
    >
    Enviar
    </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  usericon:{
    marginBottom: 30,
    alignSelf: 'center',
    width: 90,
    height: 90,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});