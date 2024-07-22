import{_ as i,c as s,o as a,a4 as t}from"./chunks/framework.CDcGvvSU.js";const F=JSON.parse('{"title":"Git","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/git.md","filePath":"front-end/git.md"}'),e={name:"front-end/git.md"},h=t(`<h1 id="git" tabindex="-1">Git <a class="header-anchor" href="#git" aria-label="Permalink to &quot;Git&quot;">​</a></h1><blockquote><p>Git是目前世界上最先进的分布式版本控制系统</p></blockquote><p>本篇文章将重点讲解大多数人忽略或者不清楚的点，注意: 这不是一篇大而全的git使用教程, 只会重点讲解一些关键知识点，如果你需要更全的git教程，你应该去查看<a href="https://git-scm.com/" target="_blank" rel="noreferrer">官方文档</a></p><h2 id="关联本地仓库与远程仓库" tabindex="-1">关联本地仓库与远程仓库 <a class="header-anchor" href="#关联本地仓库与远程仓库" aria-label="Permalink to &quot;关联本地仓库与远程仓库&quot;">​</a></h2><p>大多数人都会使用 <code>git clone</code> 命令来将github上的代码仓库克隆到本地，然后做一些修改后就可以使用 <code>git push</code> 等命令来提交修改，但是这导致的问题就是大多数人对本地仓库和远程仓库是如何关联起来的不清楚，同时也不清楚有时候用到的 <code>origin</code> 这个究竟代表什么意思。下面我们从零来讲解如何将本地仓库和远程仓库关联。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> studyGit</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 创建目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> studyGit</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 进入该目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 初始化本地git仓库配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @github.com:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ykfe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> playbook.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ga</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gcmsg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;feat: init files&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 在这里我们做一些修改然后commit生成一个本地的版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 将本地仓库的修改推送到远程origin 仓库的master分支</span></span></code></pre></div><p><code>git remote</code> 这一行这是最关键的命令，这里我们给本地的git仓库添加了一个名为<code>origin</code>，地址为<code>git@github.com:ykfe/fe-dev-playbook.git</code>的远程仓库</p><p>通过以上代码我们可以知道， <code>origin</code> 代表的是远程仓库的名称，这里的 <code>origin</code> 我们可以在 <code>git remote</code> 的时候自定义名称，不一定要叫 <code>origin</code> 只是官方的规范对 <code>clone</code> 下来的远程仓库默认叫做 <code>origin</code> 。</p><p>看到这里，你可以知道我们完全可以通过 <code>git remote</code> 添加多个远程仓库来实现同时将代码推送到 <code>github/gitlab/gitoschina</code> 多个远程仓库</p><h2 id="git-add-commit-与-git-commit-am-的区别" tabindex="-1">git add + commit 与 git commit -am 的区别 <a class="header-anchor" href="#git-add-commit-与-git-commit-am-的区别" aria-label="Permalink to &quot;git add + commit 与 git commit -am 的区别&quot;">​</a></h2><p>大多数人喜欢用后面的一种方式来添加提交本地代码到本地仓库中，但后一种与前一种方式并不是完全相等的。<br> 熟悉Git的同学知道，我们在项目中新建一个新文件后，它的状态是 <code>untracked</code> 的，当我们使用 <code>git add .</code> 将其添加到暂存区时，它的状态就会变为 <code>tracked</code> ，即可追踪的。当我们用 <code>git commit</code> 的时候会将暂存区的文件提交到本地仓库生成一个commit记录。<br><code>git commit -am</code> 只会将 <code>tracked</code> 状态的文件commit到本地仓库，意思是如果你有新的文件产生，并且之前没有用 <code>git add</code> 将其状态变为 <code>tracked</code> ，使用 <code>git commit -am</code> 并不能将该文件commit到本地仓库，容易造成文件的丢失。</p><p><img src="https://gw.alicdn.com/tfs/TB1c5RSXKL2gK0jSZPhXXahvXXa-1436-1152.jpg" alt=""></p><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ^HEAD</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 版本回退</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [file] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 撤销修改</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 暂存修改</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apply</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 恢复修改</span></span></code></pre></div><h2 id="多人合作开发" tabindex="-1">多人合作开发 <a class="header-anchor" href="#多人合作开发" aria-label="Permalink to &quot;多人合作开发&quot;">​</a></h2><p>如果要开发多人合作项目，我们建议将master分支设置为<a href="https://help.github.com/en/articles/configuring-protected-branches" target="_blank" rel="noreferrer">protected</a>分支，使得不允许直接在master上提交代码，只能通过PR的形式来合并。如何向项目提交PR请参考<a href="https://www.zhihu.com/question/21682976/answer/79489643" target="_blank" rel="noreferrer">GitHub 的 Pull Request 是指什么意思？</a></p><h2 id="使用git-flow" tabindex="-1">使用git-flow <a class="header-anchor" href="#使用git-flow" aria-label="Permalink to &quot;使用git-flow&quot;">​</a></h2><p>使用<a href="https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/git-flow" target="_blank" rel="noreferrer">git-flow</a>这个工具可以帮助我们更好的控制我们的工作流程</p><h2 id="commit-message-规范" tabindex="-1">commit message 规范 <a class="header-anchor" href="#commit-message-规范" aria-label="Permalink to &quot;commit message 规范&quot;">​</a></h2><p>commit message是必须要遵循一定的规范的，随意的commit message只会让人感受到不专业。这里我们参考<a href="https://gist.github.com/stephenparish/9941e89d80e2bc58a153" target="_blank" rel="noreferrer">AngularJS commit message conventions</a></p><blockquote><p>This would add kinda “context” information. Look at these messages (taken from last few angular’s commits):<br> Fix small typo in docs widget (tutorial instructions)<br> Fix test for scenario. Application - should remove old iframe<br> docs - various doc fixes<br> docs - stripping extra new lines<br> Replaced double line break with single when text is fetched from Google<br> Added support for properties in documentation</p></blockquote><h2 id="使用git-rebase-来合并你的commit" tabindex="-1">使用git rebase 来合并你的commit <a class="header-anchor" href="#使用git-rebase-来合并你的commit" aria-label="Permalink to &quot;使用git rebase 来合并你的commit&quot;">​</a></h2><p>大部分人在实际开发过程中，都会建立自己的分支开发，这是大部分团队都能做到的，但是我们在测试问题的时候总是会提交一些无用的commit去远程的repo，自己的分支还好，但是最后把自己的分支合并到master上的时候如果还带上这些commit就十分不雅观了，当然github的PR功能已经给我们合并PR的时候提供了多种选项，其中就包括rebase。但是这里还是要介绍一个很多人不常用的命令，git rebase，也就是变基，git rebase功能很强大，也很容易一不小心弄不好就把你的整个commit或者git历史弄乱，所以这里我们不写如何用它来变基，只说如何用它来合并自己的commit。<a href="http://gitbook.liuhui998.com/4_2.html" target="_blank" rel="noreferrer">参考教程</a></p><p>注意事项: 只有个人操作的分支才可以用git rebase，多人一起协作的分支切记不要轻易使用git rebase, 否则很容易造成冲突。</p><p>实战操作, 首先建立一个git目录。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> testGit</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> txt</span></span></code></pre></div><p>在master分支对1.txt做修改并且commit</p><p><img src="http://gw.alicdn.com/tfs/TB1luMFXBr0gK0jSZFnXXbRRXXa-1138-852.png" alt=""></p><p>切换到rebase分支，修改两次1.txt，并进行两次commit <img src="http://gw.alicdn.com/tfs/TB1UWIFXBv0gK0jSZKbXXbK2FXa-1140-856.png" alt=""> 使用git rebase 合并刚刚的两次commit</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rebase</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~x</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # x代表你要合并前x次commit 这里我们填2, 这里你也可以直接填具体的commit对应的hash值</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rebase</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~2</span></span></code></pre></div><p><img src="http://gw.alicdn.com/tfs/TB1Qs7DXAT2gK0jSZFkXXcIQFXa-1154-866.png" alt=""> 这里的pick的意思是</p><blockquote><p>pick：保留该commit（缩写:p）<br> reword：保留该commit，但我需要修改该commit的注释（缩写:r）<br> edit：保留该commit, 但我要停下来修改该提交(不仅仅修改注释)（缩写:e）<br> squash：将该commit和前一个commit合并（缩写:s）<br> fixup：将该commit和前一个commit合并，但我不要保留该提交的注释信息（缩写:f）<br> exec：执行shell命令（缩写:x）<br> drop：我要丢弃该commit（缩写:d）</p></blockquote><p>我们使用的比较多的是 <code>s</code> 和 <code>f</code> 两个选项，在这里我们想要合并两次commit为一个，所以将我们的rebase信息改为</p><p><img src="http://gw.alicdn.com/tfs/TB1wPMDXuL2gK0jSZFmXXc7iXXa-1148-840.png" alt=""></p><p>保存之后出现如下界面，可以让我们设置合并后的commit信息，在第二行写上新的cm信息，并且注释掉之前的两次cm信息，或者直接用dd来删除</p><p><img src="http://gw.alicdn.com/tfs/TB1WuIDXAT2gK0jSZPcXXcKkpXa-1142-852.png" alt=""></p><p><code>:wq</code> 保存后查看git log</p><p><img src="http://gw.alicdn.com/tfs/TB1l5.DXuP2gK0jSZFoXXauIVXa-1144-848.png" alt=""></p><p>ok, 前两次cm信息成功被合并为了一个</p><p>注意事项</p><p>你执行了rebase命令的分支如果和远程仓库的commit history不一样，是没有办法直接push到远程仓库的，因为这时候你本地仓库的commit history已经修改了，和远程的会冲突。</p><p>解决方式</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 使用--force来强制push，但你要清楚这可能会导致你的一些commit记录的丢失，所以请仅在个人分支进行该操作</span></span></code></pre></div>`,43),n=[h];function p(l,k,o,r,d,c){return a(),s("div",null,n)}const m=i(e,[["render",p]]);export{F as __pageData,m as default};
