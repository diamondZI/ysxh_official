// 自定义指令，用于处理点击外部区域的事件
const clickOutside = {
  bind(el: { clickOutsideEvent: { (event: any): void; (this: Document, ev: MouseEvent): any; }; contains: (arg0: any) => any; }, binding: { value: (arg0: any) => void; }) {
    // 在元素上绑定一个点击事件监听器
    el.clickOutsideEvent = function (event) {
      // 检查点击事件是否发生在元素的内部
      if (!(el === event.target || el.contains(event.target))) {
        // 如果点击事件发生在元素的外部，则触发指令绑定的方法
        binding.value(event);
      }
    };
    console.log("ni1");
    
    // 在文档上添加点击事件监听器
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unbind(el: { clickOutsideEvent: (this: Document, ev: MouseEvent) => any; }) {
    // 在元素上解除点击事件监听器
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};
export default clickOutside
