<template>
  <div class="container">
    <nuxt-link to="/"><i class="fas fa-arrow-left"></i></nuxt-link>
    <div class="card">
      <h1>Edit</h1>
      <form @submit.prevent="onSubmit(appointment)">
        <div class="form-group span-2">
          <label>Title</label>
          <input
            type="text"
            v-model="appointment.title"
            class="form-control"
            id="appointment.title"
            name="appointment.title"
            required
          />
        </div>
        <div class="form-group mobile-span">
          <label>Date</label>
          <input
            type="date"
            v-model="appointment.date"
            class="form-control"
            id="appointment.date"
            name="appointment.date"
            required
          />
        </div>
        <div class="form-group mobile-span">
          <label>Hour</label>
          <input
            type="time"
            v-model="appointment.hour"
            class="form-control"
            id="appointment.hour"
            name="appointment.hour"
            required
          />
        </div>
        <div class="form-group span-2">
          <label>Local</label>
          <input
            type="text"
            v-model="appointment.local"
            class="form-control"
            id="appointment.local"
            name="appointment.local"
            required
          />
        </div>
        <div class="form-group span-2">
          <label>Description</label>
          <textarea
            class="form-control"
            v-model="appointment.description"
            id="appointment.description"
            name="appointment.description"
            required
          ></textarea>
        </div>
        <div class="form-group mobile-span">
          <label>Tag Color</label>
          <select
            class="form-control"
            v-model="appointment.color"
            id="appointment.color"
            name="appointment.color"
            required
          >
            <option>purple</option>
            <option>blue</option>
            <option>pink</option>
            <option>yellow</option>
            <option>red</option>
            <option>green</option>
          </select>
        </div>
        <div class="form-group mobile-span">
          <label>Tag Text</label>
          <input
            type="text"
            class="form-control"
            v-model="appointment.tag"
            id="appointment.tag"
            name="appointment.tag"
            required
          />
        </div>
        <input type="submit" value="Submit" id="btn-edit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";

export default {
  name: "Edit",
  data() {
    return {
      appointment: {},
      errors: [],
    };
  },
  head() {
    return {
      title: "Edit | " + this.appointment.title,
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
    ...mapActions(["updateAppointment"]),
    onSubmit(appointment) {
      const updText = {
        id: appointment.id,
        title: appointment.title,
        date: appointment.date,
        hour: appointment.hour,
        description: appointment.description,
        local: appointment.local,
        tag: appointment.tag,
        color: appointment.color,
      };

      this.updateAppointment(updText);
      document.location.href = "/";
      return true;
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

.card h1 {
  color: #312e81;
  margin-bottom: 20px;
}

form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.span-2 {
  grid-column: 1 / -1;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  color: #6b7280;
  font-weight: 600;
  font-size: 14px;
}

.form-control {
  font-family: "Poppins";
  width: 100%;
  line-height: 1.2rem;
  border: 2px solid #d1d5db;
  border-radius: 5px;
  padding: 10px;
  color: #6b7280;
}

.form-control:focus {
  outline: none;
  border: 2px solid #312e81;
}

textarea {
  resize: vertical;
}

input[type="submit"] {
  grid-column: 2;
  justify-self: end;
  width: fit-content;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background: #312e81;
  color: white;
  font-family: "Poppins";
  font-weight: 600;
  cursor: pointer;
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

  .mobile-span {
    grid-column: 1 / -1;
  }
}
</style>
