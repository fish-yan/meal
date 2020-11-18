<template>
  <div class="mealpc_manager flex-v">
    <div class="m-header">
      <div class="m-query-date">
        报餐日期：
        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
        </el-date-picker>
        至
        <el-date-picker v-model="value2" type="date" placeholder="选择日期">
        </el-date-picker>
      </div>
      <div class="flex-h m-query-type">
        报餐类型：
        <el-checkbox-group v-model="result">
          <el-checkbox label="a">早餐</el-checkbox>
          <el-checkbox label="b">中餐</el-checkbox>
          <el-checkbox label="c">晚餐</el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="flex-h m-query-name">
        <span>报餐人：</span>
        <el-input v-model="input" placeholder="输入报餐人"></el-input>
      </div>
    </div>
    <el-button-group class="m-right">
      <el-button size="mini" @click="onQueryClick">立即查找</el-button>
      <el-button size="mini">清除</el-button>
    </el-button-group>
    <div class="m-driver"></div>
    <div class="flex-h m-export">
      <div class="m-count">第1/10页 共244条记录</div>
      <el-button-group>
        <el-button size="mini">导出选中</el-button>
        <el-button size="mini">导出</el-button>
      </el-button-group>
    </div>
    <div class="scroll">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        border
        @selection-change="handleSelectionChange"
        :default-sort="{ prop: 'date', order: 'ascending' }"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="date" label="报餐日期" width="250" sortable>
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="type"
          label="报餐类型"
          width="250"
          sortable
          :sort-method="sortName"
        >
        </el-table-column>
        <el-table-column prop="name" label="报餐人"> </el-table-column>
      </el-table>
    </div>
    <el-pagination class="m-page" hide-on-single-page background layout="prev, pager, next" :total="100" :page-size="10"> </el-pagination>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          type: "早餐",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          type: "早餐",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          type: "午餐",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          type: "晚餐",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          type: "早餐",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          type: "晚餐",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          type: "午餐",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          type: "午餐",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          type: "午餐",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      multipleSelection: [],
      value1: "",
      value2: "",
      result: [],
      input: "",
    };
  },

  methods: {
    sortName(a, b) {
      let sortDic = { 早餐: 0, 午餐: 1, 晚餐: 2 };
      return sortDic[a.type] - sortDic[b.type];
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    onQueryClick() {
        console.log("aaaa");
        
    }
  },
};
</script>

<style lang="scss">
.mealpc_manager {
  font-size: 10pt;
  .m-header {
    margin: 20px;
    display: flex;
    justify-content: space-between;
  }
  .el-input__inner {
    height: 30px;
  }
  .el-input__icon {
    line-height: 30px;
  }
  .el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    width: 150px;
  }
  .m-query-date,
  .m-query-name {
    height: 30px;
    line-height: 30px;
    width: 400px;
  }
  .m-query-name span {
    width: 100px;
  }

  .m-query-type {
    height: 30px;
    line-height: 30px;
  }
  .m-right {
    margin-right: 20px;
    align-self: flex-end;
  }
  .m-driver {
    background-color: #eeeeee;
    height: 1px;
    margin: 10px 0;
  }
  .m-export {
    justify-content: space-between;
    margin: 0 20px 5px 10px;
  }
  .m-count {
    margin-top: 10px;
  }
  .m-page {
      margin: 10px 0;
      align-self: flex-start;
  }
}
</style>