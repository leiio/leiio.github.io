import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as p}from"./app-BGG14fOW.js";const e={},t=p(`<h2 id="_1-设置entity材质" tabindex="-1"><a class="header-anchor" href="#_1-设置entity材质" aria-hidden="true">#</a> 1. 设置entity材质</h2><ul><li>添加棋盘纹理材质</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 棋盘纹理</span>
<span class="token keyword">let</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CheckerboardMaterialProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token literal-property property">evenColor</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">,</span>
<span class="token literal-property property">oddColor</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">YELLOW</span><span class="token punctuation">,</span>
<span class="token literal-property property">repeat</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian2</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加条纹纹理材质</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 条纹纹理</span>
<span class="token keyword">let</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>StripeMaterialProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token literal-property property">evenColor</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">WHITE</span><span class="token punctuation">,</span>
<span class="token literal-property property">oddColor</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">YELLOW</span><span class="token punctuation">,</span>
 <span class="token literal-property property">repeat</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加网格纹理材质</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 网格纹理</span>
<span class="token keyword">let</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>GridMaterialProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token literal-property property">color</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">YELLOW</span><span class="token punctuation">,</span>
<span class="token literal-property property">cellAlpha</span><span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span>
<span class="token literal-property property">lineCount</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian2</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token literal-property property">lineThickness</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian2</span><span class="token punctuation">(</span><span class="token number">4.0</span><span class="token punctuation">,</span> <span class="token number">4.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加虚线材质</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 设置虚线材质</span>
<span class="token keyword">let</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PolylineDashMaterialProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">dashLength</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>设置箭头材质</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PolylineArrowMaterialProperty</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>设置发光飞线效果</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PolylineGlowMaterialProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 设置发光程度</span>
    <span class="token literal-property property">glowPower</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
    <span class="token comment">// 尾椎缩小程度</span>
    <span class="token literal-property property">taperPower</span><span class="token operator">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-编写着色器自定义材质" tabindex="-1"><a class="header-anchor" href="#_2-编写着色器自定义材质" aria-hidden="true">#</a> 2. 编写着色器自定义材质</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 编写着色器修改材质</span>
 <span class="token comment">// https://cesium.com/downloads/cesiumjs/releases/b28/Documentation/</span>
 <span class="token keyword">let</span> material1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Material</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token literal-property property">fabric</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">uniforms</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">uTime</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
       czm_material czm_getMaterial(czm_materialInput materialInput)
       {
         // 生成默认的基础材质
         czm_material material = czm_getDefaultMaterial(materialInput);
         // material.diffuse = vec3(materialInput.st+uTime, 0.0);
         float strength = mod((materialInput.s-uTime) * 10.0, 1.0);
         material.diffuse = vec3(strength, 0.0, 0.0);
         return material;
       }
     </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token comment">//添加补间动画</span>
 gsap<span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span>material1<span class="token punctuation">.</span>uniforms<span class="token punctuation">,</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">uTime</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
   <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
   <span class="token literal-property property">repeat</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
   <span class="token literal-property property">ease</span><span class="token operator">:</span> <span class="token string">&quot;linear&quot;</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// 图元</span>
 <span class="token keyword">let</span> primitive <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Primitive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token literal-property property">geometryInstances</span><span class="token operator">:</span> <span class="token punctuation">[</span>instance<span class="token punctuation">,</span> instance2<span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token literal-property property">appearance</span><span class="token operator">:</span> appearance<span class="token punctuation">,</span>
   <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// 添加到viewer</span>
 viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>primitives<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>primitive<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-appearance编写着色器修改外观" tabindex="-1"><a class="header-anchor" href="#_3-appearance编写着色器修改外观" aria-hidden="true">#</a> 3. Appearance编写着色器修改外观</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">let</span> appearance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>EllipsoidSurfaceAppearance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token literal-property property">fragmentShaderSource</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
   in vec3 v_positionMC;
   in vec3 v_positionEC;
   in vec2 v_st;
   uniform float uTime;

   void main(void)
   {
       czm_materialInput materialInput;

       out_FragColor = vec4(v_st,uTime, 1.0);
   }
   </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>appearance<span class="token punctuation">)</span><span class="token punctuation">;</span>
 appearance<span class="token punctuation">.</span>uniforms <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">uTime</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>

 gsap<span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span>appearance<span class="token punctuation">.</span>uniforms<span class="token punctuation">,</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">uTime</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
   <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
   <span class="token literal-property property">repeat</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
   <span class="token literal-property property">yoyo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
   <span class="token literal-property property">ease</span><span class="token operator">:</span> <span class="token string">&quot;linear&quot;</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token comment">// 04-图元</span>
 <span class="token keyword">let</span> primitive <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Primitive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token literal-property property">geometryInstances</span><span class="token operator">:</span> <span class="token punctuation">[</span>instance<span class="token punctuation">,</span> instance2<span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token literal-property property">appearance</span><span class="token operator">:</span> appearance<span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-自定义materialproperty材质" tabindex="-1"><a class="header-anchor" href="#_4-自定义materialproperty材质" aria-hidden="true">#</a> 4. 自定义materialProperty材质</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//创建自定义材质</span>
  <span class="token keyword">class</span> <span class="token class-name">CustomMaterialPropery</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>definitionChanged <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Event</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      Cesium<span class="token punctuation">.</span>Material<span class="token punctuation">.</span>_materialCache<span class="token punctuation">.</span><span class="token function">addMaterial</span><span class="token punctuation">(</span><span class="token string">&quot;CustomMaterial&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">fabric</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;CustomMaterial&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">uniforms</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">uTime</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
          czm_material czm_getMaterial(czm_materialInput materialInput)
          {
            // 生成默认的基础材质
            czm_material material = czm_getDefaultMaterial(materialInput);
            material.diffuse = vec3(materialInput.st, uTime);
            return material;
          }

          </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>params <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">uTime</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      gsap<span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>params<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">uTime</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">repeat</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">yoyo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 返回材质类型</span>
      <span class="token keyword">return</span> <span class="token string">&quot;CustomMaterial&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token parameter">time<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span>uTime <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>params<span class="token punctuation">.</span>uTime<span class="token punctuation">;</span>
      <span class="token comment">// 返回材质值</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CustomMaterialPropery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),o=[t];function l(i,c){return s(),a("div",null,o)}const k=n(e,[["render",l],["__file","base6.html.vue"]]);export{k as default};
