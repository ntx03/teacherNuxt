<template>
    <div class="students__card">
        <p class="students__header">{{ props.name }}</p>
        <a class="students__image-container" :href="props.link" :title="props.title">
            <img class="students__image" :src="`${props.linkImage}`" :alt="props.altImage" />
        </a>
    </div>
</template>
<script setup>
console.log(props.linkImage);
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    linkImage: {
        type: String,
        required: true
    },
    altImage: {
        type: String,
        required: true
    }

});
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
</style>