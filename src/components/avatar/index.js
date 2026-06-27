import React from 'react';
import { View } from 'react-native';
import { User } from 'phosphor-react-native';

import { styles } from './style';

export function Avatar({ tamanho = 48 }) {
  const raio = tamanho / 2;
  const tamanhoIcone = tamanho * 0.55;

  return (
    <View
      style={[
        styles.container,
        {
          width: tamanho,
          height: tamanho,
          borderRadius: raio,
        },
      ]}
    >
      <User
        size={tamanhoIcone}
        color="#DFFF2B"
        weight="bold"
      />
    </View>
  );
}