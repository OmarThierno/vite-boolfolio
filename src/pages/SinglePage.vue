<script>
import axios from 'axios';

export default {
  data() {
    return {
      project: null,
    }
  },
  created() {
    // console.log(this.$route);
    const slug = this.$route.params.slug

    axios.get(`http://127.0.0.1:8000/api/projects/${slug}`)
    .then((resp) => {
      console.log(resp);
      this.project = resp.data.results;
    })
    .catch((error) => {
      this.$router.push({name: 'not-found'})
    })
  }
}
</script>

<template>
  <div class="container my-5">
    <div v-if="project !== null">
      <h1>{{ project.name }}</h1>

      <div>{{ project.description }}</div>
    </div>
    <div v-else>Non ci sono dettagli</div>
  </div>
</template>

<style lang="scss" scoped></style>