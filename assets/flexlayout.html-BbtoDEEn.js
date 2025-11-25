import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c,b as n,d as s,a as d,f as t}from"./app-BGG14fOW.js";const r={},o={id:"flex布局",tabindex:"-1"},p=n("a",{class:"header-anchor",href:"#flex布局","aria-hidden":"true"},"#",-1),u=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/*设置主轴的方向 
       row:从左到右  row-reverse:翻转，从右到左
       column：从上到下  column-reverse:翻转，从下到上*/</span>
<span class="token property">flex-direction</span><span class="token punctuation">:</span> column-reverse<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/*  设置主轴上的子元素排列方式 
       flex-start:从左侧（上部）开始布局
       flex-end:从右侧（下部）开始布局
       center:居中对齐布局
       space-around:平分剩余空间
       space-between:先两边贴边，在平分剩余空间 */</span>
 <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/*设置子元素是否换行
       wrap:换行
       nowrap:不换行 */</span>
 <span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/*  设置侧轴上的子元素排列方式（多行）
       flex-start:从左侧（上部）开始布局
       flex-end:从右侧（下部）开始布局
      center:居中对齐布局
       stretch:拉伸，但是子盒子不要给高度 */</span>
 <span class="token property">align-content</span><span class="token punctuation">:</span> stretch<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/* 设置侧轴上的子元素排列方式（单行）
      flex-start:从左侧（上部）开始布局
      flex-end:从右侧（下部）开始布局
      center:居中对齐布局
     space-around:平分剩余空间
     space-between:先两边贴边，在平分剩余空间
      stretch:拉伸，但是子盒子不要给高度 */</span>
 <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/*  复合属性，相当于同时设置了flex-direction和flex-warp
          第一个参数：主轴方向
          第二个参数：设置是否换行 */</span>
 <span class="token property">flex-flow</span><span class="token punctuation">:</span> row wrap<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/*  flex属性：子项目占用的父控件的剩余空间的百分比 */</span>
   <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/* 控制某一个子元素在侧轴上的排列方式 
     flex-start:从左侧（上部）开始布局
    flex-end:从右侧（下部）开始布局
    center:居中对齐布局
    space-around:平分剩余空间
    space-between:先两边贴边，在平分剩余空间
    stretch:拉伸，但是子盒子不要给高度*/</span>
 <span class="token property">align-self</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/* 设置子项的排列顺序，数值越小越靠前 */</span>
 <span class="token property">order</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function v(m,b){const e=i("FontIcon");return l(),c("div",null,[n("h2",o,[p,s(),d(e,{icon:"share",color:"#3eaf7c",size:"22"}),s(" flex布局")]),u])}const f=a(r,[["render",v],["__file","flexlayout.html.vue"]]);export{f as default};
