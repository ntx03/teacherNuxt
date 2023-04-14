<template>
    <div class="input__box">
        <p class="form__title">Введите url фотографии</p>
        <input class="form__input" type="text" v-model="object.photo[0].url" />
        <p class="form__title">Введите название фотографии</p>
        <input class="form__input" type="text" v-model="object.photo[0].name" />
    </div>
</template>
<script setup>

</script>
<style lang="scss"></style>