<script setup>
const { registerNew } = useUser();

useHead({
  title: "گاه‌نامه",
  meta: [{ name: "description", content: "تقویم ساده و جمع‌و‌جور" }],

  htmlAttrs: { dir: "rtl", lang: "fa" },
});

onMounted(() => {
  registerNew();
});
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
