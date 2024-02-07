<template>
  <div
    v-editable="blok"
    class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-6"
  >
    <Card
      v-for="post in posts"
      :key="post.uuid"
      :created_at="post.created_at"
      v-bind="post.content"
    />
  </div>
</template>

<script setup lang="ts">
import type { ISbStories } from 'storyblok-js-client'

import Card from '~/components/Card.vue'

defineProps({ blok: Object })

const posts = useState()
const storyblokApi = useStoryblokApi()

onBeforeMount(async () => {
  const result: ISbStories = await storyblokApi.get('cdn/stories', {
    version: 'draft',
    starts_with: 'posts/',
    sort_by: 'created_at:desc',
  })

  posts.value = result.data.stories
})
</script>
