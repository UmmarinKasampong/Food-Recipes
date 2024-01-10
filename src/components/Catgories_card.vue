<template>
    <section @click="CateToPath('/cate-list/' + data.strCategory)" class="w-80 h-auto transition all delay-200 duration-700  shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-5">
        <img class="w-full object-cover" :src="data.strCategoryThumb" alt="">
        <div class="p-5">
            <h2 class="font-bold text-xl">{{ data.strCategory }}</h2>
            <p>{{ data.strCategoryDescription.slice(0 , 100) + "...." }}</p>
        </div>
    </section>
</template>

<script>
export default {
    props : ['data'] ,
    methods : {
        CateToPath(data){
            this.$router.push(data)
        }
    }
   
}

</script>

