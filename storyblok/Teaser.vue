<template>
  <div v-editable="blok" class="flex flex-col items-center py-4 gap-2">
    <nuxt-img
      v-if="blok.head_image"
      :src="blok.head_image.filename"
      format="webp"
    />

    <div class="font-neulis text-5xl text-center">
      {{ blok.headline }}
    </div>

    <div class="text-center text-sm" v-html="subtitle"></div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
const subtitle = computed(() => renderRichText(props.blok.subtitle))
</script>
