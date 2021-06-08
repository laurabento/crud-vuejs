<template>
  <div class="container">
    <nuxt-link to="/"><i class="fas fa-arrow-left"></i></nuxt-link>
    <div class="card">
      <div :class="appointment.color" class="card-tag">
        {{ appointment.tag }}
      </div>
      <h2>{{ appointment.title }}</h2>
      <p>
        <strong>When?</strong> {{ formatDateText(appointment.date) }} at
        {{ appointment.hour }}
      </p>
      <p><strong>Where?</strong> {{ appointment.local }}</p>
      <p class="description">{{ appointment.description }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "Appointment",
  data() {
    return {
      appointment: {},
    };
  },
  head() {
    return {
      title: "Details | " + this.appointment.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "The place to organize your appointments",
        },
      ],
    };
  },
  methods: {
    formatDateText(date) {
      return moment(date).format("DD/MM/YYYY");
    },
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await axios.get(
      `http://localhost:5000/appointment/${this.$route.params.id}`,
      config
    );
    this.appointment = res.data;
  },
};
</script>

<style scoped>
.container {
  margin: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
}

a {
  width: fit-content;
}

.fas {
  grid-column: 1/2;
  color: #374151;
  cursor: pointer;
  padding: 15px;
}

.fas:hover {
  background: #e5e7eb;
  padding: 15px;
  border-radius: 50%;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 5px;
  background: white;
  box-shadow: 0 35px 50px -30px rgba(0, 0, 0, 0.1);
  color: #6b7280;
}

.card-tag {
  font-size: 12px;
  font-weight: 600;
  color: white;
  padding: 5px 10px;
  width: fit-content;
  border-radius: 25px;
}

.card h2 {
  color: #374151;
  margin: 10px 0;
}

.card p {
  margin: 5px 0;
}

.card p strong {
  color: #374151;
}

.card .description {
  background: #f3f4f6;
  padding: 15px;
  border-radius: 5px;
  margin-top: 10px;
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

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin: 40px 20px;
  }

  .fas {
    grid-column: 1;
    grid-row: 1;
  }

  .card {
    grid-column: 1;
    grid-row: 2;
  }
}
</style>
