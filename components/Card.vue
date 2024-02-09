<template>
  <div
    class="card-container flex flex-col justify-end w-80 min-h-80 rounded-3xl p-4 bg-gray-200"
    :style="card_bg_styles"
  >
    <div
      class="bg-gray-200 p-4 rounded-xl relative"
      :style="{ backgroundColor: props.card_color }"
    >
      <nuxt-img
        v-if="props.card_stamp"
        :src="props.card_stamp.filename"
        class="absolute -top-1/3 right-4 rounded-full border-4"
        :style="{ borderColor: props.card_color }"
        width="60"
        height="60"
        format="webp"
      />
      <div
        v-if="created_at"
        class="created_at font-light"
        :class="{ 'pr-16': props.card_stamp }"
      >
        {{ created_at.toLocaleDateString() }}
      </div>
      <div class="text-2xl font-bold mb-1">{{ props.card_title }}</div>
      <div class="text-xs pr-4">{{ props.card_subtitle }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { StoryblokAsset } from '~/types/storyblok/asset'

const img = useImage()

const props = defineProps<{
  card_title: string
  card_subtitle: string
  card_image: StoryblokAsset
  card_stamp?: StoryblokAsset
  card_color?: string
  created_at: string
}>()

const created_at = props.created_at ? new Date(props.created_at) : null

const card_bg_styles = computed(() => {
  const imgUrl = img(props.card_image.filename, {
    width: 320,
    height: 320,
    format: 'webp',
    smart: true,
  })

  return {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url('${imgUrl}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  }
})
</script>

<style scoped>
.created_at {
  font-size: 10px;
}
</style>
