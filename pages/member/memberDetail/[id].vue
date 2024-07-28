<script setup lang="ts">
import type { Member } from '@/interface';

const PAGE_TITLE = "会員詳細情報";
useHead({
  title: PAGE_TITLE
})

definePageMeta({
  layout: "member"
});

const route = useRoute();
const memberList = useState<Map<number, Member>>("memberList");
const member = computed(
  (): Member => {
    const id = Number(route.params.id);
    return memberList.value.get(id) as Member;
  }
)

const localNote = computed(
  (): string => {
    let localNote = "--";
    if(member.value.note != undefined) {
      localNote = member.value.note;
    }
    return localNote;
  }
)
</script>

<template>
  <nav id="breadcrumbs">
    <ul>
      <li><NuxtLink v-bind:to="{name: 'index'}">TOP</NuxtLink></li>
      <li><NuxtLink v-bind:to="{name: 'member-memberList'}">会員リスト</NuxtLink></li>
      <li>{{ PAGE_TITLE }}</li>
    </ul>
  </nav>
  <section>
    <h2>{{ PAGE_TITLE }}</h2>
    <dl>
      <dt>ID</dt>
      <dd>{{ member.id }}</dd>
      <dt>メアド</dt>
      <dd>{{ member.email }}</dd>
      <dt>保有ポイント</dt>
      <dd>{{ member.points }}</dd>
      <dt>備考</dt>
      <dd>{{ localNote }}</dd>
    </dl>
  </section>
</template>
