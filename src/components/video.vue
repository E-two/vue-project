<template>
  <div class="player">
        <video-player   class="vjs-custom-skin"
                        ref="videoPlayer"
                        :options="playerOptions"
                        :playsinline="true"
                        @play="onPlayerPlay($event)"
                        @pause="onPlayerPause($event)"
                        @ended="onPlayerEnded($event)"
                        @loadeddata="onPlayerLoadeddata($event)"
                        @waiting="onPlayerWaiting($event)"
                        @playing="onPlayerPlaying($event)"
                        @timeupdate="onPlayerTimeupdate($event)"
                        @canplay="onPlayerCanplay($event)"
                        @canplaythrough="onPlayerCanplaythrough($event)"
                        @ready="playerReadied"
                        @statechanged="playerStateChanged($event)">
        </video-player>
    </div>
</template>
<script>

// require styles
import 'video.js/dist/video-js.css';

import { videoPlayer } from 'vue-video-player';
// vData:{
//         src:'',
//         type:'video/mp4',
//         poster:'',
//         height:'600',
//         width:'1024',
//     },
export default {

  props: [
    'vData'
  ],

  data () {
    return {
      // videojs options
      playerOptions: {
        width: '1024',
        height: '600', // 360
        autoplay: false,
        muted: false,
        language: 'en',
        controls: true,
        techOrder: ['html5', 'flash'],
        sourceOrder: true,
        flash: { hls: { withCredentials: false } },
        html5: { hls: { withCredentials: false } },
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4', // video/mp4
          src: ''
        }],
        poster: ''
      }
    };
  },

  watch: {
    vData: {
      handler (newValue, oldValue) {
        this.initDatas(newValue);
      },
      deep: true
    }
  },

  created () {

  },

  computed: {
    player () {
      return this.$refs.videoPlayer.player;
    }
  },

  methods: {
    // listen event
    onPlayerPlay (player) {
      // console.log('player play!', player)
    },

    onPlayerPause (player) {
      // console.log('player pause!', player)
    },

    onPlayerEnded (player) {
      // console.log('player ended!', player)
    },

    onPlayerLoadeddata (player) {
      // console.log('player Loadeddata!', player)
    },

    onPlayerWaiting (player) {
      // console.log('player Waiting!', player)
    },

    onPlayerPlaying (player) {
      // console.log('player Playing!', player)
    },

    onPlayerTimeupdate (player) {
      // console.log('player Timeupdate!', player.currentTime())
    },

    onPlayerCanplay (player) {
      // console.log('player Canplay!', player)
    },

    onPlayerCanplaythrough (player) {
      // console.log('player Canplaythrough!', player)
    },

    // or listen state event
    playerStateChanged (playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied (player) {
      // seek to 10s
      // console.log('example player 1 readied', player)
      // player.currentTime(10)
      // console.log('example 01: the player is readied', player)
    },

    initDatas (data) {
      this.playerOptions.height = data.height;
      this.playerOptions.poster = data.poster;
      this.playerOptions.width = data.width;

      if (data.src) {
        this.$set(this.playerOptions.sources, 0, {
          type: data.type,
          src: data.src
        });
        this.onPlayerPlay(this.player);
      }
    }
  },

  mounted () {
    this.initDatas(this.vData);
  },

  components: {
    videoPlayer
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>
