<template>
  <v-btn
    :icon="darkMode ? mdiWeatherNight : mdiWeatherSunny"
    @click="toggleTheme"
    size="small"
    data-testid="theme-switch"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTheme } from "vuetify";
import { mdiWeatherNight, mdiWeatherSunny } from "@mdi/js";

const theme = useTheme();
const darkMode = ref(false);

function toggleTheme() {
  darkMode.value = !darkMode.value;
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<style scoped lang="scss">
// Specific view SCSS styling can go here
</style>

<i18n src="./locales/en.json"></i18n>
