<script setup>
const props = defineProps({
    date: {
        type: String,
        required: true
    },
    header: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})
</script>
<template>
    <ul class="news__name">
        <li>
            <p class="news__data">{{ date }}</p>
        </li>
        <li>
            <h2 class="news__header">{{ header }}</h2>
        </li>
        <li>
            <p class="news__text">{{ text }}</p>
        </li>
    </ul>
</template>

<style lang="scss">
.news__name {
    list-style-type: none;
    padding: 0;
    margin: 10px 0 10px 20px;
}

.news__data {
    margin: 0;
    max-width: 1000px;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 14px;
    line-height: 1.15;
    color: black;
    font-style: normal;
    font-weight: normal;
    text-align: start;
    margin: 0 auto 20px 0;
}

.news__header {
    margin: 0;
    max-width: 1000px;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 18px;
    line-height: 1.15;
    color: black;
    font-style: italic;
    font-weight: bold;
    text-align: center;
    margin: 10px 20px 20px auto;
}

.news__text {
    margin: 0;
    max-width: 1000px;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 16px;
    line-height: 1.15;
    color: black;
    font-style: normal;
    font-weight: normal;
    text-align: justify;
    text-indent: 15px;
    margin: 0 20px 20px 0;
}

@media (max-width:500px) {
    .news__text {
        font-size: 14px;
    }

    .news__header {
        font-size: 16px;
        margin: 10px 20px 20px auto;
    }
}
</style>