import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
return (
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24, // aumentado
        paddingVertical: 20,   // aumentado
        backgroundColor: '#fff',
        width: '100%',
        elevation: 2,
    }}>
        <Image
            source={require('../assets/logo.png')}
            style={{ width: 100, height: 100, resizeMode: 'contain' }} // aumentado
        />

        {/* Nome centralizado */}
        <Text style={{ fontWeight: 'bold', fontSize: 26, flex: 1, textAlign: 'center' }}> {/* aumentado */}
            Cookie Milk
        </Text>

        {/* Carrinho à direita */}
        <TouchableOpacity>
            <Ionicons name="cart-outline" size={34} color="#333" /> {/* aumentado */}
        </TouchableOpacity>
    </View>
);
}