<template>
  <v-list
    v-for="item in items"
    :key="item.id"
    density="compact"
    nav
    active-class="bg-primary text-on-primary"
  >
    <v-list-item
      :prepend-icon="item.icon"
      :to="item.path"
      :title="item.title"
    />
  </v-list>
</template>

<script setup lang="ts">
import { mdiHomeOutline } from "@mdi/js";
import { ref } from "vue";

const items = ref([
  {
    id: 1,
    title: "Home",
    path: "/home",
    icon: mdiHomeOutline,
  },
]);
</script>

<style scoped lang="scss">
.v-list-item--active {
  :deep(.v-list-item__overlay) {
    opacity: 0;
  }
  &:hover {
    :deep(.v-list-item__overlay) {
      opacity: 0.15;
    }
  }
}
</style>

<i18n src="./locales/en.json"></i18n>
