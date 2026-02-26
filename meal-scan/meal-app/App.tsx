import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const meals = [
  { type: 'Breakfast', title: 'Oatmeal with peanut butter', kcal: '432 kcal', variation: '32 variation' },
  { type: 'Lunch', title: 'Chicken quesadilla', kcal: '545 kcal', variation: '24 variation' },
  { type: 'Dinner', title: 'Greek salad', kcal: '281 kcal', variation: '8 variation' },
];

const COLORS = {
  ink: '#232E41',
  muted: '#737D92',
  lightMuted: '#96A1B2',
  success: '#1CA576',
  danger: '#FF6243',
  card: '#FFFFFF',
  peach: '#FFEACC',
  bg: '#F4F8FC',
  blueSoft: '#E6F0F7',
  blueLine: '#1D70DB',
};

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />

      <View style={styles.haloA} />
      <View style={styles.haloB} />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.time}>6:36</Text>
          <Text style={styles.startTime}>START TIME</Text>
        </View>

        <View style={styles.waterSectionTitleRow}>
          <Text style={styles.waterTitle}>Water tracker</Text>
          <Text style={styles.goal}>2L of daily goal</Text>
        </View>

        <View style={styles.waterCard}>
          <View style={styles.waterStatsRow}>
            <Text style={styles.mainMl}>5000 ml</Text>
            <Text style={styles.rightMl}>2500 ml</Text>
          </View>

          <Text style={styles.progressLabel}>46% of your goal</Text>
          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>
        </View>

        <View style={styles.mealCard}>
          <View style={styles.dayHeader}>
            <Text style={styles.dayText}>Day 1</Text>
            <Text style={styles.add}>add</Text>
          </View>

          {meals.map((meal, idx) => (
            <View key={meal.type} style={[styles.mealRow, idx < meals.length - 1 && styles.mealDivider]}>
              <Text style={styles.mealType}>{meal.type}</Text>
              <Text style={styles.mealTitle}>{meal.title}</Text>
              <View style={styles.metaRow}>
                <Text style={styles.kcal}>{meal.kcal}</Text>
                <Text style={styles.variation}>{meal.variation}</Text>
              </View>
            </View>
          ))}

          <View style={styles.day2Header}>
            <Text style={styles.dayText}>Day 2</Text>
            <Text style={styles.add}>add</Text>
          </View>

          <View style={styles.mealRow}>
            <Text style={styles.mealType}>Breakfast</Text>
            <Text style={styles.mealTitle}>Oatmeal with peanut butter</Text>
            <View style={styles.metaRow}>
              <Text style={styles.kcal}>432 kcal</Text>
              <Text style={styles.variation}>32 variation</Text>
            </View>
          </View>
        </View>

        <View style={styles.personalizedWrap}>
          <Text style={styles.personalizedTitle}>Personalized plan</Text>
          <View style={styles.seePlanPill}>
            <Text style={styles.seePlanText}>SEE PLAN</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <Text style={styles.navActive}>Meal plan</Text>
        <Text style={styles.navMuted}>Grocery list (68)</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  haloA: {
    position: 'absolute',
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: '#EAF7DF',
    top: 110,
    left: -90,
    opacity: 0.9,
  },
  haloB: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#E6F0F7',
    top: 220,
    right: -80,
    opacity: 0.7,
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 120,
    gap: 16,
  },
  header: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    color: COLORS.ink,
    fontSize: 15,
    fontWeight: '600',
  },
  startTime: {
    color: COLORS.muted,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  waterSectionTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  waterTitle: {
    color: COLORS.ink,
    fontSize: 16,
    fontWeight: '500',
  },
  goal: {
    color: COLORS.muted,
    fontSize: 14,
    fontWeight: '400',
  },
  waterCard: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 16,
    shadowColor: '#1D70DB',
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 2,
  },
  waterStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  mainMl: {
    color: COLORS.ink,
    fontSize: 20,
    fontWeight: '600',
  },
  rightMl: {
    color: COLORS.lightMuted,
    fontSize: 10,
    fontWeight: '400',
  },
  progressLabel: {
    marginTop: 8,
    color: COLORS.muted,
    fontSize: 12,
    fontWeight: '400',
  },
  progressTrack: {
    marginTop: 8,
    height: 6,
    backgroundColor: COLORS.blueSoft,
    borderRadius: 999,
    overflow: 'hidden',
  },
  progressFill: {
    width: '46%',
    height: '100%',
    backgroundColor: COLORS.blueLine,
    borderRadius: 999,
  },
  mealCard: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  dayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  day2Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    marginTop: 8,
  },
  dayText: {
    color: COLORS.ink,
    fontSize: 16,
    fontWeight: '600',
  },
  add: {
    color: COLORS.success,
    fontSize: 12,
    fontWeight: '700',
  },
  mealRow: {
    paddingVertical: 8,
  },
  mealDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  mealType: {
    color: COLORS.muted,
    fontSize: 11,
    fontWeight: '400',
  },
  mealTitle: {
    color: COLORS.ink,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 2,
  },
  metaRow: {
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  kcal: {
    color: COLORS.muted,
    fontSize: 8,
    fontWeight: '600',
  },
  variation: {
    color: COLORS.muted,
    fontSize: 8,
    fontWeight: '600',
  },
  personalizedWrap: {
    backgroundColor: COLORS.peach,
    borderRadius: 18,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  personalizedTitle: {
    color: COLORS.ink,
    fontSize: 16,
    fontWeight: '500',
  },
  seePlanPill: {
    backgroundColor: COLORS.card,
    borderRadius: 99,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  seePlanText: {
    color: COLORS.danger,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 87,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#EDEFF2',
    paddingHorizontal: 40,
    paddingBottom: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navActive: {
    color: COLORS.ink,
    fontSize: 12,
    fontWeight: '600',
  },
  navMuted: {
    color: COLORS.lightMuted,
    fontSize: 12,
    fontWeight: '600',
  },
});
