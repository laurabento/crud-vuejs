<template>
  <div class="container">
    <nuxt-link to="/"><i class="fas fa-arrow-left"></i></nuxt-link>
    <div class="card">
      <h1>About</h1>
      <label
        >Developed by
        <a href="https://www.linkedin.com/in/lauragbento/"
          >Laura Bento</a
        ></label
      >
      <label>April 2021</label>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "About",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Know more about the app here!",
        },
      ],
    };
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
}

.card label a {
  color: #f472b6;
  text-decoration: none;
  cursor: pointer;
}

.card label a:hover {
  text-decoration: underline;
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
