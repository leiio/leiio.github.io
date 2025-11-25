import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as t,c,b as n,a as e,w as l,d as s,f as o}from"./app-BGG14fOW.js";const p={},r=n("h1",{id:"mysql事件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mysql事件","aria-hidden":"true"},"#"),s(" MySQL事件")],-1),u={class:"table-of-contents"},k=o(`<h2 id="事件是什么" tabindex="-1"><a class="header-anchor" href="#事件是什么" aria-hidden="true">#</a> 事件是什么</h2><blockquote><p>MySQL5.1版本开始引进event概念，MySQL中的事件(event：时间触发器)是用于执行定时或周期性的任务，类似Linux中的<code>crontab</code>， 但是后者只能精确到分钟，事件可以精确到秒。</p><p>通过单独或调用存储过程使用，在某一特定的时间点，触发相关的SQL语句或存储过程。</p><p>事件由一个特定的线程来管理的，也就是所谓的事件调度器，但是事件不能直接调用。</p></blockquote><blockquote><p>整个服务器重启、断电会导致event事件恢复成默认<code>OFF</code>关闭状态，需要在<code>mysql.ini</code>文件中修改加入<code>event_scheduler = ON</code></p></blockquote><h2 id="查看事件调度器" tabindex="-1"><a class="header-anchor" href="#查看事件调度器" aria-hidden="true">#</a> 查看事件调度器</h2><blockquote><p>MySQL中调度器<code>event_scheduler</code>负责调用事件，也就是由全局变量<code>event_scheduler</code>的状态决定，它默认是<code>OFF</code>, 一般是<code>OFF</code>。</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;%event_scheduler%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="开启事件调度器" tabindex="-1"><a class="header-anchor" href="#开启事件调度器" aria-hidden="true">#</a> 开启事件调度器</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> event_scheduler<span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看事件" tabindex="-1"><a class="header-anchor" href="#查看事件" aria-hidden="true">#</a> 查看事件</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> EVENTS<span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> information_schema<span class="token punctuation">.</span>events<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> mysql<span class="token punctuation">.</span>event<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看事件创建语句" tabindex="-1"><a class="header-anchor" href="#查看事件创建语句" aria-hidden="true">#</a> 查看事件创建语句</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> EVENT event_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建事件" tabindex="-1"><a class="header-anchor" href="#创建事件" aria-hidden="true">#</a> 创建事件</h2><blockquote><p><code>EVERY</code>后面可以跟可选的<code>STARTS</code>和<code>ENDS</code>，指定事件开始和结束时间，在这个时间段内，时间定时执行。 <code>STARTS</code>和<code>ENDS</code>可同时指定，或者只指定<code>STARTS</code>，或两者都不指定。</p></blockquote><h3 id="每隔一秒执行" tabindex="-1"><a class="header-anchor" href="#每隔一秒执行" aria-hidden="true">#</a> 每隔一秒执行</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> $$

<span class="token keyword">CREATE</span> EVENT <span class="token identifier"><span class="token punctuation">\`</span>executed_every_second<span class="token punctuation">\`</span></span>

<span class="token comment">-- 设置触发点</span>
<span class="token keyword">ON</span> SCHEDULE
	<span class="token comment">-- 使用EVERY关键字指定时间间隔，每隔一秒执行</span>
	EVERY <span class="token number">1</span> <span class="token keyword">SECOND</span>

<span class="token comment">-- 可以设置这个事件是执行一次还是持久执行，默认为\`NOT PRESERVE\`</span>
<span class="token comment">-- 即默认的计划任务执行完毕后自动drop该事件</span>
<span class="token keyword">ON</span> COMPLETION PRESERVE 
<span class="token comment">-- 可是设置该事件创建后状态是否开启或关闭，默认为\`ENABLE\`</span>
<span class="token keyword">ENABLE</span>
<span class="token comment">-- 可以给该事件加上注释，最大长度64个字节</span>
<span class="token keyword">COMMENT</span> <span class="token string">&quot;每隔一秒执行&quot;</span>
<span class="token keyword">DO</span>
	<span class="token keyword">BEGIN</span>
		
		<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">USER</span> <span class="token keyword">LIMIT</span> <span class="token number">10</span><span class="token punctuation">;</span>
		
	<span class="token keyword">END</span>$$

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="每天凌晨1点执行" tabindex="-1"><a class="header-anchor" href="#每天凌晨1点执行" aria-hidden="true">#</a> 每天凌晨1点执行</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> $$

<span class="token keyword">CREATE</span> EVENT <span class="token identifier"><span class="token punctuation">\`</span>1_am_every_day<span class="token punctuation">\`</span></span>

<span class="token comment">-- 设置触发点</span>
<span class="token keyword">ON</span> SCHEDULE
	<span class="token comment">-- 使用EVERY关键字指定时间间隔，每天启动时间</span>
	EVERY <span class="token number">1</span> <span class="token keyword">DAY</span> STARTS DATE_ADD<span class="token punctuation">(</span>DATE_ADD<span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">INTERVAL</span> <span class="token number">1</span> <span class="token keyword">DAY</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">INTERVAL</span> <span class="token number">1</span> <span class="token keyword">HOUR</span><span class="token punctuation">)</span>

<span class="token comment">-- 可以设置这个事件是执行一次还是持久执行，默认为\`NOT PRESERVE\`</span>
<span class="token comment">-- 即默认的计划任务执行完毕后自动drop该事件</span>
<span class="token keyword">ON</span> COMPLETION PRESERVE 
<span class="token comment">-- 可是设置该事件创建后状态是否开启或关闭，默认为\`ENABLE\`</span>
<span class="token keyword">ENABLE</span>
<span class="token comment">-- 可以给该事件加上注释，最大长度64个字节</span>
<span class="token keyword">COMMENT</span> <span class="token string">&quot;每天凌晨1点执行&quot;</span>
<span class="token keyword">DO</span>
	<span class="token keyword">BEGIN</span>
		
		<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">USER</span> <span class="token keyword">LIMIT</span> <span class="token number">10</span><span class="token punctuation">;</span>
		
	<span class="token keyword">END</span>$$

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="每隔一分钟执行" tabindex="-1"><a class="header-anchor" href="#每隔一分钟执行" aria-hidden="true">#</a> 每隔一分钟执行</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> $$

<span class="token keyword">CREATE</span> EVENT <span class="token identifier"><span class="token punctuation">\`</span>executed_every_minute<span class="token punctuation">\`</span></span>

<span class="token comment">-- 设置触发点</span>
<span class="token keyword">ON</span> SCHEDULE
	<span class="token comment">-- 使用EVERY关键字指定时间间隔，每隔一分钟执行</span>
	EVERY <span class="token number">1</span> <span class="token keyword">MINUTE</span>

<span class="token comment">-- 可以设置这个事件是执行一次还是持久执行，默认为\`NOT PRESERVE\`</span>
<span class="token comment">-- 即默认的计划任务执行完毕后自动drop该事件</span>
<span class="token keyword">ON</span> COMPLETION PRESERVE 
<span class="token comment">-- 可是设置该事件创建后状态是否开启或关闭，默认为\`ENABLE\`</span>
<span class="token keyword">ENABLE</span>
<span class="token comment">-- 可以给该事件加上注释，最大长度64个字节</span>
<span class="token keyword">COMMENT</span> <span class="token string">&quot;每隔一分钟执行&quot;</span>
<span class="token keyword">DO</span>
	<span class="token keyword">BEGIN</span>
		
		<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">USER</span> <span class="token keyword">LIMIT</span> <span class="token number">10</span><span class="token punctuation">;</span>
		
	<span class="token keyword">END</span>$$

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指定时间范围内执行" tabindex="-1"><a class="header-anchor" href="#指定时间范围内执行" aria-hidden="true">#</a> 指定时间范围内执行</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> $$

<span class="token keyword">CREATE</span> EVENT <span class="token identifier"><span class="token punctuation">\`</span>1_am_every_range<span class="token punctuation">\`</span></span>

<span class="token comment">-- 设置触发点</span>
<span class="token keyword">ON</span> SCHEDULE
	<span class="token comment">-- 使用EVERY关键字指定时间间隔，每隔一分钟执行</span>
	EVERY <span class="token number">1</span> <span class="token keyword">MINUTE</span>
	<span class="token comment">-- 使用STARTS关键字指定开始时间，当前时间一小时之后开始执行</span>
	STARTS <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token operator">+</span> <span class="token keyword">INTERVAL</span> <span class="token number">1</span> <span class="token keyword">HOUR</span>
	<span class="token comment">-- 使用ENDS关键字指定结束时间，当前时间一个月后结束执行</span>
	ENDS <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token operator">+</span> <span class="token keyword">INTERVAL</span> <span class="token number">1</span> <span class="token keyword">MONTH</span>

<span class="token comment">-- 可以设置这个事件是执行一次还是持久执行，默认为\`NOT PRESERVE\`</span>
<span class="token comment">-- 即默认的计划任务执行完毕后自动drop该事件</span>
<span class="token keyword">ON</span> COMPLETION PRESERVE 
<span class="token comment">-- 可是设置该事件创建后状态是否开启或关闭，默认为\`ENABLE\`</span>
<span class="token keyword">ENABLE</span>
<span class="token comment">-- 可以给该事件加上注释，最大长度64个字节</span>
<span class="token keyword">COMMENT</span> <span class="token string">&quot;每隔一分钟执行，指定开始时间和结束时间&quot;</span>
<span class="token keyword">DO</span>
	<span class="token keyword">BEGIN</span>
		
		<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">USER</span> <span class="token keyword">LIMIT</span> <span class="token number">10</span><span class="token punctuation">;</span>
		
	<span class="token keyword">END</span>$$

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一小时后只执行一次" tabindex="-1"><a class="header-anchor" href="#一小时后只执行一次" aria-hidden="true">#</a> 一小时后只执行一次</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> $$

<span class="token keyword">CREATE</span> EVENT <span class="token identifier"><span class="token punctuation">\`</span>after_hour_execute_once<span class="token punctuation">\`</span></span>

<span class="token comment">-- 设置触发点</span>
<span class="token keyword">ON</span> SCHEDULE
	<span class="token comment">-- 使用AT关键字指定只执行一次的时间，一小时后只执行一次</span>
	AT <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token operator">+</span> <span class="token keyword">INTERVAL</span> <span class="token number">1</span> <span class="token keyword">HOUR</span>

<span class="token comment">-- 可以设置这个事件是执行一次还是持久执行，默认为\`NOT PRESERVE\`</span>
<span class="token comment">-- 即默认的计划任务执行完毕后自动drop该事件</span>
<span class="token keyword">ON</span> COMPLETION PRESERVE 
<span class="token comment">-- 可是设置该事件创建后状态是否开启或关闭，默认为\`ENABLE\`</span>
<span class="token keyword">ENABLE</span>
<span class="token comment">-- 可以给该事件加上注释，最大长度64个字节</span>
<span class="token keyword">COMMENT</span> <span class="token string">&quot;一小时后只执行一次&quot;</span>
<span class="token keyword">DO</span>
	<span class="token keyword">BEGIN</span>
		
		<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">USER</span> <span class="token keyword">LIMIT</span> <span class="token number">10</span><span class="token punctuation">;</span>
		
	<span class="token keyword">END</span>$$

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改事件" tabindex="-1"><a class="header-anchor" href="#修改事件" aria-hidden="true">#</a> 修改事件</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> EVENT event_name
  <span class="token punctuation">[</span><span class="token keyword">ON</span> SCHEDULE SCHEDULE<span class="token punctuation">]</span>
  <span class="token punctuation">[</span><span class="token keyword">RENAME</span> <span class="token keyword">TO</span> new_event_name<span class="token punctuation">]</span>
  <span class="token punctuation">[</span><span class="token keyword">ON</span> COMPLETION <span class="token punctuation">[</span><span class="token operator">NOT</span><span class="token punctuation">]</span> PRESERVE<span class="token punctuation">]</span>
  <span class="token punctuation">[</span><span class="token keyword">COMMENT</span> <span class="token string">&#39;comment&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">[</span><span class="token keyword">ENABLE</span> <span class="token operator">|</span> <span class="token keyword">DISABLE</span><span class="token punctuation">]</span>
  <span class="token punctuation">[</span><span class="token keyword">DO</span> sql_statement<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除事件" tabindex="-1"><a class="header-anchor" href="#删除事件" aria-hidden="true">#</a> 删除事件</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> EVENT <span class="token punctuation">[</span><span class="token keyword">IF</span> <span class="token keyword">EXISTS</span><span class="token punctuation">]</span> event_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="开启事件" tabindex="-1"><a class="header-anchor" href="#开启事件" aria-hidden="true">#</a> 开启事件</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> EVENT event_name <span class="token keyword">ENABLE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="停止事件" tabindex="-1"><a class="header-anchor" href="#停止事件" aria-hidden="true">#</a> 停止事件</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> EVENT event_name <span class="token keyword">DISABLE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="启动定时器" tabindex="-1"><a class="header-anchor" href="#启动定时器" aria-hidden="true">#</a> 启动定时器</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> EVENT event_remind_status <span class="token keyword">ON</span>    
COMPLETION PRESERVE <span class="token keyword">ENABLE</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function v(m,E){const a=d("router-link");return t(),c("div",null,[r,n("nav",u,[n("ul",null,[n("li",null,[e(a,{to:"#事件是什么"},{default:l(()=>[s("事件是什么")]),_:1})]),n("li",null,[e(a,{to:"#查看事件调度器"},{default:l(()=>[s("查看事件调度器")]),_:1})]),n("li",null,[e(a,{to:"#开启事件调度器"},{default:l(()=>[s("开启事件调度器")]),_:1})]),n("li",null,[e(a,{to:"#查看事件"},{default:l(()=>[s("查看事件")]),_:1})]),n("li",null,[e(a,{to:"#查看事件创建语句"},{default:l(()=>[s("查看事件创建语句")]),_:1})]),n("li",null,[e(a,{to:"#创建事件"},{default:l(()=>[s("创建事件")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#每隔一秒执行"},{default:l(()=>[s("每隔一秒执行")]),_:1})]),n("li",null,[e(a,{to:"#每天凌晨1点执行"},{default:l(()=>[s("每天凌晨1点执行")]),_:1})]),n("li",null,[e(a,{to:"#每隔一分钟执行"},{default:l(()=>[s("每隔一分钟执行")]),_:1})]),n("li",null,[e(a,{to:"#指定时间范围内执行"},{default:l(()=>[s("指定时间范围内执行")]),_:1})]),n("li",null,[e(a,{to:"#一小时后只执行一次"},{default:l(()=>[s("一小时后只执行一次")]),_:1})])])]),n("li",null,[e(a,{to:"#修改事件"},{default:l(()=>[s("修改事件")]),_:1})]),n("li",null,[e(a,{to:"#删除事件"},{default:l(()=>[s("删除事件")]),_:1})]),n("li",null,[e(a,{to:"#开启事件"},{default:l(()=>[s("开启事件")]),_:1})]),n("li",null,[e(a,{to:"#停止事件"},{default:l(()=>[s("停止事件")]),_:1})]),n("li",null,[e(a,{to:"#启动定时器"},{default:l(()=>[s("启动定时器")]),_:1})])])]),k])}const h=i(p,[["render",v],["__file","MySQL事件.html.vue"]]);export{h as default};
