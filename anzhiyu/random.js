var posts=["2023/12/16/hello-world/","2023/12/16/hello-bug/","2023/12/16/Security/c语言混淆技术/","2024/04/18/Security/C_C++漏洞数据集/","2023/12/16/Security/基本术语/","2023/12/16/Security/挑战与问题/","2023/12/18/Tools/Latex-OCR/","2023/12/16/Manuscripts/review/","2023/12/18/issues/powershell/","2022/12/18/AILearning/CNN/CNN-注意力/","2023/10/10/AILearning/DL/Multi-head Attention/","2023/10/10/AILearning/DL/Triplet-Loss/","2023/12/16/AILearning/DL/siamese/","2023/12/16/AILearning/DL/低秩分解/","2023/12/16/AILearning/DL/可解释机器学习/","2023/10/10/AILearning/DL/正则化/","2023/12/18/AILearning/DL/没有思考过 Embedding，不足以谈 AI/","2023/10/10/AILearning/DL/深度学习专业术语/","2023/12/18/AILearning/DL/理解latent space/","2023/10/10/AILearning/DL/相似性计算/","2023/10/10/AILearning/DL/论文阅读术语baseline、benchmark、groundtruth/","2023/10/10/AILearning/DL/几种注意力机制/","2023/10/10/AILearning/DL/激活函数_/","2023/10/10/AILearning/GNN/DGL整图分类/","2022/12/18/AILearning/GNN/DGL计算中心性/","2023/10/10/AILearning/GNN/GAT浅入/","2023/10/10/AILearning/GNN/GCN GAT GGNN/","2023/10/10/AILearning/GNN/GCN浅入/","2023/10/10/AILearning/GNN/GNNExplainer/","2023/10/10/AILearning/GNN/Laplace/","2023/10/10/AILearning/GNN/VGAE浅入/","2023/10/10/AILearning/GNN/什么是图神经网络/","2023/10/10/AILearning/GNN/图的中心性/","2023/10/10/AILearning/GNN/图的相关概念/","2023/10/10/AILearning/GNN/图类型/","2023/12/19/AILearning/pytorch/conv2d/","2023/12/19/AILearning/pytorch/pytorch/","2023/12/19/AILearning/pytorch/tensor操作/","2023/12/19/AILearning/pytorch/tensor计算/","2023/12/19/AILearning/pytorch/学习率衰减/","2023/12/16/Programmer/c-c++/lambda/","2023/12/18/Papers/binary/Binary Software Composition Analysis via Intelligent Binary Source Code Matching/","2023/12/18/Programmer/git/git修改remote地址/","2024/04/18/Programmer/linux/Linux顺序执行多行命令/","2024/04/18/Programmer/linux/make (copy)/","2024/04/18/Programmer/linux/rm恢复/","2024/04/18/Programmer/linux/screen/","2024/04/18/Programmer/linux/内存/","2024/04/18/Programmer/linux/查看硬盘占用/","2024/04/18/Programmer/linux/复制或移动文件/","2024/04/18/Programmer/linux/端口/","2024/04/18/Programmer/linux/进程/","2023/12/18/Security/CA Tool/基本使用/","2023/12/19/Programmer/python/python环境/","2023/12/19/Programmer/python/torch环境安装/","2023/12/18/Papers/Vul/CEVulDet/","2023/12/18/Papers/Vul/CPVD Cross Project Vulnerability Detection Based on Graph Attention Network and Domain Adaptation/","2023/12/19/Papers/Vul/Cross-domain vulnerability detection using graph embedding and domain adaptation/","2023/12/18/Papers/Vul/DeepVD Toward Class-Separation Features for Neural Network Vulnerability Detection/","2023/12/18/Papers/Vul/Devign/","2023/12/18/Papers/Vul/Enhancing vulnerability detection via AST decomposition and neural sub-tree encoding/","2023/12/18/Papers/Vul/HyVulDect A hybrid semantic vulnerability mining system based on graph neural network/","2023/12/18/Papers/Vul/IVDetect/","2023/12/18/Papers/Vul/LineVD-Statement-level-Vulnerability-Detection-using-Graph-Neural-Networks/","2023/12/18/Papers/Vul/MVP/","2023/12/18/Papers/Vul/Modeling and Discovering Vulnerabilities with Code Property Graphs/","2023/12/18/Papers/Vul/Path-Sensitive Code Embedding via Contrastive Learning for Software Vulnerability Detection/","2023/12/18/Papers/Vul/Reveal/","2023/12/18/Papers/Vul/SySeVR/","2023/12/18/Papers/Vul/VDSimilar/","2023/12/18/Papers/Vul/VulDeepecker/","2023/12/18/Papers/Vul/VULEXPLAINER/","2023/12/18/Papers/Vul/Vulnerability Detection by Learning From Syntax-Based Execution Paths of Code/","2022/12/18/Security/software analysis/软件分析-IR/","2022/12/18/Security/software analysis/软件分析-指针分析/","2022/12/18/Security/software analysis/软件分析-指针分析基础/","2022/12/18/Security/software analysis/软件分析-数据流分析/","2022/12/18/Security/software analysis/软件分析-数据流分析2/","2022/12/18/Security/software analysis/软件分析-过程间分析/","2023/12/16/Manuscripts/overleaf/overleaf经验/","2023/12/16/Manuscripts/overleaf/overleaf问题 /","2023/12/16/Manuscripts/sci/Computers&Security/","2023/12/18/Security/software security/FlawFinder_/","2023/12/18/Security/software security/Symbolic Execution/","2023/12/18/Security/software security/stack canary/","2023/12/18/Security/software security/代码静态分析工具/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };