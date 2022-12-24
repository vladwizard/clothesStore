<script setup lang="ts">
const items =
    [{ title: 'Women’s', url: 'src/assets/backend/peopleCategories/image0.png' },
    { title: 'Men’s', url: 'src/assets/backend/peopleCategories/image1.png' },
    { title: 'Kids’', url: 'src/assets/backend/peopleCategories/image2.png' }]
</script>

<template>
    <article>
        <div v-for="item in items">
            <img :src='item.url' height="390" width="390">
            <p>{{ item.title }}</p>
        </div>
    </article>
</template>

<style lang="scss" scoped>
article {
    display: flex;
    justify-content: center;
    margin-top: -60px;
    display: flex;
    gap: 30px;
    img{
        position: relative;
    }
    p {
        margin-top: 16px;
        font-weight: 700;
        font-size: 20px;
        line-height: 150%;

        text-align: center;

        color: #424551;
    }

}
</style>