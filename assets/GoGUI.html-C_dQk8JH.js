import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as u,b as n,a,w as p,d as s,f as i}from"./app-BGG14fOW.js";const r={},k=n("h1",{id:"gogui",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gogui","aria-hidden":"true"},"#"),s(" GoGUI")],-1),d={class:"table-of-contents"},v=n("h2",{id:"flag",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#flag","aria-hidden":"true"},"#"),s(" Flag")],-1),m=n("blockquote",null,[n("p",null,[s("Golang调用windows下的dll动态库中的函数使用"),n("code",null,"syscall"),s("调用")])],-1),b={href:"https://github.com/lxn/walk",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/lxn/win",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/chzyer/readline",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/go-ole/go-ole",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/yusufpapurcu/wmi",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/akavel/rsrc",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/tc-hib/winres",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/tc-hib/go-winres",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/josephspurrier/goversioninfo",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/fyne-io/fyne",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/visualfc/atk",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/vugu/vugu",target:"_blank",rel:"noopener noreferrer"},A={href:"https://blog.csdn.net/hejingdong123/article/details/105070150",target:"_blank",rel:"noopener noreferrer"},W={href:"https://stackoverflow.com/questions/2818179/how-do-i-force-my-net-application-to-run-as-administrator",target:"_blank",rel:"noopener noreferrer"},C={href:"https://docs.microsoft.com/zh-cn/previous-versions/bb756929(v=msdn.10)",target:"_blank",rel:"noopener noreferrer"},L=n("h2",{id:"设置壁纸",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#设置壁纸","aria-hidden":"true"},"#"),s(" 设置壁纸")],-1),N={href:"https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-systemparametersinfoa",target:"_blank",rel:"noopener noreferrer"},T=i(`<ul><li>main.go</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;errors&quot;</span>
    <span class="token string">&quot;flag&quot;</span>
    <span class="token string">&quot;image/jpeg&quot;</span>
    <span class="token string">&quot;log&quot;</span>
    <span class="token string">&quot;os&quot;</span>
    <span class="token string">&quot;path/filepath&quot;</span>

    <span class="token string">&quot;github.com/golang/sys/windows/registry&quot;</span>
    <span class="token string">&quot;golang.org/x/image/bmp&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> WallpaperStyle <span class="token builtin">uint</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>wps WallpaperStyle<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> wallpaperStyles<span class="token punctuation">[</span>wps<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
    Fill    WallpaperStyle <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// 填充</span>
    Fit                           <span class="token comment">// 适应</span>
    Stretch                       <span class="token comment">// 拉伸</span>
    Tile                          <span class="token comment">// 平铺</span>
    Center                        <span class="token comment">// 居中</span>
    Cross                         <span class="token comment">// 跨区</span>

<span class="token punctuation">)</span>

<span class="token keyword">var</span> wallpaperStyles <span class="token operator">=</span> <span class="token keyword">map</span><span class="token punctuation">[</span>WallpaperStyle<span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
    <span class="token number">0</span><span class="token punctuation">:</span> <span class="token string">&quot;填充&quot;</span><span class="token punctuation">,</span>
    <span class="token number">1</span><span class="token punctuation">:</span> <span class="token string">&quot;适应&quot;</span><span class="token punctuation">,</span>
    <span class="token number">2</span><span class="token punctuation">:</span> <span class="token string">&quot;拉伸&quot;</span><span class="token punctuation">,</span>
    <span class="token number">3</span><span class="token punctuation">:</span> <span class="token string">&quot;平铺&quot;</span><span class="token punctuation">,</span>
    <span class="token number">4</span><span class="token punctuation">:</span> <span class="token string">&quot;居中&quot;</span><span class="token punctuation">,</span>
    <span class="token number">5</span><span class="token punctuation">:</span> <span class="token string">&quot;跨区&quot;</span><span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
    bgFile       <span class="token builtin">string</span>
    bgStyle      <span class="token builtin">int</span>
    sFile        <span class="token builtin">string</span>
    waitTime     <span class="token builtin">int</span>
    activeScreen <span class="token builtin">bool</span>
    passwd       <span class="token builtin">bool</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
    regist registry<span class="token punctuation">.</span>Key
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    flag<span class="token punctuation">.</span><span class="token function">StringVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>bgFile<span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;set bg file path.&quot;</span><span class="token punctuation">)</span>
    flag<span class="token punctuation">.</span><span class="token function">IntVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>bgStyle<span class="token punctuation">,</span> <span class="token string">&quot;style&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;set desktop WallpaperStyle&quot;</span><span class="token punctuation">)</span>

    flag<span class="token punctuation">.</span><span class="token function">BoolVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>activeScreen<span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&quot;set screen active.&quot;</span><span class="token punctuation">)</span>
    flag<span class="token punctuation">.</span><span class="token function">StringVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>sFile<span class="token punctuation">,</span> <span class="token string">&quot;s&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;set screen save file path.&quot;</span><span class="token punctuation">)</span>
    flag<span class="token punctuation">.</span><span class="token function">IntVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>waitTime<span class="token punctuation">,</span> <span class="token string">&quot;t&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;set screen save wait time.&quot;</span><span class="token punctuation">)</span>
    flag<span class="token punctuation">.</span><span class="token function">BoolVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>passwd<span class="token punctuation">,</span> <span class="token string">&quot;p&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&quot;sets whether the screen saver requires the user to enter a password to display the Windows desktop. &quot;</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> err <span class="token builtin">error</span>
    regist<span class="token punctuation">,</span> err <span class="token operator">=</span> registry<span class="token punctuation">.</span><span class="token function">OpenKey</span><span class="token punctuation">(</span>registry<span class="token punctuation">.</span>CURRENT_USER<span class="token punctuation">,</span> <span class="token string">\`Control Panel\\Desktop\`</span><span class="token punctuation">,</span> registry<span class="token punctuation">.</span>ALL_ACCESS<span class="token punctuation">)</span>
    <span class="token function">checkErr</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">defer</span> regist<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 设置桌面背景</span>
    <span class="token keyword">if</span> bgFile <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
        style <span class="token operator">:=</span> <span class="token function">WallpaperStyle</span><span class="token punctuation">(</span>bgStyle<span class="token punctuation">)</span>
        <span class="token keyword">if</span> bgStyle <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> bgStyle <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token punctuation">{</span>
            style <span class="token operator">=</span> Stretch
        <span class="token punctuation">}</span>
        <span class="token function">setDesktopWallpaper</span><span class="token punctuation">(</span>bgFile<span class="token punctuation">,</span> style<span class="token punctuation">)</span>
        log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;设置桌面背景和位置 --&gt; %s, %s\\n&quot;</span><span class="token punctuation">,</span> bgFile<span class="token punctuation">,</span> style<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    ok <span class="token operator">:=</span> <span class="token function">getScreenSaver</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;获取屏幕保护开关 --&gt; %t\\n&quot;</span><span class="token punctuation">,</span> ok<span class="token punctuation">)</span>
    <span class="token comment">// 关闭屏幕保护</span>
    <span class="token keyword">if</span> ok <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>activeScreen <span class="token punctuation">{</span>
        regist<span class="token punctuation">.</span><span class="token function">DeleteValue</span><span class="token punctuation">(</span><span class="token string">&quot;SCRNSAVE.EXE&quot;</span><span class="token punctuation">)</span>
        log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;关闭屏幕保护&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 设置屏幕保护</span>
    <span class="token keyword">if</span> sFile <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&amp;&amp;</span> activeScreen <span class="token punctuation">{</span>
        err <span class="token operator">=</span> regist<span class="token punctuation">.</span><span class="token function">SetStringValue</span><span class="token punctuation">(</span><span class="token string">&quot;SCRNSAVE.EXE&quot;</span><span class="token punctuation">,</span> sFile<span class="token punctuation">)</span>
        <span class="token function">checkErr</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token function">setScreenSaver</span><span class="token punctuation">(</span>SPI_SETSCREENSAVEACTIVE<span class="token punctuation">,</span> TRUE<span class="token punctuation">)</span>
        log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;设置屏幕保护 --&gt; %s\\n&quot;</span><span class="token punctuation">,</span> sFile<span class="token punctuation">)</span>
        ok <span class="token operator">=</span> <span class="token function">getScreenSaver</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> ok <span class="token punctuation">{</span>
        <span class="token comment">// 设置屏幕保护时间</span>
        <span class="token keyword">if</span> waitTime <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token function">setScreenSaver</span><span class="token punctuation">(</span>SPI_SETSCREENSAVETIMEOUT<span class="token punctuation">,</span> <span class="token function">uint32</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token operator">*</span>waitTime<span class="token punctuation">)</span><span class="token punctuation">)</span>
            log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;设置屏幕保护等待时间 --&gt; %d分钟\\n&quot;</span><span class="token punctuation">,</span> waitTime<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 设置屏幕保护 在恢复时使用密码</span>
        <span class="token keyword">var</span> <span class="token punctuation">(</span>
            passwdSwitch <span class="token builtin">string</span>
            passwdBool   <span class="token builtin">uint32</span>
        <span class="token punctuation">)</span>
        <span class="token keyword">if</span> passwd <span class="token punctuation">{</span>
            passwdSwitch <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span>
            passwdBool <span class="token operator">=</span> TRUE
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            passwdSwitch <span class="token operator">=</span> <span class="token string">&quot;0&quot;</span>
            passwdBool <span class="token operator">=</span> FALSE
        <span class="token punctuation">}</span>
        <span class="token comment">// XP / server 2003</span>
        <span class="token function">setRegistString</span><span class="token punctuation">(</span><span class="token string">&quot;ScreenSaverIsSecure&quot;</span><span class="token punctuation">,</span> passwdSwitch<span class="token punctuation">)</span>
        <span class="token comment">// vista or later</span>
        <span class="token keyword">if</span> <span class="token function">checkVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">setScreenSaver</span><span class="token punctuation">(</span>SPI_SETSCREENSAVESECURE<span class="token punctuation">,</span> passwdBool<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;设置屏幕保护恢复时是否使用密码 --&gt; %t\\n&quot;</span><span class="token punctuation">,</span> passwd<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">checkErr</span><span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// http://blog.csdn.net/kfysck/article/details/8153264</span>
<span class="token comment">// Check that the OS is Vista or later (Vista is v6.0).</span>
<span class="token keyword">func</span> <span class="token function">checkVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    version <span class="token operator">:=</span> <span class="token function">GetVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    major <span class="token operator">:=</span> version <span class="token operator">&amp;</span> <span class="token number">0xFF</span>
    <span class="token keyword">if</span> major <span class="token operator">&lt;</span> <span class="token number">6</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">// jpg转换为bmp</span>
<span class="token keyword">func</span> <span class="token function">ConvertedWallpaper</span><span class="token punctuation">(</span>bgfile <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>bgfile<span class="token punctuation">)</span>
    <span class="token function">checkErr</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    img<span class="token punctuation">,</span> err <span class="token operator">:=</span> jpeg<span class="token punctuation">.</span><span class="token function">Decode</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token comment">//解码</span>
    <span class="token function">checkErr</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>

    bmpPath <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">&quot;USERPROFILE&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">\`\\Local Settings\\Application Data\\Microsoft\\Wallpaper1.bmp\`</span>
    bmpfile<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>bmpPath<span class="token punctuation">)</span>
    <span class="token function">checkErr</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">defer</span> bmpfile<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    err <span class="token operator">=</span> bmp<span class="token punctuation">.</span><span class="token function">Encode</span><span class="token punctuation">(</span>bmpfile<span class="token punctuation">,</span> img<span class="token punctuation">)</span>
    <span class="token function">checkErr</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span> bmpPath
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">setDesktopWallpaper</span><span class="token punctuation">(</span>bgFile <span class="token builtin">string</span><span class="token punctuation">,</span> style WallpaperStyle<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    ext <span class="token operator">:=</span> filepath<span class="token punctuation">.</span><span class="token function">Ext</span><span class="token punctuation">(</span>bgFile<span class="token punctuation">)</span>
    <span class="token comment">// vista 以下的系统需要转换jpg为bmp（xp、2003）</span>
    <span class="token keyword">if</span> <span class="token operator">!</span><span class="token function">checkVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> ext <span class="token operator">!=</span> <span class="token string">&quot;.bmp&quot;</span> <span class="token punctuation">{</span>
        <span class="token function">setRegistString</span><span class="token punctuation">(</span><span class="token string">&quot;ConvertedWallpaper&quot;</span><span class="token punctuation">,</span> bgFile<span class="token punctuation">)</span>
        bgFile <span class="token operator">=</span> <span class="token function">ConvertedWallpaper</span><span class="token punctuation">(</span>bgFile<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 设置桌面背景</span>
    <span class="token function">setRegistString</span><span class="token punctuation">(</span><span class="token string">&quot;Wallpaper&quot;</span><span class="token punctuation">,</span> bgFile<span class="token punctuation">)</span>

    <span class="token comment">/* 设置壁纸风格和展开方式
    在Control Panel\\Desktop中的两个键值将被设置
    TileWallpaper
     0: 图片不被平铺
     1: 被平铺
    WallpaperStyle
     0:  0表示图片居中，1表示平铺
     2:  拉伸填充整个屏幕
     6:  拉伸适应屏幕并保持高度比
     10: 图片被调整大小裁剪适应屏幕保持纵横比
     22: 跨区
    */</span>
    <span class="token keyword">var</span> bgTileWallpaper<span class="token punctuation">,</span> bgWallpaperStyle <span class="token builtin">string</span>
    bgTileWallpaper <span class="token operator">=</span> <span class="token string">&quot;0&quot;</span>
    <span class="token keyword">switch</span> style <span class="token punctuation">{</span>
    <span class="token keyword">case</span> Fill<span class="token punctuation">:</span> <span class="token comment">// (Windows 7 or later)</span>
        bgWallpaperStyle <span class="token operator">=</span> <span class="token string">&quot;10&quot;</span>
    <span class="token keyword">case</span> Fit<span class="token punctuation">:</span> <span class="token comment">// (Windows 7 or later)</span>
        bgWallpaperStyle <span class="token operator">=</span> <span class="token string">&quot;6&quot;</span>
    <span class="token keyword">case</span> Stretch<span class="token punctuation">:</span>
        bgWallpaperStyle <span class="token operator">=</span> <span class="token string">&quot;2&quot;</span>
    <span class="token keyword">case</span> Tile<span class="token punctuation">:</span>
        bgTileWallpaper <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span>
        bgWallpaperStyle <span class="token operator">=</span> <span class="token string">&quot;0&quot;</span>
    <span class="token keyword">case</span> Center<span class="token punctuation">:</span>
        bgWallpaperStyle <span class="token operator">=</span> <span class="token string">&quot;0&quot;</span>
    <span class="token keyword">case</span> Cross<span class="token punctuation">:</span> <span class="token comment">// win10 or later</span>
        bgWallpaperStyle <span class="token operator">=</span> <span class="token string">&quot;22&quot;</span>
    <span class="token punctuation">}</span>

    <span class="token function">setRegistString</span><span class="token punctuation">(</span><span class="token string">&quot;WallpaperStyle&quot;</span><span class="token punctuation">,</span> bgWallpaperStyle<span class="token punctuation">)</span>
    <span class="token function">setRegistString</span><span class="token punctuation">(</span><span class="token string">&quot;TileWallpaper&quot;</span><span class="token punctuation">,</span> bgTileWallpaper<span class="token punctuation">)</span>

    ok <span class="token operator">:=</span> <span class="token function">SystemParametersInfo</span><span class="token punctuation">(</span>SPI_SETDESKWALLPAPER<span class="token punctuation">,</span> FALSE<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> SPIF_UPDATEINIFILE<span class="token operator">|</span>SPIF_SENDWININICHANGE<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
        <span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;Desktop background Settings fail.&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">setRegistString</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> value <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    err <span class="token operator">:=</span> regist<span class="token punctuation">.</span><span class="token function">SetStringValue</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token function">checkErr</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">setScreenSaver</span><span class="token punctuation">(</span>uiAction<span class="token punctuation">,</span> uiParam <span class="token builtin">uint32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ok <span class="token operator">:=</span> <span class="token function">SystemParametersInfo</span><span class="token punctuation">(</span>uiAction<span class="token punctuation">,</span> uiParam<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> SPIF_UPDATEINIFILE<span class="token operator">|</span>SPIF_SENDWININICHANGE<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;Screen saver Settings fail.&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getScreenSaver</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> regist<span class="token punctuation">.</span><span class="token function">GetStringValue</span><span class="token punctuation">(</span><span class="token string">&quot;SCRNSAVE.EXE&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>win.go</strong></p>`,3),F={href:"https://github.com/golang/go/wiki/WindowsDLLs",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/rainycape/dl",target:"_blank",rel:"noopener noreferrer"},R={href:"https://blog.csdn.net/u010853261/article/details/88312904",target:"_blank",rel:"noopener noreferrer"},x={href:"https://gitlab.com/gitlab-org/gitlab-runner/-/blob/main/vendor/golang.org/x/sys/windows/dll_windows.go",target:"_blank",rel:"noopener noreferrer"},G={href:"https://medium.com/@justen.walker/breaking-all-the-rules-using-go-to-call-windows-api-2cbfd8c79724",target:"_blank",rel:"noopener noreferrer"},D=i(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;syscall&quot;</span>
    <span class="token string">&quot;unsafe&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
    <span class="token comment">// 获取屏幕保护开关</span>
    SPI_GETSCREENSAVEACTIVE <span class="token operator">=</span> <span class="token number">0x0010</span>
    <span class="token comment">// 设置屏保开关</span>
    SPI_SETSCREENSAVEACTIVE <span class="token operator">=</span> <span class="token number">0x0011</span>
    <span class="token comment">// 设置屏保等待时间</span>
    SPI_SETSCREENSAVETIMEOUT <span class="token operator">=</span> <span class="token number">0x000F</span>
    <span class="token comment">// 设备屏保在恢复时显示屏幕</span>
    SPI_SETSCREENSAVESECURE <span class="token operator">=</span> <span class="token number">0x0077</span>

    <span class="token comment">// 设置桌面背景</span>
    SPI_SETDESKWALLPAPER <span class="token operator">=</span> <span class="token number">0x0014</span>

    <span class="token comment">// 将新的系统范围的参数设置写入用户配置文件。</span>
    SPIF_UPDATEINIFILE <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token comment">// 更新用户配置文件后广播WM_SETTINGCHANGE消息。</span>
    SPIF_SENDWININICHANGE <span class="token operator">=</span> <span class="token number">2</span>

    FALSE <span class="token operator">=</span> <span class="token number">0</span>
    TRUE  <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
    <span class="token comment">// Library</span>
    libuser32   <span class="token builtin">uintptr</span>
    libkernel32 <span class="token builtin">uintptr</span>

    <span class="token comment">// Functions</span>
    systemParametersInfo <span class="token builtin">uintptr</span>
    getVersion           <span class="token builtin">uintptr</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Library</span>
    libuser32 <span class="token operator">=</span> <span class="token function">MustLoadLibrary</span><span class="token punctuation">(</span><span class="token string">&quot;user32.dll&quot;</span><span class="token punctuation">)</span>
    libkernel32 <span class="token operator">=</span> <span class="token function">MustLoadLibrary</span><span class="token punctuation">(</span><span class="token string">&quot;kernel32.dll&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// SystemParametersInfo有两个子函数针对不同的字符集：</span>
    <span class="token comment">// SystemParametersInfoW（Unicode）和SystemParametersInfoA（ANSI）</span>
    systemParametersInfo <span class="token operator">=</span> <span class="token function">MustGetProcAddress</span><span class="token punctuation">(</span>libuser32<span class="token punctuation">,</span> <span class="token string">&quot;SystemParametersInfoW&quot;</span><span class="token punctuation">)</span>
    getVersion <span class="token operator">=</span> <span class="token function">MustGetProcAddress</span><span class="token punctuation">(</span>libkernel32<span class="token punctuation">,</span> <span class="token string">&quot;GetVersion&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">MustLoadLibrary</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">uintptr</span> <span class="token punctuation">{</span>
    lib<span class="token punctuation">,</span> err <span class="token operator">:=</span> syscall<span class="token punctuation">.</span><span class="token function">LoadLibrary</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    <span class="token comment">//modwinspool    = syscall.NewLazyDLL(&quot;winspool.drv&quot;)</span>
    <span class="token comment">//modwinspool, err = syscall.LoadDLL(&quot;winspool.drv&quot;)</span>
    <span class="token comment">//kernel32, err = syscall.LoadLibrary(&quot;winspool.drv&quot;)</span>
    <span class="token comment">//modwinspool    = windows.NewLazySystemDLL(&quot;winspool.drv&quot;)</span>
    <span class="token comment">// procClosePrinter = modwinspool.NewProc(&quot;ClosePrinter&quot;)</span>
    <span class="token comment">//h = syscall.MustLoadDLL(&quot;kernel32.dll&quot;)</span>
    <span class="token comment">//c = h.MustFindProc(&quot;GetDiskFreeSpaceExW&quot;)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>lib<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">MustGetProcAddress</span><span class="token punctuation">(</span>lib <span class="token builtin">uintptr</span><span class="token punctuation">,</span> name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">uintptr</span> <span class="token punctuation">{</span>
    addr<span class="token punctuation">,</span> err <span class="token operator">:=</span> syscall<span class="token punctuation">.</span><span class="token function">GetProcAddress</span><span class="token punctuation">(</span>syscall<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span>lib<span class="token punctuation">)</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>addr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
之前已经通过注册表设置了壁纸的参数，但是还没有刷新配置。
调用Win32 API位于user32.dll中函数SystemParametersInfo设置桌面壁纸，它支持我们从系统中获得硬件和配置信息。
它有四个参数，第一个指明调用这个函数所要执行的操作，接下来的两个参数指明将要设置的数据，依据第一个参数的设定。
*/</span>
<span class="token comment">// uiAction：该参数指定要查询或设置的参数，换壁纸是SPI_SETDESKWALLPAPER（使得壁纸改变保存并持续可见）</span>
<span class="token comment">// uiParam：附加值</span>
<span class="token comment">// pvParam：要修改或者查询的缓冲区</span>
<span class="token comment">// fWinIni：指定用户配置文件是否被更新，如果是这样，则指定是否 WM_SETTINGCHANGE 将消息广播到所有的顶层窗口的更改通知他们，可以是0也可以是下列值：</span>
<span class="token comment">//      SPIF_UPDATEINIFILE：把新的系统参数的设置内容写入用户配置文件。</span>
<span class="token comment">//      SPIF_SENDCHANGE：在更新用户配置文件之后发送WM_SETTINGCHANGE消息。</span>
<span class="token comment">//      SPI_SENDWININICHANGE：与SPIF_SENDCHANGE一样。</span>
<span class="token comment">// 换壁纸我们要给uiAction指定SPI_SETDESKWALLPAPER标志位，然后把SPIF_UPDATEINIFILE传递给fWinIni。</span>
<span class="token keyword">func</span> <span class="token function">SystemParametersInfo</span><span class="token punctuation">(</span>uiAction<span class="token punctuation">,</span> uiParam <span class="token builtin">uint32</span><span class="token punctuation">,</span> pvParam unsafe<span class="token punctuation">.</span>Pointer<span class="token punctuation">,</span> fWinIni <span class="token builtin">uint32</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token comment">// nargs 即参数的个数,一旦传错, 轻则调用失败,重者直接APPCARSH,多余的参数,用0代替</span>
    ret<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> syscall<span class="token punctuation">.</span><span class="token function">Syscall6</span><span class="token punctuation">(</span>systemParametersInfo<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>uiAction<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>uiParam<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>pvParam<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">uintptr</span><span class="token punctuation">(</span>fWinIni<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> ret <span class="token operator">!=</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">GetVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int64</span> <span class="token punctuation">{</span>
    ret<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> syscall<span class="token punctuation">.</span><span class="token function">Syscall</span><span class="token punctuation">(</span>getVersion<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">int64</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">stringToPointer</span><span class="token punctuation">(</span>str <span class="token builtin">string</span><span class="token punctuation">)</span> unsafe<span class="token punctuation">.</span>Pointer <span class="token punctuation">{</span>
    <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span>syscall<span class="token punctuation">.</span><span class="token function">StringToUTF16Ptr</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="操作注册表" tabindex="-1"><a class="header-anchor" href="#操作注册表" aria-hidden="true">#</a> 操作注册表</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;golang.org/x/sys/windows/registry&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建：指定路径的项</span>
    <span class="token comment">// 路径：HKEY_CURRENT_USER\\Software\\Hello Go</span>
    key<span class="token punctuation">,</span> exists<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> registry<span class="token punctuation">.</span><span class="token function">CreateKey</span><span class="token punctuation">(</span>registry<span class="token punctuation">.</span>CURRENT_USER<span class="token punctuation">,</span> <span class="token string">\`SOFTWARE\\Hello Go\`</span><span class="token punctuation">,</span> registry<span class="token punctuation">.</span>ALL_ACCESS<span class="token punctuation">)</span>
    <span class="token keyword">defer</span> key<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 判断是否已经存在了</span>
    <span class="token keyword">if</span> exists <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">\`键已存在\`</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">\`新建注册表键\`</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 写入：32位整形值</span>
    key<span class="token punctuation">.</span><span class="token function">SetDWordValue</span><span class="token punctuation">(</span><span class="token string">\`32位整形值\`</span><span class="token punctuation">,</span> <span class="token function">uint32</span><span class="token punctuation">(</span><span class="token number">123456</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 写入：64位整形值</span>
    key<span class="token punctuation">.</span><span class="token function">SetQWordValue</span><span class="token punctuation">(</span><span class="token string">\`64位整形值\`</span><span class="token punctuation">,</span> <span class="token function">uint64</span><span class="token punctuation">(</span><span class="token number">123456</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 写入：字符串</span>
    key<span class="token punctuation">.</span><span class="token function">SetStringValue</span><span class="token punctuation">(</span><span class="token string">\`字符串\`</span><span class="token punctuation">,</span> <span class="token string">\`hello\`</span><span class="token punctuation">)</span>
    <span class="token comment">// 写入：字符串数组</span>
    key<span class="token punctuation">.</span><span class="token function">SetStringsValue</span><span class="token punctuation">(</span><span class="token string">\`字符串数组\`</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">\`hello\`</span><span class="token punctuation">,</span> <span class="token string">\`world\`</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 写入：二进制</span>
    key<span class="token punctuation">.</span><span class="token function">SetBinaryValue</span><span class="token punctuation">(</span><span class="token string">\`二进制\`</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">{</span><span class="token number">0x11</span><span class="token punctuation">,</span> <span class="token number">0x22</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 读取：字符串</span>
    s<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> key<span class="token punctuation">.</span><span class="token function">GetStringValue</span><span class="token punctuation">(</span><span class="token string">\`字符串\`</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

    <span class="token comment">// 读取：一个项下的所有子项</span>
    keys<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> key<span class="token punctuation">.</span><span class="token function">ReadSubKeyNames</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> key_subkey <span class="token operator">:=</span> <span class="token keyword">range</span> keys <span class="token punctuation">{</span>
        <span class="token comment">// 输出所有子项的名字</span>
        <span class="token function">println</span><span class="token punctuation">(</span>key_subkey<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 创建：子项</span>
    subkey<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> registry<span class="token punctuation">.</span><span class="token function">CreateKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token string">\`子项\`</span><span class="token punctuation">,</span> registry<span class="token punctuation">.</span>ALL_ACCESS<span class="token punctuation">)</span>
    <span class="token keyword">defer</span> subkey<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 删除：子项</span>
    <span class="token comment">// 该键有子项，所以会删除失败</span>
    <span class="token comment">// 没有子项，删除成功</span>
    registry<span class="token punctuation">.</span><span class="token function">DeleteKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token string">\`子项\`</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function U(H,M){const e=o("router-link"),t=o("ExternalLinkIcon");return c(),u("div",null,[k,n("nav",d,[n("ul",null,[n("li",null,[a(e,{to:"#flag"},{default:p(()=>[s("Flag")]),_:1})]),n("li",null,[a(e,{to:"#设置壁纸"},{default:p(()=>[s("设置壁纸")]),_:1})]),n("li",null,[a(e,{to:"#操作注册表"},{default:p(()=>[s("操作注册表")]),_:1})])])]),v,m,n("ul",null,[n("li",null,[s("GUI "),n("a",b,[s("https://github.com/lxn/walk"),a(t)])]),n("li",null,[n("a",g,[s("https://github.com/lxn/win"),a(t)])]),n("li",null,[n("a",f,[s("https://github.com/chzyer/readline"),a(t)])]),n("li",null,[n("a",y,[s("https://github.com/go-ole/go-ole"),a(t)])]),n("li",null,[n("a",h,[s("https://github.com/yusufpapurcu/wmi"),a(t)])]),n("li",null,[n("a",w,[s("https://github.com/akavel/rsrc"),a(t)])]),n("li",null,[n("a",S,[s("https://github.com/tc-hib/winres"),a(t)]),n("ul",null,[n("li",null,[n("a",q,[s("https://github.com/tc-hib/go-winres"),a(t)])])])]),n("li",null,[n("a",_,[s("https://github.com/josephspurrier/goversioninfo"),a(t)])]),n("li",null,[n("a",E,[s("https://github.com/fyne-io/fyne"),a(t)])]),n("li",null,[n("a",I,[s("https://github.com/visualfc/atk"),a(t)])]),n("li",null,[n("a",P,[s("https://github.com/vugu/vugu"),a(t)])])]),n("ul",null,[n("li",null,[n("a",A,[s("golang windows程序获取管理员权限（UAC ）"),a(t)])]),n("li",null,[n("a",W,[s("how-do-i-force-my-net-application-to-run-as-administrator"),a(t)])]),n("li",null,[n("a",C,[s("https://docs.microsoft.com/zh-cn/previous-versions/bb756929(v=msdn.10)"),a(t)])])]),L,n("ul",null,[n("li",null,[n("a",N,[s("https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-systemparametersinfoa"),a(t)])])]),T,n("ul",null,[n("li",null,[n("a",F,[s("https://github.com/golang/go/wiki/WindowsDLLs"),a(t)])]),n("li",null,[n("a",V,[s("https://github.com/rainycape/dl"),a(t)])]),n("li",null,[n("a",R,[s("golang syscall原理"),a(t)])]),n("li",null,[n("a",x,[s("https://gitlab.com/gitlab-org/gitlab-runner/-/blob/main/vendor/golang.org/x/sys/windows/dll_windows.go"),a(t)])]),n("li",null,[n("a",G,[s("Breaking all the rules: Using Go to call Windows API"),a(t)])])]),D])}const j=l(r,[["render",U],["__file","GoGUI.html.vue"]]);export{j as default};
