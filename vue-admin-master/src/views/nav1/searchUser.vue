<template>
  <div>
    <!-- 搜索用户 -->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" >
        <el-form-item>
          <el-input  placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
        <!-- <el-form-item>
          <el-button type="primary">新增</el-button>
        </el-form-item> -->
      </el-form>
    </el-col>

    <!-- 展示列表 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" :index="indexMethod"></el-table-column>
        <el-table-column prop="account" label="账号" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="100"></el-table-column>
        <el-table-column prop="status" label="用户状态" width="150"></el-table-column>
        <el-table-column prop="phone" label="手机号"></el-table-column>
        <el-table-column prop="power" label="权限"></el-table-column>
        <el-table-column prop="isgain" label="是否可以获取正确授权码"></el-table-column>
        <el-table-column prop="operation" label="操作" width="200">
            <el-button type="success" size="small">查看</el-button>
            <el-button type="primary"  size="small">编辑</el-button>
            <el-button  type="danger" size="small">销户</el-button>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
    data() {
    return {
      tableData: [
        {
          account: "123123",
          name: "张三",
          status: "正常",
          phone: "18303205721",
          power: "普通管理员",
          isgain: "是",
          operation: "测试测试"
        },
      {
          account: "123123",
          name: "张三",
          status: "正常",
          phone: "18303205721",
          power: "普通管理员",
          isgain: "是",
          operation: "测试测试"
        },
        {
          account: "123123",
          name: "张三",
          status: "正常",
          phone: "18303205721",
          power: "普通管理员",
          isgain: "是",
          operation: "测试测试"
        },
        {
          account: "123123",
          name: "张三",
          status: "正常",
          phone: "18303205721",
          power: "普通管理员",
          isgain: "是",
          operation: "测试测试"
        },
        {
          account: "123123",
          name: "张三",
          status: "正常",
          phone: "18303205721",
          power: "普通管理员",
          isgain: "是",
          operation: "测试测试"
        },
        {
          account: "123123",
          name: "张三",
          status: "正常",
          phone: "18303205721",
          power: "普通管理员",
          isgain: "是",
          operation: "测试测试"
        },
      ]
    };
  },
  methods: {
    indexMethod(index) {
      return index * 2;
    }
  }
};
</script>

<style scoped>
</style>