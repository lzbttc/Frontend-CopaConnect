import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Bell } from 'phosphor-react-native';

import { styles } from './style';

export function IndicadorNotificacoes({
  quantidade = 0,
  size = 26,
  color = '#DFFF2B',
  onPress,
}) {
  const mostrarBadge = quantidade > 0;

  const conteudo = (
    <View style={styles.container}>
      <Bell size={size} color={color} weight="regular" />

      {mostrarBadge && (
        <View style={styles.badge}>
          <Text style={styles.badgeTexto}>
            {quantidade > 9 ? '9+' : quantidade}
          </Text>
        </View>
      )}
    </View>
  );

  if (!onPress) {
    return conteudo;
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} accessibilityLabel="Notificações">
      {conteudo}
    </TouchableOpacity>
  );
}
