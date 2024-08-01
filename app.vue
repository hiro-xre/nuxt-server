<script setup lang="ts">
const SITE_TITLE = "ヘッダ変更サンプル";
useHead({
  titleTemplate: (titleChunk: string|undefined): string => {
    let title = SITE_TITLE;
    if(titleChunk != undefined) {
      title = `${titleChunk} | ${SITE_TITLE}`;
    }
    return title;
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
main {
  border: blue 1px solid;
  padding: 10px;
}
#breadcrumbs ul li {
  display: flex;
  list-style-type: none;
}
#breadcrumbs {
  margin-left: 0;
}
#breadcrumbs ul {
  padding: 0;
}
#breadcrumbs ul .current {
  color: red;
}
#breadcrumbs ul li:before {
  content: " > ";
}
#breadcrumbs ul li:first-child:before {
  content: none;
}
</style>
