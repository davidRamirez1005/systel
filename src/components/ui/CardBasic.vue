<template>
  <div class="card-basic">
    <div class="card-icon" :class="`icon-${iconPosition}`">
      <el-icon :size="iconSize">
        <component :is="icon" />
      </el-icon>
    </div>
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue"

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: Object,
    required: true,
  },
  iconSize: {
    type: Number,
    default: 32,
  },
  iconPosition: {
    type: String,
    default: "top",
    validator: (value) => ["top", "left", "right"].includes(value),
  },
})
</script>

<style scoped>
.card-basic {
  padding: 2rem;
  background-color: var(--app-bg-secondary);
  border: 1px solid var(--el-border-color);
  border-radius: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--app-bg-third);
  border-radius: 8px;
  color: var(--app-text-primary);
  flex-shrink: 0;
}

.icon-top {
  margin-bottom: 1.25rem;
}

.icon-left,
.icon-right {
  margin-bottom: 0;
}

.card-basic:has(.icon-left) {
  flex-direction: row;
  gap: 1.5rem;
}

.card-basic:has(.icon-right) {
  flex-direction: row-reverse;
  gap: 1.5rem;
}

.card-content {
  flex: 1;
}

.card-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--app-text-primary);
  margin-top: 0;
}

.card-content p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--app-text-secondary);
  margin: 0;
}

@media (max-width: 768px) {
  .card-basic {
    padding: 1.5rem;
  }

  .card-basic:has(.icon-left),
  .card-basic:has(.icon-right) {
    flex-direction: column;
  }

  .icon-left,
  .icon-right {
    margin-bottom: 1.25rem;
  }
}
</style>
