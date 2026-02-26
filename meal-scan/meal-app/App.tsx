import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const plans = [
  { key: '12', duration: '12\nmonths', badge: 'Best price', badgeBg: '#D4EE79', active: true },
  { key: '6', duration: '6\nmonths', badge: 'Popular', badgeBg: '#E3D8FF', active: false },
  { key: '3', duration: '3\nmonths', badge: '', badgeBg: '#FFFFFF', active: false },
];

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="dark" />
      <View style={styles.topLine} />

      <View style={styles.header}>
        <Text style={styles.time}>16:36</Text>
        <Text style={styles.restore}>Restore</Text>
      </View>

      <View style={styles.frame327}>
        <View style={styles.heroArtWrap}>
          {/* decorative-only export (no text baked in) */}
          <Image source={require('./assets/paywall/hero-art.png')} style={styles.heroArt} resizeMode="cover" />
          <Image source={require('./assets/paywall/close-icon.png')} style={styles.closeIcon} resizeMode="contain" />
        </View>

        <View style={styles.plusPill}>
          <Text style={styles.plusText}>PLUS</Text>
        </View>

        <Text style={styles.title}>Take a big step to the healthy life</Text>

        <View style={styles.cardsRow}>
          {plans.map((plan) => (
            <View key={plan.key} style={[styles.planCard, plan.active && styles.planCardActive]}>
              <Text style={[styles.duration, plan.active && styles.durationActive]}>{plan.duration}</Text>

              {plan.badge ? (
                <View style={[styles.badge, { backgroundColor: plan.badgeBg }]}>
                  <Text style={[styles.badgeText, plan.active ? styles.badgeTextBest : styles.badgeTextPopular]}>{plan.badge}</Text>
                </View>
              ) : (
                <View style={styles.badgeSpacer} />
              )}

              <Text style={[styles.price, plan.active && styles.priceActive]}>$329.49</Text>
              <Text style={[styles.week, plan.active && styles.weekActive]}>$4.82 / week</Text>
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#DFF0FA',
    alignItems: 'center',
  },
  topLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: '#0D84C9',
  },
  header: {
    width: 327,
    marginTop: 8,
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111111',
  },
  restore: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2C3B46',
  },
  frame327: {
    width: 327,
  },
  heroArtWrap: {
    marginTop: 2,
    height: 168,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#E8F7FF',
  },
  heroArt: {
    width: '100%',
    height: '100%',
  },
  closeIcon: {
    position: 'absolute',
    left: 10,
    top: 10,
    width: 18,
    height: 18,
  },
  plusPill: {
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: '#F8B13C',
    borderRadius: 999,
    paddingHorizontal: 18,
    paddingVertical: 6,
  },
  plusText: {
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  title: {
    marginTop: 12,
    textAlign: 'center',
    color: '#232E41',
    fontSize: 32,
    lineHeight: 38,
    fontWeight: '500',
  },
  cardsRow: {
    marginTop: 18,
    flexDirection: 'row',
    gap: 10,
  },
  planCard: {
    flex: 1,
    minHeight: 126,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 8,
    alignItems: 'center',
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
    color: '#6C7484',
    fontSize: 14,
    fontWeight: '500',
  },
  priceActive: {
    color: '#FFFFFF',
  },
  week: {
    marginTop: 2,
    color: '#8A95A7',
    fontSize: 8,
    fontWeight: '700',
  },
  weekActive: {
    color: '#FFFFFF',
  },
  cancel: {
    marginTop: 14,
    textAlign: 'center',
    color: '#2E394A',
    fontSize: 12,
    fontWeight: '500',
  },
  cta: {
    marginTop: 12,
    height: 56,
    borderRadius: 999,
    backgroundColor: '#208010',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '600',
  },
  footerLinks: {
    marginTop: 12,
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
