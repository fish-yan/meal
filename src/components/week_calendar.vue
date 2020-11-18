<template>
  <div class="week-calendar flex-v">
    <div class="m-header">
      <van-button class="m-header-block" icon="arrow-left" @click="onPreWeek">上一周</van-button>
      <span class="m-header-label">{{firstDate.format("yyyy-MM")}}</span>
      <van-button class="m-header-block" icon-position="right" icon="arrow" @click="onNextWeek">下一周</van-button>
    </div>
    <div class="m-driver"></div>
    <div class="m-calendar scroll">
      <van-list>
      <div v-for="date in list" :key="date.date_frame">
        <slot :date="date"></slot>
      </div>
    </van-list>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          week_frame: "周日",
          month_frame: "",
          day_frame:"",
          date_frame: ""
        },
      ],
      firstDate: new Date()
    }
  },
  created() {},
  mounted() {
    let date = new Date()
    this.setDate(date);
  },
  methods: {
    setDate(date) {
			var _self = this;
      var weekIdx = date.getDay();
      date = date.setDate(date.getDate() - weekIdx + 1)
      this.firstDate = new Date(date);
      date = new Date(date);
      var tmpInfo = [];
      var weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
			for(var i = 0; i < 7; i++) {
				tmpInfo.push({
					week_frame: weeks[date.getDay()],
					month_frame: date.format("MM"),
					day_frame: date.format("dd"),
					date_frame: date.format("yyyy-MM-dd"),
        });
        date.setDate(date.getDate() + 1);
      }
			this.list = tmpInfo;
    },
    onPreWeek() {
      let preWeekFirstDate = new Date(this.firstDate.setDate(this.firstDate.getDate() - 7))
      this.setDate(preWeekFirstDate)
    },
    onNextWeek() {
      let nextWeekFirstDate = new Date(this.firstDate.setDate(this.firstDate.getDate() + 7))
      this.setDate(nextWeekFirstDate)
    }
  }
};
</script>

<style lang='scss'>
.week-calendar {
  .m-header {
    display: flex;
    justify-content: space-between;
    height: 44px;
    line-height: 44px;
    font-size: 12pt;
  }
  .m-header-block {
    color: #333333;
    border: none;
  }
  .m-header-label {
    font-weight: bold;
    color: #409EFF;
  }
  .m-driver {
    height: 1px;
    background-color: #eeeeee;
  }
  .m-calendar {
    flex: 1;
    height: 0;
  }
}
</style>