<template>
  <div>
    <y-header></y-header>
    <router-view></router-view>
  </div>
</template>
<script>
import YHeader from '/components/header';

export default {
  data () {
    return {};
  },
  created () {

  },
  computed: {

  },
  methods: {
  },
  components: {
    YHeader
  }
};
</script>
