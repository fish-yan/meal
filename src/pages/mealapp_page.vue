<template>
  <div class="mealapp flex-v">
    <week-calendar class="m-week-calendar">
      <template slot-scope="{ date }">
        <div class="m-cell">
          <div class="m-cell-date">
            <div>{{ date.date_frame }}</div>
            <div>{{ date.week_frame }}</div>
          </div>
            <van-checkbox-group class="m-cell-meal" v-model="result">
              <van-checkbox :name="date.date_frame + 'a'">早餐</van-checkbox>
              <van-checkbox :name="date.date_frame + 'b'">中餐</van-checkbox>
              <van-checkbox :name="date.date_frame + 'c'">晚餐</van-checkbox>
            </van-checkbox-group>
        </div>
        <div class="m-driver"></div>
      </template>
    </week-calendar>
    <div class="m-bottom">
      <van-button class="m-button">全选</van-button>
      <van-button class="m-button">保存</van-button>
    </div>
  </div>
</template>
<script>
import WeekCalendar from "../components/week_calendar";
export default {
  data() {
    return {
      result: [],
    };
  },
  created() {},
  mounted() {},
  methods: {},
  components: {
    WeekCalendar,
  },
};
</script>

<style lang='scss'>
.mealapp {
  .m-cell {
    height: 100px;
    display: flex;
    .m-cell-date {
      width: 120px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 20px;
    }
    .m-cell-meal {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
  .m-bottom {
    display: flex;
    justify-content: flex-start;
    height: 50px;
    background-color: #409EFF;
  }
  .m-button {
    margin: 10px;
    height: 30px;
    border: none;
    background-color: #409EFF;
    color: white;
  }
  .m-week-calendar {
    flex: 1;
    height: 0;
  }
}
</style>