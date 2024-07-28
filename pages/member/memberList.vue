<script setup lang="ts">
import type { Member } from '@/interface';

const PAGE_TITLE = "会員リスト";
useHead({
  title: PAGE_TITLE
})

definePageMeta({
  layout: "member"
});
const memberList = useState<Map<number, Member>>("memberList");
</script>

<template>
  <nav id="breadcrumbs">
    <ul>
      <li><NuxtLink v-bind:to="{name: 'index'}">TOP</NuxtLink></li>
      <li>{{ PAGE_TITLE }}</li>
    </ul>
  </nav>
  <section>
    <h2>{{ PAGE_TITLE }}</h2>
    <p>
      新規登録は<NuxtLink v-bind:to="{name: 'member-memberAdd'}">こちら</NuxtLink>から
    </p>
    <section>
      <ul>
        <li v-for="[id, member] in memberList">
          <NuxtLink v-bind:to="{name: 'member-memberDetail-id', params: {id: id}}">
            IDが{{ id }}の{{ member.name }}さん
          </NuxtLink>
        </li>
      </ul>
    </section>
    <NuxtPage/>
  </section>
</template>
