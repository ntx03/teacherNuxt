<template>
    <div class="video__card">
        <div class="video__video-container">
            <iframe class="video__box" :src="props.link" title="YouTube video player" webkitAllowFullScreen
                mozallowfullscreen allowFullScreen></iframe>
        </div>
        <p class="video__text">{{ props.name }}</p>
    </div>
</template>
<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})
</script>
<style scoped lang="scss">
.video__card {
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: 0 auto 0 auto;
}

.video__video-container {
    width: 59%;
    position: relative;
    padding-top: 60%;
    padding-left: 40%;
    object-fit: contain;
    object-position: center;
    margin: 0 auto 0 auto;
}

.video__box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: contain;
}

.video__text {
    margin: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 14px;
    line-height: 1.3;
    color: black;
    font-style: normal;
    font-weight: normal;
    text-align: justify;
    margin: 10px 5px 0 10px;
}

@media (max-width:560px) {
    .video__text {
        margin: 10px 5px 0 5px;
    }
}
</style>