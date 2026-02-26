import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';

const plans = [
  { id: '12', duration: '12\nmonths', badge: 'Best price', price: '$329.49', weekly: '$4.82/week', active: false },
  { id: '6', duration: '6\nmonths', badge: 'Popular', price: '$329.49', weekly: '$4.82/week', active: true },
  { id: '3', duration: '3\nmonths', badge: 'Best price', price: '$329.49', weekly: '$4.82/week', active: false },
];

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />

      <View style={styles.hero}>
        <View style={styles.topBar}>
          <Text style={styles.time}>16:36</Text>
          <Text style={styles.restore}>Restore</Text>
        </View>

        <View style={styles.plusPill}>
          <Text style={styles.plusText}>Plus</Text>
        </View>

        <Text style={styles.heroTitle}>Take a big step to the healthy life</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.journeyTitle}>Start your{`\n`}weigh-loss journey{`\n`}now</Text>

        <View style={styles.bullets}>
          <Text style={styles.bullet}>• Unlimited chat with Coach</Text>
          <Text style={styles.bullet}>• Personalized programs</Text>
          <Text style={styles.bullet}>• 7 days free, then $2.99/week.</Text>
          <Text style={styles.bullet}>• 30-days money back guarantee</Text>
        </View>

        <View style={styles.planRow}>
          {plans.map((plan) => (
            <View key={plan.id} style={[styles.planCard, plan.active && styles.planCardActive]}>
              <Text style={styles.planDuration}>{plan.duration}</Text>
              <View style={[styles.badge, plan.active && styles.badgeActive]}>
                <Text style={[styles.badgeText, plan.active && styles.badgeTextActive]}>{plan.badge}</Text>
              </View>
              <Text style={styles.price}>{plan.price}</Text>
              <Text style={styles.weekly}>{plan.weekly}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.cancel}>Cancel anytime.</Text>
      </View>

      <View style={styles.stickyArea}>
        <Pressable style={styles.continueBtn}>
          <Text style={styles.continueText}>Continue</Text>
        </Pressable>

        <View style={styles.linksRow}>
          <Text style={styles.link}>Terms & Conditions</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.link}>Privacy Policy</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FCFBF5',
  },
  hero: {
    height: 350,
    backgroundColor: '#E8F7FF',
    paddingHorizontal: 24,
    paddingTop: 10,
  },
  topBar: {
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
    color: '#4999AC',
  },
  plusPill: {
    alignSelf: 'flex-start',
    marginTop: 16,
    backgroundColor: '#232E41',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  plusText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
  },
  heroTitle: {
    marginTop: 26,
    color: '#214851',
    fontSize: 32,
    lineHeight: 37,
    fontWeight: '500',
    maxWidth: 300,
  },
  content: {
    paddingHorizontal: 24,
    marginTop: -28,
  },
  journeyTitle: {
    color: '#232E41',
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '500',
    marginBottom: 16,
  },
  bullets: {
    gap: 8,
  },
  bullet: {
    fontSize: 12,
    fontWeight: '500',
    color: '#232E41',
  },
  planRow: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  planCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#EEF2F3',
    alignItems: 'center',
  },
  planCardActive: {
    borderColor: '#8166ED',
    shadowColor: '#8166ED',
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 3,
  },
  planDuration: {
    textAlign: 'center',
    color: '#232E41',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 18,
  },
  badge: {
    marginTop: 8,
    backgroundColor: '#FFE35E',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeActive: {
    backgroundColor: '#8166ED',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#232E41',
  },
  badgeTextActive: {
    color: '#FFFFFF',
  },
  price: {
    marginTop: 10,
    color: '#232E41',
    fontSize: 14,
    fontWeight: '500',
  },
  weekly: {
    marginTop: 2,
    color: '#737D92',
    fontSize: 8,
    fontWeight: '600',
  },
  cancel: {
    marginTop: 12,
    textAlign: 'center',
    color: '#737D92',
    fontSize: 12,
    fontWeight: '500',
  },
  stickyArea: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 120,
    paddingHorizontal: 24,
    paddingTop: 12,
    backgroundColor: 'rgba(252,251,245,0.97)',
  },
  continueBtn: {
    height: 52,
    borderRadius: 16,
    backgroundColor: '#E36D3C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  linksRow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  link: {
    color: '#737D92',
    fontSize: 10,
    fontWeight: '400',
  },
  dot: {
    color: '#96A1B2',
    fontSize: 10,
  },
});
