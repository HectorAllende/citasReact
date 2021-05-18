import React from 'react';
import {Text, StyleSheet, View} from 'react-native'

const App = () => {

    console.log('desde consola')

    return (
        <View>
            <Text>Administrador de citas</Text>
        </View>

      );
}

const styles = StyleSheet.create({

    contenedor:{
        backgroundColor:'#AA076b',
        flex:1

    },

    titulo:{
        color:'#FFF',
        marginTop: 40,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign:'cente'

    }

})
 
export default App;