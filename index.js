console.log(`
    初始化git git init
    添加到待上传的暂存区 git add.
    链接上远方的git仓库 git commit - m 第一次上传文件
    Git远程添加origin git remote add origin
    git推送 git push - u origin master

    查看当前项目的修改状态 git status
    查看以往所有人的提交记录 git log
    查看某人以往的提交记录 git log--author = "李镇辉"

    配置git用户名 git config--global user.name 'f2e-lzh'
    配置github邮箱 git config--global user.email '928712883@qq.com'
    检查配置的是否成功 git config--global--list

    想要修改项目中的文件时如何操作 git add index.html

    想要删除不需要的文件时如何进行操作 ①手动删除然后重新上传 ②git rm 文件 之后重新上传
    想要给文件重命名时如何进行操作  git mv 改动之前的名字(带后缀)   改动之后的名字（带后缀）
    想要移动文件到其他位置时如何进行操作 git mv index2.html  img/index.html
`);