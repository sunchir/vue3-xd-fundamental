<template>
  <PageWrapper>
    <div class="lg:flex">
      <div class="left-content !mr-4 enter-y">
        <ProjectCard :loading="loading" class="enter-y" />
        <DynamicInfo :loading="loading" class="!my-4 enter-y" />
      </div>
      <div class="right-content enter-y">
        <CalendarTask :loading="loading" class="enter-y" />
        <Card class="!my-4 enter-y" :loading="loading">
          <img
            style="height: 216px"
            class="h-20 mx-auto"
            src="../../../assets/svg/illustration.svg"
          />
        </Card>

        <SaleRadar :loading="loading" class="enter-y" />
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { Card } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import ProjectCard from './components/ProjectCard.vue';
  import DynamicInfo from './components/DynamicInfo.vue';
  import SaleRadar from './components/SaleRadar.vue';
  import CalendarTask from './components/CalendarTask.vue';

  export default defineComponent({
    components: {
      PageWrapper,
      ProjectCard,
      DynamicInfo,
      SaleRadar,
      Card,
      CalendarTask,
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
