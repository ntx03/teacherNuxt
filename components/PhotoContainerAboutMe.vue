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
const popup = usePopup();
const image = usePopupImage();
const name = usePopupName();

const openPopup = (e) => {
    popup.value = true;
    image.value = e.target.src;
    name.value = e.target.alt;
}
</script>

<template>
    <div class="me__card-container">
        <img class="me__image" @click="openPopup" :src="props.link" :alt="props.name" />
    </div>
</template>

<style lang="scss">
.me__card-container {
    width: 100%;
    position: relative;
    padding-top: 55%;
    object-fit: cover;
    object-position: start;
    margin-top: 15px;
}

.me__image {
    width: 97%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: contain;

    &:hover {
        cursor: pointer;
    }

}
</style>