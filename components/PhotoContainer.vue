<template>
    <div className="photo__container">
        <img className="photo__image" :src="link" :alt="name" />
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
.photo__container {
    width: 100%;
    position: relative;
    padding-top: 100%;
    object-fit: contain;
}

.photo__image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;

    &:hover {
        cursor: pointer;
    }
}
</style>