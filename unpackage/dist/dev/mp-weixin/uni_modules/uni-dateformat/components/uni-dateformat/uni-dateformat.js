"use strict";
const uni_modules_uniDateformat_components_uniDateformat_dateFormat = require("./date-format.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "uniDateformat",
  props: {
    date: {
      type: [Object, String, Number],
      default() {
        return "-";
      }
    },
    locale: {
      type: String,
      default: "zh"
    },
    threshold: {
      type: Array,
      default() {
        return [0, 0];
      }
    },
    format: {
      type: String,
      default: "yyyy/MM/dd hh:mm:ss"
    },
    // refreshRate使用不当可能导致性能问题，谨慎使用
    refreshRate: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      refreshMark: 0
    };
  },
  computed: {
    dateShow() {
      this.refreshMark;
      return uni_modules_uniDateformat_components_uniDateformat_dateFormat.friendlyDate(this.date, {
        locale: this.locale,
        threshold: this.threshold,
        format: this.format
      });
    }
  },
  watch: {
    refreshRate: {
      handler() {
        this.setAutoRefresh();
      },
      immediate: true
    }
  },
  methods: {
    refresh() {
      this.refreshMark++;
    },
    setAutoRefresh() {
      clearInterval(this.refreshInterval);
      if (this.refreshRate) {
        this.refreshInterval = setInterval(() => {
          this.refresh();
        }, parseInt(this.refreshRate));
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($options.dateShow)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js.map
