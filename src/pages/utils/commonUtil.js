// 常用公共方法
let showLoad;

export function showLoading(text = "loading...", spinner = "el-icon-loading", bgColor = "rgba(0, 0, 0, 0.7)") {
  showLoad = this.$loading({
    lock: true,
    text: text,
    spinner: spinner,
    background: bgColor
  });
}

export const hideLoading = () => {
  showLoad && showLoad.close();
}
