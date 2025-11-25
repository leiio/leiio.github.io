import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as a,c,b as e,a as t,w as s,d as n,f as r}from"./app-BGG14fOW.js";const u={},v=e("h1",{id:"nginx",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nginx","aria-hidden":"true"},"#"),n(" Nginx")],-1),h={class:"table-of-contents"},p=e("h2",{id:"flag",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#flag","aria-hidden":"true"},"#"),n(" Flag")],-1),m={href:"https://github.com/nginx",target:"_blank",rel:"noopener noreferrer"},b={href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},g={href:"http://nginx.org/en/docs",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/nginxinc",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/h5bp/server-configs-nginx",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/digitalocean/nginxconfig.io",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.digitalocean.com/community/tools/nginx",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/alibaba/tengine",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/hfpp2012/nginx-tutorial",target:"_blank",rel:"noopener noreferrer"},$={href:"https://github.com/xuexb/learn-nginx",target:"_blank",rel:"noopener noreferrer"},q={href:"https://iziyang.github.io/tags/nginx",target:"_blank",rel:"noopener noreferrer"},T={href:"https://my.oschina.net/jsan/blog/125861",target:"_blank",rel:"noopener noreferrer"},R={href:"https://blog.csdn.net/u014296316/article/details/80973530",target:"_blank",rel:"noopener noreferrer"},S={href:"https://juejin.im/post/5ea931866fb9a043815146fb",target:"_blank",rel:"noopener noreferrer"},I={href:"https://segmentfault.com/blog/siguoya-nginx",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.cnblogs.com/zjfjava/p/10947264.html",target:"_blank",rel:"noopener noreferrer"},P={href:"https://segmentfault.com/a/1190000037788252",target:"_blank",rel:"noopener noreferrer"},N={href:"https://zhuanlan.zhihu.com/p/149946545",target:"_blank",rel:"noopener noreferrer"},j={href:"https://juejin.cn/post/6844904122068680711",target:"_blank",rel:"noopener noreferrer"},H={href:"https://jayshao.com/cloudflare-nginx-ssl",target:"_blank",rel:"noopener noreferrer"},U={href:"https://github.com/vision5/ngx_devel_kit",target:"_blank",rel:"noopener noreferrer"},z={href:"https://github.com/topics/nginx-configuration",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/0xB4LINT/nginxconfig.io",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/vasilevich/nginxbeautifier",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/1connect/nginx-config-formatter",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/nginx-proxy/nginx-proxy",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/evertramos/nginx-proxy-automation",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/onlyGuo/nginx-gui",target:"_blank",rel:"noopener noreferrer"},X={href:"https://github.com/Naereen/Nginx-Fancyindex-Theme",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/aperezdc/ngx-fancyindex",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github.com/lebinh/ngxtop",target:"_blank",rel:"noopener noreferrer"},G={href:"https://github.com/acassen/keepalived",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/garenchan/keepalived-doc",target:"_blank",rel:"noopener noreferrer"},K={href:"https://zhuanlan.zhihu.com/p/148136167",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://b.sundayle.com/keepalived-nginx-dual-network",target:"_blank",rel:"noopener noreferrer"},W={href:"https://juejin.cn/post/6971589043352305678",target:"_blank",rel:"noopener noreferrer"},J={href:"https://www.cnblogs.com/myseries/p/11409895.html",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://github.com/ClusterLabs",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://github.com/corosync",target:"_blank",rel:"noopener noreferrer"},ee={href:"http://www.linux-ha.org",target:"_blank",rel:"noopener noreferrer"},ne={href:"http://www.linuxvirtualserver.org",target:"_blank",rel:"noopener noreferrer"},te={href:"https://www.zhihu.com/topic/19607051/newest",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://blog.51cto.com/u_11566825/2130705",target:"_blank",rel:"noopener noreferrer"},le={href:"https://blog.51cto.com/bbotte/1584925",target:"_blank",rel:"noopener noreferrer"},se=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动</span>
nignx <span class="token parameter variable">-c</span> /usr/local/nginx/conf/nginx.conf
nginx <span class="token parameter variable">-p</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">pwd</span><span class="token variable">\`</span></span>/<span class="token punctuation">..</span> <span class="token parameter variable">-c</span> conf/nginx.conf
<span class="token comment"># 快速关闭，可能不保存相关信息，并迅速终止web服务</span>
nginx <span class="token parameter variable">-s</span> stop
<span class="token function">kill</span> <span class="token parameter variable">-s</span> quit PID
<span class="token comment"># 平稳关闭，保存相关信息，有安排的结束web服务</span>
nginx <span class="token parameter variable">-s</span> quit
<span class="token comment"># 重新打开日志文件</span>
nginx <span class="token parameter variable">-s</span> reopen
<span class="token comment"># 重载配置</span>
nginx <span class="token parameter variable">-s</span> reload
<span class="token comment"># 验证配置</span>
nginx <span class="token parameter variable">-t</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>其他同类程序</strong></p>`,2),re={href:"https://github.com/apache/httpd",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://github.com/lighttpd",target:"_blank",rel:"noopener noreferrer"},de={href:"https://github.com/caddyserver/caddy",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://mritd.com/2021/01/07/lets-start-using-caddy2",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://github.com/traefik/traefik",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://github.com/haproxy/haproxy",target:"_blank",rel:"noopener noreferrer"},ve={href:"https://jaminzhang.github.io/lb/HAProxy-Get-Started",target:"_blank",rel:"noopener noreferrer"},he={href:"https://www.zhihu.com/question/34489042/answers/updated",target:"_blank",rel:"noopener noreferrer"},pe={href:"http://www.lgoon.com/detail/22",target:"_blank",rel:"noopener noreferrer"},me={href:"https://vimll.com/?p=886",target:"_blank",rel:"noopener noreferrer"},be={href:"https://segmentfault.com/a/1190000018838988",target:"_blank",rel:"noopener noreferrer"},ge={href:"https://github.com/envoyproxy/envoy",target:"_blank",rel:"noopener noreferrer"},_e={href:"https://github.com/projectcontour/contour",target:"_blank",rel:"noopener noreferrer"},fe={href:"https://github.com/datawire/ambassador",target:"_blank",rel:"noopener noreferrer"},xe={href:"https://github.com/projectcontour/gimbal",target:"_blank",rel:"noopener noreferrer"},ke={href:"https://github.com/zalando/skipper",target:"_blank",rel:"noopener noreferrer"},ye=e("h2",{id:"扩展模块插件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#扩展模块插件","aria-hidden":"true"},"#"),n(" 扩展模块插件")],-1),we={href:"https://www.nginx.com/resources/wiki/modules",target:"_blank",rel:"noopener noreferrer"},$e={href:"https://www.nginx.com/nginx-wiki/build/dirhtml/modules",target:"_blank",rel:"noopener noreferrer"},qe={href:"https://github.com/search?q=nginx-module",target:"_blank",rel:"noopener noreferrer"},Te={href:"https://github.com/topics/nginx-module",target:"_blank",rel:"noopener noreferrer"},Re={href:"https://github.com/openresty",target:"_blank",rel:"noopener noreferrer"},Se={href:"https://openresty.org/cn",target:"_blank",rel:"noopener noreferrer"},Ie={href:"https://honeypps.com/architect/introduction-of-openresty",target:"_blank",rel:"noopener noreferrer"},Ee={href:"https://segmentfault.com/t/openresty",target:"_blank",rel:"noopener noreferrer"},Pe={href:"https://www.nginx.com/resources/wiki/modules/lua",target:"_blank",rel:"noopener noreferrer"},Ne={href:"https://github.com/moonbingbing/openresty-best-practices",target:"_blank",rel:"noopener noreferrer"},je={href:"https://github.com/gityf/ngx_lua_thrift",target:"_blank",rel:"noopener noreferrer"},He={href:"https://zhuanlan.zhihu.com/p/67904411",target:"_blank",rel:"noopener noreferrer"},Ue={href:"https://www.bilibili.com/read/cv5038242",target:"_blank",rel:"noopener noreferrer"},ze={href:"https://github.com/openresty/lua-nginx-module#ngxrematch",target:"_blank",rel:"noopener noreferrer"},Ae={href:"https://www.jianshu.com/p/5167325edb09",target:"_blank",rel:"noopener noreferrer"},Le={href:"https://blog.csdn.net/force_eagle/article/details/51966333",target:"_blank",rel:"noopener noreferrer"},Ce={href:"https://github.com/iresty/nginx-lua-module-zh-wiki",target:"_blank",rel:"noopener noreferrer"},Oe={href:"https://github.com/loveshell/ngx_lua_waf",target:"_blank",rel:"noopener noreferrer"},Me={href:"https://github.com/ledgetech/lua-resty-http",target:"_blank",rel:"noopener noreferrer"},De={href:"https://github.com/3scale/cors-proxy",target:"_blank",rel:"noopener noreferrer"},Xe={href:"https://github.com/starjun/openstar",target:"_blank",rel:"noopener noreferrer"},Be={href:"https://github.com/zhouchangxun/ngx_healthcheck_module",target:"_blank",rel:"noopener noreferrer"},Fe={href:"https://github.com/vozlt/nginx-module-vts",target:"_blank",rel:"noopener noreferrer"},Ge={href:"https://gitee.com/tianhao26/openresty_forwarding_log",target:"_blank",rel:"noopener noreferrer"},Ve={href:"https://github.com/cuber/ngx_http_google_filter_module",target:"_blank",rel:"noopener noreferrer"},Ke={href:"https://plusls.github.io/linux/nginx/configure-nginx-google-mirror",target:"_blank",rel:"noopener noreferrer"},Ye={href:"https://github.com/arut/nginx-rtmp-module",target:"_blank",rel:"noopener noreferrer"},We=e("h2",{id:"编译安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#编译安装","aria-hidden":"true"},"#"),n(" 编译安装")],-1),Je={href:"https://juejin.cn/post/6868289389722763272",target:"_blank",rel:"noopener noreferrer"},Qe=r(`<p><strong>openssl: error while loading shared libraries: libssl.so.1.1: cannot open shared object file</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查找一下libssl.so.1.1的位置，然后链接到/usr/lib64/libssl.so.1.1即可。</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> libssl.so.1.1
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/lib64/libssl.so.1.1  /usr/lib64/libssl.so.1.1
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/lib64/libcrypto.so.1.1  /usr/lib64/libcrypto.so.1.1
openssl version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>libssl.so.1.1: cannot open shared object file: No such file or directory</strong></p><blockquote><p>Centos7 默认提供的 openssl 版本是 1.0.2，报错是因为openssl 库的安装位置不正确或未安装 1.1 以上版本的问题</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#从官网下载，去掉文件名，直接访问链接获取最新的包链接</span>
<span class="token comment"># wget https://www.openssl.org/source/openssl-1.1.1k.tar.gz</span>
<span class="token comment">#腾讯云提供的镜像，去掉文件名，直接访问链接获取最新的包链接</span>
<span class="token function">wget</span> https://mirrors.cloud.tencent.com/openssl/source/openssl-1.1.1k.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> openssl-1.1.1k.tar.gz
<span class="token builtin class-name">cd</span> openssl-1.1.1k
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc automake autoconf libtool <span class="token function">make</span>
./config shared <span class="token parameter variable">--openssldir</span><span class="token operator">=</span>/usr/local/openssl <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/openssl
<span class="token function">make</span> clean <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>openssl version</code> 如果看到版本号还是低版本</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;/usr/local/lib64/&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/ld.so.conf
ldconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>还是有问题执行以下方式</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 备份</span>
<span class="token function">mv</span> /usr/bin/openssl /usr/bin/openssl.old
<span class="token function">mv</span> /usr/lib/openssl /usr/lib/openssl.old
<span class="token comment"># 创建软链接</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/openssl/bin/openssl /usr/bin/openssl
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/openssl/include/openssl /usr/include/openssl
<span class="token comment"># 写配置</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/usr/local/openssl/lib&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/ld.so.conf
ldconfig <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h2><h3 id="语法规则" tabindex="-1"><a class="header-anchor" href="#语法规则" aria-hidden="true">#</a> 语法规则</h3><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>location [=|~|~*|^~] /uri/ {
        ····· 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修饰符含义</li></ul>`,13),Ze=e("thead",null,[e("tr",null,[e("th",null,"规则"),e("th",null,"说明")])],-1),en=e("tr",null,[e("td",null,[e("code",null,"!~*")]),e("td",null,"不区分大小写，但不匹配的正则")],-1),nn=e("tr",null,[e("td",null,[e("code",null,"!~")]),e("td",null,"区分大小写，但不匹配的正则")],-1),tn=e("tr",null,[e("td",null,[e("code",null,"/")]),e("td",null,"通用匹配，任何请求都会匹配到")],-1),ln=e("td",null,[e("code",null,"@")],-1),sn={href:"https://blog.sometimesnaive.org/article/72",target:"_blank",rel:"noopener noreferrer"},rn=e("code",null,"internal",-1),on=e("code",null,"error_page",-1),dn=e("code",null,"try_files",-1),an=e("tr",null,[e("td",null,[e("code",null,"^~")]),e("td",null,[n("uri以某个常规字符串开头，如请求为"),e("code",null,"/static/20%/aa"),n("，匹配规则"),e("code",null,"^~ /static/ /aa")])],-1),cn=e("tr",null,[e("td",null,[e("code",null,"~*")]),e("td",null,"不区分大小写的正则匹配")],-1),un=e("tr",null,[e("td",null,[e("code",null,"~")]),e("td",null,"区分大小写的正则匹配")],-1),vn=e("tr",null,[e("td",null,[e("code",null,"=")]),e("td",null,"精确匹配")],-1),hn=r(`<ul><li>当我们有多个<code>location</code>配置的情况下，其匹配顺序为</li></ul><ol><li>带有<code>=</code>的精确匹配优先</li><li>没有修饰符的精确匹配</li><li>正则表达式按照他们在配置文件中定义的顺序</li><li>带有<code>^~</code>修饰符的，开头匹配</li><li>带有<code>~</code>、<code>~*</code>修饰符的，如果正则表达式与<code>URI</code>匹配</li><li>没有修饰符的，如果指定字符串与<code>URI</code>开头匹配</li></ol><p><strong>示例</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 匹配网站根，通过域名访问网站首页比较频繁，使用这个会加速处理，官网如是说。
# 这里是直接转发给后端应用服务器了，也可以是一个静态首页
location = / {
   #匹配http://localhost/
}
location = /login {
   #匹配http://localhost/login
}
# 第二个必选规则是处理静态文件请求，这是 nginx 作为 http 服务器的强项
# 有两种配置模式，目录匹配或后缀匹配,任选其一或搭配使用
location ^~ /static/ {
   #匹配http://localhost/static/a.html，http://localhost/static/c.png
}
location ~ \\.(gif|jpg|png|js|css)$ {
   #匹配http://localhost/a.gif, http://localhost/b.jpg
}
location ~* \\.png$ {
   #http://localhost/a.PNG
}
location !~ \\.xhtml$ {
   #匹配http://localhost/a.XHTML
}
location !~* \\.xhtml$ {
   #匹配http://localhost/a.jsp
}
# 通用规则，用来转发动态请求到后端应用服务器
# 非静态文件请求就默认是动态请求
location / {
   #匹配http://localhost/register，http://localhost/category/id/1111
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内部调用" tabindex="-1"><a class="header-anchor" href="#内部调用" aria-hidden="true">#</a> 内部调用</h3><p><strong><code>internal</code></strong></p><blockquote><p><code>internal</code> 指令用于指定只允许来自本地 <code>Nginx</code> 的内部调用，来自外部的访问会直接返回 <code>404 not found</code> 状态。</p></blockquote><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># 定义一个内部调用location
location /internal/ {
    internal;
    # https://nginx.org/en/docs/http/ngx_http_proxy_module.html
    proxy_pass http://192.168.1.110:8091;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;
    # 修改响应头中的&quot;Location&quot;和&quot;Refresh&quot;字段
    # 解决https-&gt;nginx-&gt;http-&gt;tomcat重定向问题
    proxy_redirect ~^http://([^:]+)(:\\d+)?(.*)$ https://$1$3;
}
# 使用rewrite 内部重定向，其中 last 或 break 均可提供内部重定向。
location / {
    rewrite .* /internal/ last;
}
# 利用 Openresty 的 ngx.exec 模块
location / {
    access_by_lua_block {
        return ngx.exec(&quot;/internal/&quot;)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>location @name</code></strong></p><blockquote><p>命名location中不能再嵌套其它的命名location。</p></blockquote><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># 匹配静态文件
location ~ .*\\.(htm|html|js|css|jpg|png|gif|eot|svg|ttf|woff|woff2)$ {
    # 如果文件不存在
    #if (!-f $request_filename) {
        #content_by_lua_block {
                #ngx.exec(&quot;@pass&quot;);
        #}
    #}
    root /www/wwwroot/api;
    # 按顺序检查文件是否存在，返回第一个找到的文件。结尾的斜线表示为文件夹 -$uri/。
    # 如果所有的文件都找不到，会进行一个内部重定向到最后一个参数
    try_files $uri $uri/ @pass;
}
# 通用匹配
location / {
    # 或者使用\`ngx.exec\`主要实现的是内部的重定向
    # \`ngx.redirect\`是外部重定向
    content_by_lua_block {
        ngx.exec(&quot;@pass&quot;);
    }
}
location @pass {
    # https://nginx.org/en/docs/http/ngx_http_proxy_module.html
    proxy_pass http://192.168.1.110:8091;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;
    # 修改响应头中的&quot;Location&quot;和&quot;Refresh&quot;字段
    # 解决https-&gt;nginx-&gt;http-&gt;tomcat重定向问题
    proxy_redirect ~^http://([^:]+)(:\\d+)?(.*)$  https://$1$3;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="以后缀设置过期时间" tabindex="-1"><a class="header-anchor" href="#以后缀设置过期时间" aria-hidden="true">#</a> 以后缀设置过期时间</h3><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>location ~* \\.(js|css|jpg|jpeg|gif|png|swf)$ {
    if (-f $request_filename) {
        expires 1h;
        break;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="禁止访问某个目录" tabindex="-1"><a class="header-anchor" href="#禁止访问某个目录" aria-hidden="true">#</a> 禁止访问某个目录</h3><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>location ~* \\.(txt|doc)\${
    root /data/www/wwwroot/linuxtone/test;
    deny all;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rewrite语法" tabindex="-1"><a class="header-anchor" href="#rewrite语法" aria-hidden="true">#</a> rewrite语法</h2>`,16),pn={href:"https://blog.csdn.net/weixin_40792878/article/details/83316519",target:"_blank",rel:"noopener noreferrer"},mn=r(`<blockquote><p>该指令通过正则表达式的使用来改变URI.可以同时存在一个或者多个指令，按照顺序一次对URL进行匹配和处理。</p></blockquote><blockquote><p>该指令可以在<code>server</code>块或者<code>location</code>块中配置</p></blockquote><ul><li>语法：<code>rewrite regex replacement [flag];</code><ul><li><code>rewrite</code>是实现URL重定向的重要指令。</li><li><code>regex</code>用来匹配URI的正则表达式；</li><li><code>replacement</code>匹配成功后用来替换URI中被截取内容的字符串，默认情况如果该字符串包含“http://”、&quot;https://&quot;开头，则不会继续向下对URI进行其他处理。直接返回重写的URI给客户端</li><li><code>flag</code>用来设置rewrite对URI的处理行为,包含如下数据：</li></ul></li></ul><table><thead><tr><th>标记符号</th><th>说明</th></tr></thead><tbody><tr><td>last</td><td>终止在本location块中处理接收到的URI，并将此处重写的URI作为新的URI使用其他location进行处理。（只是终止当前location的处理）</td></tr><tr><td>break</td><td>将此处重写的URI作为一个新的URI在当前location中继续执行，并不会将新的URI转向其他location。</td></tr><tr><td>redirect</td><td>将重写后的URI返回个客户端，状态码是302，表明临时重定向，主要用在replacement字符串不以“http://”，“ https://”或“ $scheme” 开头；</td></tr><tr><td>permanent</td><td>将重写的URI返回客户端，状态码为301,指明是永久重定向；</td></tr></tbody></table><p><strong>Redirect</strong></p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>rewrite ^(.*) http://example.com$1 redirect;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>防盗链</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location ~* \\.(gif|jpg|swf)$ {
    valid_referers none blocked start.igrow.cn sta.igrow.cn;
    if ($invalid_referer) {
        rewrite ^/ http://$host/logo.png;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="判断表达式" tabindex="-1"><a class="header-anchor" href="#判断表达式" aria-hidden="true">#</a> 判断表达式</h2><table><thead><tr><th>表达式</th><th>说明</th></tr></thead><tbody><tr><td><code>-d</code> 和 <code>!-d</code></td><td>用来判断是否存在目录</td></tr><tr><td><code>-e</code> 和 <code>!-e</code></td><td>用来判断是否存在文件或目录</td></tr><tr><td><code>-f</code> 和 <code>!-f</code></td><td>用来判断是否存在文件</td></tr><tr><td><code>-x</code> 和 <code>!-x</code></td><td>用来判断文件是否可执行</td></tr></tbody></table><h2 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量" aria-hidden="true">#</a> 全局变量</h2><p><strong>常见变量</strong></p><table><thead><tr><th>变量</th><th>作用</th></tr></thead><tbody><tr><td><code>$arg_名称</code></td><td>URL 中某个具体参数的值</td></tr><tr><td><code>$args</code></td><td>这个变量等于请求行中(GET请求)的参数，同$query_string</td></tr><tr><td><code>$body_bytes_sent</code></td><td>传输给客户端的字节数，响应头不计算在内；这个变量和Apache的mod_log_config模块中的&quot;%B&quot;参数保持兼容</td></tr><tr><td><code>$bytes_sent</code></td><td>传输给客户端的字节数</td></tr><tr><td><code>$content_length</code></td><td>HTTP 请求中标识包体长度的Content-Length头部的值，头部没有这个则为空</td></tr><tr><td><code>$content_type</code></td><td>标识请求包体类型的Content-Type 头部的值</td></tr><tr><td><code>$cookie_名称</code></td><td>客户端请求Header头中的cookie变量，前缀&quot;$cookie_&quot;加上cookie名称的变量，该变量的值即为cookie名称的值</td></tr><tr><td><code>$document_root</code></td><td>当前请求在root指令中指定的值。</td></tr><tr><td><code>$document_uri</code></td><td>与uri完全相同</td></tr><tr><td><code>$host</code></td><td>请求主机头字段，否则为服务器名称。</td></tr><tr><td><code>$http_cookie</code></td><td>客户端cookie信息</td></tr><tr><td><code>$http_host</code></td><td>请求地址，即浏览器中你输入的地址（IP或域名）</td></tr><tr><td><code>$http_referer</code></td><td>url跳转来源,用来记录从那个页面链接访问过来的</td></tr><tr><td><code>$http_user_agent</code></td><td>客户端agent信息</td></tr><tr><td><code>$http_x_forwarded_for</code></td><td>当前端有代理服务器时，设置web节点记录客户端地址的配置，此参数生效的前提是代理服务器也要进行相关的x_forwarded_for设置</td></tr><tr><td><code>$http_名称</code></td><td>匹配任意请求头字段；变量名中的后半部分名称可以替换成任意请求头字段，如在配置文件中需要获取http请求头：&quot;Accept-Language&quot;，$http_accept_language即可</td></tr><tr><td><code>$https</code></td><td>如果开启了SSL安全模式，值为&quot;on&quot;，否则为空字符串。</td></tr><tr><td><code>$is_args</code></td><td>如果已经设置$args，则该变量的值为&quot;？&quot;，否则为&quot;&quot;。</td></tr><tr><td><code>$limit_rate</code></td><td>这个变量可以限制连接速率。</td></tr><tr><td><code>$pipe</code></td><td>如果请求来自管道通信，值为&quot;p&quot;，否则为&quot;.&quot;</td></tr><tr><td><code>$query_string</code></td><td>与args变量完全相同</td></tr><tr><td><code>$realpath_root</code></td><td>当前请求的文档根目录或别名的真实路径，会将所有符号连接转换为真实路径</td></tr><tr><td><code>$remote_user</code></td><td>有HTTP Basic Authentication 协议传入的用户名，已经经过Auth Basic Module验证的用户名。</td></tr><tr><td><code>$request_body_file</code></td><td>客户端请求主体信息的临时文件名。</td></tr><tr><td><code>$request_body</code></td><td>客户端的请求主体：此变量可在location中使用，将请求主体通过proxy_pass，fastcgi_pass，uwsgi_pass和scgi_pass传递给下一级的代理服务器</td></tr><tr><td><code>$request_filename</code></td><td>当前请求的文件路径，由root或alias指令与URI请求生成。</td></tr><tr><td><code>$request_length</code></td><td>所有请求内容的大小，包括请求行，头部，包体等</td></tr><tr><td><code>$request_method</code></td><td>客户端请求的动作，通常为GET或POST。</td></tr><tr><td><code>$request_uri</code></td><td>包含请求参数的原始URI，不包含主机名，如：&quot;/?dir=DeveloperTool&quot;。</td></tr><tr><td><code>$request</code></td><td>原始的url请求，含有方法和协议版本</td></tr><tr><td><code>$scheme</code></td><td>HTTP协议 HTTP 或者 HTTPS</td></tr><tr><td><code>$sent_http_名称</code></td><td>可以设置任意http响应头字段；变量名中的后半部分名称可以替换成任意响应头字段，如需要设置响应头Content-length，$sent_http_content_length即可</td></tr><tr><td><code>$status</code></td><td>HTTP响应代码</td></tr><tr><td><code>$uri</code></td><td>请求的URI，不包含主机名，不包含?后的参数</td></tr></tbody></table><blockquote><p><code>$request_body_file</code> 将客户端请求主体保存在临时文件中。文件处理结束后，此文件需删除。如果需要执意开启此功能， 需要设置<code>client_body_in_file_only</code>。如果将次文件传递给后端的代理服务器，需要禁用<code>request body</code>， 即设置<code>proxy_pass_request_body off</code>，<code>fastcgi_pass_request_body off</code>， <code>uwsgi_pass_request_body off</code>，<code>scgi_pass_request_body off</code></p></blockquote><p><strong>TCP相关变量</strong></p><table><thead><tr><th>变量</th><th>作用</th></tr></thead><tbody><tr><td><code>$binary_remote_addr</code></td><td>客户端地质的整型格式，对于IPv4是4字节</td></tr><tr><td><code>$connection_requests</code></td><td>当前连接上执行过的请求数，对keepalive 有意义</td></tr><tr><td><code>$connection</code></td><td>递增的连接序号</td></tr><tr><td><code>$proxy_protocol_addr</code></td><td>若使用了proxy_protocol 协议则返回协议中的地址</td></tr><tr><td><code>$proxy_protocol_port</code></td><td>若使用了proxy_protocol 协议则返回协议中的端口</td></tr><tr><td><code>$remote_addr</code></td><td>客户端地址</td></tr><tr><td><code>$remote_port</code></td><td>客户端端口</td></tr><tr><td><code>$server_addr</code></td><td>服务器端地址(本端地址)，在完成一次系统调用后可以确定这个值。</td></tr><tr><td><code>$server_port</code></td><td>请求到达服务器的端口号。</td></tr><tr><td><code>$server_protocol</code></td><td>请求使用的协议，通常是HTTP/1.0或HTTP/1.1。</td></tr><tr><td><code>$TCP_INFO</code></td><td>tcp内核层参数（$tcpinfo_rtt,$tcpinfo_rttvar,$tcpinfo_snd_cwnd,$tcpinfo_rcv_space）</td></tr></tbody></table><p><strong>处理请求过程中产生的变量</strong></p><table><thead><tr><th>变量</th><th>作用</th></tr></thead><tbody><tr><td><code>$request_completion</code></td><td>若请求处理完则返回OK，否则为空</td></tr><tr><td><code>$request_id</code></td><td>以16禁止输出的请求标识id，随即生成</td></tr><tr><td><code>$request_time</code></td><td>请求处理到现在的耗时</td></tr><tr><td><code>$server_name</code></td><td>匹配上的请求server_name</td></tr></tbody></table><p><strong>系统变量</strong></p><table><thead><tr><th>变量</th><th>作用</th></tr></thead><tbody><tr><td><code>$hostname</code></td><td>与系统上输出hostname 一致</td></tr><tr><td><code>$pid</code></td><td>所属worker进程的id</td></tr><tr><td><code>$time_local</code></td><td>以本地时间的标准输出</td></tr><tr><td><code>$time_iso8601</code></td><td>服务器时间的ISO 8610格式</td></tr><tr><td><code>$msec</code></td><td>当前的Unix时间戳</td></tr><tr><td><code>$nginx_version</code></td><td>nginx版本</td></tr></tbody></table><h2 id="判断user-agent" tabindex="-1"><a class="header-anchor" href="#判断user-agent" aria-hidden="true">#</a> 判断user_agent</h2><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># 设置变量
set $mobile_user_agent &quot;(MIDP)|(WAP)|(UP.Browser)|(Smartphone)
|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)
|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)
|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)
|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)
|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)
|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)
|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)
|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)
|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)
|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)&quot;;

