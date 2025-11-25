import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as t,c as d,b as n,d as s,a as e,f as i}from"./app-BGG14fOW.js";const p="/assets/imgs/7CimageView2.webp",o="/assets/imgs/7CimageView3.webp",u={},r={id:"css基础布局",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#css基础布局","aria-hidden":"true"},"#",-1),m=i(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>  <span class="token comment">/* 字体粗细   normal:400  bold:700 bolder*/</span>
 <span class="token property">font-weight</span><span class="token punctuation">:</span> 700<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 设置字体 */</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Microsoft YaHei&#39;</span><span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/* 字号大小 */</span>
 <span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 文字样式 italic斜体*/</span>
<span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/* 复合属性 必须保留：fint-size 和 font-family */</span>
<span class="token comment">/* font: font-style font-weight font-size/line-heigh font-family; */</span>
<span class="token property">font</span><span class="token punctuation">:</span> italic 400 24px <span class="token string">&quot;黑体&quot;</span><span class="token punctuation">;</span>
<span class="token property">font</span><span class="token punctuation">:</span> 15px <span class="token string">&quot;宋体&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/* 文本颜色 */</span>
<span class="token property">color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/* 文本对齐 :水平对齐方向 （left，right，center）*/</span>
<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/* 文本装饰：none(取消划线) underline(下划线)、line-through(删除线)、over-line(上划线) */</span>
<span class="token property">text-decoration</span><span class="token punctuation">:</span> line-through<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/* 文本缩进 */</span>
<span class="token property">text-indent</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token comment">/* em相对单位，就是当前元素的1个文字大小 */</span>
<span class="token property">text-indent</span><span class="token punctuation">:</span>2em<span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/* 行间距:控制文字行与行之间的距离 */</span>
<span class="token property">line-height</span><span class="token punctuation">:</span> 23px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* none:隐藏元素  block：转为块级元素或者显示元素 */</span>
<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*visible:显示元素   hidden:隐藏元素（但是保留位置）*/</span>
<span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 对溢出的部分显示隐藏
visible:显示元素
hidden:隐藏超出的部分
auto:在需要的时候添加滚动条（超出则添加滚动条, 没超出则不显示滚动条）
scroll:显示滚动条(是否溢出都显示滚动条)*/</span>
<span class="token property">overflow</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>  <span class="token comment">/* 取消表单边框线 */</span>
<span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/* 取消textarea拖动放大 */</span>
<span class="token property">resize</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bottom:底线对齐
middle:中线对齐
top:顶线对齐
baseline:基线对齐（默认）*/</span>
<span class="token property">vertical-align</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/* 单行文本显示省略号
1.nowrap ： 一行如果显示不下，强制不换行 
2.overflow:hiden;
3.text-overflow:ellipsis;//文字溢出时候用省略号显示  */</span>
<span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/* 选择ul中的第一个元素  */</span>
 ul <span class="token property">li</span><span class="token punctuation">:</span>first-child 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 选择ul中的最后一个li */</span>
ul <span class="token property">li</span><span class="token punctuation">:</span>last-child 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 选择ul中的第6个li*/</span>
ul <span class="token property">li</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>6<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* ul li:nth-child(n)选择器
n可以是个数字，
  n也可以是个公式：括号中必须写 字母 n
  nth-child(n)：写n直接从0开始计算每次加1（即选择所有）
  nth-child(2n)：选出偶数的子元素 等价与 even
  nth-child(2n+1)：选出奇数的子元素 === odd
  nth-child(5n)：选出5、10、15...的子元素
  nth-child(n+5)：从第5个开始（包括5）到最后
  nth-child(-n+5)：前5个（包含第5个）
  n也可以是关键字：even偶数，odd奇数*/</span>
<span class="token function">nth-child</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/* 
 content-box:盒子大小为 width+padding+border 默认的
border-box: 盒子大小为width （padding和border不算）*/</span>
<span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* css3的图片模糊（滤镜） 数值越大图形越模糊*/</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>5px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/* calc函数 可以进行加减乘除 */</span>
<span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 80px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50px + 30px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/* transition: 做动画的属性  动画时间  运动曲线  何时开始(延时时间); */</span>
<span class="token property">transition</span><span class="token punctuation">:</span> width 1s ease-out 0s<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,25),b={id:"总结",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#",-1),k=i('<h3 id="_1-复合选择器总结" tabindex="-1"><a class="header-anchor" href="#_1-复合选择器总结" aria-hidden="true">#</a> 1.复合选择器总结</h3><figure><img src="'+p+'" alt="1.png" tabindex="0" loading="lazy"><figcaption>1.png</figcaption></figure><blockquote><p>元素显示模式 <img src="'+o+`" alt="2.png" loading="lazy"> 块级元素</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;h1&gt;~&lt;h6&gt;、&lt;p&gt;、&lt;div&gt;、&lt;ul&gt;、&lt;ol&gt;、&lt;li&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>行内元素</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;a&gt;、&lt;strong&gt;、&lt;b&gt;、&lt;em&gt;、&lt;i&gt;、&lt;del&gt;、&lt;s&gt;、&lt;ins&gt;、&lt;u&gt;、&lt;span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>行内块元素</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;img /&gt;、&lt;input /&gt;、&lt;td&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>元素转换：</p><blockquote><p>行内 =&gt; 块级 ：display: block; 块级 =&gt; 行内 ：display: inline; (行内/块级) =&gt; 行内块 ：display: inline-block; (既有行内元素特点，又有块级元素特点)</p></blockquote>`,10);function h(x,f){const a=l("FontIcon");return t(),d("div",null,[n("h2",r,[v,s(),e(a,{icon:"share",color:"#3eaf7c",size:"22"}),s(" css基础布局")]),m,n("h2",b,[g,s(),e(a,{icon:"share",color:"#3eaf7c",size:"22"}),s(" 总结：")]),k])}const w=c(u,[["render",h],["__file","baseLayout.html.vue"]]);export{w as default};
