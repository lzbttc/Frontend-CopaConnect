import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  House,
  Calendar,
  Users,
  Trophy,
  ChartBar,
} from 'phosphor-react-native';

import { NomesRotas } from '../../routes/nomes-rotas';

import { styles } from './style';

const itensNavegacao = [
  { rota: NomesRotas.INICIO, icone: House },
  { rota: NomesRotas.AGENDA_PARTIDAS, icone: Calendar },
  { rota: NomesRotas.AMIGOS, icone: Users },
  { rota: NomesRotas.BOLAO, icone: Trophy },
  { rota: NomesRotas.ESTATISTICAS, icone: ChartBar },
];

export function BarraNavegacao() {
  const navigation = useNavigation();
  const { name: rotaAtual } = useRoute();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom + 14 }]}>
      {itensNavegacao.map(({ rota, icone: Icone }) => {
        const ativo = rotaAtual === rota;

        return (
          <TouchableOpacity
            key={rota}
            activeOpacity={0.8}
            onPress={() => navigation.navigate(rota)}
            style={ativo ? styles.itemAtivo : styles.item}
          >
            <Icone
              size={26}
              weight={ativo ? 'fill' : 'regular'}
              color="#00223A"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}