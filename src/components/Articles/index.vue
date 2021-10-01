<template>
<router-view></router-view>


<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

    <!--  ITEM -->
    <div class="col" v-for="article in articles" :key="article.id">
        <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" :src="article.img + '?' + Math.random() "/>
            <div class="card-body">
                <p>{{ article.excerpt }}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">

                        <router-link :to="'/articles/' + article.id">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        </router-link>

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>


<script>
    import axios from 'axios';

    export default {
        data(){
            return {
                articles:[]
            }
        },
        mounted(){
            axios.get('http://localhost:3004/articles')
            .then( response => {
                this.articles = response.data;
            })
        }
    }

</script>