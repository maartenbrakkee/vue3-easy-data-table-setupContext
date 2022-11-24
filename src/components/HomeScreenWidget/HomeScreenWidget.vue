<template>
  <v-card>
    <v-card-item>
      <Vue3EasyDataTable :headers="headers" :items="items" />
    </v-card-item>
  </v-card>
</template>

<script setup lang="ts">
import Vue3EasyDataTable from "vue3-easy-data-table";
import type { Header } from "vue3-easy-data-table";

const headers: Header[] = [
  { text: "Col1", value: "col1", sortable: true, width: 200 },
  { text: "Col2", value: "col2", sortable: true },
  { text: "Col3", value: "col3", sortable: true },
];

const items = [{ col1: "Example", col2: "text", col3: "here" }];
</script>
