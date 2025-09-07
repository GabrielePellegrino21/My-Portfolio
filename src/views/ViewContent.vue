<script lang="ts">
    import {defineComponent} from "vue";

    export default defineComponent({
        name: "VideoPlayer",
        props: {
            videoKey: {
                type: String,
                required: true
            }
        },
        data() {
            return {videoId: "" as string};
        },
        created() {
            switch (this.videoKey) {
                case "NewYork":
                    this.videoId = "aN8hbrLoHqI";
                    break;
                case "gym":
                    this.videoId = "abc123xyz";
                    break;
                case "coding":
                    this.videoId = "9bZkp7q19f0";
                    break;
                default:
                    this.videoId = "tAGnKpE4NCI";
            }
        },
        computed: {
            videoUrl(): string {
                return `https://www.youtube.com/embed/${this.videoId}`;
            }
        }
    });
</script>
<template>
    <div class="header h-small">
        <nav class="navbar">
        <img src="../img/home.png"></img>
      </nav>
    </div>
    <section class="mywork-section">
        <div class="container-all">
            <div class="video-wrapper">
                <iframe
                    width="60%"
                    height="400px"
                    src="https://www.youtube.com/embed/aN8hbrLoHqI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    :allowfullscreen="true"></iframe>
            </div>
        </div>
    </section>
</template>