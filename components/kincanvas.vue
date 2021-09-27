<template>
  <div class="main">
    <kinesis-container>
      <kinesis-element type="rotate" :strength="20">
        <img
          class="mb-5 image"
          src="https://source.unsplash.com/500x350/?japan"
          alt="Cell"
        />
      </kinesis-element>
    </kinesis-container>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>