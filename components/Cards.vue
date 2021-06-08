<template>
  <div class="cards">
    <Card
      class="card"
      v-for="appointment in allAppointments"
      :key="appointment.id"
      :id="appointment.id"
      :title="appointment.title"
      :date="appointment.date"
      :hour="appointment.hour"
      :description="appointment.description"
      :local="appointment.local"
      :tag="appointment.tag"
      :color="appointment.color"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "./Card";

export default {
  name: "Cards",
  components: {
    Card,
  },
  methods: {
    ...mapActions([
      "fetchAppointments",
    ])
  },
  computed: mapGetters(["allAppointments"]),
  created() {
    this.fetchAppointments();
  },
};
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  margin-top: 30px;
}

@media (max-width: 500px) {
  .cards {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 500px) and (max-width: 768px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1025px) and (max-width: 1440px) {
  .cards {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
