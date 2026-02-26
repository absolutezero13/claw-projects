import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

const meals = [
  { label: 'Breakfast', name: 'Oatmeal with peanut butter', kcal: '432 kcal', variants: '32 variation' },
  { label: 'Lunch', name: 'Chicken quesadilla', kcal: '545 kcal', variants: '24 variation' },
  { label: 'Dinner', name: 'Greek salad', kcal: '281 kcal', variants: '8 variation' },
];

const tabs = ['DAY 1', 'DAY 2', 'DAY 3'];

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <Text style={styles.time}>6:36</Text>
          <Text style={styles.start}>START TIME</Text>
        </View>

        <Text style={styles.screenTitle}>Meal plan</Text>

        <View style={styles.waterCard}>
          <View style={styles.waterHead}>
            <Text style={styles.waterTitle}>Water tracker</Text>
            <Text style={styles.goal}>2L of daily goal</Text>
          </View>

          <Text style={styles.progress}>46% of your goal</Text>

          <View style={styles.progressBg}>
            <View style={styles.progressFill} />
          </View>

          <View style={styles.waterStats}>
            <Text style={styles.mlPrimary}>5000 ml</Text>
            <Text style={styles.mlSecondary}>2500 ml</Text>
          </View>
        </View>

        <View style={styles.planCard}>
          <View style={styles.weekRow}>
            <Text style={styles.week}>Week 1</Text>
            <Text style={styles.page}>1/2</Text>
          </View>

          <View style={styles.tabsRow}>
            {tabs.map((tab, i) => (
              <View key={tab} style={[styles.tab, i === 0 && styles.tabActive]}>
                <Text style={[styles.tabText, i === 0 && styles.tabTextActive]}>{tab}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.dayTitle}>Day 1</Text>

          {meals.map((meal) => (
            <View key={meal.label} style={styles.mealCard}>
              <View style={styles.mealTop}>
                <Text style={styles.mealLabel}>{meal.label}</Text>
                <Text style={styles.mealAdd}>add</Text>
              </View>
              <Text style={styles.mealName}>{meal.name}</Text>
              <View style={styles.metaRow}>
                <Text style={styles.kcal}>{meal.kcal}</Text>
                <Text style={styles.variation}>{meal.variants}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.ctaCard}>
          <Text style={styles.ctaEyebrow}>Personalized weekly plan</Text>
          <Pressable style={styles.ctaButton}>
            <Text style={styles.ctaText}>SEE PLAN</Text>
          </Pressable>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <Text style={styles.navActive}>Meal plan</Text>
        <Text style={styles.navItem}>Grocery list (68)</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f5f7fb',
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 100,
    gap: 14,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  start: {
    fontSize: 11,
    color: '#9ca3af',
    letterSpacing: 1,
    fontWeight: '700',
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
  },
  waterCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#0ea5e9',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  waterHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  waterTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
  },
  goal: {
    fontSize: 12,
    color: '#6b7280',
  },
  progress: {
    marginTop: 8,
    color: '#374151',
    fontSize: 13,
  },
  progressBg: {
    marginTop: 10,
    height: 8,
    borderRadius: 99,
    backgroundColor: '#dbeafe',
    overflow: 'hidden',
  },
  progressFill: {
    width: '46%',
    height: '100%',
    backgroundColor: '#3b82f6',
  },
  waterStats: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mlPrimary: {
    color: '#111827',
    fontWeight: '700',
    fontSize: 16,
  },
  mlSecondary: {
    color: '#6b7280',
    fontSize: 14,
  },
  planCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 14,
    gap: 10,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  week: {
    fontWeight: '700',
    color: '#111827',
  },
  page: {
    color: '#9ca3af',
    fontWeight: '600',
  },
  tabsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  tab: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: 8,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: '#111827',
  },
  tabText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6b7280',
  },
  tabTextActive: {
    color: '#ffffff',
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
    marginTop: 2,
  },
  mealCard: {
    backgroundColor: '#f9fafb',
    borderRadius: 14,
    padding: 12,
    gap: 4,
  },
  mealTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mealLabel: {
    fontSize: 13,
    color: '#6b7280',
    fontWeight: '700',
  },
  mealAdd: {
    fontSize: 12,
    color: '#10b981',
    fontWeight: '700',
  },
  mealName: {
    fontSize: 15,
    color: '#111827',
    fontWeight: '700',
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  kcal: {
    fontSize: 12,
    color: '#374151',
  },
  variation: {
    fontSize: 12,
    color: '#9ca3af',
  },
  ctaCard: {
    backgroundColor: '#e0f2fe',
    borderRadius: 18,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ctaEyebrow: {
    fontSize: 14,
    color: '#0c4a6e',
    fontWeight: '700',
  },
  ctaButton: {
    backgroundColor: '#0369a1',
    borderRadius: 10,
    paddingVertical: 9,
    paddingHorizontal: 14,
  },
  ctaText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 12,
  },
  bottomNav: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 12,
    backgroundColor: '#111827',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  navActive: {
    color: '#fff',
    fontWeight: '800',
  },
  navItem: {
    color: '#9ca3af',
    fontWeight: '700',
    fontSize: 12,
  },
});
