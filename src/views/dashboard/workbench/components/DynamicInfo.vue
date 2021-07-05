<template>
  <Card
    :tab-list="tabList"
    @tabChange="(key) => onTabChange(key, 'key')"
    :active-tab-key="key"
    v-bind="$attrs"
  >
    <template #tabBarExtraContent>
      <a-button type="link" size="small">更多</a-button>
    </template>
    <template #noticeRender="item">
      <span>
        <SoundTwoTone />
        {{ item.tabText }}
      </span>
    </template>
    <template #taskRender="item">
      <span>
        <ProfileTwoTone />
        {{ item.tabText }}
      </span>
    </template>
    <List item-layout="horizontal" :data-source="items">
      <template #renderItem="{ item }">
        <ListItem>
          <ListItemMeta>
            <template #description>
              {{ item.date }}
            </template>
            <!-- eslint-disable-next-line -->
            <template #title> {{ item.name }} <span v-html="item.desc"> </span> </template>
            <template #avatar>
              <Icon :icon="item.avatar" :size="30" />
            </template>
          </ListItemMeta>
        </ListItem>
      </template>
    </List>
  </Card>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { SoundTwoTone, ProfileTwoTone } from '@ant-design/icons-vue';
  import { Card, List } from 'ant-design-vue';
  import { dynamicInfoItems, tabList } from './data';
  import headerImg from '/@/assets/images/header.jpg';
  import { Icon } from '/@/components/Icon';

  export default defineComponent({
    components: {
      Card,
      List,
      ListItem: List.Item,
      ListItemMeta: List.Item.Meta,
      Icon,
      SoundTwoTone,
      ProfileTwoTone,
    },
    setup() {
      const onTabChange = (key, type) => {
        console.log(key, type);
      };
      return { items: dynamicInfoItems, headerImg, tabList: tabList, onTabChange };
    },
  });
</script>

<style scoped>
  .ant-fullcalendar-fullscreen >>> .ant-fullcalendar-content {
    height: 7.5rem;
  }
</style>
