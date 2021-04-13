<template>
    <div class="col-3 mt-5">
        <b-card class="mb-2">
            <b-card-text>
                <ul>
                    <li v-for="(art,index) in articles" :key="index" @click="routerToArticle(art.id)">
                        {{ art.title }}</li>
                </ul>
            </b-card-text>

        </b-card>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex';

    export default {
        methods: {
            routerToArticle: function (id) {
                this.$router.push({
                    name: "Article",
                    params: {
                        id: id
                    }
                })
            }
        },
        computed: {
            ...mapState(['articles']),
        },
        filters: {
            subTitle: (title) => {
                return title.substring(0, 10) + "..."
            },
        }
    }
</script>
<style lang="scss">
    li{
        font-size: 16px;
        cursor: pointer;
    }
</style>