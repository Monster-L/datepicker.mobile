// JavaScript Document
/**
 * 日期工具类
 */

var utils = function() {
	return {
		//字符串转日期
		toDateTime : function(val)
		{
			var arr=val.split("-");
			var date=new Date(arr[0],parseInt(arr[1])-1,arr[2]);
			return date;
		},
		//转换日期字符串
		toString : function(val){
		    return val.getFullYear()+"-"+(val.getMonth()+1)+"-"+val.getDate();
		},
		//转换日期字符串YYYYMMDD
		toyyyymmdd : function(val) {
			   var yyyy = val.getFullYear().toString();
			   var mm = (val.getMonth()+1).toString(); // getMonth() is zero-based
			   var dd  = val.getDate().toString();
			   return yyyy+"-"+(mm[1]?mm:"0"+mm[0])+"-"+(dd[1]?dd:"0"+dd[0]); // padding
			  },
		//获取当前日期
		currentDate :function(){
		    var nowTemp = new Date();
		    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
		    return now;
		},
		//日期大小比较
		compareDate : function(startdate,enddate)
		{
			var start = this.toDateTime(startdate).getTime();
			var end = this.toDateTime(enddate).getTime();

			if(start > end)
				return false;
			else
				return true;
		},
		//求日期间隔（单位：天数）
		intervalDate : function(startdate,enddate)
		{
			var start = this.toDateTime(startdate).getTime();
			var end = this.toDateTime(enddate).getTime();

			var time = end - start;
			var diff = parseInt(time/ (1000 * 60 * 60 * 24));

			return diff + 1;
		},
		/**
		 * 调整日期
		 * number:调整大小：可正可负
		 * sourceDate：调整的基础日期（默认当天）
		 * type：可调整年份，月份，日期，时间,周（默认按日期）
		 */
		adjustDate : function(number,sourceDate,type)
		{
			var dtTmp = new Date(sourceDate);

			if (isNaN(dtTmp))
				dtTmp = new Date();

			if (isNaN(type))
				type = "d";

			var resultDate = null;

			switch (type)
			{
			case "s":
				resultDate = new Date(Date.parse(dtTmp) + (1000 * number));
				break;
			case "n":
				resultDate = new Date(Date.parse(dtTmp) + (60000 * number));
				break;
			case "h":
				resultDate = new Date(Date.parse(dtTmp) + (3600000 * number));
				break;
			case "d":
				resultDate = new Date(Date.parse(dtTmp) + (86400000 * number));
				break;
			case "w":
				resultDate = new Date(Date.parse(dtTmp) + ((86400000 * 7) * number));
				break;
			case "m":
				resultDate = new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
				break;
			case "y":
				resultDate = new Date((dtTmp.getFullYear() + number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
				break;
			}

			return resultDate;
		}
	}
}();