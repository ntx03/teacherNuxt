<script setup>
const props = defineProps({
    date: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    header: {
        type: String,
        required: true
    },
    photoArray: {
        type: Array,
        required: true
    },
})
</script>

<template>
    <div class="news__block">
        <News :date="props.date" :text="props.text" :header="props.header" />
        <div class="photo__block">
            <PhotoContainer :link="item.link" :name="item.name" v-for="item in props.photoArray" />
        </div>

    </div>
</template>

<style  scoped lang="scss">
.news__block {
    border-radius: 15px;
    background-color: $ligthGrey;
    margin: 40px 20px 0 20px;
}

.photo__block {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    gap: 10px;
    margin: 20px 20px 20px 20px;
}

@media (max-width:500px) {
    .photo__block {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>