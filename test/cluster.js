if (cluser.isMaster){//主进程代码在此代码块内执行
	var worker = cluser.fork();
	worker.send(message);//主进程向此worker发送消息
	worker.on("message",cb);//主进程接收此worker发送的消息
}else if(cluser.isWorker){//工作进程的代码在此代码块内执行
	process.send(message);//工作进程向主进程发送消息
	process.on("message",cb);//工作进程接收消息
}