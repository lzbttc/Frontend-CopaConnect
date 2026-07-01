import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  icone: {
    lineHeight: 26,
  },

  badge: {
    position: 'absolute',
    top: -2,
    right: -4,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#DFFF2B',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },

  badgeTexto: {
    color: '#00223A',
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 12,
  },
});
