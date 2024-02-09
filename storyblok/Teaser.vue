<template>
  <div v-editable="blok" class="flex flex-col items-center py-3 mb-4">
    <nuxt-img
      v-if="blok.head_image"
      :src="blok.head_image.filename"
      width="70"
      height="70"
      class="mb-3"
    />

    <div class="font-neulis text-4xl md:text-5xl text-center">
      {{ blok.headline }}
    </div>

    <div class="text-xs md:text-sm" v-html="subtitle"></div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
const subtitle = computed(() => renderRichText(props.blok.subtitle))
</script>
