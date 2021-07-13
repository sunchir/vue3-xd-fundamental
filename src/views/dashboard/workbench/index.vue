<template>
  <PageWrapper>
    <div class="lg:flex">
      <div class="left-content !mr-4 enter-y">
        <ProjectCard :loading="loading" class="enter-y" />
        <DynamicInfo :loading="loading" class="!my-4 enter-y" />
      </div>
      <div class="right-content enter-y">
        <CalendarTask :loading="loading" class="enter-y" />
        <ApplicationTable class="!my-4 enter-y" :loading="loading" />
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import ProjectCard from './components/ProjectCard.vue';
  import DynamicInfo from './components/DynamicInfo.vue';
  import CalendarTask from './components/CalendarTask.vue';
  import ApplicationTable from './components/ApplicationTable.vue';

  export default defineComponent({
    components: {
      PageWrapper,
      ProjectCard,
      DynamicInfo,
      CalendarTask,
      ApplicationTable,
    },
    setup() {
      const loading = ref(true);

      setTimeout(() => {
        loading.value = false;
      }, 1500);

      return {
        loading,
      };
    },
  });
</script>
<style lang="less" scoped>
  .left-content {
    width: 35%;
  }

  .ant-card {
    border-radius: 1.2rem;
    overflow: hidden;
  }

  .right-content {
    width: 65%;
  }
</style>
