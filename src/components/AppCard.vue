<script>
export default {
  props: {
    project: Object,
  },
  data() {
    return {}
  }
}
</script>

<template>
  <router-link :to="{name: 'single-project', params: {slug: project.slug}}" class="card text-decoration-none">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ project.name }}</h5>
      <p class="card-text">{{ project.description }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </router-link>
</template>

<style lang="scss" scoped></style>