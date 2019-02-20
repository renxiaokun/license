<template>
  <!-- 卡片 -->
  <div>
    <div class="Survey">
      <el-row :gutter="12">
        <el-col :span="8">
          <el-card style="padding:20px;">
            <i class="fa fa-user-circle-o fa-4x icon" style="color:#23AE89;"></i>
			<div class="carduser">
				<span>222</span>
				  <p>新增用户</p>
			</div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card style="padding:20px;">
            <i class="fa fa-user-circle-o fa-4x icon" style="color:#2EC1CC;"></i>
          <div class="carduser">
			  <span>222</span>
				<p>新增用户</p>
			</div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card style="padding:20px;">
            <i class="fa fa-user-circle-o fa-4x icon" style="color:#FFB61C;"></i>
           <div class="carduser">
			   <span>222</span>
				  <p>新增用户</p>
			</div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" :index="indexMethod"></el-table-column>
        <el-table-column prop="account" label="账号" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="licensedata" label="授权码" width="360"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="date" label="创建时间"></el-table-column>
        <el-table-column prop="desc" label="描述"></el-table-column>
      </el-table>
    </div>
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
          licensedata: "6535620686006312531-1521692771-3066",
          type: "测试测试",
          license: "30天有效期",
          date: "2019-8-23",
          desc: "测试测试"
        },
        {
          account: "123123",
          name: "张三",
          licensedata: "6535620686006312531-1521692771-3066",
          type: "测试测试",
          license: "30天有效期",
          date: "2019-8-23",
          desc: "测试测试"
        },
        {
          account: "123123",
          name: "张三",
          licensedata: "6535620686006312531-1521692771-3066",
          type: "测试测试",
          license: "30天有效期",
          date: "2019-8-23",
          desc: "测试测试"
        },
        {
          account: "123123",
          name: "张三",
          licensedata: "6535620686006312531-1521692771-3066",
          type: "测试测试",
          license: "30天有效期",
          date: "2019-8-23",
          desc: "测试测试"
        },
        {
          account: "123123",
          name: "张三",
          licensedata: "6535620686006312531-1521692771-3066",
          type: "测试测试",
          license: "30天有效期",
          date: "2019-8-23",
          desc: "测试测试"
        }
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
.Survey {
  margin: 20px auto;
}
.carduser{
	float: left;
	padding-left: 20px;
}
.carduser span{
	font-size: 35px;
	color: #666;
}
.carduser p{
	margin-top: 0px;
}
.icon{
	float: left;
}
</style>

