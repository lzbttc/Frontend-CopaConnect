import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Bell } from 'phosphor-react-native';

import { styles } from './style';

const LIMITE_BADGE = 99;

export function IndicadorNotificacoes({
  quantidade = 0,
  size = 26,
  color = '#DFFF2B',
  onPress,
}) {
  const quantidadeSegura = Number.isFinite(quantidade)
    ? Math.max(0, Number(quantidade))
    : 0;
  const mostrarBadge = quantidadeSegura > 0;
  const textoBadge = quantidadeSegura > LIMITE_BADGE ? `${LIMITE_BADGE}+` : String(quantidadeSegura);

  const conteudo = (
    <View style={styles.container}>
      <Bell size={size} color={color} weight="regular" />

      {mostrarBadge && (
        <View style={styles.badge}>
          <Text style={styles.badgeTexto}>{textoBadge}</Text>
        </View>
      )}
    </View>
  );

  if (!onPress) {
    return conteudo;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      accessibilityLabel="Notificações"
      accessibilityRole="button"
    >
      {conteudo}
    </TouchableOpacity>
  );
}
