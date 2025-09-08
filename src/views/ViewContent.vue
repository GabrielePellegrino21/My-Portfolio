<script lang="ts">
    import {defineComponent} from "vue";

    interface VideoData {
        id: string;
        title: string;
        description: string;
    }

    export default defineComponent({
        name: "VideoPlayer",
        data() {
            return {
                videoId: "" as string,
                videoTitle: "" as string,
                videoDescription: "" as string
            };
        },
        created() {
            // Get video data from sessionStorage
            const videoName = sessionStorage.getItem('nameV') || 'NewYork';
            this.loadVideoData(videoName);
        },
        methods: {
            loadVideoData(videoName: string) {
                const videoData: { [key: string]: VideoData } = {
                    "NewYork": {
                        id: "aN8hbrLoHqI",
                        title: "New York Drone Footage",
                        description: "Amazing aerial views of New York City captured with my drone. Experience the city from a unique perspective with stunning cinematography."
                    },
                    "gym": {
                        id: "abc123xyz",
                        title: "Gym Workout Session",
                        description: "Follow along with my gym routine and fitness tips. Stay motivated and achieve your fitness goals."
                    },
                    "coding": {
                        id: "9bZkp7q19f0",
                        title: "Coding Tutorial",
                        description: "Learn programming concepts and techniques. Perfect for beginners and intermediate developers."
                    }
                };

                const video = videoData[videoName] || videoData["NewYork"];
                this.videoId = video.id;
                this.videoTitle = video.title;
                this.videoDescription = video.description;
            },
            goBack() {
                this.$router.push({ name: 'home' });
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
            <button @click="goBack" class="back-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M12 19l-7-7 7-7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Back to Portfolio</span>
            </button>
        </nav>
    </div>
    
    <section class="video-section">
        <div class="video-container">
            <div class="video-header">
                <h1 class="video-title">{{ videoTitle }}</h1>
            </div>
            
            <div class="video-wrapper">
                <div class="video-responsive">
                    <iframe
                        :src="videoUrl"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            
            <div class="video-description">
                <p>{{ videoDescription }}</p>
            </div>
            
            <div class="video-actions">
                <a :href="`https://www.youtube.com/watch?v=${videoId}`" target="_blank" class="youtube-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="white"/>
                    </svg>
                    Watch on YouTube
                </a>
            </div>
        </div>
    </section>
</template>