<template>
  <div>
    <y-header></y-header>
    <div>
      <div class="bg">
        <span>A Vue.js project family bucket framework</span>
      </div>
      <div class="content">
        <h1>Test</h1>
        <h3>It including axios, vuex, vue-cookies, moment, vue-video-player. The UI uses vue-antd-ui, and the Mock data is used as faker.</h3>
        <div class="mt-25">
          <a-row :gutter="60">
            <a-col :span="12">
              <y-test-img :title="title1" :pics="pics1"></y-test-img>
            </a-col>
            <a-col :span="12">
              <y-test-img :title="title2" :pics="pics2"></y-test-img>
            </a-col>
          </a-row>
        </div>
        <div class="mt-70">
          <h1>Video</h1>
          <div class="upload mt-15">
            <input type="text" placeholder="Video Url" class="input-url fl" v-model="videoUrl">
            <div class="input-btn fl box-size" @click="handleAddServerVideo">play</div>
          </div>
          <div class="center">
            <y-video v-show="this.vData.src !== ''" :vData="vData" ref="videoPlayer"></y-video>
          </div>
          <div class="pic-area box-size overflow mt-70">
            <y-test-list />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./testVideo.js"></script>

<style lang="scss" rel="stylesheet/scss" scoped src="./testVideo.css"></style>
