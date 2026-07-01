import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Avatar } from '../avatar';

import { styles } from './style';

const MAX_AMIGOS_ONLINE = 4;

export function CardAmigosOnline({ amigosOnline = [], onPress }) {
  const amigosVisiveis = amigosOnline.slice(0, MAX_AMIGOS_ONLINE);
  const restantes = amigosOnline.length - MAX_AMIGOS_ONLINE;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      {amigosVisiveis.map((amigo) => (
        <View key={amigo.id} style={styles.amigoContainer}>
          <View>
            <Avatar tamanho={48} />
            <View style={styles.indicadorOnline} />
          </View>
          <Text style={styles.amigoNome} numberOfLines={1}>
            {amigo.nome}
          </Text>
        </View>
      ))}

      {restantes > 0 && <Text style={styles.restantes}>+ {restantes}</Text>}
    </TouchableOpacity>
  );
}