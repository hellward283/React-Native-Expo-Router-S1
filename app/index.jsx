import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style= {styles.container}>
        <Text style={styles.title2}>Say hello to your new app</Text>

      <View style={styles.linkContainer}> 
     <Link href ="/login">
     <Text style={styles.title1}>Log in</Text>
     </Link>
</View>

 <View style={styles.linkContainer1}>
     <Link href ="/signup">
     <Text style={styles.title}>Sign Up</Text>
     </Link>

</View>
    
     
    </View>
  );
}

const styles = StyleSheet.create({
container :{
  flex : 5,
  justifyContent : "center",
  alignItems: "center",
},
 title1: {
    fontSize: 20,
    marginBottom: 20,
  alignSelf: 'center',
  marginTop: 1,
 
  color: '#FFFFFF',
 backgroundColor: '#696cffff',
 },
title2: {
    fontSize: 32,
    marginBottom: 24,
  alignSelf: 'center',
  marginTop: 1,
  fontWeight: 'bold',
  color: '#8569ffff',
},
 title: {
    fontSize: 20,
    marginBottom: 24,
  alignSelf: 'center',
  marginTop: 1,
  fontWeight: 'bold',
  color: '#8a69ffff',
  padding: 20,
 
 },
linkContainer: {
    borderWidth: 1,
    borderColor: '#8a69ffff',
    backgroundColor: '#6985ffff',
    borderRadius: 10,
    paddingVertical:1,
    paddingHorizontal: 20,
    marginBottom: 16,
    minWidth: 200,
    alignItems: "center",
    padding: 20,
    color:'FFFFF',
},

linkContainer1: {
    borderWidth: 1,
    borderColor: "#6978ffff",
    borderRadius: 10,
    paddingVertical: 1, 
    paddingHorizontal: 20,
    marginBottom: 16,
    minWidth: 200,
    alignItems: "center",
    padding: 20,

},


  
 

 








});







