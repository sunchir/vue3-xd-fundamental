<template>
  <Card :bodyStyle="{ padding: 0 }" class="w-full carousel" v-bind="$attrs">
    <Carousel class="w-full" autoplay>
      <div>
        <h3 class="truncate max-width-text">
          教务处张彪报专用设备购置电子工程学院购买了很多东西需要看看哦
        </h3>
      </div>
      <div>
        <h3 class="truncate max-width-text">
          教务处张一报专用设备购置电子工程学院购买了很多东西需要看看哦
        </h3>
      </div>
    </Carousel>
  </Card>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Card, Carousel } from 'ant-design-vue';
  import { groupItems } from './data';

  export default defineComponent({
    components: { Card, Carousel: Carousel },
    setup() {
      return { items: groupItems };
    },
  });
</script>

<style scoped>
  /* For demo */
  .ant-carousel >>> .slick-slide {
    text-align: center;
    height: 200px;
    line-height: 170px;
    background: #6963ff;
    overflow: hidden;
  }

  .ant-carousel >>> .slick-dots {
    text-align: right;
    padding-right: 1rem;
  }

  .ant-carousel >>> .slick-dots button {
    border-radius: 50%;
    width: 0.4rem !important;
    height: 0.4rem !important;
  }

  .ant-carousel >>> .slick-slide h3 {
    color: #fff;
  }

  .ant-card {
    border-radius: 1.2rem;
  }

  .max-width-text {
    max-width: 70%;
    margin-left: 1rem;
    transform: translateY(47%);
  }
</style>