# 判断是否为移动端访问
if ( $http_user_agent ~ &quot;$mobile_user_agent&quot; ) {
    # 重写URI作为一个新的URI在当前location中继续执行。
    # 目的是在if块中proxy_pass不能带URI
    rewrite ^ /URI参数$1 break;
    proxy_pass https://127.0.0.1;
    #proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># cloudflare 默认会在header里面加上’HTTP_CF_IPCOUNTRY’
# 禁止某些国家, user agent 的访问，配置在http（全局）
map $http_cf_ipcountry $allow {
    default yes;
    US no;
    CA no;
    UK no;
    AU no;
}
# 在server或location中配置
if ($allow = no) {
    return 403;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="proxy-pass指令" tabindex="-1"><a class="header-anchor" href="#proxy-pass指令" aria-hidden="true">#</a> proxy_pass指令</h2><blockquote><p>nginx无法在<code>proxy_pass</code>指令中处理所需的URI部分，因为位于指定的位置（因此是错误消息）。 这是因为nginx是以模块化的方式构建的，每个配置块都是由各个模块在各个阶段读取的。</p></blockquote><ul><li><code>proxy_pass</code>在以下情况下，指令中不能有URI ： <ul><li>正则表达式位置</li><li>命名的地点</li><li>if 块</li></ul></li></ul><blockquote><p>解决方案可见<a href="#%E5%88%A4%E6%96%ADuser-agent">判断<code>user_agent</code></a></p></blockquote><ul><li><code>proxy_set_header</code> 设置请求头信息给上游服务器</li><li><code>add_header</code> 设置响应头信息给浏览器</li></ul><h2 id="日志切割" tabindex="-1"><a class="header-anchor" href="#日志切割" aria-hidden="true">#</a> 日志切割</h2><blockquote><p>在<code>nginx.conf</code>中配置<code>log_format</code>（可以配置在<code>server</code>中），含义是配置了一个名为<code>main</code>的日志格式化的规则，应用在了<code>access_log</code>的日志上</p></blockquote><p><strong>使用到<code>timeiso8601</code>内嵌变量来获取时间配置日志循环</strong></p>`,31),bn={href:"https://github.com/jingsam/jingsam.github.io/blob/source/source/_posts/2019-01-15-nginx-access-log.md",target:"_blank",rel:"noopener noreferrer"},gn=r(`<div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># 可能出现if条件不成立的情况，推荐在http块中使用map
if ($time_iso8601 ~ &quot;^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2})&quot;) {
    set $year $1;
    set $month $2;
    set $day $3;
    set $hour $4;
    set $minutes $5;
    set $seconds $6;
}
access_log logs/$year-$month-$day-$hour$minutes$seconds-access.log main;

