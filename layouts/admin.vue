<template>
    <section class="admin">
        <div class="exit__box">
            <NuxtLink to='/' class="exit">На главную сайта</NuxtLink>
            <button class="exit" @click="logout">Выход из админ панели</button>
        </div>
        <h1 class="title">Административная панель</h1>
        <MenuAdmin />
        <slot />

    </section>
</template>
<script setup>
const logout = () => {
    localStorage.removeItem('token');
    navigateTo('/admin');
}
</script>
<style scoped lang="scss">
.exit {
    width: max-content;
    height: 30px;
    background-color: $grey;
    font-family: inter;
    font-size: 14px;
    line-height: 19px;
    font-weight: 500;
    border: 1px $ligthGrey solid;
    padding: 5px;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
    }

    &__box {
        display: flex;
        margin: 0 auto 0 auto;
        width: max-content;
        padding: 20px 0 0 0;
        gap: 10px;
    }
}

.title {
    font-family: inter;
    font-size: 30px;
    line-height: 46px;
    font-weight: 500;
    padding: 20px 0 0 0;
    margin: 0 auto 20px auto;
    width: max-content;
}

.admin {
    height: 100%;
}
</style>