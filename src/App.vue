<!-- /* istanbul ignore file */ -->
<template>
  <v-app>
    <component :is="$route.meta.layout">
      <router-view />
    </component>
  </v-app>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  min-height: 100%;
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
