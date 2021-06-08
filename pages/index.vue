<template>
  <div class="container">
    <Tabs />
    <Footer />
  </div>
</template>

<script>
import Tabs from "../components/Tabs.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Tabs,
    Footer,
  },
  head() {
    return {
      title: "Agenda",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "The place to organize your appointments",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
