<template>
  <div>
    <a-card
      hoverable
      style="width: 181px"
    >
      <img style="height: 179px" :src="card.img" slot="cover" />
      <a-card-meta
        title="">
        <template slot="description">{{ time }}</template>
      </a-card-meta>
    </a-card>
  </div>
</template>
<script>

import moment from 'moment';

export default {

  props: {
    card: {
      required: true
    }
  },

  data () {
    return {
    };
  },

  created () {
  },

  computed: {
    time () {
      return moment(this.card.time).format('YYYY-MM-DD HH:mm:ss');
    }
  },

  methods: {
  },

  mounted () {
  },

  components: {

  }

};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

  .seconds {
      margin: 5px 5px 0 0;
      color: red;
  }

</style>
