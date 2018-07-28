<template>
  <div id="picDiv">
    <img id="pic" ref="pic" style="position: absolute"/>
  </div>
</template>
<script>

// iData:{
//         src:'',
//         height:'600',
//         width:'1024',
//     },
export default {

  props: [
    'iData'
  ],

  data () {
    return {
      img: null,
      picDiv: null,
      w: '200',
      h: '100'
    };
  },

  watch: {
    iData: {
      handler (newValue, oldValue) {
        this.initDatas(newValue);
      },
      deep: true
    }
  },

  created () {

  },

  computed: {
  },

  methods: {
    initDatas (data) {
      this.w = data.width;
      this.h = data.height;
      this.img.setAttribute('style', `position: relative; overflow: hidden; text-align: center; width: ${this.w}; height: ${this.h}`);
      this.img.setAttribute('src', `${data.src}?timestamp=${new Date().valueOf()}`);
    }
  },

  mounted () {
    this.img = document.getElementById('pic');
    this.picDiv = document.getElementById('picDiv');
    this.initDatas(this.iData);
  },

  components: {

  }

};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

  .mImg {
      position: relative;
      overflow: hidden;
      text-align: center;
  }

  .mImg > img {
      width:auto;
      height:auto;
      max-width:100%;
      max-height:100%;
  }
</style>
