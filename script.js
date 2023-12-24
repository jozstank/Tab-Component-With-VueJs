import TabContainer from "./TabsComponent.js";
const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      tabs: [
        { title: "Home", name: "home", content: "This is home content" },
        {
          title: "Profile",
          name: "profile",
          content: "This is profile content",
        },
        {
          title: "Settings",
          name: "settings",
          content: "This is settings content",
        },
      ],
      tabStatus: 0,
    };
  },

  components: {
    "tabs-components": TabContainer,
  },
  methods: {
    changeTabStatus(data) {
      this.tabStatus = data;
    },
  },
});
app.mount("#app");
