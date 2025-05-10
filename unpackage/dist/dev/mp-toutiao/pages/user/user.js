"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_viwe = common_vendor.resolveComponent("viwe");
  (_easycom_uni_icons2 + _component_viwe)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.f(3, (item, k0, i0) => {
          return {
            a: "0f7520f0-1-" + i0 + "," + ("0f7520f0-0-" + i0),
            b: "0f7520f0-0-" + i0,
            c: "0f7520f0-2-" + i0
          };
        }),
        c: common_vendor.p({
          type: "download-filled",
          size: "30",
          color: "#28b389"
        }),
        d: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        e: common_vendor.p({
          type: "download-filled",
          size: "30",
          color: "#28b389"
        }),
        f: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        g: common_vendor.f(2, (item, k0, i0) => {
          return {
            a: "0f7520f0-7-" + i0 + "," + ("0f7520f0-6-" + i0),
            b: "0f7520f0-6-" + i0,
            c: "0f7520f0-8-" + i0
          };
        }),
        h: common_vendor.p({
          type: "download-filled",
          size: "30",
          color: "#28b389"
        }),
        i: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
tt.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-toutiao/pages/user/user.js.map
