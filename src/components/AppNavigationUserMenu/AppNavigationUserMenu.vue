<template>
  <v-list density="compact">
    <v-list-group
      fluid
      :prepend-icon="mdiAccountCircleOutline"
      value="username"
    >
      <template v-slot:activator="{ props }">
        <v-list-item v-bind="props" :prepend-icon="mdiAccountCircleOutline">
          <template #title>
            <span class="text-body-2" title="username">Username</span>
          </template>
        </v-list-item>
      </template>
      <v-list-item
        v-for="(item, index) in profileSettings"
        :key="index"
        :value="index"
        :prepend-icon="item.icon"
        to="/logout"
      >
        <v-list-item-title class="text-body-2" :title="item.name">{{
          item.name
        }}</v-list-item-title>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script setup lang="ts">
import { mdiAccountCircleOutline, mdiLogout } from "@mdi/js";
import { useI18n } from "vue-i18n";

const { t } = useI18n({
  inheritLocale: true,
  useScope: "local",
});

const profileSettings = [
  {
    id: 0,
    name: t("signOut"),
    icon: mdiLogout,
  },
];
</script>

<style scoped lang="scss">
// Specific view SCSS styling can go here
</style>

<i18n src="./locales/en.json"></i18n>
