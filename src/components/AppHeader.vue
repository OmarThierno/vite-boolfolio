<script>
export default {
  data() {
    return {
      navLink: [
        {
          routeName: 'home',
          title: 'Home'
        },
        {
          routeName: 'card-page',
          title: 'Card page'
        },
      ]
    }
  }
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li v-for="link in navLink" class="nav-item">
          <router-link :to="{name: link.routeName}" class="nav-link active" aria-current="page" href="#">{{link.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </header>
</template>