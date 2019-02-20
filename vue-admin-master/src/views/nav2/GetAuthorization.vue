<template>
	<el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
		<el-form-item label="服务器ID">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
		<el-form-item label="活动区域">
			<el-select v-model="form.region" placeholder="请选择类型">
				<el-option label="测试版本" value="shanghai"></el-option>
				<el-option label="正式版本" value="beijing"></el-option>
			</el-select>
		</el-form-item>
        <el-form-item label="license值">
			<el-input v-model="form.name" placeholder="并发数(单位:个)"></el-input>
		</el-form-item>
		<el-form-item label="描述">
			<el-input type="textarea" v-model="form.desc"></el-input>
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