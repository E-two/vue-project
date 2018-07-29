<template>
  <div>
    <a-list
      :grid="{ gutter: 16, column: 6 }"
      :pagination="{pageSize: pageSize,
                    onChange: (page) => {
                      handleChange(page);
                    },
                  }"
      :dataSource="getVideosData"
    >
      <a-list-item slot="renderItem" slot-scope="item, index" key="item.id">
        <y-test-card :card="item" />
      </a-list-item>
    </a-list>
  </div>
</template>

<script>

import YTestCard from '/components/testCard';

import { mapGetters } from 'vuex';

export default {

  data () {
    return {
      pageSize: 12,
      page: 1
    };
  },

  methods: {
    handleChange (page) {
      this.page = page;
    }
  },

  computed: {
    ...mapGetters(['getVideosData'])
  },

  created () {

  },

  components: {
    YTestCard
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
