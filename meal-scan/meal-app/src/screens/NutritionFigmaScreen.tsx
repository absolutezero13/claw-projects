import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

type Meal = {
  key: string;
  title: string;
  kcal: string;
  icon: any;
  status?: "good";
  details?: string[];
};

const meals: Meal[] = [
  {
    key: "breakfast",
    title: "Breakfast",
    kcal: "214 / 680 kcal",
    icon: require("../../assets/figma/food___drinks___sandwich.png"),
    status: "good",
    details: [
      "Scrambled eggs with spinach and tomatoes, whole-grain bread...",
      "Orange juice",
    ],
  },
  {
    key: "lunch",
    title: "Lunch",
    kcal: "Recommended: 790 kcal",
    icon: require("../../assets/figma/food___drinks___salad.png"),
  },
  {
    key: "dinner",
    title: "Dinner",
    kcal: "Recommended: 560 kcal",
    icon: require("../../assets/figma/food___drinks___pot_of_food.png"),
  },
  {
    key: "snacks",
    title: "Snacks",
    kcal: "Recommended: 230 kcal",
    icon: require("../../assets/figma/image_4.png"),
  },
];

const MacroRow = ({ label, value, total, progress, color }: { label: string; value: number; total: number; progress: number; color: string }) => (
  <View style={styles.macroRow}>
    <View style={styles.macroLabelRow}>
      <Text style={styles.macroLabel}>{label}</Text>
      <Text style={styles.macroValue}>
        {value}
        <Text style={styles.macroTotal}>/{total}g</Text>
      </Text>
    </View>
    <View style={styles.progressTrack}>
      <View style={[styles.progressFill, { width: `${Math.max(0, Math.min(100, progress * 100))}%`, backgroundColor: color }]} />
    </View>
  </View>
);

const MealRow = ({ meal }: { meal: Meal }) => (
  <View style={styles.mealCard}>
    <View style={styles.mealHeader}>
      <Image source={meal.icon} style={styles.mealIcon} resizeMode="contain" />
      <View style={styles.mealTitleWrap}>
        <Text style={styles.mealTitle}>{meal.title}</Text>
        <Text style={styles.mealKcal}>{meal.kcal}</Text>
      </View>
      {meal.status === "good" ? (
        <View style={styles.goodBadge}>
          <Text style={styles.goodBadgeText}>Good</Text>
        </View>
      ) : (
        <View style={styles.addButton}>
          <Text style={styles.addButtonText}>＋</Text>
        </View>
      )}
    </View>

    {meal.details?.length ? (
      <View style={styles.mealDetails}>
        {meal.details.map((d) => (
          <Text key={d} style={styles.detailText}>• {d}</Text>
        ))}
      </View>
    ) : null}
  </View>
);

export default function NutritionFigmaScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <Text style={styles.screenTitle}>Nutrition</Text>
          <View style={styles.settingsButton}>
            <Text style={styles.settingsIcon}>⚙︎</Text>
          </View>
        </View>

        <View style={styles.summaryCard}>
          <View style={styles.calorieWrap}>
            <Text style={styles.consumedLabel}>Consumed</Text>
            <Text style={styles.calorieValue}>1,200</Text>
            <Text style={styles.calorieTotal}>/2,500 kcal</Text>
          </View>

          <View style={styles.macroWrap}>
            <View style={styles.goodBadgeInline}>
              <Text style={styles.goodBadgeText}>Good</Text>
            </View>
            <MacroRow label="Fat" value={132} total={250} progress={132 / 250} color="#FFC155" />
            <MacroRow label="Protein" value={52} total={105} progress={52 / 105} color="#D06F38" />
            <MacroRow label="Carb" value={137} total={250} progress={137 / 250} color="#ACC723" />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Log your meals</Text>
        <View style={styles.mealsWrap}>
          {meals.map((m) => (
            <MealRow key={m.key} meal={m} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F5F7F9" },
  content: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 28, gap: 14 },

  topBar: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  screenTitle: { fontSize: 28, lineHeight: 34, fontWeight: "700", color: "#242E42" },
  settingsButton: { width: 32, height: 32, borderRadius: 16, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center" },
  settingsIcon: { fontSize: 16, color: "#4E596E" },

  summaryCard: { backgroundColor: "#FFFFFF", borderRadius: 14, padding: 14, flexDirection: "row", gap: 14 },
  calorieWrap: { width: 120, borderRadius: 12, backgroundColor: "#F8FAFC", alignItems: "center", justifyContent: "center", paddingVertical: 14 },
  consumedLabel: { fontSize: 12, fontWeight: "600", color: "#737D92", textTransform: "uppercase" },
  calorieValue: { marginTop: 6, fontSize: 28, lineHeight: 32, fontWeight: "700", color: "#242E42" },
  calorieTotal: { marginTop: 2, fontSize: 11, color: "#737D92" },

  macroWrap: { flex: 1, gap: 8 },
  goodBadgeInline: { alignSelf: "flex-end", backgroundColor: "#F6FAE2", borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 },
  goodBadge: { backgroundColor: "#F6FAE2", borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 },
  goodBadgeText: { color: "#ACC723", fontWeight: "700", fontSize: 12 },

  macroRow: { gap: 4 },
  macroLabelRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  macroLabel: { fontSize: 12, color: "#737D92" },
  macroValue: { fontSize: 12, color: "#242E42", fontWeight: "700" },
  macroTotal: { fontSize: 12, color: "#737D92", fontWeight: "400" },
  progressTrack: { height: 8, borderRadius: 99, backgroundColor: "#EEF1F3", overflow: "hidden" },
  progressFill: { height: "100%", borderRadius: 99 },

  sectionTitle: { marginTop: 4, fontSize: 18, fontWeight: "600", color: "#242E42" },
  mealsWrap: { gap: 10 },
  mealCard: { backgroundColor: "#FFFFFF", borderRadius: 14, padding: 12, gap: 8 },
  mealHeader: { flexDirection: "row", alignItems: "center", gap: 12 },
  mealIcon: { width: 32, height: 32 },
  mealTitleWrap: { flex: 1 },
  mealTitle: { fontSize: 16, color: "#242E42", fontWeight: "500" },
  mealKcal: { marginTop: 2, fontSize: 12, color: "#737D92" },
  addButton: { width: 24, height: 24, borderRadius: 12, backgroundColor: "#F5F7F9", alignItems: "center", justifyContent: "center" },
  addButtonText: { color: "#FF6243", fontWeight: "700", fontSize: 14 },
  mealDetails: { borderTopWidth: 1, borderTopColor: "#EEF1F3", paddingTop: 8, gap: 6 },
  detailText: { fontSize: 13, color: "#364154", lineHeight: 18 },
});
