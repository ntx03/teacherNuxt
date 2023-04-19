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

<script setup>
import { getVideoSchool } from './utils/api/apiVideo';
import { useVideosSchool } from './composables/video/useVideosSchool';
const show = useShowSpinner();
const showModal = useShowModal();
const videoSchool = useVideosSchool();

getVideoSchool()
    .then((res) => {
        videoSchool.value = res;
    })
    .catch((e) => {
        console.log(e);
    })

</script>