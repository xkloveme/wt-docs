import{_ as e,c as a,o as t,a4 as o}from"./chunks/framework.CDcGvvSU.js";const f=JSON.parse('{"title":"Utils","description":"","frontmatter":{"sidebarDepth":2},"headers":[],"relativePath":"front-end/utils.md","filePath":"front-end/utils.md"}'),r={name:"front-end/utils.md"},c=o('<h1 id="utils" tabindex="-1">Utils <a class="header-anchor" href="#utils" aria-label="Permalink to &quot;Utils&quot;">​</a></h1><p>本篇文章将介绍一些实用类的小工具来帮助我们从繁琐的鼠标操作中脱离出来</p><h2 id="spectatle" tabindex="-1">Spectatle <a class="header-anchor" href="#spectatle" aria-label="Permalink to &quot;Spectatle&quot;">​</a></h2><p><a href="https://www.spectacleapp.com/" target="_blank" rel="noreferrer">Spectatle</a>一款可以让你更加轻松快速的控制窗口大小的软件。 快速实现窗口全屏/靠左/靠右/居中等展现形式, 建议快捷键设置如下。</p><ul><li><code>cmd</code> + <code>alt</code> + <code>enter</code> 全屏</li><li><code>cmd</code> + <code>alt</code> + <code>&lt;-</code> 靠左</li></ul><p><img src="https://gw.alicdn.com/tfs/TB1ESaBXG67gK0jSZFHXXa9jVXa-1224-1066.jpg" alt=""></p><h2 id="dash" tabindex="-1">Dash <a class="header-anchor" href="#dash" aria-label="Permalink to &quot;Dash&quot;">​</a></h2><p><a href="https://kapeli.com/dash" target="_blank" rel="noreferrer">Dash</a>是一个文档 API 文档浏览器，在单一窗口中可以浏览、搜索各 API 细节。使用效果如下图所示。</p><p><img src="https://img.alicdn.com/tfs/TB1xPgeXNv1gK0jSZFFXXb0sXXa-1820-1206.png" alt=""></p><p>使用 VSCode 时可以在扩展中搜索 Dash，点击安装即可通过 <code>ctrl</code> + <code>h</code> 快捷键查找需要的 api 具体说明。</p><h2 id="charles" tabindex="-1">Charles <a class="header-anchor" href="#charles" aria-label="Permalink to &quot;Charles&quot;">​</a></h2><p><a href="https://www.charlesproxy.com" target="_blank" rel="noreferrer">Charles</a>是一个代理服务器，简单的说法为当访问网站时，会由 Charles 代为获取请求相关数据，这样就达到了截取网络请求以及分析请求结果的目的。Charles 是在日常工作中常用的功能包括: 代理移动端设备的请求，将远程文件代理到本地文件等。</p><h3 id="代理移动端请求" tabindex="-1">代理移动端请求 <a class="header-anchor" href="#代理移动端请求" aria-label="Permalink to &quot;代理移动端请求&quot;">​</a></h3><p>代理移动端设备的请求指的是：将移动设备的请求代理到 PC 的 Charles 服务，以此来抓包移动端设备的请求详细信息以及使得移动端设备可以打开我们的本地服务器的资源</p><h4 id="开启设置" tabindex="-1">开启设置 <a class="header-anchor" href="#开启设置" aria-label="Permalink to &quot;开启设置&quot;">​</a></h4><p>为了可以在 Charles 中截取网络请求数据，首先需要将 Charles 设置为系统代理，即让 Charles 成为获取请求数据的委托代理方，具体操作为：选择菜单栏中 <code>proxy</code> -&gt; <code>Mac OS X Proxy</code> ，使 <code>Mac OS X Proxy</code> 前出现 <code>✔️</code> 。</p><p>在 charles 中选择菜单栏 <code>proxy</code> -&gt; <code>proxy settings</code> , 在弹出的对话框中填写端口号（默认为 8888），勾选”enable transparent http proxying“。</p><p><img src="https://img.alicdn.com/tfs/TB1.bFMaeH2gK0jSZFEXXcqMpXa-1172-1004.png" alt=""></p><h4 id="查看本机-ip" tabindex="-1">查看本机 IP <a class="header-anchor" href="#查看本机-ip" aria-label="Permalink to &quot;查看本机 IP&quot;">​</a></h4><p>使用 <code>ifconfig</code> 查看本机在当前局域网中的 IP 地址</p><p><img src="https://gw.alicdn.com/tfs/TB1490_ahD1gK0jSZFyXXciOVXa-1444-858.jpg" alt=""></p><p><code>enx</code> 代表当前的第 x 块网卡，当前我们只有一块网卡，故 <code>192.168.199.161</code> 是我们当前的局域网 ip 地址</p><h4 id="移动端开启代理设置" tabindex="-1">移动端开启代理设置 <a class="header-anchor" href="#移动端开启代理设置" aria-label="Permalink to &quot;移动端开启代理设置&quot;">​</a></h4><p>确保手机和电脑连接同一个无线网络，并对无线网络进行代理设置</p><p><code>WIFI</code> -&gt; <code>HTTP代理</code> -&gt; <code>手动</code> -&gt; <code>填写IP以及端口号</code></p><img src="https://gw.alicdn.com/tfs/TB1rXl.aeP2gK0jSZFoXXauIVXa-750-1334.jpg" style="height:556px;width:316px;"><p>连接成功后 Charles 会弹窗提示，选择 <code>allow</code> 。至此该移动设备的请求都会被 Charles 所代理，我们可以在 PC 端的 Charles 中看到移动设备所有 <code>http</code> 请求的详细信息。</p><h4 id="抓包-https-请求" tabindex="-1">抓包 https 请求 <a class="header-anchor" href="#抓包-https-请求" aria-label="Permalink to &quot;抓包 https 请求&quot;">​</a></h4><p>由于 https 协议的请求安全系数较高，在截取此类请求数据时，需要安装证书等操作，此处单独列出 https 协议请求的操作步骤。</p><ol><li>在 PC 上安装证书。在 charles 中选择菜单栏 <code>help</code> -&gt; <code>SSL Proxying</code> -&gt; <code>Install Charles Root Certificate</code> , 安装成功后，双击安装的证书进行信任处理。</li></ol><p><img src="https://img.alicdn.com/tfs/TB16ONTabj1gK0jSZFuXXcrHpXa-1478-930.png" alt=""></p><ol start="2"><li>在 Charles 选择菜单栏 <code>proxy</code> -&gt; <code>SSL Proxying Settings</code> ，通过 <code>add</code> 添加需要抓包的域名，并选中 <code>enable SSL Proxying </code> 。至此，在 PC 端中即可对 https 请求进行抓包处理。</li></ol><p><img src="https://gw.alicdn.com/tfs/TB1MrR.aeL2gK0jSZPhXXahvXXa-1482-1102.jpg" alt=""></p><ol start="3"><li>如果要截取移动端访问的 https 协议的数据，在完成上述步骤后，需要重复第一个步骤，并更改为选择菜单栏 <code>help</code> -&gt; <code>SSL Proxying</code> -&gt; <code>Install Charles Root Certificate on a Mobile Device or Remote Browser</code> 。移动端完成无线网络配置(移动端实机测试的第四步骤)后，访问<a href="http://charlesproxy.com/getssl" target="_blank" rel="noreferrer">证书地址</a>，即可完成移动端设备安装证书的操作。至此，移动端访问 https 请求，就可以在 charles 中实时显示相关抓包信息。</li></ol><h3 id="将远程文件代理到本地" tabindex="-1">将远程文件代理到本地 <a class="header-anchor" href="#将远程文件代理到本地" aria-label="Permalink to &quot;将远程文件代理到本地&quot;">​</a></h3><p>当需要在线上环境测试展示效果，而本地程序代码不确保正确的情况下，可以将线上的文件访问地址重定向到本地的文件，从而使得线上环境真正使用的为本地需要测试的文件。</p><p><code>Map Local</code> 是将指定的网络请求代理到本地文件，在 Charles 选择菜单栏 <code>Tools</code> -&gt; <code>Map Local</code> ，填写需要重定向的源地址以及本地的目标文件。如果网络请求较为复杂，可在请求处右键选择 <code>Save Response</code> 保存请求返回的数据到本地。</p><h4 id="map-from" tabindex="-1">Map From <a class="header-anchor" href="#map-from" aria-label="Permalink to &quot;Map From&quot;">​</a></h4><p>源文件相关配置， <code>protocol</code> 选择 http 或者 https 协议， <code>HOST</code> 为远程服务域名， <code>PATH</code> 为请求的路径， <code>Query</code> 为请求查询字符串</p><h4 id="map-to" tabindex="-1">Map To <a class="header-anchor" href="#map-to" aria-label="Permalink to &quot;Map To&quot;">​</a></h4><p>为本地文件地址，可以为单文件或者文件夹的地址</p><p>注意：如果 Map From 以及 Map To 中的数据需要区分大小写，应勾取 Case-sensitive 选项。</p><p><img src="https://gw.alicdn.com/tfs/TB1gC1XakL0gK0jSZFtXXXQCXXa-936-838.jpg" alt=""></p><p>通过以上设置，我们在访问 <code>http://baidu/com/test/a.js</code> 时，实际访问的是 <code>~/Desktop/a.js</code></p><h2 id="实用网站" tabindex="-1">实用网站 <a class="header-anchor" href="#实用网站" aria-label="Permalink to &quot;实用网站&quot;">​</a></h2><ul><li><a href="https://caniuse.com/" target="_blank" rel="noreferrer">can i use</a> 查看一些 API 的兼容性</li><li><a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank" rel="noreferrer">中文版的 lighthouse</a> 测试网页性能</li><li><a href="https://autoprefixer.github.io/" target="_blank" rel="noreferrer">Autoprefixer</a> 为 css 加上浏览器前缀，配套 webpack 相关插件</li><li><a href="https://regexper.com" target="_blank" rel="noreferrer">在线可视化正则表达式测试网站</a>（需要科学上网）</li><li><a href="https://jsfiddle.net/" target="_blank" rel="noreferrer">在线 js 编辑器</a>（需要科学上网）</li></ul>',46),l=[c];function s(d,h,p,i,n,g){return t(),a("div",null,l)}const u=e(r,[["render",s]]);export{f as __pageData,u as default};
