import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CountryFlag from 'react-native-country-flag';

import { styles } from './style';

function ItemBolao({ bolao, partida, onPress }) {
  const { selecaoA, selecaoB } = partida;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.itemContainer}
    >
      <View style={styles.itemEsquerda}>
        <Text style={styles.itemNome}>{bolao.nome}</Text>

        <View style={styles.palpiteContainer}>
          <Text style={styles.itemPalpite}>Palpite:</Text>

          <CountryFlag isoCode={selecaoA.codigo} size={13} style={styles.bandeira} />
          <Text style={styles.itemPalpite}>{bolao.palpite.golsSelecaoA}</Text>

          <Text style={styles.itemPalpite}>-</Text>

          <Text style={styles.itemPalpite}>{bolao.palpite.golsSelecaoB}</Text>
          <CountryFlag isoCode={selecaoB.codigo} size={13} style={styles.bandeira} />
        </View>
      </View>

      <View style={styles.itemDireita}>
        <Text style={styles.itemPosicao}>
          {bolao.posicao}º/{bolao.totalParticipantes}
        </Text>
        <Text style={styles.itemPontuacao}>{bolao.pontuacao} pts</Text>
      </View>
    </TouchableOpacity>
  );
}

export function CardBoloesInicio({ bolaos, partida, onPressBolao }) {
  return (
    <View style={styles.container}>
      {bolaos.map((bolao, index) => (
        <View key={bolao.id}>
          {index > 0 && <View style={styles.divisor} />}
          <ItemBolao
            bolao={bolao}
            partida={partida}
            onPress={() => onPressBolao(bolao)}
          />
        </View>
      ))}
    </View>
  );
}