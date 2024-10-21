<script setup lang="ts">
defineProps<{
  closed?: boolean,
  openModal?: boolean,
}>();

defineEmits<{
  (e: 'closedModal'): boolean
}>();
</script>

<template>
  <div
    v-if="openModal"
    class="fixed left-0 z-50 top-0 right-0 min-w-full min-h-full bg-dark bg-opacity-5 transition-opacity"
  >
    <div class="fixed inset-0">
      <div
        class="h-full flex justify-center items-center rounded-md"
      >
        <div class="bg-white md:w-[450px]">
          <div>
            <div 
              v-if="closed" 
              class="flex justify-end pt-4 pr-4"
            >
              <IconClosed 
                data-test="modal-close"
                class="cursor-pointer hover:scale-125" 
                @click="$emit('closedModal')"
              />
            </div>
          </div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>