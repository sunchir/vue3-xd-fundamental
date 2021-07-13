<template>
  <Card class="application-card">
    <Row
      class="application-card-list"
      :class="state.tabCollapse ? 'collapse' : ''"
      :gutter="[16, 16]"
    >
      <Col v-for="item in groupTitleList" :key="item.id" :span="3">
        <span
          class="application-card-item"
          @click="handleClickTitle(item)"
          :class="state.activeName === item.name ? 'active' : ''"
        >
          <AppstoreAddOutlined style="font-size: 16px" v-if="item.name === '全部'" />{{ item.name }}
        </span>
      </Col>
    </Row>
    <Row v-if="appsList && appsList.length > 0" class="application-card-applist">
      <Col v-for="appItem in appsList" :key="appItem.id" :span="8">
        <div class="flex h-20">
          <div class="flex flex-wrap items-center">
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </div>
          <div class="flex items-center">
            <div class="flex flex-col">
              <span class="m-0 justify-self-center">{{ appItem.name }}</span>
              <span class="m-0 justify-self-center">{{ appItem.description }}</span>
            </div>
          </div>
        </div>
      </Col>
    </Row>
    <img
      v-else
      style="height: 216px"
      class="h-20 mx-auto"
      src="../../../../assets/svg/illustration.svg"
    />
  </Card>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { Card, Row, Col, Avatar } from 'ant-design-vue';
  import { groupTitleItems, appList } from './data';
  import { AppstoreAddOutlined } from '@ant-design/icons-vue';

  export default defineComponent({
    components: {
      Card,
      Col,
      Row,
      AppstoreAddOutlined,
      Avatar,
    },
    setup() {
      let groupTitleList = groupTitleItems;
      let appsList = appList;
      // 添加全部字段应用
      groupTitleList.unshift({
        appNum: undefined,
        id: 0,
        isInit: 0,
        name: '全部',
        parentId: undefined,
      });
      let state = reactive({
        activeName: groupTitleItems[0].name || '',
        tabCollapse: true,
      });
      if (groupTitleList.length > 8) {
        groupTitleList.splice(7, 0, {
          appNum: undefined,
          id: 0,
          isInit: 0,
          name: '展开',
          parentId: undefined,
        });
      }

      const handleClickTitle = (item) => {
        state.activeName = item.name;
        if (item.name == '展开') {
          state.tabCollapse = !state.tabCollapse;
          console.log(state.tabCollapse);
        }
      };
      return {
        groupTitleList,
        state,
        handleClickTitle,
        appsList,
      };
    },
  });
</script>

<style scoped lang="less">
  .application-card {
    &-list {
      &.collapse {
        height: 2rem;
        overflow: hidden;
      }
    }

    &-item {
      cursor: pointer;

      &.active {
        color: @primary-color;
      }
    }
  }
</style>
