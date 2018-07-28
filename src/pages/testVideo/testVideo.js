import YHeader from '/components/header';
import YTestImg from './testImg';
import YVideo from '/components/video';

import { mapActions } from 'vuex';

export default {

  data () {
    return {
      title1: 'test1',
      title2: 'test2',
      pics1: [],
      pics2: [],
      vData: {
        src: 'http://vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4',
        poster: require('../../assets/images/banner.jpg'),
        height: '500',
        width: '800'
      },
      code: 'eda402a862c9837',
      videoUrl: ''
    };
  },

  created () {
    for (let i = 1; i <= 4; i++) {
      this.pics1.push(require(`../../assets/images/img_${i}.jpg`));
      this.pics2.push(require(`../../assets/images/girl_${i}.jpg`));
    }
  },

  computed: {
  },

  methods: {
    ...mapActions(['playVideo']),

    _rqPlayStart () {
      return this.playVideo({ code: this.code, videoUrl: this.videoUrl });
    },

    handleAddServerVideo () {
      this._rqPlayStart().then(res => {
        this.vData.src = this.videoUrl;
      });
    }
  },

  mounted () {
  },

  components: {
    YHeader,
    YTestImg,
    YVideo
  }
};
