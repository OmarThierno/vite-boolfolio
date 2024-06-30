<script>
import axios from 'axios';
export default {
  data() {
    return {
      projects: [],
    }
  },
  created() {
    this.getAllProjects();
  },
  methods: {
    getAllProjects() {
      axios.get('http://127.0.0.1:8000/api/projects').then((resp) => {
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
        <div class="card">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>