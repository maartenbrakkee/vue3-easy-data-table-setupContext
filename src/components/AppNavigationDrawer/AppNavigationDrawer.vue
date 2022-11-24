<template>
  <v-navigation-drawer :rail="!menuOpened">
    <div
      class="d-flex my-2 align-center"
      :class="menuOpened ? 'mx-2 justify-space-between' : 'justify-center'"
    >
      <router-link to="/" :title="t('goHome')">
        <img
          v-if="menuOpened"
          class="home-icon ml-2"
          id="home-icon"
          height="32"
          alt="Logo"
          src="@/assets/logo.svg"
        />
      </router-link>
      <v-btn
        :icon="menuOpened ? mdiChevronLeft : mdiChevronRight"
        size="x-small"
        variant="outlined"
        class="rounded"
        @click.stop="menuOpened = !menuOpened"
        data-testid="menu-toggle"
      />
    </div>

    <AppNavigationMenu />

    <template v-slot:append>
      <AppNavigationUserMenu />
      <footer class="footer text-disabled text-no-wrap">
        {{
          menuOpened
            ? `Copyright © 2021-${new Date().getFullYear()}`
            : `© ‘${new Date().getFullYear().toString().slice(-2)}`
        }}
      </footer>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import AppNavigationMenu from "@/components/AppNavigationMenu/AppNavigationMenu.vue";
import AppNavigationUserMenu from "@/components/AppNavigationUserMenu/AppNavigationUserMenu.vue";

const { t } = useI18n({
  inheritLocale: true,
  useScope: "local",
});

const menuOpened = ref(true);
</script>

<style scoped lang="scss">
.footer {
  border-top: 1px solid rgba(var(--v-theme-surface-variant), 0.1);
  padding: 1em;
  font-size: 0.75em;
}
</style>

<i18n src="./locales/en.json"></i18n>
