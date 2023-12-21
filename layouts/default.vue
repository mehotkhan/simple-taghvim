<script setup>

const isSidebarOpen = ref(true)
const toggleSidbarMenu = () => isSidebarOpen.value = !isSidebarOpen.value
</script>
<template>
    <div>
        <div class="flex h-screen overflow-y-hidden bg-white">
            <!-- Sidebar -->
            <aside
                class="fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-gray-100 border-r shadow-lg lg:z-auto lg:static lg:shadow-none"
                :class="{ '-translate-x-full lg:translate-x-0 lg:w-20': !isSidebarOpen }">
                <!-- sidebar header -->
                <div class="flex items-center justify-between flex-shrink-0 p-2"
                    :class="{ 'lg:justify-center': !isSidebarOpen }">
                    <span class="p-2 text-3xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap">
                        گـ<span :class="{ 'lg:hidden': !isSidebarOpen }">ــاه‌نـــامه</span>
                    </span>
                    <button @click="toggleSidbarMenu()" class="p-2 rounded-md lg:hidden">
                        <svg class="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <!-- Sidebar links -->
                <nav class="flex-1 overflow-hidden hover:overflow-y-auto">
                    <ul class="p-2 overflow-hidden">
                        <li>
                            <a href="#" class="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
                                :class="{ 'justify-center': !isSidebarOpen }">
                                <span>
                                    <svg class="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </span>
                                <span :class="{ 'lg:hidden': !isSidebarOpen }">ابزارها</span>
                            </a>
                        </li>
                        <!-- Sidebar Links... -->
                    </ul>
                </nav>

            </aside>

            <div class="flex flex-col flex-1 h-full overflow-hidden">
                <!-- Navbar -->
                <header class="flex-shrink-0 border-b">
                    <div class="flex items-center justify-between p-2">
                        <!-- Navbar left -->
                        <div class="flex items-center space-x-3">
                            <span class="p-2 text-xl font-semibold tracking-wider uppercase lg:hidden">K-WD</span>
                            <!-- Toggle sidebar button -->
                            <button @click="toggleSidbarMenu()" class="p-2 rounded-md focus:outline-none focus:ring">
                                <svg class="w-4 h-4 text-gray-600"
                                    :class="{ 'transform transition-transform -rotate-180': isSidebarOpen }"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </button>

                            <!-- Desktop search box -->
                            <div class="items-center hidden px-2 space-x-2 md:flex-1 md:flex md:mr-auto md:ml-5">
                                <div class="flex items-center">

                                    <!-- search icon -->
                                    امروز چند شنبه چندم چندمین است :)
                                </div>
                            </div>
                        </div>


                        <!-- Navbar right -->
                        <div class="relative flex items-center gap-5 ml-2">

                            <NotificationButton />
                            <SettingsButton />
                            <AvatarButton />

                        </div>
                    </div>
                </header>
                <!-- Main content -->
                <main class="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll">


                    <!-- Start Content -->
                    <slot />


                </main>

            </div>
        </div>
    </div>
</template>

<style lang='css'>
body {
    margin: 0;
    font-family: Vazir, Helvetica Neue, Helvetica, sans-serif;

}
</style>