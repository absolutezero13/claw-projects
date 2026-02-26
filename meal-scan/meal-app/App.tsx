import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';

const plans = [
  { duration: '12\nmonths', badge: 'Best price', price: '$329.49', weekly: '$4.82 / week', active: true },
  { duration: '6\nmonths', badge: 'Popular', price: '$329.49', weekly: '$4.82 / week', active: false },
  { duration: '3\nmonths', badge: '', price: '$329.49', weekly: '$4.82 / week', active: false },
];

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />

      <View style={styles.topAccent} />

      <View style={styles.headerRow}>
        <Text style={styles.time}>16:36</Text>
        <Text style={styles.restore}>Restore</Text>
      </View>

      <View style={styles.heroArtWrap}>
        <Text style={styles.close}>×</Text>
        <Text style={styles.bird}>🐦</Text>
      </View>

      <View style={styles.plusPill}>
        <Text style={styles.plusText}>PLUS</Text>
      </View>

      <Text style={styles.title}>Take a big step to the{`\n`}healthy life</Text>

      <View style={styles.cardsRow}>
        {plans.map((p) => (
          <View key={p.duration} style={[styles.card, p.active && styles.cardActive]}>
            <Text style={[styles.duration, p.active && styles.durationActive]}>{p.duration}</Text>
            {!!p.badge && (
              <View style={[styles.badge, p.active ? styles.badgeBest : styles.badgePopular]}>
                <Text style={[styles.badgeText, p.active ? styles.badgeTextBest : styles.badgeTextPopular]}>{p.badge}</Text>
              </View>
            )}
            <Text style={[styles.price, p.active && styles.priceActive]}>{p.price}</Text>
            <Text style={[styles.weekly, p.active && styles.weeklyActive]}>{p.weekly}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.cancel}>Cancel anytime.</Text>

      <Pressable style={styles.cta}>
        <Text style={styles.ctaText}>Continue</Text>
      </Pressable>

      <View style={styles.footerLinks}>
        <Text style={styles.link}>Terms & Conditions</Text>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.link}>Privacy Policy</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#DFF2FF',
    paddingHorizontal: 20,
  },
  topAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 6,
    backgroundColor: '#0E84C6',
  },
  headerRow: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontSize: 20,
    fontWeight: '500',
    color: '#111111',
  },
  restore: {
    fontSize: 24,
    fontWeight: '400',
    color: '#333333',
  },
  heroArtWrap: {
    marginTop: 6,
    height: 135,
    borderRadius: 16,
    backgroundColor: '#EAF6FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  close: {
    position: 'absolute',
    left: 10,
    top: 2,
    fontSize: 34,
    color: '#2D3A46',
  },
  bird: {
    fontSize: 44,
  },
  plusPill: {
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#F9B23D',
    borderRadius: 999,
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  plusText: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 1,
  },
  title: {
    marginTop: 14,
    textAlign: 'center',
    fontSize: 58,
    lineHeight: 68,
    color: '#232E41',
    fontWeight: '500',
  },
  cardsRow: {
    marginTop: 22,
    flexDirection: 'row',
    gap: 10,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  cardActive: {
    backgroundColor: '#F9A52F',
  },
  duration: {
    fontSize: 11,
    textAlign: 'center',
    color: '#2D3340',
    fontWeight: '600',
  },
  durationActive: {
    color: '#FFFFFF',
  },
  badge: {
    borderRadius: 99,
    marginTop: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeBest: {
    backgroundColor: '#D3F27B',
  },
  badgePopular: {
    backgroundColor: '#E2D7FF',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
  },
  badgeTextBest: {
    color: '#4C6E13',
  },
  badgeTextPopular: {
    color: '#6A4BD8',
  },
  price: {
    marginTop: 8,
    fontSize: 10,
    color: '#666F80',
    fontWeight: '600',
  },
  priceActive: {
    color: '#FFFFFF',
  },
  weekly: {
    marginTop: 2,
    fontSize: 6,
    color: '#8B96A9',
    fontWeight: '700',
  },
  weeklyActive: {
    color: '#FFFFFF',
  },
  cancel: {
    marginTop: 16,
    textAlign: 'center',
    color: '#2E394A',
    fontSize: 9,
    fontWeight: '500',
  },
  cta: {
    marginTop: 14,
    backgroundColor: '#178E0C',
    borderRadius: 999,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaText: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '700',
  },
  footerLinks: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  link: {
    fontSize: 8,
    color: '#8B96A9',
    fontWeight: '500',
  },
  dot: {
    color: '#8B96A9',
    fontSize: 7,
  },
});
