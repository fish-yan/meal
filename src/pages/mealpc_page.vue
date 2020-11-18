<template>
  <div class="mealpc scroll">
      <el-button-group class="m-btn-group">
      <el-button size="mini">全选</el-button>
      <el-button size="mini">保存</el-button>
    </el-button-group>
    <el-calendar>
      <template slot="dateCell" slot-scope="{ date }">
        <div class="m-date">
          {{ date.getDate() }}
        </div>
        <el-checkbox-group class="m-box" v-model="result">
          <el-checkbox
            class="m-checkbox"
            icon-size="16px"
            :label="date.getTime() + 'a'"
            >早餐</el-checkbox
          >
          <el-checkbox
            class="m-checkbox"
            icon-size="16px"
            :label="date.getTime() + 'b'"
            >午餐</el-checkbox
          >
          <el-checkbox
            class="m-checkbox"
            icon-size="16px"
            :label="date.getTime() + 'c'"
            >晚餐</el-checkbox
          >
        </el-checkbox-group>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: [],
    };
  },
};
</script>

<style lang='scss'>
.mealpc {
  font-size: 10pt;
  position: relative;
  .m-btn-group {
    z-index: 2001;
    position: fixed;
    font-size: 10pt;
    top: 12px;
    right: 20px;
  }
  .m-date {
    padding: 5px 10px;
    text-align: left;
  }
  .m-checkbox {
    display: block;
    padding: 3px 5px;
  }
  .m-box {
    align-content: center;
  }
  .el-calendar__body {
    padding: 0 20px 20px 20px;
  }
  .el-calendar-day {
    height: 110px;
    padding: 0;
  }
  .is-selected {
    color: #1989fa;
  }
  .el-calendar__header {
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 2000;
    .el-calendar__title {
      position: absolute;
      left: 50%;
      font-size: 12pt;
      font-weight: bold;
    }
  }
  .el-calendar-table thead th {
    padding: 5px;
  }
  .el-checkbox {
    margin-right: 0;
  }
  .prev,
  .next {
    .m-box {
      pointer-events: none;
      cursor: default;
    }
  }
  .current {
    background-color: #f2f8fe;
  }
  .el-calendar-table td.is-selected {
    background-color: #f9facc;
  }
  .el-calendar-table .el-calendar-day:hover {
    background-color: #f9facc;
  }
}
</style>