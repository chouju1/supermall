import { debounce } from "./utils";
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh, 50);

    this.itemImgListener = () => {
      newRefresh();
    };

    this.$bus.$on("itemImgLoad", this.itemImgListener);
    // console.log('22222');
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0,0,300)
    },
  }
}