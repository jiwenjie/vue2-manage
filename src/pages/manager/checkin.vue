<template>
  <div id="checkInApp" class="match-height">
    <!-- 头顶的面包屑展示部分 -->
    <headerBrum></headerBrum>
    <!-- 登记入住的内容部分 -->
    <div class="page-content">
      <div class="content-detail match-height">
        <el-form :model="formMobj" :rules="rules" ref="MObjForm">
          <el-row>
            <el-col :span="12">
              <el-form-item
                prop="name"
                label="姓名:"
                :label-width="formLabelWidth"
              >
                <el-input
                  v-model="formMobj.name"
                  autocomplete="off"
                  maxlength="10"
                  placeholder="请输入姓名"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                prop="sex"
                label="性别:"
                :label-width="formLabelWidth"
              >
                <el-select
                  v-model="formMobj.sex"
                  placeholder="请选择"
                  class="match-width"
                >
                  <el-option
                    v-for="(item, index) in sexList"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item
                prop="age"
                label="年龄:"
                :label-width="formLabelWidth"
              >
                <el-input
                  v-model="formMobj.age"
                  type="number"
                  autocomplete="off"
                  maxlength="3"
                  placeholder="请输入年龄"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                prop="roomTye"
                label="房间类型:"
                :label-width="formLabelWidth"
              >
                <el-select
                  v-model="formMobj.roomTye"
                  placeholder="请选择活动区域"
                  class="match-width"
                >
                  <el-option
                    v-for="(item, index) in roomTypList"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item
                prop="roomNum"
                label="选择房间:"
                :label-width="formLabelWidth"
              >
                <el-input
                  placeholder="请选择"
                  v-model="formMobj.roomNum"
                  readonly
                  class="input-with-select"
                >
                  <el-button
                    @click="selectRoom"
                    slot="append"
                    icon="el-icon-more-outline"
                  ></el-button>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="入住价格:" :label-width="formLabelWidth">
                <el-input
                  v-model="formMobj.price"
                  autocomplete="off"
                  maxlength="10"
                  readonly
                  placeholder="请选择房间"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item
                prop="days"
                label="入住天数:"
                :label-width="formLabelWidth"
              >
                <el-input
                  v-model="formMobj.days"
                  type="number"
                  autocomplete="off"
                  maxlength="10"
                  placeholder="请输入天数"
                  min="0"
                  @input="changeInputDay"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="总金额:" :label-width="formLabelWidth">
                <el-input
                  v-model="formMobj.totalPrice"
                  autocomplete="off"
                  maxlength="10"
                  readonly
                  placeholder="请选择"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <!-- 操作按钮一栏 -->
        <div class="btn-line">
          <el-button
            class="common-btn"
            type="primary"
            plain
            @click="confirmCheckIn"
            >确认</el-button
          >
          <el-button class="common-btn" plain @click="resetData"
            >重置</el-button
          >
        </div>
      </div>
    </div>

    <selectRoom
      :showDialog="dialogShow"
      :confirmClick="selectConfirm"
      @changeRoomShow="selectRoomChange"
    ></selectRoom>
  </div>
</template>

<script>
import headerBrum from "@/components/HeaderBrum" // 引入面包屑部分
import checkin from "./js/checkin"
import selectRoom from "./component/selectRoomDialog"
export default {
  name: "checkin",
  components: { headerBrum, selectRoom },
  mixins: [checkin],
}
</script>

<style lang="less" scoped>
@import "./css/checkin.less";
</style>
