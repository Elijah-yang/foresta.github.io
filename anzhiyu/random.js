var posts=["2023/12/16/hello-bug/","2023/12/16/hello-world/","2023/12/16/Manuscripts/review/","2023/12/16/Security/c语言混淆技术/","2023/12/18/Tools/Latex-OCR/","2023/12/19/AILearning/pytorch/conv2d/","2023/12/19/AILearning/pytorch/pytorch/","2023/12/19/AILearning/pytorch/tensor操作/","2023/12/19/AILearning/pytorch/tensor计算/","2023/12/19/AILearning/pytorch/学习率衰减/","2023/12/16/Manuscripts/overleaf/overleaf经验/","2023/12/16/Manuscripts/overleaf/overleaf问题 /","2023/12/16/Manuscripts/sci/Computers&Security/","2023/12/19/Papers/Vul/Cross-domain vulnerability detection using graph embedding and domain adaptation/","2023/12/18/Papers/Vul/LineVD-Statement-level-Vulnerability-Detection-using-Graph-Neural-Networks/","2023/12/16/Programmer/c-c++/lambda/","2023/12/18/Programmer/git/git修改remote地址/","2023/12/19/Programmer/python/python环境/","2023/12/19/Programmer/python/torch环境安装/","2023/12/16/AILearning/DL/知识点/siamese/","2023/12/16/AILearning/DL/知识点/低秩分解/","2023/12/16/AILearning/DL/知识点/可解释机器学习/","2023/12/16/AILearning/DL/知识点/深度学习专业术语/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };