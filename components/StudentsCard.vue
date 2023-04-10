<template>
    <div class="students__card">
        <p class="students__header">{{ props.name }}</p>
        <div class="students__image-container">
            <img class="students__image" :src="props.link" :alt="props.name" />
        </div>
        <a class="students__link" :href="props.link" download>СКАЧАТЬ</a>
    </div>
</template>
<script setup>
const props = defineProps({
    link: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})
</script>
<style scoped lang="scss">
.students__card {
    display: flex;
    flex-direction: column;
}

.students__header {
    margin: 0;
    font-family: inter, "Helvetica Neue", "Arial", sans-serif;
    font-size: 18px;
    line-height: 1.15;
    color: black;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    margin: 10px auto 0 auto;
}

.students__image-container {
    width: 50%;
    position: relative;
    padding-top: 50%;
    padding-left: 40%;
    object-fit: cover;
    object-position: center;
    margin: 20px 20px 20px 20px;
}

.students__image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: contain;
}

.students__link {
    text-decoration: none;
    font-family: inter, "Helvetica Neue", "Arial", sans-serif;
    font-size: 14px;
    line-height: 1.15;
    color: black;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    background-color: whitesmoke;
    max-width: 100px;
    margin: 0 auto 0 auto;
    padding: 7.5px 7.5px 6.0px 7.5px;
    border-radius: 5px;

    /*border: black 1px solid;*/
    &:hover {
        background-color: rgba(75, 192, 8, 0.616);
        transition: 0.5s;
    }
}
</style>