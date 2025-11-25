import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-BGG14fOW.js";const p="/assets/Cesuim/ces91.png",e="/assets/Cesuim/ces92.png",o={},c=t(`<h2 id="_1-czml" tabindex="-1"><a class="header-anchor" href="#_1-czml" aria-hidden="true">#</a> 1. CZML</h2><p>CZML是一种用来描述动态场景的JSON架构的语言，主要用于Cesium在浏览器中的展示。它可以用来描述点、线、布告板、模型以及其他的图元，同时定义他们是怎样随时间变化的。</p><ul><li>CZML 是基于JSON的。</li><li>CZML可以准确的描述值随时间变化的属性。</li><li>CZML通过增量流的方式传送到客户端。</li></ul><p>文件结构：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      id<span class="token operator">:</span> <span class="token string">&quot;document&quot;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&quot;box&quot;</span><span class="token punctuation">,</span>
      version<span class="token operator">:</span> <span class="token string">&quot;1.0&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      id<span class="token operator">:</span> <span class="token string">&quot;shape1&quot;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&quot;Blue box&quot;</span><span class="token punctuation">,</span>
      position<span class="token operator">:</span> <span class="token punctuation">{</span>
        cartographicDegrees<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">-114.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span><span class="token punctuation">,</span> <span class="token number">300000.0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      box<span class="token operator">:</span> <span class="token punctuation">{</span>
        dimensions<span class="token operator">:</span> <span class="token punctuation">{</span>
          cartesian<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">400000.0</span><span class="token punctuation">,</span> <span class="token number">300000.0</span><span class="token punctuation">,</span> <span class="token number">500000.0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        material<span class="token operator">:</span> <span class="token punctuation">{</span>
          solidColor<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token punctuation">{</span>
              rgba<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-加载czml" tabindex="-1"><a class="header-anchor" href="#_2-加载czml" aria-hidden="true">#</a> 2. 加载czml</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">let</span> czmlUrl <span class="token operator">=</span> <span class="token string">&quot;./Assets/box.czml&quot;</span><span class="token punctuation">;</span>
  <span class="token comment">// 加载czml数据</span>
  <span class="token keyword">let</span> promiseData <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>CzmlDataSource<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>czmlUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
  promiseData<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">dataSource</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    viewer<span class="token punctuation">.</span>dataSources<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    viewer<span class="token punctuation">.</span><span class="token function">flyTo</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-模拟飞机跨洋飞行" tabindex="-1"><a class="header-anchor" href="#_3-模拟飞机跨洋飞行" aria-hidden="true">#</a> 3. 模拟飞机跨洋飞行</h2><p>需要先导入模拟路径的JSON文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> planeData <span class="token keyword">from</span> <span class="token string">&quot;@/assets/json/plane.json&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>实现：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> positionProperty <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>SampledPositionProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 时间间隔 30秒</span>
  <span class="token keyword">const</span> timeStepInSeconds <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
  <span class="token comment">// 整个飞行花费的时间</span>
  <span class="token keyword">const</span> totalSeconds <span class="token operator">=</span> <span class="token punctuation">(</span>planeData<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> timeStepInSeconds<span class="token punctuation">;</span>
  <span class="token comment">// 设置起点时间</span>
  <span class="token keyword">const</span> time <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&quot;2023-10-17T18:37:00Z&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// cesium，默认使用的是儒略日的时间</span>
  <span class="token comment">// 所以需要起点时间转换成儒略日的时间</span>
  <span class="token keyword">const</span> startJulianDate <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>JulianDate<span class="token punctuation">.</span><span class="token function">fromDate</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 设置终点时间</span>
  <span class="token keyword">const</span> stopJulianDate <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>JulianDate<span class="token punctuation">.</span><span class="token function">addSeconds</span><span class="token punctuation">(</span>
    startJulianDate<span class="token punctuation">,</span>
    totalSeconds<span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>JulianDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 将查看器的时间调整到起点和结束点的范围</span>
  viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>startTime <span class="token operator">=</span> startJulianDate<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>stopTime <span class="token operator">=</span> stopJulianDate<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>currentTime <span class="token operator">=</span> startJulianDate<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  viewer<span class="token punctuation">.</span>timeline<span class="token punctuation">.</span><span class="token function">zoomTo</span><span class="token punctuation">(</span>startJulianDate<span class="token punctuation">,</span> stopJulianDate<span class="token punctuation">)</span><span class="token punctuation">;</span>

  planeData<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">dataPoint<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当前点的时间</span>
    <span class="token keyword">const</span> time <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>JulianDate<span class="token punctuation">.</span><span class="token function">addSeconds</span><span class="token punctuation">(</span>
      startJulianDate<span class="token punctuation">,</span>
      i <span class="token operator">*</span> timeStepInSeconds<span class="token punctuation">,</span>
      <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>JulianDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置当前点的位置</span>
    <span class="token keyword">const</span> position <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span>
      dataPoint<span class="token punctuation">.</span>longitude<span class="token punctuation">,</span>
      dataPoint<span class="token punctuation">.</span>latitude<span class="token punctuation">,</span>
      dataPoint<span class="token punctuation">.</span>height
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 添加轨迹采样点</span>
    positionProperty<span class="token punctuation">.</span><span class="token function">addSample</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> position<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 添加点</span>
    viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> position<span class="token punctuation">,</span>
      <span class="token literal-property property">point</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">pixelSize</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">,</span>
        <span class="token literal-property property">outlineColor</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">WHITE</span><span class="token punctuation">,</span>
        <span class="token literal-property property">outlineWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 创建飞机</span>
  <span class="token keyword">const</span> planeEntity <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">availability</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>TimeIntervalCollection</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>TimeInterval</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">start</span><span class="token operator">:</span> startJulianDate<span class="token punctuation">,</span>
        <span class="token literal-property property">stop</span><span class="token operator">:</span> stopJulianDate<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;飞机&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 设置飞机的可用</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> positionProperty<span class="token punctuation">,</span>
    <span class="token comment">// VelocityOrientationProperty会自动根据采样点，计算出飞机的速度和方向</span>
    <span class="token literal-property property">orientation</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>VelocityOrientationProperty</span><span class="token punctuation">(</span>positionProperty<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">uri</span><span class="token operator">:</span> <span class="token string">&quot;./model/Air.glb&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// minimumPixelSize: 128,</span>
      <span class="token comment">// maximumScale: 20000,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 绘制轨迹线</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PathGraphics</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 相机追踪运动的问题</span>
  viewer<span class="token punctuation">.</span>trackedEntity <span class="token operator">=</span> planeEntity<span class="token punctuation">;</span>
  <span class="token comment">// 设置时间速率</span>
  viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>multiplier <span class="token operator">=</span> <span class="token number">60</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',14),i=[c];function l(u,r){return s(),a("div",null,i)}const m=n(o,[["render",l],["__file","base9.html.vue"]]);export{m as default};
