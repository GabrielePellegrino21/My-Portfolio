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
                <span id="title-header">Hello, I'm Gabriele Pellegrino 👋</span>
            </div>
            <div class="container-subtitle">
                <span id="subtitle-header">Welcome to my personal portfolio!</span>
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
                    <a href="https://devtools-hub-one.vercel.app" target="_blank" class="card-link">
                        <div class="main-card">
                            <div class="sub-card"></div>
                            <span>DevTools</span>
                        </div>
                    </a>

                    <div class="main-card">
                        <div class="sub-card"></div>
                        <span>My Gym Bro</span>
                    </div>

                    <div class="main-card">
                        <div class="sub-card"></div>
                        <span>Coming Soon</span>
                    </div>

                    <div class="main-card">
                        <div class="sub-card"></div>
                        <span>Coming Soon</span>
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
                        <span>New York</span>
                    </div>

                    <div class="main-card">
                        <div class="sub-card"></div>
                        <span>Coming Soon</span>
                    </div>

                    <div class="main-card">
                        <div class="sub-card"></div>
                        <span>Coming Soon</span>
                    </div>

                    <div class="main-card">
                        <div class="sub-card"></div>
                        <span>Coming Soon</span>
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
                            <a href="https://www.instagram.com/gabrielepellegrino_" target="_blank" class="social-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="white"/>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/gabriele-pellegrino-x3" target="_blank" class="social-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="white"/>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/channel/UCRXc8tq1ya5zIEiWfTVjy5A" target="_blank" class="social-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="white"/>
                                </svg>
                            </a>
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