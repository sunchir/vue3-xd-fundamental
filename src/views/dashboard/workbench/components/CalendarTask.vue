<template>
  <Card>
    <Calendar v-model:value="value">
      <template #dateCellRender="{ current: value }">
        <Badge v-for="item in getListData(value)" :key="item.content" :status="item.type" />
      </template>
      <template #monthCellRender="{ current: value }">
        <div v-if="getMonthData(value)" class="notes-month">
          <section>{{ getMonthData(value) }}</section>
          <span>Backlog number</span>
        </div>
      </template>
    </Calendar>
  </Card>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Moment } from 'moment';
  import { Badge, Calendar, Card } from 'ant-design-vue';

  export default defineComponent({
    components: {
      Badge,
      Calendar,
      Card,
    },
    setup() {
      const value = ref<Moment>();

      const getListData = (value: Moment) => {
        let listData;
        switch (value.date()) {
          case 8:
            listData = [
              { type: 'warning', content: 'This is warning event.' },
              { type: 'success', content: 'This is usual event.' },
            ];
            break;
          case 10:
            listData = [
              { type: 'warning', content: 'This is warning event.' },
              { type: 'success', content: 'This is usual event.' },
              { type: 'error', content: 'This is error event.' },
            ];
            break;
          case 15:
            listData = [
              { type: 'warning', content: 'This is warning event' },
              { type: 'success', content: 'This is very long usual event。。....' },
              { type: 'error', content: 'This is error event 1.' },
              { type: 'error', content: 'This is error event 2.' },
              { type: 'error', content: 'This is error event 3.' },
              { type: 'error', content: 'This is error event 4.' },
            ];
            break;
          default:
        }
        return listData || [];
      };

      const getMonthData = (value: Moment) => {
        if (value.month() === 8) {
          return 1394;
        }
      };

      return {
        value,
        getListData,
        getMonthData,
      };
    },
  });
</script>
<style scoped>
  .events {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .ant-fullcalendar-fullscreen >>> .ant-fullcalendar-content {
    height: 40px;
  }

  .ant-fullcalendar-fullscreen >>> .ant-fullcalendar-date {
    height: 50px;
  }

  .events .ant-badge-status {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    text-overflow: ellipsis;
    font-size: 12px;
  }

  .notes-month {
    text-align: center;
    font-size: 28px;
  }

  .notes-month section {
    font-size: 28px;
  }

  .ant-fullcalendar-cell {
    height: 70px;
  }

  .ant-fullcalendar-content {
    height: 7rem;
  }
</style>
