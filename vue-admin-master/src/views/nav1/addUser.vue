<template>
	<el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
		<el-form-item label="账号">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
        <el-form-item label="密码">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
        <el-form-item label="确认密码">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
        <el-form-item label="姓名">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
		<el-form-item label="权限">
			<el-select v-model="form.region" placeholder="请选择权限">
				<el-option label="管理员" value="shanghai"></el-option>
				<el-option label="超级管理员" value="beijing"></el-option>
			</el-select>
		</el-form-item>
          <el-form-item label="手机号">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
		<el-form-item label="用户状态">
			<el-radio-group v-model="form.resource">
				<el-radio label="正常"></el-radio>
				<el-radio label="禁用"></el-radio>
			</el-radio-group>
		</el-form-item>
		<el-form-item>
			<el-button type="primary">立即创建</el-button>
			<el-button @click.native.prevent>取消</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			}
		}
	}

</script>