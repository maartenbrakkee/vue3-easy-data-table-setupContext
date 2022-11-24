/* istanbul ignore file */
import { RootStore } from '@/store/types'; // path to store file

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: RootStore;
  }
}
