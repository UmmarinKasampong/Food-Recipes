<template>
    <section>
        <h1 class="text-2xl md:text-4xl text-black border-solid border-b-2 border-black pb-5  font-bold ">{{ param }}</h1>
        <div class="flex justify-center items-center ">
            <div class="my-10 grid gap-y-10 gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                <Cate_card_listVue v-for="(list, index) in cate_list" :key="index" :data="list" />
            </div>
        </div>

    </section>
</template>

<script setup>
import Cate_card_listVue from '../components/Cate_card_list.vue'

</script>

<script>
export default {
    data() {
        return {
            param: '',
            cate_list: []
        }
    },
    mounted() {
        this.param = this.$route.params.cate_name

        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + this.param)
            .then((res) => res.json())
            .then((data) => {
                this.cate_list = data.meals

            }).catch((error) => console.log("Fecth Error : " + error))
    }
}
</script>

