var date = function() {

	var $nowDate;
	var opts;
	var lastSelect;

	//初始化变量
	function _initValue(options) {
		$nowDate = $('#nowDate');
		opts = options;
		lastSelect = $nowDate.val();
	}

	//校验选择的时间是否有效
	function _isDateValid(validDate) {
		if (validDate) {
			if (validDate == lastSelect) {return false};
			var curDate = utils.toyyyymmdd(new Date());
			if (!utils.compareDate(validDate, curDate)) {
				_initScroll($.extend(opts,{date:lastSelect}));
				alert('查询时间不大于今天');
				return false;
			}
			return true;
		}

		return false;
	}

	//初始化日期操作
	function _initDateOpear(callback) {
		$('.ui-date-opear').click(function() {
			var curDay = $nowDate.val();
			var op = $(this).data('op');
			var date = utils.toyyyymmdd(utils.adjustDate(op, curDay));
			if (!_isDateValid(date)) {
				return;
			}
			callback.call(this, date);
			_initScroll($.extend(opts,{date:date}));
			_initWeek(date);
		});
	}

	/**
	 * 设置日期星期
	 */
	function _initWeek(date) {
		lastSelect = date;
		date = utils.toDateTime(date).getDay();
		$('.ui-date-week').text(' 星期' + '日一二三四五六'.charAt(date));
	}

	function _initScroll(options) {
		//设置当前日期
		$nowDate.val(options.date);
		//设置主题色 默认白底蓝字
		if (options.theme) {$('.ui-date-bg').addClass(options.theme)};

		var scrollSetting = {
			preset: 'date',
			theme: 'ios7',
			mode: 'scroller',
			lang: 'zh',
			display: 'bottom',
			animate: 'fade',
			dateOrder: 'yymmdd', //面板中日期排列格式
			dateFormat: 'yy-mm-dd', // 日期格式
			onSelect: function(valueText) {
					//检测时间是有效的情况下才更新时间
					if (_isDateValid(valueText)) {
						options.onSelect.call(this, valueText);
						_initWeek(valueText);
					}
			},
			onChange: function() {},
			onDestroy: function() {},
			onShow: function() {}
		}
		//初始化滚轮控件
		$('.ui-date-scroll').scroller($.extend({}, scrollSetting));
	}

	return {
		init : function(options) {
			_initValue(options);
			_initScroll(options);
			_initWeek(options.date);
			_initDateOpear(options.onSelect);
			return this;
		}
	}
}();