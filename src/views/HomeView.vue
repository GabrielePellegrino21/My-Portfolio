<script lang="ts">
    import {ref, defineComponent} from "vue";

    interface AppData {
        title: string;
        name: string;
        width: number;
    }

    interface ContentData {
        [key: string]: AppData;
    }

    interface JsonFile {
        content: ContentData;
    }

    export default defineComponent({
        name: "chgPage",
        setup() {
            const apps = ref<AppData[]>([]);

            // GP - Lettura JSON
            function handleFileUpload(event : Event) {
                const input = event.target as HTMLInputElement;
                if (
                    !input.files
                        ?.length
                ) 
                    return;
                
                const file = input.files[0];
                const reader = new FileReader();

                reader.onload = () => {
                    try {
                        const json: JsonFile = JSON.parse(reader.result as string);
                        apps.value = Object.values(json.content);
                    } catch (error) {
                        console.error("Errore nel parsing del JSON:", error);
                    }
                };

                reader.readAsText(file);
            }

            return {
                apps,
                handleFileUpload
            };
        },
        methods: {
            goToViewContent(nameVideo : string) {
                this
                    .$router
                    .push({name: "viewContent"})
                sessionStorage.setItem('nameV', nameVideo);
            }
        }
    });
</script>
<template>
    <div class="header">
        <div class="container-title_subtitle">
            <div class="container-title">
                <span id="title-header">Hello, I'm Gabriele Pellegrino 👋
                </span>
            </div>
            <div class="container-subtitle">
                <span id="subtitle-header">
                    Welcome to my personal portfolio!
                </span>
            </div>
        </div>
    </div>

    <section class="mywork-section">
        <div class="container-all">
            <div class="containter-title_content">
                <span class="title-content">
                    Digital Project
                </span>

                <span class="choose-category">
                    <span class="categ">
                        All
                    </span>
                    <span class="categ">
                        Web
                    </span>
                    <span class="categ">
                        Mobile
                    </span>
                </span>
            </div>
            <div class="container-card">
                <div class="inner-containter_card">
                    <div class="main-card">
                        <div class="sub-card"></div>
                        <span>
                           DevelepHelper
                        </span>
                    </div>

                    <div class="main-card">
                        <div class="sub-card"></div>
                        <span>
                            My Gym Bro
                        </span>
                    </div>

                    <div class="main-card">
                        <div class="sub-card"></div>
                    </div>

                    <div class="main-card">
                        <div class="sub-card"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-all">
            <div class="containter-title_content">
                <span class="title-content">
                    Video & Drone Footage
                </span>

                <span class="choose-category">
                    <span class="categ">
                        All
                    </span>
                    <span class="categ">
                        Video
                    </span>
                    <span class="categ">
                        Drone
                    </span>
                </span>
            </div>
            <div class="container-card">
                <div class="inner-containter_card">
                    <div class="main-card" @click="goToViewContent('NewYork')">
                        <div class="sub-card"></div>
                    </div>

                    <div class="main-card">
                        <div class="sub-card"></div>
                    </div>

                    <div class="main-card">
                        <div class="sub-card"></div>
                    </div>

                    <div class="main-card">
                        <div class="sub-card"></div>
                    </div>
                </div>
            </div>
        </div>

        <footer>
            <div class="footer">
                <div class="container-footer">
                    <div>
                        <img src="../img/myFaceApple.PNG" width="300px"></img>
                    </div>
                    <div>
                        <div class="footer-title">
                            <span>About Me</span>
                        </div>

                        <div class="footer-description">
                            <span>
                                👋 Hi! I’m Gabriele, born in 2003, a programmer and technology enthusiast. I’m
                                from Lecce, Italy, and I spend my days between coding, creativity, and bringing
                                new ideas to life. Beyond programming, I love video editing and capturing
                                footage with my drone, because I believe technology isn’t just about tools and
                                numbers—it’s also a way to tell stories and share emotions. I’m a curious
                                person, always looking for new challenges and opportunities to grow, both in my
                                work and in my passions. My goal? To turn what I love into meaningful projects
                                that combine creativity and innovation.
                            </span>
                        </div>

                        <div class="social-icon">
                            <a href="https://www.instagram.com/gabrielepellegrino_" target="_blank">
                                <img src="../img/instagram.png"></a>
                                <a href="https://www.linkedin.com/in/gabriele-pellegrino-x3" target="_blank">
                                    <img src="../img/linkedin.png"></a>
                                    <a
                                        href="https://www.youtube.com/channel/UCRXc8tq1ya5zIEiWfTVjy5A"
                                        target="_blank">
                                        <img src="../img/youtube.png"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>

                    <section class="jsonUpload">
                        <div class="p-4">
                            Upload del file
                            <input type="file" accept="application/json" @change="handleFileUpload"/>
                            < <div v-for="(app, index) in apps" :key="index" class="mt-4 border p-2 rounded">
                                <h2>
                                    {{ app.title }}
                                </h2>
                                <p>dati="dati" Visualizzazione
                                    {{ app.name }}</p>
                                <span>Larghezza:
                                    {{ app.width
        }}</span>
                            </div>
                        </div>
                    </section>

                </section>
            </template>