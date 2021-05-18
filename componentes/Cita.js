import React from 'react';
import {Text, StyleSheet, View, Button, TouchableHighlight } from 'react-native';

const Cita = ({item, eliminarPaciente}) => {

    const dialogoEliminar=id=>{
        console.log('eliminando...', id)
        
        eliminarPaciente(id)
    }

    return (

        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Paciente: </Text>
                <Text style={styles.texto}>{item.paciente}</Text>
            </View>

            <View>
                <Text style={styles.label}>Propietario: </Text>
                <Text style={styles.texto}>{item.propietario}</Text>
            </View>

            <View>
                <Text style={styles.label}>Sintoma: </Text>
                <Text style={styles.texto}>{item.sintomas}</Text>
            </View>

            {/* <Button
                title="Eliminar"
            /> */}

            <View>
                <TouchableHighlight onPress={()=> dialogoEliminar(item.id)} style={styles.btnEliminar}>
                    <Text style={styles.textoEliminar}>Eliminar &times;</Text>
                </TouchableHighlight>
            </View>

            

        </View>

  
    
      );
}

const styles = StyleSheet.create({
    cita:{
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10       

    },

    label:{
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10
        
    },

    texto:{
        fontSize: 14
    },

    btnEliminar:{
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10

    },

    textoEliminar:{
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }

})
 
export default Cita;