# Perl语法
if ($time_iso8601 ~ &quot;^(?&lt;year&gt;\\d{4})-(?&lt;month&gt;\\d{2})-(?&lt;day&gt;\\d{2})&quot;) {}
access_log logs/$year-$month-$day-access.log main;

# http块中不允许使用if，使用map替代
map $time_iso8601 $logdate {
    &#39;~^(?&lt;ymd&gt;\\d{4}-\\d{2}-\\d{2}-\\d{6})&#39;   $ymd;
    default                               &#39;nodate&#39;;
}
access_log logs/access_\${logdate}.log;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>日志归档程序logrotate</strong></p>`,2),_n={href:"https://github.com/fordmason/cronolog",target:"_blank",rel:"noopener noreferrer"},fn={href:"https://github.com/logrotate/logrotate",target:"_blank",rel:"noopener noreferrer"},xn=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/logrotate.d/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><code>kill -USR1 cat /usr/local/nginx/logs/nginx.pid</code> 向nginx主进程发送USR1信号用于重新读取日志文件</p></blockquote><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>/home/nginx/logs/*.log { # 目录下所有以.log结尾的文件
    daily # 按天切割
    #dateformat %Y%m%d # 切割后文件后缀，不能使用log，否则会使文件进行继续切割
    #extension .log # 切割文件后缀
    rotate 7 # 保留天数
    #create 0640 root root   # 切割后日志权限
    missingok
    dateext
    notifempty
    sharedscripts
    prerotate
        if [ -d /etc/logrotate.d/nginx ]; then \\  # 判断切割文件
            run-parts /etc/logrotate.d/nginx; \\
        fi \\
    endscript
    postrotate
        [ -e /usr/local/nginx/logs/nginx.pid ] &amp;&amp; kill -USR1 \`cat /home/nginx/logs/nginx.pid\`
    endscript
    postrotate
        [ ! -f /var/nginx.pid ] || kill -USR1 \`cat /home/nginx/logs/nginx.pid\`
    endscript
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主配置" tabindex="-1"><a class="header-anchor" href="#主配置" aria-hidden="true">#</a> 主配置</h2>`,4),kn={href:"https://blog.csdn.net/DeliaPu/article/details/108647180",target:"_blank",rel:"noopener noreferrer"},yn={href:"https://www.cnblogs.com/wxxjianchi/p/13582252.html",target:"_blank",rel:"noopener noreferrer"},wn=r(`<div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>
user www www;
worker_processes auto;
error_log /logs/nginx_error.log crit;
pid /logs/nginx.pid;
worker_rlimit_nofile 51200;
events {
    use epoll;
    worker_connections 51200;
    multi_accept on;
}
http {
    # 扩展名与文件类型映射表
    include mime.types;
    #include luawaf.conf;
    include proxy.conf;
    include /vhost/*.conf;
    # 默认类型
    default_type application/octet-stream;
    server_names_hash_bucket_size 512;
    # 设置请求缓冲
    client_header_buffer_size 32k;
    large_client_header_buffers 4 32k;
    client_max_body_size 500m;
    # 开启高效文件传输模式，sendfile指令指定nginx是否调用sendfile函数来输出文件，对于普通应用设为 on，
    # 如果用来进行下载等应用磁盘 IO重负载应用，可设置为off，以平衡磁盘与网络I/O处理速度，
    # 降低系统的负载。注意：如果图片显示不正常把这个改成off。
    sendfile on;
    tcp_nopush on;
    # 设置连接超时时间，单位是秒
    keepalive_timeout 60;
    tcp_nodelay on;
    fastcgi_connect_timeout 300;
    fastcgi_send_timeout 300;
    fastcgi_read_timeout 300;
    fastcgi_buffer_size 64k;
    fastcgi_buffers 4 64k;
    fastcgi_busy_buffers_size 128k;
    fastcgi_temp_file_write_size 256k;
    fastcgi_intercept_errors on;
    # 开启gzip压缩
    gzip on;
    gzip_min_length 1k;
    gzip_buffers 4 16k;
    gzip_http_version 1.1;
    gzip_comp_level 2;
    gzip_types text/plain application/javascript application/x-javascript text/javascript text/css application/xml;
    gzip_vary on;
    gzip_proxied expired no-cache no-store private auth;
    gzip_disable &quot;MSIE [1-6]\\.&quot;;
    limit_conn_zone $binary_remote_addr zone=perip:10m;
    limit_conn_zone $server_name zone=perserver:10m;
    server_tokens off;
    access_log off;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动静分离配置" tabindex="-1"><a class="header-anchor" href="#动静分离配置" aria-hidden="true">#</a> 动静分离配置</h2><p><strong>静态文件在本地</strong></p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>server {
    listen 80;
    listen 443 ssl http2;
    server_name www.woetu.com woetu.com;
    index index.html index.htm default.htm default.html;
    root html;
    # SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则
    #error_page 404/404.html;
    # HTTP_TO_HTTPS_START
    if ($server_port !~ 443) {
        rewrite ^(/.*)$ https://$host$1 permanent;
    }
    # HTTP_TO_HTTPS_END
    ssl_certificate /etc/letsencrypt/live/www/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/www/privkey.pem;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    error_page 497 https://$host$request_uri;
    # SSL-END
    # ERROR-PAGE-START  错误页配置，可以注释、删除或修改
    error_page 404 /404.html;
    error_page 502 /502.html;
    # ERROR-PAGE-END
    # PROXY-START/
    # 配置首页，这里必须要有一个=号
    location =/ {
        index index.html index.htm;
    }
    # 拦截静态文件后缀
    location ~ .*\\.(htm|html|js|css|jpg|png|gif|eot|svg|ttf|woff|woff2)$ {
        # 配置静态资源地址
        root /home/html/index;
    }
    # 拦截静态文件后缀
    #location ~ \\.(htm|html|js|css|jpg|png|gif|eot|svg|ttf|woff|woff2)$ {
    # 配置静态资源地址
    #        root /home/html/index;
    #}
    # 动态请求转发
    location ~.*$ {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;
        # 解决https-&gt;nginx-&gt;http-&gt;tomcat重定向问题
        proxy_redirect ~^http://([^:]+)(:\\d+)?(.*)$ https://$1$3;
    }
    # PROXY-END/
    # 禁止访问的文件或目录
    location ~ ^/(\\.user.ini|\\.htaccess|\\.git|\\.svn|\\.project|LICENSE|README.md) {
        return 404;
    }
    # 一键申请SSL证书验证目录相关设置
    location ~ \\.well-known {
        allow all;
    }
    access_log /logs/wwwlog;
    error_log /logs/wwwlog;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>静态文件在镜像存储</strong></p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>#PROXY-START/
location = / {
    #rewrite (.*) $1index.html;
    index /index.html;
}
# 拦截静态文件后缀
location ~ .*\\.(htm|html|js|css|jpg|png|gif|eot|svg|ttf|woff|woff2)$|/static/ {
    # 配置静态资源地址
    #root ./vhost/html;
	root &quot;/index&quot;;
	# 将此处重写的URI作为一个新的URI在当前location中继续执行，并不会将新的URI转向其他location
	rewrite ^(.*)$ /index/$1 break;
	
	proxy_pass https://test.cos.ap-hongkong.myqcloud.com;
    #proxy_set_header Host $host;
	proxy_set_header Host test.cos.ap-hongkong.myqcloud.com;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;
    
    add_header X-Cache $upstream_cache_status;
    
    #Set Nginx Cache
    add_header Cache-Control no-cache;
}
location / {
    proxy_pass http://127.0.0.1:8081;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;
    
    add_header X-Cache $upstream_cache_status;
    
    #Set Nginx Cache
    add_header Cache-Control no-cache;
    #expires 12h;
}

#PROXY-END/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function $n(qn,Tn){const l=o("router-link"),i=o("ExternalLinkIcon");return a(),c("div",null,[v,e("nav",h,[e("ul",null,[e("li",null,[t(l,{to:"#flag"},{default:s(()=>[n("Flag")]),_:1})]),e("li",null,[t(l,{to:"#扩展模块插件"},{default:s(()=>[n("扩展模块插件")]),_:1})]),e("li",null,[t(l,{to:"#编译安装"},{default:s(()=>[n("编译安装")]),_:1})]),e("li",null,[t(l,{to:"#location"},{default:s(()=>[n("location")]),_:1}),e("ul",null,[e("li",null,[t(l,{to:"#语法规则"},{default:s(()=>[n("语法规则")]),_:1})]),e("li",null,[t(l,{to:"#内部调用"},{default:s(()=>[n("内部调用")]),_:1})]),e("li",null,[t(l,{to:"#以后缀设置过期时间"},{default:s(()=>[n("以后缀设置过期时间")]),_:1})]),e("li",null,[t(l,{to:"#禁止访问某个目录"},{default:s(()=>[n("禁止访问某个目录")]),_:1})])])]),e("li",null,[t(l,{to:"#rewrite语法"},{default:s(()=>[n("rewrite语法")]),_:1})]),e("li",null,[t(l,{to:"#判断表达式"},{default:s(()=>[n("判断表达式")]),_:1})]),e("li",null,[t(l,{to:"#全局变量"},{default:s(()=>[n("全局变量")]),_:1})]),e("li",null,[t(l,{to:"#判断user-agent"},{default:s(()=>[n("判断user_agent")]),_:1})]),e("li",null,[t(l,{to:"#proxy-pass指令"},{default:s(()=>[n("proxy_pass指令")]),_:1})]),e("li",null,[t(l,{to:"#日志切割"},{default:s(()=>[n("日志切割")]),_:1})]),e("li",null,[t(l,{to:"#主配置"},{default:s(()=>[n("主配置")]),_:1})]),e("li",null,[t(l,{to:"#动静分离配置"},{default:s(()=>[n("动静分离配置")]),_:1})])])]),p,e("ul",null,[e("li",null,[e("a",m,[n("https://github.com/nginx"),t(i)]),e("ul",null,[e("li",null,[e("a",b,[n("https://nginx.org/en/download.html"),t(i)])]),e("li",null,[e("a",g,[n("https://nginx.org/en/docs"),t(i)])])])]),e("li",null,[e("a",_,[n("https://github.com/nginxinc"),t(i)])]),e("li",null,[e("a",f,[n("https://github.com/h5bp/server-configs-nginx"),t(i)])]),e("li",null,[e("a",x,[n("https://github.com/digitalocean/nginxconfig.io"),t(i)]),e("ul",null,[e("li",null,[e("a",k,[n("https://www.digitalocean.com/community/tools/nginx"),t(i)])])])]),e("li",null,[e("a",y,[n("https://github.com/alibaba/tengine"),t(i)])])]),e("ul",null,[e("li",null,[e("a",w,[n("https://github.com/hfpp2012/nginx-tutorial"),t(i)])]),e("li",null,[n("Nginx 入门指南 "),e("a",$,[n("https://github.com/xuexb/learn-nginx"),t(i)])]),e("li",null,[e("a",q,[n("标签: Nginx | 原少子杨"),t(i)])]),e("li",null,[e("a",T,[n("Nginx HTTP核心模块指令和内置变量中文说明"),t(i)])]),e("li",null,[e("a",R,[n("nginx 变量使用"),t(i)])]),e("li",null,[e("a",S,[n("Nginx 从入门到实践，万字详解"),t(i)])]),e("li",null,[e("a",I,[n("Nginx从入门到实践"),t(i)])]),e("li",null,[e("a",E,[n("Nginx流控"),t(i)])]),e("li",null,[e("a",P,[n("Nginx 高性能优化配置实战总结"),t(i)])]),e("li",null,[e("a",N,[n("nginx 优化的六点方法"),t(i)])]),e("li",null,[e("a",j,[n("Nginx-性能优化"),t(i)])]),e("li",null,[e("a",H,[n("博客使用Cloudflare和Nginx的相关配置"),t(i)])])]),e("ul",null,[e("li",null,[n("开发工具包 "),e("a",U,[n("https://github.com/vision5/ngx_devel_kit"),t(i)])]),e("li",null,[e("a",z,[n("https://github.com/topics/nginx-configuration"),t(i)])]),e("li",null,[n("配置生成 "),e("a",A,[n("https://github.com/0xB4LINT/nginxconfig.io"),t(i)])]),e("li",null,[n("配置格式化 "),e("a",L,[n("https://github.com/vasilevich/nginxbeautifier"),t(i)])]),e("li",null,[e("a",C,[n("https://github.com/slomkowski/nginx-config-formatter"),t(i)])]),e("li",null,[e("a",O,[n("https://github.com/nginx-proxy/nginx-proxy"),t(i)])]),e("li",null,[e("a",M,[n("https://github.com/evertramos/nginx-proxy-automation"),t(i)])]),e("li",null,[e("a",D,[n("https://github.com/onlyGuo/nginx-gui"),t(i)])]),e("li",null,[n("文件服务器 "),e("a",X,[n("https://github.com/Naereen/Nginx-Fancyindex-Theme"),t(i)])]),e("li",null,[e("a",B,[n("https://github.com/aperezdc/ngx-fancyindex"),t(i)])]),e("li",null,[n("监控请求 "),e("a",F,[n("https://github.com/lebinh/ngxtop"),t(i)])]),e("li",null,[n("IP漂移 "),e("a",G,[n("https://github.com/acassen/keepalived"),t(i)]),e("ul",null,[e("li",null,[e("a",V,[n("https://github.com/garenchan/keepalived-doc"),t(i)])]),e("li",null,[e("a",K,[n("高可用实践——Keepalived踩坑记录"),t(i)])]),e("li",null,[e("a",Y,[n("Keepalived Nginx双网络(内外网)故障非同步漂移双主模式"),t(i)])]),e("li",null,[e("a",W,[n("通过keepalived来实现高可用服务"),t(i)])]),e("li",null,[e("a",J,[n("虚拟IP技术 ip地址漂移技术"),t(i)])])])]),e("li",null,[n("高可用集群 "),e("a",Q,[n("https://github.com/ClusterLabs"),t(i)]),e("ul",null,[e("li",null,[e("a",Z,[n("https://github.com/corosync"),t(i)])])])]),e("li",null,[n("Heartbeat "),e("a",ee,[n("http://www.linux-ha.org"),t(i)])]),e("li",null,[n("LVS "),e("a",ne,[n("http://www.linuxvirtualserver.org"),t(i)]),e("ul",null,[e("li",null,[e("a",te,[n("Linux Virtual Server"),t(i)])]),e("li",null,[e("a",ie,[n("LVS nat模式和DR模式简介"),t(i)])]),e("li",null,[e("a",le,[n("VIP和RIP不同网段的LVS和keepalived高可用"),t(i)])])])])]),se,e("ul",null,[e("li",null,[e("a",re,[n("https://github.com/apache/httpd"),t(i)])]),e("li",null,[e("a",oe,[n("https://github.com/lighttpd"),t(i)])]),e("li",null,[e("a",de,[n("https://github.com/caddyserver/caddy"),t(i)]),e("ul",null,[e("li",null,[e("a",ae,[n("Caddy2 简明教程 - bleem"),t(i)])])])]),e("li",null,[e("a",ce,[n("https://github.com/traefik/traefik"),t(i)])]),e("li",null,[e("a",ue,[n("https://github.com/haproxy/haproxy"),t(i)]),e("ul",null,[e("li",null,[n("HAProxy入门 "),e("a",ve,[n("https://jaminzhang.github.io/lb/HAProxy-Get-Started"),t(i)])])]),e("ol",null,[e("li",null,[e("a",he,[n("Nginx和HAProxy对比"),t(i)])]),e("li",null,[e("a",pe,[n("HAProxy Nginx LVS 对比"),t(i)])]),e("li",null,[e("a",me,[n("负载均衡器对比(LVS、Nginx、Haproxy)"),t(i)])]),e("li",null,[e("a",be,[n("各大API网关性能比较"),t(i)])])])]),e("li",null,[e("a",ge,[n("https://github.com/envoyproxy/envoy"),t(i)]),e("ul",null,[e("li",null,[e("a",_e,[n("https://github.com/projectcontour/contour"),t(i)])]),e("li",null,[e("a",fe,[n("https://github.com/datawire/ambassador"),t(i)])]),e("li",null,[e("a",xe,[n("https://github.com/projectcontour/gimbal"),t(i)])])])]),e("li",null,[e("a",ke,[n("https://github.com/zalando/skipper"),t(i)])])]),ye,e("ul",null,[e("li",null,[e("a",we,[n("https://www.nginx.com/resources/wiki/modules"),t(i)])]),e("li",null,[e("a",$e,[n("https://www.nginx.com/nginx-wiki/build/dirhtml/modules"),t(i)])]),e("li",null,[e("a",qe,[n("https://github.com/search?q=nginx-module"),t(i)])]),e("li",null,[e("a",Te,[n("https://github.com/topics/nginx-module"),t(i)])])]),e("ul",null,[e("li",null,[n("Lua多种扩展模块 "),e("a",Re,[n("https://github.com/openresty"),t(i)]),e("ul",null,[e("li",null,[e("a",Se,[n("https://openresty.org/cn"),t(i)])]),e("li",null,[e("a",Ie,[n("OpenResty 概要及原理科普"),t(i)])]),e("li",null,[e("a",Ee,[n("openresty 的动态 - SegmentFault 思否"),t(i)])]),e("li",null,[e("a",Pe,[n("https://www.nginx.com/resources/wiki/modules/lua"),t(i)])]),e("li",null,[e("a",Ne,[n("https://github.com/moonbingbing/openresty-best-practices"),t(i)])]),e("li",null,[e("a",je,[n("https://github.com/gityf/ngx_lua_thrift"),t(i)])]),e("li",null,[e("a",He,[n("浅谈OpenResty中的body_filter_by_lua*"),t(i)])]),e("li",null,[e("a",Ue,[n("ngx.re模块和lua正则匹配的区别"),t(i)]),e("ul",null,[e("li",null,[e("a",ze,[n("https://github.com/openresty/lua-nginx-module#ngxrematch"),t(i)])])])]),e("li",null,[e("a",Ae,[n("Openresty+lua实现动态upstream"),t(i)])]),e("li",null,[e("a",Le,[n("NGINX 结合 lua 动态修改upstream"),t(i)])])])]),e("li",null,[e("a",Ce,[n("https://github.com/iresty/nginx-lua-module-zh-wiki"),t(i)])]),e("li",null,[e("a",Oe,[n("https://github.com/loveshell/ngx_lua_waf"),t(i)])]),e("li",null,[e("a",Me,[n("https://github.com/ledgetech/lua-resty-http"),t(i)])]),e("li",null,[e("a",De,[n("https://github.com/3scale/cors-proxy"),t(i)])]),e("li",null,[e("a",Xe,[n("https://github.com/starjun/openstar"),t(i)])]),e("li",null,[e("a",Be,[n("https://github.com/zhouchangxun/ngx_healthcheck_module"),t(i)])]),e("li",null,[e("a",Fe,[n("https://github.com/vozlt/nginx-module-vts"),t(i)])]),e("li",null,[e("a",Ge,[n("https://gitee.com/tianhao26/openresty_forwarding_log"),t(i)])]),e("li",null,[e("a",Ve,[n("https://github.com/cuber/ngx_http_google_filter_module"),t(i)]),e("ul",null,[e("li",null,[e("a",Ke,[n("Nginx 配置谷歌镜像站"),t(i)])])])]),e("li",null,[n("流媒体 "),e("a",Ye,[n("https://github.com/arut/nginx-rtmp-module"),t(i)])])]),We,e("ul",null,[e("li",null,[e("a",Je,[n("Nginx 核心模块与配置实践"),t(i)])])]),Qe,e("table",null,[Ze,e("tbody",null,[en,nn,tn,e("tr",null,[ln,e("td",null,[n("定义一个内部命名的匹配（"),e("a",sn,[n("等阶于"),rn,t(i)]),n("），适用于"),on,n(","),dn])]),an,cn,un,vn])]),hn,e("ul",null,[e("li",null,[e("a",pn,[n("https://blog.csdn.net/weixin_40792878/article/details/83316519"),t(i)])])]),mn,e("ul",null,[e("li",null,[e("a",bn,[n("简单搞定Nginx日志分割"),t(i)])])]),gn,e("ul",null,[e("li",null,[e("a",_n,[n("https://github.com/fordmason/cronolog"),t(i)])]),e("li",null,[e("a",fn,[n("https://github.com/logrotate/logrotate"),t(i)])])]),xn,e("ul",null,[e("li",null,[e("a",kn,[n("Nginx配置文件解析"),t(i)])]),e("li",null,[e("a",yn,[n("nginx - HowOldAreYou - 博客园"),t(i)])])]),wn])}const In=d(u,[["render",$n],["__file","Nginx.html.vue"]]);export{In as default};
