<template>
  <div class="row-card">
    <div class="card">
      <form @submit="onSubmit">
        <div class="form-group span-2">
          <label>Title</label>
          <input
            type="text"
            v-model="title"
            class="form-control"
            id="title"
            name="title"
            required
          />
        </div>
        <div class="form-group mobile-span">
          <label>Date</label>
          <input
            type="date"
            v-model="date"
            class="form-control"
            id="date"
            name="date"
            required
          />
        </div>
        <div class="form-group mobile-span">
          <label>Hour</label>
          <input
            type="time"
            v-model="hour"
            class="form-control"
            id="hour"
            name="hour"
            required
          />
        </div>
        <div class="form-group span-2">
          <label>Local</label>
          <input
            type="text"
            v-model="local"
            class="form-control"
            id="local"
            name="local"
            required
          />
        </div>
        <div class="form-group span-2">
          <label>Description</label>
          <textarea
            class="form-control"
            v-model="description"
            id="description"
            name="description"
            required
          ></textarea>
        </div>
        <div class="form-group mobile-span">
          <label>Tag Color</label>
          <select
            class="form-control"
            v-model="color"
            id="color"
            name="color"
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
            v-model="tag"
            id="tag"
            name="tag"
            required
          />
        </div>
        <input type="submit" value="Submit" id="btn-submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NewAppointment",
  data() {
    return {
      title: "",
      date: "",
      hour: "",
      description: "",
      local: "",
      tag: "",
      color: "",
    };
  },
  methods: {
    ...mapActions(["addAppointment"]),
    onSubmit(e) {
      const form = {
        title: this.title,
        date: this.date,
        hour: this.hour,
        description: this.description,
        local: this.local,
        tag: this.tag,
        color: this.color,
      };

      this.addAppointment(form);
      document.location.href = "/";
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
.row-card {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.card {
  grid-column: 2;
  padding: 2rem;
  border-radius: 5px;
  background: white;
  box-shadow: 0 35px 50px -30px rgba(0, 0, 0, 0.1);
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
  .row-card {
    grid-template-columns: 1fr;
  }

  .card {
    grid-column: 1;
  }

  .mobile-span {
    grid-column: 1 / -1;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .row-card {
    grid-template-columns: 1fr 2fr 1fr;
  }
}
</style>
