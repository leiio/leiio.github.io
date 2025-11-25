import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as l,b as n,a as e,w as t,d as s,f as i}from"./app-BGG14fOW.js";const k={},d=n("h1",{id:"mysql存储过程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mysql存储过程","aria-hidden":"true"},"#"),s(" MySQL存储过程")],-1),r={class:"table-of-contents"},u=i(`<h2 id="创建游标存储过程" tabindex="-1"><a class="header-anchor" href="#创建游标存储过程" aria-hidden="true">#</a> 创建游标存储过程</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 将语句的结束符号从分号;临时改为两个$$(可以是自定义)</span>
<span class="token keyword">DELIMITER</span> $$
<span class="token keyword">USE</span> <span class="token identifier"><span class="token punctuation">\`</span>table_name<span class="token punctuation">\`</span></span>$$
<span class="token comment">-- 判断删除存储过程</span>
<span class="token keyword">DROP</span> <span class="token keyword">PROCEDURE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> select_review$$
<span class="token comment">-- IN输入参数 OUT输出参数</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DEFINER</span><span class="token operator">=</span><span class="token identifier"><span class="token punctuation">\`</span>root<span class="token punctuation">\`</span></span><span class="token variable">@\`%\`</span> <span class="token keyword">PROCEDURE</span> select_review <span class="token punctuation">(</span> <span class="token operator">IN</span> gs <span class="token keyword">BIGINT</span><span class="token punctuation">,</span><span class="token operator">IN</span> rid <span class="token keyword">BIGINT</span><span class="token punctuation">,</span><span class="token keyword">OUT</span> result <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token keyword">BEGIN</span>

	<span class="token keyword">DECLARE</span> _email <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">DECLARE</span> i <span class="token keyword">INT</span><span class="token punctuation">;</span>
	<span class="token keyword">DECLARE</span> r <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">DECLARE</span> s <span class="token keyword">INT</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">-- 遍历数据结束标志</span>
	<span class="token keyword">DECLARE</span> done <span class="token keyword">INT</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">FALSE</span><span class="token punctuation">;</span>
	<span class="token comment">-- 游标</span>
	<span class="token keyword">DECLARE</span> r_name <span class="token keyword">CURSOR</span> <span class="token keyword">FOR</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> email <span class="token keyword">FROM</span> company c <span class="token keyword">JOIN</span> u_user u <span class="token keyword">ON</span> c<span class="token punctuation">.</span>id<span class="token operator">=</span>u<span class="token punctuation">.</span>company_id <span class="token keyword">JOIN</span> u_user_role ur <span class="token keyword">ON</span> u<span class="token punctuation">.</span>id<span class="token operator">=</span>ur<span class="token punctuation">.</span>uid <span class="token keyword">WHERE</span> ur<span class="token punctuation">.</span>rid<span class="token operator">=</span>rid <span class="token operator">AND</span> c<span class="token punctuation">.</span>id<span class="token operator">=</span>gs<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">-- 设定捕捉异常的结束标志</span>
	<span class="token keyword">DECLARE</span> <span class="token keyword">CONTINUE</span> <span class="token keyword">HANDLER</span> <span class="token keyword">FOR</span> SQLWARNING<span class="token punctuation">,</span> <span class="token operator">NOT</span> FOUND<span class="token punctuation">,</span> SQLEXCEPTION <span class="token keyword">SET</span> done <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">;</span>
	<span class="token comment">-- 统计循环条数并赋值给变量i</span>
	<span class="token comment">-- 赋值多列使用：列名1 ,列名2 INTO 变量名1,变量名2</span>
	<span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>nickname<span class="token punctuation">)</span> <span class="token keyword">INTO</span> i <span class="token keyword">FROM</span> company c <span class="token keyword">JOIN</span> u_user u <span class="token keyword">ON</span> c<span class="token punctuation">.</span>id<span class="token operator">=</span>u<span class="token punctuation">.</span>company_id <span class="token keyword">JOIN</span> u_user_role ur <span class="token keyword">ON</span> u<span class="token punctuation">.</span>id<span class="token operator">=</span>ur<span class="token punctuation">.</span>uid <span class="token keyword">WHERE</span> ur<span class="token punctuation">.</span>rid<span class="token operator">=</span>rid <span class="token operator">AND</span> c<span class="token punctuation">.</span>id<span class="token operator">=</span>gs<span class="token punctuation">;</span>
	
	<span class="token comment">-- 打开游标</span>
	<span class="token keyword">OPEN</span> r_name<span class="token punctuation">;</span>
	<span class="token comment">-- 自定义循环体开始</span>
	rLoop:<span class="token keyword">LOOP</span>
		<span class="token comment">-- 取值 赋值给变量，多个以,号分割</span>
		<span class="token comment">-- FETCH NEXT FROM r_name INTO _email,password1,name1;</span>
		<span class="token keyword">FETCH</span> r_name <span class="token keyword">INTO</span> _email<span class="token punctuation">;</span>
				
		<span class="token keyword">SET</span> s<span class="token operator">=</span>s<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">-- 循环一次加1</span>
		<span class="token keyword">IF</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">then</span>
			<span class="token keyword">SET</span> r<span class="token operator">=</span>CONCAT<span class="token punctuation">(</span><span class="token string">&#39;[{&quot;Push_MC&quot;:&quot;&#39;</span><span class="token punctuation">,</span>_email<span class="token punctuation">,</span><span class="token string">&#39;&quot;}]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">ELSEIF</span><span class="token punctuation">(</span>s<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">THEN</span>
			<span class="token keyword">SET</span> r<span class="token operator">=</span>CONCAT<span class="token punctuation">(</span><span class="token string">&#39;[{&quot;Push_MC&quot;:&quot;&#39;</span><span class="token punctuation">,</span>_email<span class="token punctuation">,</span><span class="token string">&#39;&quot;},&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">ELSEIF</span><span class="token punctuation">(</span>s<span class="token operator">=</span>i<span class="token punctuation">)</span> <span class="token keyword">THEN</span>
			<span class="token keyword">SET</span> r<span class="token operator">=</span>CONCAT<span class="token punctuation">(</span>r<span class="token punctuation">,</span><span class="token string">&#39;{&quot;Push_MC&quot;:&quot;&#39;</span><span class="token punctuation">,</span>_email<span class="token punctuation">,</span><span class="token string">&#39;&quot;}]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">ELSE</span>
			<span class="token keyword">SET</span> r<span class="token operator">=</span>CONCAT<span class="token punctuation">(</span>r<span class="token punctuation">,</span><span class="token string">&#39;{&quot;Push_MC&quot;:&quot;&#39;</span><span class="token punctuation">,</span>_email<span class="token punctuation">,</span><span class="token string">&#39;&quot;},&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
		
		<span class="token comment">-- 判断是否继续循环</span>
		<span class="token comment">-- IF done OR s=i THEN</span>
		<span class="token keyword">IF</span> s<span class="token operator">=</span>i <span class="token keyword">THEN</span>
			<span class="token keyword">LEAVE</span> rLoop<span class="token punctuation">;</span><span class="token comment">-- 结束循环</span>
			<span class="token comment">-- ITERATE rLoop;-- 跳过继续循环</span>
		<span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
		
	<span class="token keyword">END</span> <span class="token keyword">LOOP</span> rLoop<span class="token punctuation">;</span><span class="token comment">-- 结束自定义循环体</span>
	<span class="token keyword">CLOSE</span> r_name<span class="token punctuation">;</span><span class="token comment">-- 关闭游标</span>
		<span class="token keyword">SET</span> result<span class="token operator">=</span>r<span class="token punctuation">;</span><span class="token comment">-- 返回结果</span>
	<span class="token comment">-- 自定义异常</span>
	<span class="token comment">-- SIGNAL SQLSTATE &#39;HY000&#39; SET MESSAGE_TEXT = &#39;错误！&#39; ;</span>
<span class="token comment">-- 使用自定义结束标志结束</span>
<span class="token keyword">END</span>$$
<span class="token comment">-- 还原结束标志</span>
<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调用存储过程-查询返回结果" tabindex="-1"><a class="header-anchor" href="#调用存储过程-查询返回结果" aria-hidden="true">#</a> 调用存储过程，查询返回结果</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 调用存储过程，@sum变量为返回结果</span>
<span class="token keyword">call</span> select_review<span class="token punctuation">(</span>输入参数一<span class="token punctuation">,</span>输入参数二<span class="token punctuation">,</span><span class="token variable">@sum</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 查询返回结果</span>
<span class="token keyword">select</span> <span class="token variable">@sum</span> e<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多次调用存储过程-并拼接结果" tabindex="-1"><a class="header-anchor" href="#多次调用存储过程-并拼接结果" aria-hidden="true">#</a> 多次调用存储过程，并拼接结果</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 调用存储过程，@sum变量为返回结果</span>
<span class="token keyword">call</span> select_review<span class="token punctuation">(</span>输入参数一<span class="token punctuation">,</span>输入参数二<span class="token punctuation">,</span><span class="token variable">@sum</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 定义变量接收拼接返回结果</span>
<span class="token keyword">SET</span> <span class="token variable">@e</span><span class="token operator">=</span>CONCAT<span class="token punctuation">(</span><span class="token string">&#39;[&#39;</span><span class="token punctuation">,</span><span class="token variable">@sum</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">call</span> select_review<span class="token punctuation">(</span>输入参数一<span class="token punctuation">,</span>输入参数二<span class="token punctuation">,</span><span class="token variable">@sum</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SET</span> <span class="token variable">@e</span><span class="token operator">=</span>CONCAT<span class="token punctuation">(</span><span class="token variable">@e</span><span class="token punctuation">,</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">,</span><span class="token variable">@sum</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">SET</span> <span class="token variable">@declaration</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">SELECT</span> email <span class="token keyword">FROM</span> u_user <span class="token keyword">WHERE</span> id<span class="token operator">=</span><span class="token number">48</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SET</span> <span class="token variable">@e</span><span class="token operator">=</span>CONCAT<span class="token punctuation">(</span><span class="token variable">@e</span><span class="token punctuation">,</span><span class="token string">&#39;,{&quot;Push_MC&quot;:&quot;&#39;</span><span class="token punctuation">,</span><span class="token variable">@declaration</span><span class="token punctuation">,</span><span class="token string">&#39;&quot;}]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询最终拼接结果</span>
<span class="token keyword">SELECT</span> <span class="token variable">@e</span> e<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h2><blockquote><p><code>LOOP</code>、<code>WHILE</code>、<code>REPEAT</code></p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 将语句的结束符号从分号;临时改为两个$$(可以是自定义)</span>
<span class="token keyword">DELIMITER</span> $$
<span class="token keyword">USE</span> <span class="token identifier"><span class="token punctuation">\`</span>table_name<span class="token punctuation">\`</span></span>$$
<span class="token comment">-- 判断删除存储过程</span>
<span class="token keyword">DROP</span> <span class="token keyword">PROCEDURE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">\`</span>add_year_month_info<span class="token punctuation">\`</span></span>$$

<span class="token keyword">CREATE</span> <span class="token keyword">DEFINER</span><span class="token operator">=</span><span class="token identifier"><span class="token punctuation">\`</span>yc<span class="token punctuation">\`</span></span><span class="token variable">@\`%\`</span> <span class="token keyword">PROCEDURE</span> <span class="token identifier"><span class="token punctuation">\`</span>add_year_month_info<span class="token punctuation">\`</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
		<span class="token comment">/*
		CALL add_year_month_info()
		*/</span>
		
		<span class="token comment">-- 统计循环次数变量</span>
		<span class="token keyword">DECLARE</span> i <span class="token keyword">INT</span> <span class="token keyword">DEFAULT</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token comment">-- 需要循环次数变量</span>
		<span class="token keyword">DECLARE</span> a <span class="token keyword">INT</span> <span class="token keyword">DEFAULT</span> <span class="token number">12</span><span class="token punctuation">;</span>
		<span class="token comment">-- 设定捕捉异常的结束标志</span>
		<span class="token comment">-- DECLARE CONTINUE HANDLER FOR SQLWARNING, NOT FOUND, SQLEXCEPTION SET done = TRUE;</span>
		
		<span class="token comment">-- 自定义LOOP循环体开始</span>
		rLoop:<span class="token keyword">LOOP</span>
			<span class="token comment">-- 判断是否继续循环</span>
			<span class="token keyword">IF</span> <span class="token punctuation">(</span>i<span class="token operator">&gt;</span>a<span class="token punctuation">)</span> <span class="token keyword">THEN</span>
				<span class="token comment">-- 结束循环，意思同boeak</span>
				<span class="token keyword">LEAVE</span> rLoop<span class="token punctuation">;</span>
				<span class="token comment">-- 跳过继续循环</span>
				<span class="token comment">-- ITERATE rLoop;</span>
			<span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
			<span class="token comment">-- 循环一次加1</span>
			<span class="token keyword">SET</span> i<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
			
			<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">USER</span> <span class="token keyword">WHERE</span> id<span class="token operator">=</span>i<span class="token punctuation">;</span>
			
		<span class="token comment">-- 结束自定义循环体</span>
		<span class="token keyword">END</span> <span class="token keyword">LOOP</span> rLoop<span class="token punctuation">;</span>
		
		<span class="token comment">-- 恢复初始值</span>
		<span class="token keyword">SET</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
		
		<span class="token comment">-- WHILE循环开始</span>
		<span class="token keyword">WHILE</span> i<span class="token operator">&lt;=</span>a <span class="token keyword">DO</span>
			<span class="token keyword">SET</span> i<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
			
			<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">USER</span> <span class="token keyword">WHERE</span> id<span class="token operator">=</span>i<span class="token punctuation">;</span>
			
		<span class="token comment">-- 循环结束</span>
		<span class="token keyword">END</span> <span class="token keyword">WHILE</span><span class="token punctuation">;</span>
		
		<span class="token comment">-- 恢复初始值</span>
		<span class="token keyword">SET</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
		
		<span class="token comment">-- REPEAT循环开始</span>
		<span class="token keyword">REPEAT</span>
			<span class="token keyword">SET</span> i<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
			
			<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">USER</span> <span class="token keyword">WHERE</span> id<span class="token operator">=</span>i<span class="token punctuation">;</span>
			
		<span class="token comment">-- 循环结束</span>
		UNTIL i<span class="token operator">&gt;</span>a <span class="token keyword">END</span> <span class="token keyword">REPEAT</span><span class="token punctuation">;</span>
	<span class="token comment">-- 使用自定义结束标志结束</span>
	<span class="token keyword">END</span>$$

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> $$
<span class="token comment">-- 判断删除存储过程</span>
<span class="token keyword">DROP</span> <span class="token keyword">PROCEDURE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> err<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> err<span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token keyword">BEGIN</span>
	<span class="token keyword">DECLARE</span> code <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;00000&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">DECLARE</span> msg <span class="token keyword">TEXT</span><span class="token punctuation">;</span>
	<span class="token keyword">DECLARE</span> errno <span class="token keyword">INT</span><span class="token punctuation">;</span>
	
	<span class="token comment">-- EXIT：发生错误时退出当前代码块</span>
	<span class="token comment">-- DECLARE EXIT HANDLER FOR SQLEXCEPTION,SQLWARNING,NOT FOUND</span>
	
	<span class="token comment">/*CONTINUE: 发送错误时继续执行后续代码
	SQLWARNING是对所有以01开头的SQLSTATE代码的速记
	NOT FOUND是对所有以02开头的SQLSTATE代码的速记
	SQLEXCEPTION是对所有没有被SQLWARNING或NOT FOUND捕获的SQLSTATE代码的速记*/</span>
	<span class="token keyword">DECLARE</span> <span class="token keyword">CONTINUE</span>  <span class="token keyword">HANDLER</span> <span class="token keyword">FOR</span> SQLEXCEPTION<span class="token punctuation">,</span>SQLWARNING<span class="token punctuation">,</span><span class="token operator">NOT</span> FOUND
	
	<span class="token keyword">BEGIN</span> <span class="token comment">-- 捕获到异常时执行的代码块</span>
	<span class="token comment">-- 赋值错误代码给code变量，赋值错误信息给msg变量</span>
	GET DIAGNOSTICS CONDITION <span class="token number">1</span> code <span class="token operator">=</span> RETURNED_SQLSTATE<span class="token punctuation">,</span>errno <span class="token operator">=</span> MYSQL_ERRNO<span class="token punctuation">,</span> msg <span class="token operator">=</span> MESSAGE_TEXT<span class="token punctuation">;</span>
	<span class="token comment">-- 保存错误信息到日志表中</span>
	<span class="token comment">-- INSERT INTO sql_log(errno,code,description,create_time,message) VALUES(errno,code,&#39;存储过程：err&#39;,NOW(),msg);</span>
	
	<span class="token keyword">SELECT</span> CONCAT<span class="token punctuation">(</span><span class="token string">&quot;ERROR &quot;</span><span class="token punctuation">,</span> errno<span class="token punctuation">,</span><span class="token string">&#39;[&#39;</span><span class="token punctuation">,</span> code<span class="token punctuation">,</span> <span class="token string">&#39;] &#39;</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span> sqlerrm<span class="token punctuation">;</span>
		
	<span class="token keyword">END</span><span class="token punctuation">;</span>
	<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> a<span class="token punctuation">;</span>
	
<span class="token keyword">END</span> $$
<span class="token keyword">DELIMITER</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CALL</span> err<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="插入或更新upsert" tabindex="-1"><a class="header-anchor" href="#插入或更新upsert" aria-hidden="true">#</a> 插入或更新upsert</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">delimiter</span> $
<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> merge_a_to_b <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">BEGIN</span>
<span class="token comment">-- 定义需要插入从a表插入b表的过程变量</span>
<span class="token keyword">DECLARE</span> _ID <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">DECLARE</span> _NAME <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 游标遍历数据结束标志</span>
<span class="token keyword">DECLARE</span> done <span class="token keyword">INT</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">FALSE</span><span class="token punctuation">;</span>
<span class="token comment">-- 游标指向a表结果集第一条-1位置</span>
<span class="token keyword">DECLARE</span> cur_account <span class="token keyword">CURSOR</span> <span class="token keyword">FOR</span> <span class="token keyword">SELECT</span> ID<span class="token punctuation">,</span> NAME <span class="token keyword">FROM</span> test_a<span class="token punctuation">;</span>
<span class="token comment">-- 游标指向a表结果集最后一条加1位置 设置结束标志</span>
<span class="token keyword">DECLARE</span> <span class="token keyword">CONTINUE</span> <span class="token keyword">HANDLER</span> <span class="token keyword">FOR</span> <span class="token operator">NOT</span> FOUND  <span class="token keyword">SET</span> done <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">;</span>
<span class="token comment">-- 打开游标</span>
<span class="token keyword">OPEN</span> cur_account<span class="token punctuation">;</span>
<span class="token comment">-- 遍历游标</span>
read_loop :
<span class="token keyword">LOOP</span>
<span class="token comment">--  取值a表当前位置数据到临时变量</span>
	<span class="token keyword">FETCH</span> <span class="token keyword">NEXT</span> <span class="token keyword">FROM</span> cur_account <span class="token keyword">INTO</span> _ID<span class="token punctuation">,</span>_NAME<span class="token punctuation">;</span>

<span class="token comment">-- 如果取值结束 跳出循环</span>
<span class="token keyword">IF</span> done <span class="token keyword">THEN</span> <span class="token keyword">LEAVE</span> read_loop<span class="token punctuation">;</span> 
<span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>

<span class="token comment">-- 当前数据做 对比 如果b表存在则更新时间 不存在则插入</span>
<span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> <span class="token number">1</span> <span class="token keyword">FROM</span> TEST_B <span class="token keyword">WHERE</span> ID <span class="token operator">=</span> _ID <span class="token operator">AND</span> NAME<span class="token operator">=</span>_NAME <span class="token punctuation">)</span> 
	<span class="token keyword">THEN</span>
		<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> TEST_B <span class="token punctuation">(</span>ID<span class="token punctuation">,</span> NAME<span class="token punctuation">,</span>operatime<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span>_ID<span class="token punctuation">,</span>_NAME<span class="token punctuation">,</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">ELSE</span> 
		<span class="token keyword">UPDATE</span> TEST_B  <span class="token keyword">set</span> operatime <span class="token operator">=</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">WHERE</span> ID <span class="token operator">=</span> _ID <span class="token operator">AND</span> NAME<span class="token operator">=</span>_NAME<span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>

<span class="token keyword">END</span> <span class="token keyword">LOOP</span><span class="token punctuation">;</span>
<span class="token keyword">CLOSE</span> cur_account<span class="token punctuation">;</span>

<span class="token keyword">END</span> $
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function v(m,E){const a=o("router-link");return c(),l("div",null,[d,n("nav",r,[n("ul",null,[n("li",null,[e(a,{to:"#创建游标存储过程"},{default:t(()=>[s("创建游标存储过程")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#调用存储过程-查询返回结果"},{default:t(()=>[s("调用存储过程，查询返回结果")]),_:1})]),n("li",null,[e(a,{to:"#多次调用存储过程-并拼接结果"},{default:t(()=>[s("多次调用存储过程，并拼接结果")]),_:1})])])]),n("li",null,[e(a,{to:"#循环"},{default:t(()=>[s("循环")]),_:1})]),n("li",null,[e(a,{to:"#异常处理"},{default:t(()=>[s("异常处理")]),_:1})]),n("li",null,[e(a,{to:"#插入或更新upsert"},{default:t(()=>[s("插入或更新upsert")]),_:1})])])]),u])}const w=p(k,[["render",v],["__file","MySQL存储过程.html.vue"]]);export{w as default};
