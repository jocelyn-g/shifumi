import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function App() {

  const [modalVisible, setModalVisible] = useState(false)
  const [choix, setChoix] = useState('none')
  const choixIA = ['Pierre','Papier','ciseaux']
  const [index, setIndex] = useState(Math.floor(Math.random() * 3))
  const [result, setResult] = useState('none')

  const onPressPierre = () =>{
      setModalVisible(true)
      setChoix('Pierre')
      if(index === 0){
        setResult('Egalité')
      }else if(index === 2){
        setResult('Victoire')
      }else{
        setResult('Defaite')
      }
    }
    const onPressPapier = () =>{
      setModalVisible(true)
      setChoix('Papier')
      if(index === 1){
        setResult('Egalité')
      }else if(index === 0){
        setResult('Victoire')
      }else{
        setResult('Defaite')
      }
    }
    const onPressCiseaux = () =>{
      setModalVisible(true)
      setChoix('ciseaux')
      if(index === 2){
        setResult('Egalité')
      }else if(index === 1){
        setResult('Victoire')
      }else{
        setResult('Defaite')
      }
    }
    const onPressReturn = () =>{
      setModalVisible(false)
      setIndex(Math.floor(Math.random() * 3))
      setResult('none')
      setChoix('none')
    }
  return (
    <View style={styles.container}>
      <View  style={styles.header}>
        <Text style={styles.title}>Chifoumi</Text>
      </View>
      <View>
        <Pressable onPress={onPressPierre}>
          <Text style={styles.btn}><FontAwesome name="hand-rock-o" size={60} color="white" /></Text>
        </Pressable>
        <Pressable onPress={onPressPapier}>
          <Text style={styles.btn}><FontAwesome name="hand-paper-o" size={60} color="white" /></Text>
        </Pressable>
        <Pressable onPress={onPressCiseaux}>
          <Text style={styles.btn}><FontAwesome name="hand-scissors-o" size={60} color="white" /></Text>
        </Pressable>
      </View>
      <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.container}>
          
          <Pressable onPress={onPressReturn}>
            <Text style={styles.btn}>return back</Text>
          </Pressable>
          <Text>Vous avez choisi : {choix}</Text>
          <Text>IA a choisi : {choixIA[index]}</Text>
          <Text>Resultat : {result}</Text>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 25,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    padding: 20,
    alignItems: 'center',
  },
  btn: {
    color: '#fff',
    backgroundColor: '#7D0101',
    fontSize: 30,
    padding: 10,
    margin: 30,
    textAlign: 'center',
    borderRadius: 30
  },
  header: {
    backgroundColor: '#3D3D3D',
    width: 350,
  },
});
