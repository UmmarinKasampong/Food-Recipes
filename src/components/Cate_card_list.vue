<template>
    <section class="w-80 h-auto transition all delay-200 duration-700  shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-5">
        <img class="h-60 w-full object-cover" :src="data.strMealThumb" alt="">
        <div class="p-5">
            <h2 class="font-bold text-xl">{{ data.strMeal }}</h2>
        </div>
    </section>
</template>

<script>
export default {
    props : ['data'] ,
    methods : {
        // CateToPath(data){
        //     this.$router.push(data)
        // }
    }
   
}

</script>

