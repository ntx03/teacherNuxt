<script setup>
definePageMeta({
    layout: "admin",
    middleware: 'auth'
})
</script>

<template >
    <h2 class="title-form">ГЛАВНАЯ СТРАНИЦА</h2>
</template>

<style scoped lang="scss">
.title-form {
    font-family: inter;
    font-size: 20px;
    line-height: 46px;
    font-weight: 500;
    margin: 0 auto 20px auto;
    width: max-content;
}
</style>