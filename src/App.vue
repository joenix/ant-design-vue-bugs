<style scoped>
.ant-design-vue-bugs {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
}

main {
  flex: 1;
  width: 640px;
}

.table {
}
</style>

<template>
  <div class="ant-design-vue-bugs">
    <header>
      <h1>Table Header Bug</h1>
    </header>

    <main>
      <section>
        <a-table class="table" :columns="columns" :data-source="dataSource" :sticky="true" :scroll="{ x: 'max-content', y: 'max-content' }">
          <template #bodyCell="{ column }">
            <template v-if="column.key === 'operate'"><a>Operate</a></template>
          </template>
        </a-table>
        <!-- <a-table class="fqa-table" :columns="columns" :data-source="source" :pagination="false" :scroll="{ x: 'max-content', y: 'max-content' }" :sticky="true"> -->
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    fixed: 'left',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '城市',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    fixed: 'right',
    width: 100,
  },
];

const dataSource = ref([
  {
    id: 1,
    name: '张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三',
    age: 28,
    city: '北京',
  },
  {
    id: 2,
    name: '李四',
    age: 32,
    city: '上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海',
  },
  {
    id: 3,
    name: '王五',
    age: 36,
    city: '广州',
  },
  {
    id: 4,
    name: '赵六',
    age: 40,
    city: '深圳',
  },
  {
    id: 11,
    name: '张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三',
    age: 28,
    city: '北京',
  },
  {
    id: 12,
    name: '李四',
    age: 32,
    city: '上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海',
  },
  {
    id: 13,
    name: '王五',
    age: 36,
    city: '广州',
  },
  {
    id: 14,
    name: '赵六',
    age: 40,
    city: '深圳',
  },
  {
    id: 21,
    name: '张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三',
    age: 28,
    city: '北京',
  },
  {
    id: 22,
    name: '李四',
    age: 32,
    city: '上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海',
  },
  {
    id: 23,
    name: '王五',
    age: 36,
    city: '广州',
  },
  {
    id: 24,
    name: '赵六',
    age: 40,
    city: '深圳',
  },
]);
</script>
