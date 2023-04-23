<script setup>
import { getVideoSchool, getVideo } from './utils/api/apiVideo';
import { mainData } from './utils/api/apiMain';
import { useVideosSchool } from './composables/video/useVideosSchool';
import { useVideos } from './composables/video/useVideos';
import { useMain } from './composables/main/useMain';

const show = useShowSpinner();
const showModal = useShowModal();
const videoSchool = useVideosSchool();
const video = useVideos();
const main = useMain();

const downloadVideo = async () => {
    const res = await getVideo();
    video.value = res.reverse();
}
downloadVideo();

const downloadVideoSchool = async () => {
    const res = await getVideoSchool();
    videoSchool.value = res.reverse();
}
downloadVideoSchool();

const downloadDataForMainPage = async () => {
    const res = await mainData();
    main.value = res;
}
downloadDataForMainPage(0);
</script>

<template>
    <div class="page">

        <Head>
            <Title>Учитель Коротаева А.Ю.</Title>
        </Head>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <Popup />
        <Spinner v-show="show" />
        <Modal v-show="showModal" />
    </div>
</template>
<style lang="scss">
.page {
    background-color: white;
    width: 100%;
    min-height: 100vh;
    color: black;
    margin: 0 auto;
    background-image: url('./assets/white-waves.png');
    position: relative;
}
</style>

