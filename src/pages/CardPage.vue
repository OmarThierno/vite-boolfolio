<script>
import axios from 'axios';
import AppCard from '../components/AppCard.vue';
import { store } from '../store';

export default {
  components: {
    AppCard,
  },
  data() {
    return {
      projects: [],
      store,
    }
  },
  created() {
    this.getAllProjects();
  },
  methods: {
    getAllProjects() {
      axios.get(`${this.store.apiUrl}/api/projects`).then((resp) => {
        // console.log(resp);
        this.projects = resp.data.results;
      })
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>All projects</h1>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-6 g-3">
      <div v-for="project in projects" class="col">
        <AppCard :project="project" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>