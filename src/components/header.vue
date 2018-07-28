<template>
  <header class="header">
    <div class="header-title">
      <i><a-icon type="rocket" /></i>
    </div>
  </header>
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
  .header {
    width: 100%;
    background: #333;
    height: 70px;
  }

  .header > div {
    margin: 0px auto;
  }

  .header-title {
    font-size: 20px;
    font-weight: bold;
    color: #ededed;
  }

  .header-title i {
    margin-top: 15px;
    // width:100%;
    // height:62px;
    float: left;
    // background:url('../assets/images/logo.png') no-repeat 0 0;
    vertical-align: middle;
  }
</style>
