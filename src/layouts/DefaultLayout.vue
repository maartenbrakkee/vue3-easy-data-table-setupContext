<template>
  <AppNavigationDrawer />

  <v-app-bar prominent color="background" flat density="compact">
    <div class="d-flex align-baseline ma-4">
      <span class="text-body-1 mr-2">Example App</span>
      <span class="text-caption text-medium-emphasis"
        >{{ t("version") }} {{ appVersion }}</span
      >
    </div>
    <v-spacer />
    <AppThemeSwitcher />
  </v-app-bar>

  <v-main>
    <div class="mx-4 mb-4">
      <slot />
    </div>
  </v-main>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

import AppNavigationDrawer from "@/components/AppNavigationDrawer/AppNavigationDrawer.vue";
import AppThemeSwitcher from "@/components/AppThemeSwitcher/AppThemeSwitcher.vue";

const appVersion = APP_VERSION;

const { t } = useI18n({
  inheritLocale: true,
  useScope: "local",
});
</script>

<i18n src="./locales/en.json"></i18n>
