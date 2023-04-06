<template>
    <h2 className="video__text-heaher">{{ props.title }}</h2>
    <div className="photo__block">
        <PhotoContainer :name="item.name" :link="item.link" v-for="item in props.arrayPhoto" />
    </div>
</template>
<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    arrayPhoto: {
        type: Array,
        required: true
    }
})
</script>
<style lang="scss">
.video__text-heaher {
    margin: 0;
    max-width: 1000px;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 18px;
    line-height: 1.15;
    color: black;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    margin: 40px auto 20px auto;
}

.photo__block {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    gap: 10px;
    margin: 20px 20px 20px 20px;

    &_two {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (max-width:500px) {
    .photo__block {
        grid-template-columns: repeat(1, 1fr);
    }

    .video__text-heaher {
        margin: 40px 10px 20px 10px;
    }
}
</style>