import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const plans = [
  { duration: '12\nmonths', badge: 'Best price', badgeColor: '#D4EE79', active: true },
  { duration: '6\nmonths', badge: 'Popular', badgeColor: '#E3D8FF', active: false },
  { duration: '3\nmonths', badge: '', badgeColor: '#FFFFFF', active: false },
];

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="dark" />

      <View style={styles.topLine} />

      <View style={styles.headerRow}>
        <Text style={styles.time}>16:36</Text>
        <Text style={styles.restore}>Restore</Text>
      </View>

      <View style={styles.heroArt}>
        <Text style={styles.close}>×</Text>
      </View>

      <View style={styles.plusPill}>
        <Text style={styles.plusText}>PLUS</Text>
      </View>

      <Text style={styles.title}>Take a big step to the{`\n`}healthy life</Text>

      <View style={styles.cardsRow}>
        {plans.map((p) => (
          <View key={p.duration} style={[styles.planCard, p.active && styles.planCardActive]}>
            <Text style={[styles.duration, p.active && styles.durationActive]}>{p.duration}</Text>

            {p.badge ? (
              <View style={[styles.badge, { backgroundColor: p.badgeColor }]}>
                <Text style={[styles.badgeText, p.active ? styles.badgeTextBest : styles.badgeTextPopular]}>
                  {p.badge}
                </Text>
              </View>
            ) : (
              <View style={styles.badgeSpacer} />
            )}

            <Text style={[styles.price, p.active && styles.priceActive]}>$329.49</Text>
            <Text style={[styles.perWeek, p.active && styles.perWeekActive]}>$4.82 / week</Text>
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
  screen: {
    flex: 1,
    backgroundColor: '#DFF0FA',
    paddingHorizontal: 22,
  },
  topLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: '#0D84C9',
  },
  headerRow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontSize: 18,
    fontWeight: '500',
    color: '#111111',
  },
  restore: {
    fontSize: 24,
    color: '#2C3B46',
    fontWeight: '400',
  },
  heroArt: {
    marginTop: 8,
    height: 150,
    borderRadius: 18,
    backgroundColor: '#EAF7FF',
  },
  close: {
    paddingLeft: 8,
    fontSize: 34,
    lineHeight: 38,
    color: '#2D3A46',
  },
  plusPill: {
    marginTop: 8,
    alignSelf: 'center',
    backgroundColor: '#F8B13C',
    borderRadius: 999,
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
  plusText: {
    fontSize: 30,
    lineHeight: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  title: {
    marginTop: 10,
    textAlign: 'center',
    color: '#232E41',
    fontSize: 49,
    lineHeight: 56,
    fontWeight: '500',
  },
  cardsRow: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 10,
  },
  planCard: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  planCardActive: {
    backgroundColor: '#F8A52F',
  },
  duration: {
    textAlign: 'center',
    color: '#232E41',
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '600',
  },
  durationActive: {
    color: '#FFFFFF',
  },
  badge: {
    marginTop: 8,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  badgeSpacer: {
    marginTop: 8,
    height: 18,
  },
  badgeText: {
    fontSize: 11,
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
    fontSize: 13,
    fontWeight: '600',
    color: '#6C7484',
  },
  priceActive: {
    color: '#FFFFFF',
  },
  perWeek: {
    marginTop: 2,
    fontSize: 8,
    fontWeight: '700',
    color: '#8A95A7',
  },
  perWeekActive: {
    color: '#FFFFFF',
  },
  cancel: {
    marginTop: 12,
    textAlign: 'center',
    color: '#2E394A',
    fontSize: 12,
    fontWeight: '500',
  },
  cta: {
    marginTop: 10,
    height: 58,
    borderRadius: 999,
    backgroundColor: '#208010',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaText: {
    color: '#FFFFFF',
    fontSize: 34,
    lineHeight: 36,
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
    color: '#8B96A9',
    fontSize: 9,
  },
  dot: {
    color: '#8B96A9',
    fontSize: 8,
  },
});
