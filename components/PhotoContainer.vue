<template>
    <div className="photo__container">
        <img className="photo__image" :src="props.link" :alt="props.name" @click="openPopup" />
    </div>
</template>

<script setup>
const popup = usePopup();
const image = usePopupImage();
const name = usePopupName();

const openPopup = (e) => {
    popup.value = true;
    image.value = e.target.src;
    name.value = e.target.alt;
}

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