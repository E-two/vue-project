<template>
  <div class="pic-list box-size">
    <p>{{ title }}</p>
    <a-row :gutter="10" class="mt-25">
    <a-col :span="6" v-for="(o, index) in pics" :key="o" :offset="index > 0 ? 0 : 0">
      <img :src="o" class="image box-size">
    </a-col>
  </a-row>
  </div>
</template>

<script>
export default {

  props: {
    title: String,
    pics: {
      type: Array,
      default: new Array(0),
      required: true
    }
  },

  methods: {
  },

  created () {

  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

  .pic-list {
    height: 100%;
    padding: 23px;
    background-color: #fff;
    border: 1px solid #d7dce0;
    margin-bottom: 20px;
  }

  .box-size {
    box-sizing: border-box;
  }

  .pic-list p {
    color: #333;
    font-size: 18px;
  }

  .image {
    float: left;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    width: 124px;
    height: 120px;
  }

</style>
