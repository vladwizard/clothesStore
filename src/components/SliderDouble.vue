<script setup>
import { ref, computed } from "vue";
const props = defineProps(["value1", "value2", "min", "max"]);
const minLimiter = props.min ? props.min : 100;
const maxLimiter = props.max ? props.max : 1100;
const valute = "$";

let value1 = props.value1 ? props.value1 : ref(150);
let value2 = props.value2 ? props.value2 : ref(400);
let values = [value1, value2];
let pos1 = computed(() => {
  return (value1.value / (maxLimiter - minLimiter)) * 255;
});
let pos2 = computed(() => {
  return (value2.value / (maxLimiter - minLimiter)) * 255;
});

const point1 = ref(null);
const point2 = ref(null);
const wrapper = ref(null);

function clickHandle(e, limiterLeft, limiterRight, ref1) {
  let item = e.target;

  // 3, перемещать по экрану
  document.onmousemove = function (e) {
    let posmouse = parseInt(
      e.clientX - wrapper.value.getBoundingClientRect().left
    );
    let res;

    if (posmouse < limiterLeft) {
      res = limiterLeft;
    } else if (posmouse > limiterRight) {
      res = limiterRight;
    } else {
      res = posmouse;
    }
    ref1.value = parseInt((res / 255) * (maxLimiter - minLimiter));
  };

  // 4. отследить окончание переноса
  window.onmouseup = function () {
    document.onmousemove = null;
    window.onmouseup = null;
  };
}
</script>

<template>
  <article>
    <div ref="wrapper" class="slider">
      <div
        class="point"
        :style="{ left: pos1 + 'px' }"
        ref="point1"
        @mousedown="
          (e) => clickHandle(e, 0, parseInt(point2.style.left) - 10, values[0])
        "
      >
        <div class="extrasmall nonselect">{{ valute + value1 }}</div>
      </div>
      <div
        ref="point2"
        class="point"
        :style="{ left: pos2 + 'px' }"
        @mousedown="
          (e) =>
            clickHandle(
              e,
              parseInt(point1.style.left) + 10,
              wrapper.getBoundingClientRect().width,
              values[1]
            )
        "
      >
        <div class="extrasmall nonselect">{{ valute + value2 }}</div>
      </div>
      <span
        class="line"
        :style="{
          left: pos1 + 9 + 'px',
          width: pos2 - pos1 - 18 + 'px',
        }"
      ></span>
    </div>
    <div class="inputs extrasmall">
      <input v-model="value1" :min="limiterLeft" />—<input v-model="value2" />
    </div>
  </article>
</template>

<style lang="scss" scoped>
.line {
  background: var(--primary);
  height: 100%;
  position: absolute;
  color: #555;
}
article {
  padding-top: 50px;
}
.inputs {
  color: var(--gray800);
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > * {
    width: 110px;
    border: 1px solid var(--gray400);
    border-radius: var(--border-radius);
    padding: 9px 12px;
    box-sizing: border-box;
  }
}
.slider {
  position: relative;
  width: 255px;
  height: 4px;
  background: var(--gray400);
  margin-bottom: 21px;
}
.point {
  height: 12px;
  width: 12px;
  background: var(--primary);
  border-radius: 100%;
  position: absolute;
  top: -4px;
  transform: translate(-50%, 0);
  > div {
    background: var(--gray800);
    color: white;

    padding: 5px 10px;
    border-radius: var(--border-radius);
    position: absolute;
    bottom: 14px;
    transform: translate(calc(-50% + 6px), -50%);
  }
}
</style>
