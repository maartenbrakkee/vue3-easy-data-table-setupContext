// Styles
import "vuetify/styles";

// Icons
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

// Vuetify
import { createVuetify } from "vuetify";

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases: {
      ...aliases,
    },
    sets: {
      mdi,
    },
  },
});

export { vuetify };
