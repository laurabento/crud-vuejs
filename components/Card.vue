<template>
  <div>
    <div class="card-header">
      <div :class="color" class="card-tag">
        {{ tag }}
      </div>
      <div class="card-actions">
        <nuxt-link :to="'/appointment/edit/' + id">
          <i class="fas fa-pencil-alt"></i>
        </nuxt-link>
        <i
          class="fas fa-trash-alt"
          @click="deleteAppointment(id)"
          id="btn-delete"
        ></i>
      </div>
    </div>
    <div class="card-title">
      <nuxt-link :to="'/appointment/' + id">
        {{ title }}
      </nuxt-link>
    </div>
    <div class="card-info">{{ formatDateText(date) }} • {{ hour }}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import moment from "moment";

export default {
  name: "Card",
  props: [
    "id",
    "title",
    "date",
    "hour",
    "description",
    "local",
    "tag",
    "color",
    "checked",
  ],
  methods: {
    ...mapActions(["deleteAppointment"]),
    formatDateText(date) {
        return moment(date).format("DD/MM/YYYY");
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 5px;
  background: white;
  box-shadow: 0 35px 50px -30px rgba(0, 0, 0, 0.1);
  text-decoration: none;
}

.card-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.card-tag {
  font-size: 12px;
  font-weight: 600;
  color: white;
  padding: 5px 10px;
  width: fit-content;
  border-radius: 25px;
}

.card-title {
  margin-top: 10px;
}

.card-title a {
  font-size: 22px;
  font-weight: 600;
  color: #374151;
  text-decoration: none;
}

.card-title a:hover {
  color: #6b7280;
}

.card-info {
  font-size: 14px;
  color: #9ca3af;
}

.fas {
  color: #9ca3af;
  cursor: pointer;
  padding: 0 5px;
}

.pink {
  background: #f472b6;
}

.purple {
  background: #af8bfa;
}

.green {
  background: #10b981;
}

.blue {
  background: #60a5fa;
}

.yellow {
  background: #fbbf24;
}

.red {
  background: #f87171;
}
</style>
