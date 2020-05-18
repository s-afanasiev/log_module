	"use strict";

	//MODULE
	const m_log		= require("./log");

	//GLOBAL CONSTANT
	const MSG_INFO		= " INFO:";
	const MSG_WARNING	= " WARN:";
	const MSG_ERROR		= " ERROR:";
	
    m_log.init(true,"core","./log",12,2).then(() =>
	{
		let timer_1 = setInterval(() =>
		{
			m_log.write("HTTP",MSG_INFO,"Client request","127.0.0.1","Google Chrome");
		}
		, 300);
		
		let timer_2 = setInterval(() =>
		{
			m_log.write("SECURITY",MSG_WARNING,"Wrong request")
		}, 500);
		
		let timer_3 = setInterval(() =>
		{
			m_log.write("MYSQL",MSG_ERROR,"Can not connected")
		}, 700);
	}).catch((e) =>
	{
		console.log(e);
	});