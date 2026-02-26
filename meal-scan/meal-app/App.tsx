import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const perks = [
  'Unlimited AI coach chat',
  'Adaptive weekly meal plans',
  'Smart grocery lists + swaps',
  'Cancel anytime, no lock-in',
];

const plans = [
  { id: 'pro-year', title: '12 months', price: '$4.99/wk', total: '$259 billed yearly', badge: 'Best Value', active: true },
  { id: 'pro-6m', title: '6 months', price: '$6.49/wk', total: '$169 billed every 6 months', badge: 'Popular', active: false },
  { id: 'pro-month', title: '1 month', price: '$9.99/wk', total: 'Billed monthly', badge: '', active: false },
];

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="light" />

      <LinearGradient colors={['#0B1022', '#111B3A', '#132A4D']} style={styles.hero}>
        <Text style={styles.logo}>MEALSCAN+</Text>
        <Text style={styles.headline}>Get results that actually stick.</Text>
        <Text style={styles.subline}>Personalized nutrition that adapts to your life in real time.</Text>
      </LinearGradient>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>What you unlock</Text>
        {perks.map((perk) => (
          <View key={perk} style={styles.perkRow}>
            <Text style={styles.check}>✓</Text>
            <Text style={styles.perkText}>{perk}</Text>
          </View>
        ))}

        <View style={styles.planStack}>
          {plans.map((plan) => (
            <Pressable key={plan.id} style={[styles.planCard, plan.active && styles.planCardActive]}>
              <View style={styles.planTop}>
                <Text style={[styles.planTitle, plan.active && styles.planTitleActive]}>{plan.title}</Text>
                {!!plan.badge && (
                  <View style={[styles.badge, plan.active ? styles.badgeBest : styles.badgeMuted]}>
                    <Text style={[styles.badgeText, plan.active && styles.badgeTextBest]}>{plan.badge}</Text>
                  </View>
                )}
              </View>
              <Text style={[styles.planPrice, plan.active && styles.planPriceActive]}>{plan.price}</Text>
              <Text style={[styles.planTotal, plan.active && styles.planTotalActive]}>{plan.total}</Text>
            </Pressable>
          ))}
        </View>

        <Pressable style={styles.cta}>
          <LinearGradient colors={['#2FE67B', '#19B85A']} style={styles.ctaBg}>
            <Text style={styles.ctaText}>Start 7-Day Free Trial</Text>
          </LinearGradient>
        </Pressable>

        <Text style={styles.legal}>Then $4.99/week. Cancel anytime.</Text>
        <Text style={styles.links}>Terms • Privacy</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0B1022' },
  hero: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 28,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  logo: { color: '#7EE3FF', fontWeight: '800', letterSpacing: 1.2, fontSize: 14 },
  headline: { marginTop: 14, color: '#FFFFFF', fontSize: 34, lineHeight: 38, fontWeight: '800' },
  subline: { marginTop: 10, color: '#B8C3E0', fontSize: 15, lineHeight: 22 },
  panel: {
    flex: 1,
    marginTop: 14,
    backgroundColor: '#F7F9FF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 16,
  },
  panelTitle: { color: '#1D2947', fontSize: 18, fontWeight: '800', marginBottom: 10 },
  perkRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  check: { color: '#18B75A', fontSize: 16, fontWeight: '900', marginRight: 8 },
  perkText: { color: '#33415F', fontSize: 14, fontWeight: '500' },
  planStack: { marginTop: 14, gap: 10 },
  planCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E5EAF5',
  },
  planCardActive: {
    borderColor: '#22C767',
    backgroundColor: '#F2FFF7',
  },
  planTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  planTitle: { color: '#1F2B49', fontSize: 16, fontWeight: '700' },
  planTitleActive: { color: '#145C34' },
  badge: { borderRadius: 999, paddingHorizontal: 8, paddingVertical: 3 },
  badgeBest: { backgroundColor: '#D7F7E4' },
  badgeMuted: { backgroundColor: '#EDEFFC' },
  badgeText: { fontSize: 11, fontWeight: '700', color: '#5A6480' },
  badgeTextBest: { color: '#1C7F47' },
  planPrice: { marginTop: 8, color: '#17233F', fontSize: 20, fontWeight: '800' },
  planPriceActive: { color: '#0E6A36' },
  planTotal: { marginTop: 2, color: '#7080A3', fontSize: 12, fontWeight: '500' },
  planTotalActive: { color: '#3A8B60' },
  cta: { marginTop: 16, borderRadius: 14, overflow: 'hidden' },
  ctaBg: { height: 54, justifyContent: 'center', alignItems: 'center' },
  ctaText: { color: '#072514', fontSize: 16, fontWeight: '900' },
  legal: { marginTop: 10, textAlign: 'center', color: '#607191', fontSize: 12 },
  links: { marginTop: 6, textAlign: 'center', color: '#8A96B0', fontSize: 11 },
});
