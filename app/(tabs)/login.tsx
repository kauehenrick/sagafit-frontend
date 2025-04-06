import { ThemedView } from "@/components/ThemedView";
import { Button, Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function LoginScreen() {
  return (
    <SafeAreaProvider style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Image
          source={require('@/assets/images/login-image.png')}
        />

        <View style={{ display: 'flex', alignItems: 'center' }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Image
              source={require('@/assets/images/logo-saga-fit.png')}
            />

            <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Sora' }}>SagaFit</Text>
          </View>

          <Text style={[styles.title, { fontFamily: 'Poppins' }]}>Seu progresso, cada dia <br /> mais seguro conosco</Text>
        </View>

        <View style={{ gap: 25 }}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#2375A6' }]}>
            <Text style={[styles.buttonText, { fontFamily: 'Poppins' }]}>Entrar com o Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { borderWidth: 0.1, borderColor: '#fff' }]}>
            <Text style={[styles.buttonText, { fontFamily: 'Poppins' }]}>Entrar com email</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#10486A"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    marginHorizontal: 16,
    gap: 65,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 20,
    color: '#fff',
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    paddingVertical: 8,
    width: 300,
    height: 40
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
});