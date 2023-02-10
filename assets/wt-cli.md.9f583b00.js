import{o as e,c as a,b as n}from"./app.c212677f.js";const o='{"title":"WATONE 命令行","description":"","frontmatter":{"title":"WATONE 命令行"},"headers":[{"level":2,"title":"前言","slug":"前言"},{"level":2,"title":"安装并使用","slug":"安装并使用"},{"level":2,"title":"更新命令行工具","slug":"更新命令行工具"},{"level":2,"title":"命令预览","slug":"命令预览"},{"level":2,"title":"命令说明","slug":"命令说明"},{"level":2,"title":"watone 命令","slug":"watone-命令"},{"level":3,"title":"watone -v 获取版本号","slug":"watone-v-获取版本号"},{"level":3,"title":"watone -h 查看帮助","slug":"watone-h-查看帮助"},{"level":3,"title":"watone init 快速脚手架","slug":"watone-init-快速脚手架"},{"level":3,"title":"watone s 关键字搜索","slug":"watone-s-关键字搜索"},{"level":3,"title":"watone ip 获取本机ip","slug":"watone-ip-获取本机ip"},{"level":3,"title":"watone o 打开url","slug":"watone-o-打开url"},{"level":3,"title":"watone t 翻译服务","slug":"watone-t-翻译服务"},{"level":3,"title":"watone a 天气服务","slug":"watone-a-天气服务"},{"level":3,"title":"watone npm 换源服务","slug":"watone-npm-换源服务"},{"level":3,"title":"watone app 应用中心","slug":"watone-app-应用中心"},{"level":2,"title":"http 命令说明","slug":"http-命令说明"},{"level":2,"title":"v 命令说明","slug":"v-命令说明"},{"level":2,"title":"b 命令说明","slug":"b-命令说明"},{"level":2,"title":"i 命令说明","slug":"i-命令说明"},{"level":2,"title":"问题汇总","slug":"问题汇总"}],"relativePath":"wt-cli.md","lastUpdated":1676010369222}',t={},s=n('<h1 id="watone-命令行工具"><a class="header-anchor" href="#watone-命令行工具" aria-hidden="true">#</a> WATONE 命令行工具</h1><h2 id="前言"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p><img src="https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhAW6ncHgQNRh5GZf/root/content" alt=""></p><blockquote><ul><li>为了快速帮助开发命令行工具，本文的教程将用于学习各种命令行工具的使用。</li><li>请按照本教程使用，会极大提升工作效率。</li><li>该工具是集成了下载模版,npm 换源 ,IP查询等各种好用的小工具</li></ul></blockquote><h2 id="安装并使用"><a class="header-anchor" href="#安装并使用" aria-hidden="true">#</a> 安装并使用</h2><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> @watone/wt-cli --global\n<span class="token comment"># OR</span>\n<span class="token function">yarn</span> <span class="token function">install</span> @watone/wt-cli --global\n<span class="token comment"># OR</span>\n<span class="token function">pnpm</span> <span class="token function">install</span> @watone/wt-cli --global\n</code></pre></div><h2 id="更新命令行工具"><a class="header-anchor" href="#更新命令行工具" aria-hidden="true">#</a> 更新命令行工具</h2><div class="language-bash"><pre><code><span class="token function">npm</span> update @watone/wt-cli --global\n\n</code></pre></div><h2 id="命令预览"><a class="header-anchor" href="#命令预览" aria-hidden="true">#</a> 命令预览</h2><div class="language-bash"><pre><code>watone -h\n</code></pre></div><p><img src="https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhAYaiIBL-1lj_MfA/root/content" alt=""></p><h2 id="命令说明"><a class="header-anchor" href="#命令说明" aria-hidden="true">#</a> 命令说明</h2><ul><li><p>当你安装<code>watone</code>之后，你可以在命令行环境中输入<code>watone help</code>来查看你所使用的命令的相关说明。</p></li><li><p>注意<code>watone</code>是一个顶级命令,同时创建的顶级命令还有<code>i</code>,<code>http</code>,<code>b</code>,<code>v</code>,当你直接使用顶级命令时,可以不用包含<code>watone</code>前缀,值得说明的是<code>i</code>,<code>http</code>,<code>b</code>,<code>v</code>都可以在<code>watone</code>下使用,等同与<code>watone i</code>,<code>watone http</code>,<code>watone b</code>,<code>watone v</code></p></li></ul><div class="language-bash"><pre><code>i <span class="token operator">=</span><span class="token operator">&gt;</span> watone i\nhttp <span class="token operator">=</span><span class="token operator">&gt;</span> watone http\nb <span class="token operator">=</span><span class="token operator">&gt;</span> watone b\n<span class="token function">v</span> <span class="token operator">=</span><span class="token operator">&gt;</span> watone <span class="token function">v</span>\n</code></pre></div><h2 id="watone-命令"><a class="header-anchor" href="#watone-命令" aria-hidden="true">#</a> watone 命令</h2><h3 id="watone-v-获取版本号"><a class="header-anchor" href="#watone-v-获取版本号" aria-hidden="true">#</a> watone -v 获取版本号</h3><div class="language-bash"><pre><code><span class="token comment"># 版本号</span>\nwatone -v\n<span class="token comment"># OR</span>\nwatone --version\n</code></pre></div><h3 id="watone-h-查看帮助"><a class="header-anchor" href="#watone-h-查看帮助" aria-hidden="true">#</a> watone -h 查看帮助</h3><div class="language-bash"><pre><code><span class="token comment"># 查看帮助</span>\nwatone -h\n<span class="token comment"># OR</span>\nwatone --help\n</code></pre></div><h3 id="watone-init-快速脚手架"><a class="header-anchor" href="#watone-init-快速脚手架" aria-hidden="true">#</a> watone init 快速脚手架</h3><blockquote><p>此命令会让你快速生成一个项目,目前内置四个模版</p></blockquote><p><img src="https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhAhrM4_4dkC15a4j/root/content" alt=""></p><div class="language-bash"><pre><code>watone init\n</code></pre></div><ul><li>选择后,输入内容会在当前文件夹下生成对应模版 <img src="https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhAlD4YMLr62FUyQH/root/content" alt=""></li></ul><h3 id="watone-s-关键字搜索"><a class="header-anchor" href="#watone-s-关键字搜索" aria-hidden="true">#</a> watone s 关键字搜索</h3><div class="language-bash"><pre><code><span class="token comment"># 搜索问题,并在浏览器打开</span>\nwatone s\n<span class="token comment"># OR</span>\nwatone serach\n使用方法：\n      watone s <span class="token punctuation">[</span>搜索的关键字<span class="token punctuation">]</span>\n\n可选参数\n     -b, --baidu   使用百度搜索\n     -g, --google  使用谷歌搜索\n     -s, --sougou  使用搜狗搜索\n     -t, --github  使用github搜索\n</code></pre></div><h3 id="watone-ip-获取本机ip"><a class="header-anchor" href="#watone-ip-获取本机ip" aria-hidden="true">#</a> watone ip 获取本机ip</h3><div class="language-bash"><pre><code>watone <span class="token function">ip</span>\n使用方法：\n      watone <span class="token function">ip</span>\n</code></pre></div><h3 id="watone-o-打开url"><a class="header-anchor" href="#watone-o-打开url" aria-hidden="true">#</a> watone o 打开url</h3><div class="language-bash"><pre><code><span class="token comment"># 会使用默认浏览器打开url</span>\nwatone o\n<span class="token comment"># OR</span>\nwatone <span class="token function">open</span>\n使用方法：\n      watone o <span class="token punctuation">[</span>url链接<span class="token punctuation">]</span>\n</code></pre></div><h3 id="watone-t-翻译服务"><a class="header-anchor" href="#watone-t-翻译服务" aria-hidden="true">#</a> watone t 翻译服务</h3><blockquote><p>此命令需要连接到互联网</p></blockquote><div class="language-bash"><pre><code><span class="token comment"># 需要翻译的单词或关键词</span>\nwatone t\n<span class="token comment"># OR</span>\nwatone translation\n使用方法：\n      watone t <span class="token punctuation">[</span>需要翻译的单词或关键词<span class="token punctuation">]</span>\n例如：<span class="token punctuation">(</span>翻译你好<span class="token punctuation">)</span>\n      watone t 你好\n</code></pre></div><h3 id="watone-a-天气服务"><a class="header-anchor" href="#watone-a-天气服务" aria-hidden="true">#</a> watone a 天气服务</h3><blockquote><p>此命令需要连接到互联网</p></blockquote><div class="language-bash"><pre><code><span class="token comment"># 会查询当前地区天气服务</span>\nwatone a\n<span class="token comment"># OR</span>\nwatone weather\n使用方法：\n      watone a <span class="token punctuation">[</span>地区<span class="token punctuation">]</span>\n例如：<span class="token punctuation">(</span>查询郑州的天气<span class="token punctuation">)</span>\n      watone a zhengzhou\n</code></pre></div><h3 id="watone-npm-换源服务"><a class="header-anchor" href="#watone-npm-换源服务" aria-hidden="true">#</a> watone npm 换源服务</h3><p><img src="https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhAvnYTkbIphrCPJR/root/content" alt=""></p><div class="language-bash"><pre><code>watone <span class="token function">npm</span>\n</code></pre></div><blockquote><ul><li><h4 id="_1-选择哪个命令要换源"><a class="header-anchor" href="#_1-选择哪个命令要换源" aria-hidden="true">#</a> 1. 选择哪个命令要换源</h4></li><li><h4 id="_2-选择要换的是哪个源-推荐使用xkloveme对应淘宝源"><a class="header-anchor" href="#_2-选择要换的是哪个源-推荐使用xkloveme对应淘宝源" aria-hidden="true">#</a> 2. 选择要换的是哪个源(推荐使用xkloveme对应淘宝源)</h4></li></ul></blockquote><p><img src="https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhAyOv7HD5ldOg3fL/root/content" alt=""></p><div class="language-bash"><pre><code><span class="token comment"># 列出现在的源情况</span>\nwatone <span class="token function">npm</span> <span class="token function">ls</span>\n</code></pre></div><p><img src="https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhA3jzWXrSy2AqK8g/root/content" alt=""></p><h3 id="watone-app-应用中心"><a class="header-anchor" href="#watone-app-应用中心" aria-hidden="true">#</a> watone app 应用中心</h3><p><img src="https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhAc4A8QkiUWxxi4n/root/content" alt=""></p><blockquote><p>此命令会启动一个应用,展示项目发布信息</p></blockquote><div class="language-bash"><pre><code>watone app\n<span class="token comment"># or</span>\nwatone apps\n</code></pre></div><p><img src="https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhBhct2OswnPbB7HO/root/content" alt=""></p><h4 id="进入project应用-项目看板"><a class="header-anchor" href="#进入project应用-项目看板" aria-hidden="true">#</a> 进入project应用 项目看板</h4><div class="language-bash"><pre><code>watone app project\n</code></pre></div><p><img src="https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhAoQ_jhscvIWbEmF/root/content" alt=""></p><h4 id="进入ai应用-chatgpt"><a class="header-anchor" href="#进入ai应用-chatgpt" aria-hidden="true">#</a> 进入AI应用 chatgpt</h4><div class="language-bash"><pre><code>watone app chatgpt\n</code></pre></div><p><img src="https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhBkljD1cHwaC1Zqc/root/content" alt=""></p><h2 id="http-命令说明"><a class="header-anchor" href="#http-命令说明" aria-hidden="true">#</a> http 命令说明</h2><p><img src="https://www.helloimg.com/images/2023/01/12/oGWVzb.png" alt=""></p><div class="language-bash"><pre><code><span class="token comment"># 会在当前目录启动一个http服务,并在浏览器打开</span>\nhttp\n<span class="token comment"># OR</span>\nwatone h\n<span class="token comment"># OR</span>\nwatone http\n使用方法：\n      watone h\n可选参数\n     -p, --port   指定端口,默认5282\n     -o, --open   是否打开浏览器,默认打开\n     -u, --url    启动目录,默认当前目录\n</code></pre></div><h2 id="v-命令说明"><a class="header-anchor" href="#v-命令说明" aria-hidden="true">#</a> v 命令说明</h2><blockquote><p>当在所在项目时,v命令会去寻找dev命令执行 当后面跟参数时 <code>b</code>、 <code>i</code>、 <code>v</code> 命令并没有本质区别 和<code>pnpm</code>、<code>yarn</code>、<code>npm</code>一样,当没有安装<code>pnpm</code>时,启动顺序为<code>pnpm</code>&gt;<code>yarn</code>&gt;<code>npm</code></p></blockquote><div class="language-bash"><pre><code><span class="token function">v</span>\n<span class="token comment"># OR</span>\nwatone <span class="token function">v</span>\n<span class="token comment"># OR</span>\nwatone dev\n使用方法：\n      watone <span class="token function">v</span> <span class="token punctuation">[</span>npm的启动命令<span class="token punctuation">]</span>\n</code></pre></div><h2 id="b-命令说明"><a class="header-anchor" href="#b-命令说明" aria-hidden="true">#</a> b 命令说明</h2><blockquote><p>当在所在项目时,b命令会去寻找build命令执行 当后面跟参数时 <code>b</code>、 <code>i</code>、 <code>v</code> 命令并没有本质区别 和<code>pnpm</code>、<code>yarn</code>、<code>npm</code>一样,当没有安装<code>pnpm</code>时,启动顺序为<code>pnpm</code>&gt;<code>yarn</code>&gt;<code>npm</code></p></blockquote><div class="language-bash"><pre><code>b\n<span class="token comment"># OR</span>\nwatone b\n<span class="token comment"># OR</span>\nwatone build\n使用方法：\n      watone b <span class="token punctuation">[</span>npm的启动命令<span class="token punctuation">]</span>\n</code></pre></div><h2 id="i-命令说明"><a class="header-anchor" href="#i-命令说明" aria-hidden="true">#</a> i 命令说明</h2><blockquote><p>当在所在项目时,i命令会去安装依赖同<code>pnpm i</code> 当后面跟参数时 <code>b</code>、 <code>i</code>、 <code>v</code> 命令并没有本质区别 和<code>pnpm</code>、<code>yarn</code>、<code>npm</code>一样,当没有安装<code>pnpm</code>时,启动顺序为<code>pnpm</code>&gt;<code>yarn</code>&gt;<code>npm</code></p></blockquote><div class="language-bash"><pre><code>i\n<span class="token comment"># OR</span>\nwatone i\n<span class="token comment"># OR</span>\nwatone <span class="token function">install</span>\n使用方法：\n      watone i <span class="token punctuation">[</span>npm的启动命令<span class="token punctuation">]</span>\n</code></pre></div><h2 id="问题汇总"><a class="header-anchor" href="#问题汇总" aria-hidden="true">#</a> 问题汇总</h2><p>1.问: 当我安装之后,<code>watone -v</code>提示我 <code>watone : 无法加载文件 C:\\Users\\lenovo\\AppData\\Roaming\\npm\\watone.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。</code></p><p>解决办法:</p><ul><li>1.以管理员身份运行power shell （备注：右键win标，选择 “Windows PowerShell(管理员)”打开即可）</li><li>2.输入 <code>set-ExecutionPolicy RemoteSigned</code> 回车</li><li>3.输入 <code>A</code> 或者 <code>Y</code> 回车 成功后重新尝试<code>watone -v</code>就可以了</li></ul>',70);t.render=function(n,o,t,c,p,l){return e(),a("div",null,[s])};export default t;export{o as __pageData};
