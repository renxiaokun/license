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
          <template slot-scope="scope">
            <div>
            <el-button type="success" size="small">查看</el-button>
            <el-button type="primary"  size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button  type="danger" size="small" @click="handleDel(scope.$index, scope.row)">销户</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>

        <!--编辑界面-->
		<el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="账号" prop="account">
					<el-input v-model="editForm.account" auto-complete="off"></el-input>
				</el-form-item>
        	<el-form-item label="姓名" prop="name">
					<el-input v-model="editForm.name" auto-complete="off"></el-input>
				</el-form-item>
        	<el-form-item label="手机号" prop="phone">
					<el-input v-model="editForm.account" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="用户状态">
					<el-radio-group v-model="editForm.isgain">
						<el-radio class="radio" :label="1">正常</el-radio>
						<el-radio class="radio" :label="0">禁用</el-radio>
					</el-radio-group>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>

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
      ],

          //编辑界面数据
				editForm: {
					id: 0,
					name: '',
					isgain: -1,
					account: 0,
					// birth: '',
					phone: ''
				},
          editFormVisible: false,//编辑界面是否显示
          		editLoading: false,
				editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				addFormVisible: false,//新增界面是否显示
				addLoading: false,
				addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
    };
  },
  methods: {
    indexMethod(index) {
      return index * 2;
    },
    //删除
			handleDel: function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { id: row.id };
					// removeUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					// });
				}).catch(() => {

				});
			},
    	//显示编辑界面
			handleEdit: function (index, row) {
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
      },
      		//编辑
			editSubmit: function () {
				this.$refs.editForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.editLoading = true;
							//NProgress.start();
							let para = Object.assign({}, this.editForm);
							// para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							// editUser(para).then((res) => {
								this.editLoading = false;
								//NProgress.done();
								this.$message({
									message: '提交成功',
									type: 'success'
								});
								this.$refs['editForm'].resetFields();
								this.editFormVisible = false;
								// this.getUsers();
							// });
						});
					}
				});
			},

  }
};
</script>

<style scoped>
</style>