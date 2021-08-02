<template>
    <div>
        <Header />
        <div class="Container">
            <div class="YoutubeWrapper">
                <div class="ContentWrapper">
                    <div class="Content">
                        <div class="TitleWrapper">
                            <div class="TitleText">Youtube Service</div>
                        </div>
                        <div class="SerchBox">
                            <input v-model="query" class="InputDefault YoutubeSerch" placeholder="検索" />
                            <button class="BtnDefault YoutubeBtn" @click="Search">検索</button>
                        </div>

                        <youtube
                            ref="youtube"
                            class="youtube"
                            :video-id="videoId"/>

                        <youtube
                            ref="youtube"
                            class="youtube"
                            :video-id="videoId1"/>

                        <youtube
                            ref="youtube"
                            class="youtube"
                            :video-id="videoId2"/>
                    </div>
                </div>
                <div class="RightWrapper">
                    <div class="RightContentsWrapper">
                        <nuxt-link to="/twitter">
                            twitter
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

export default {
    data() {
        return {
            query: '',
            videoId: 'nteDXuqBfn0',
            videoId1: '',
            videoId2: ''
        }
    },
    computed: {
        player() {
            return this.$refs.youtube.player
        }
    },
    mounted() {
    },
    methods: {
        async Search() {
            const q = this.query
            const res = await this.$store.dispatch('youtube/search', { q })
            this.videoId = res.videoIds[0]
            this.videoId1 = res.videoIds[1]
            this.videoId2 = res.videoIds[2]
        }
    },
}
</script>

<style scoped>

.youtube {
    margin-bottom: 30px;
}

.TitleWrapper {
    margin-bottom: 30px;
}

.TitleText {
    letter-spacing : 0.1em;
    text-decoration: none;
    border: none;
    color: #444;
    line-height: 1.6;
    font-style: bold;
    font-size: 1.5em;
    font-weight: bold;
}

.Container {
    height: fit-content;
    background-color: #F8F8F8;
    padding: 50px 0;
}

.YoutubeWrapper {
    margin: auto;
    width: 70%;
    height: -webkit-fill-available;
    display: block;
}

.ContentWrapper {
    width: 100%;
    margin-bottom: 30px;
}

.Content {
    background-color: #FFF;
    padding: 30px 15px;
    border-radius: 10px;;
}

.RightWrapper {
    width: 100%;
}

.RightContentsWrapper {
    background-color: #FFF;
    height: fit-content;
    border-radius: 5px;
    text-align: center;
    padding: 40px 20px;
    margin-bottom: 50px;
}

.SerchBox {
    display: flex;
    margin-bottom: 30px;
}

.YoutubeSerch {
    width: 85%;
    margin-right: 10px;
}

.YoutubeBtn {
    width: 10%;
}

@media (min-width: 768px) {
    .YoutubeWrapper {
        display: flex;
    }

    .ContentWrapper {
        width:70%;
        padding-right: 30px;
        margin-bottom: 0px;
    }

    .RightWrapper {
        width: 30%;
    }
}
</style>