"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_uni_popup = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_dateformat2 + _easycom_uni_icons2 + _component_uni_popup)();
}
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_dateformat + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const maskState = common_vendor.ref(true);
    const infoPopup = common_vendor.ref(null);
    const clickInfo = () => {
      infoPopup.value.open();
    };
    const maskChange = () => {
      maskState.value = !maskState.value;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(5, (item, k0, i0) => {
          return {};
        }),
        b: common_vendor.o(maskChange),
        c: common_assets._imports_0$3,
        d: maskState.value
      }, maskState.value ? {
        e: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        f: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        g: common_vendor.p({
          type: "info",
          size: "28"
        }),
        h: common_vendor.o(clickInfo),
        i: common_vendor.p({
          type: "star",
          size: "28"
        }),
        j: common_vendor.p({
          type: "download",
          size: "23"
        })
      } : {}, {
        k: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        l: common_vendor.f(30, (item, k0, i0) => {
          return {};
        }),
        m: common_vendor.sr(infoPopup, "2dad6c07-5", {
          "k": "infoPopup"
        }),
        n: common_vendor.p({
          type: "bottom"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/preview/preview.js.map
