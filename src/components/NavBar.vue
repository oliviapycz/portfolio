<template lang="html">
  <nav class="container-fluid">
    <div class="row">
      <div class="col-md-2" style="margin-top: 2vh">
        <div class="row justify-content-around">
          <a href="https://github.com/oliviapycz" style="color: #8fc44e !important">
            <i class="fab fa-github fa-2x" target="_blank" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/olivia-peny-coblentz/" style="color: #8fc44e !important">
            <i class="fab fa-linkedin-in fa-2x" aria-hidden="true"></i>
          </a>
          <a href="../static/cv.pdf" download="cv_olivia_peny_coblentz.pdf" class="cv">CV</a>
        </div>
      </div>
      <div class="col-md-8">
        <h1 style="margin-top: 1vh; color: #8fc44e">Olivia Peny-Coblentz</h1>
      </div>
      <div class="col-md-2">
      </div>
    </div>

  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css">
nav {
  height: 10vh;
  background-color: white;
  box-shadow: 0 5px 7px lightgrey;
  color: white;
}
.cv {
  font-size: 28px;
  color: #8fc44e !important;
  font-weight: bold;
}
.cv:hover {
  text-decoration: none;
}
</style>
