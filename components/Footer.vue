<template>
  <footer>
    <p>Copyright &copy; 2021</p>
    <nuxt-link to='about'>About</nuxt-link>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-top: 1px solid #b1b8c2;
  margin: 0px 30px 30px 30px;
}

footer p {
  margin-top: 20px;
  color: #b1b8c2;
}

footer a {
  color: #b1b8c2;
}
</style>
