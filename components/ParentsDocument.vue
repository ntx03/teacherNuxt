<template>
    <li class="parents__document">
        <p class="parents__document-name">{{ props.name }}</p>
        <a class="parents__document-link" :href="props.href" download>{{ props.nameLink }}</a>
    </li>
</template>
<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    },
    nameLink: {
        type: String,
        required: true
    }
})
</script>
<style scoped lang="scss">
.parents__document {
    display: flex;
    flex-direction: row;
    margin: 10px auto 10px auto;
    align-items: center;
    background-color: $ligthGrey;
    padding-right: 5px;
    border-radius: 5px;
    width: 100%;
    justify-content: space-between;

    &-name {
        margin: 0;
        padding: 0;
        font-family: inter, "Helvetica Neue", "Arial", sans-serif;
        font-size: 16px;
        line-height: 1.3;
        color: black;
        font-style: normal;
        font-weight: normal;
        text-align: justify;
        margin-left: 10px;
        margin-right: 20px;
    }

    &-link {
        text-decoration: none;
        font-family: inter, "Helvetica Neue", "Arial", sans-serif;
        font-size: 12px;
        line-height: 1.15;
        color: black;
        font-style: normal;
        font-weight: bold;
        text-align: center;
        padding: 7.5px;
        background-color: $grey;
        border-radius: 5px;

        &:hover {
            background-color: $buttonGreen;
            transition: 0.5s;
            border-radius: 5px;
        }
    }

}

@media (max-width:767px) {
    .parents__document-name {
        text-align: start;
    }
}
</style>