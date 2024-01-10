<template>
    <section>
        <h1 class="text-2xl md:text-4xl text-black border-solid border-b-2 border-black pb-5  font-bold ">Food Categories</h1>

        <div class="flex justify-center items-center ">
            <div class="my-10  grid gap-y-10 gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Catgories_card v-for="(cate, index) in cate_datas" :key="index" :data="cate" />
            </div>
        </div>

    </section>
</template>

<script setup>
import Catgories_card from '../components/Catgories_card.vue';
</script>

<script>
export default {
    data() {
        return {
            cate_datas: []
        }
    },
    mounted() {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((res) => res.json())
            .then((data) => {
                this.cate_datas = data.categories
                console.log("Fetch Data : " + this.cate_datas)
            }).catch((error) => {
                console.error("Fetch Fail : " + error)
            })
    }
}
</script>

