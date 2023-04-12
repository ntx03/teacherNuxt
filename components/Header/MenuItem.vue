<template>
    <ClientOnly>
        <li class="header__menu-item_min-width" :class="{ 'header__menu-item_click': props.onPage }" @click="onClick">
            <NuxtLink :to="props.way" class="header__menu-item">{{ props.text }}</NuxtLink>
        </li>
    </ClientOnly>
</template>

<script setup>

const props = defineProps({
    way: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    onPage: {
        type: Boolean
    },
    onClick: {

    }

});

</script>

<style scoped lang="scss">
.header__menu-item {
    margin: 0;
    font-family: inter, "Helvetica Neue", "Arial", sans-serif;
    width: min-content;
    font-size: 16px;
    line-height: 1.15;
    color: black;
    font-style: normal;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    text-decoration: none;
    word-wrap: break-word;
    padding: 7.5px 7.5px 7.5px 7.5px;

    &_click {
        background-color: $ligthGrey;
    }

    &_min-width {
        min-width: 85px;
        padding: 5px 5px 5px 5px;
        text-align: center;

        &:hover {
            background-color: $ligthGrey;
            cursor: pointer;
            transition: 0.5s;
        }
    }
}

@media (max-width: 560px) {
    .header__menu-item {
        font-size: 14px;
        top: 15px;
        left: -5px;
        padding: 0;
        position: absolute;
        top: 10px;
        width: 150px;
        height: 20px;

        &_click {
            background-color: $ligthGrey;
        }

        &_min-width {
            width: 140px;
            height: 50px;
            position: relative;
            border: 1px solid $grey;
        }
    }
}

@media (max-width: 460px) {
    .header__menu-item {
        font-size: 14px;
        top: 15px;
        left: -12px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        // word-break: break-all;

        &_min-width {
            margin: 0;
            width: 120px;
            position: relative;
            border: 1px solid $grey;
            background-color: $grey;
        }

        &_click {
            background-color: $ligthGrey;
        }
    }
}
</style>
