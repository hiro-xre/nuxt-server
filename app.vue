<script setup lang="ts">
import type { Member } from '@/interface';

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

useState<Map<number, Member>>(
  "memberList",
  (): Map<number, Member> => {
    const memberListInit = new Map<number, Member>();
    memberListInit.set(33456, {id: 33456, name: "田中", email: "sample@sample.com", points: 35, note: "初回特典あり。"});
    memberListInit.set(44783, {id: 44783, name: "鈴木", email: "sample2@sample2.com", points: 53});

    return memberListInit;
  }
)
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
