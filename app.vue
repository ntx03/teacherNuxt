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
const show = useShowSpinner();
const showModal = useShowModal();

</script>