if (ConfigObj) {
    ConfigObj.local = false;

    ConfigObj.appName = 'dianshicai';
    ConfigObj.appEnname = '';
    ConfigObj.version = '2.0.3';	//内核版本（HTML、JS）
    ConfigObj.umengChannel = '';		//从app获取
    ConfigObj.appVersionCode = '';	//app的版本代码( ios ?)
    ConfigObj.appVersionName = '';	//app的版本名称( ios ?)
	ConfigObj.stationId='';			//从app获取
	ConfigObj.zdid = '00002';
//	ConfigObj.showWhere = false;
	ConfigObj.tel = "075582968558";
	ConfigObj.a1 = "";
	ConfigObj.a2 = "";
	ConfigObj.display = true;
        

    // 正式环境接口
    ConfigObj.appkey = 'F5AC5BF3-57F0-5B79-13F4-94ECB3775C68';
    ConfigObj.localSite = 'http://a.91zibo.com/api';
    ConfigObj.touchWebSite = 'http://caipiao.91zibo.com/';
    ConfigObj.appDLUrl = 'http://caipiao.91zibo.com/System/DownLoad/page?sharefrom=app'; // 下载页

	// 测试环境接口
//	ConfigObj.appkey = 'EF0D1335-20C7-1993-F970-A69DEE4A253F';
//  ConfigObj.localSite = 'http://a.91zbl.cn:8080/api';
//	ConfigObj.touchWebSite = 'http://caipiao.91zbl.cn:8080/';
//  ConfigObj.appDLUrl = 'http://caipiao.91zbl.cn:8080/System/DownLoad/page?sharefrom=app'; // 下载页

    if (ConfigObj.local) ConfigObj.localSite = 'p.js';

    ConfigObj.fastLotType = 'gd11x5';
    ConfigObj.fastLotApi = {
        'tjsyy': {
            scheme: '?m=lottery.Tjsyy.index',
            chart: '?m=Lottery.Tjsyy.getChartData'
        },
        'gd11x5': {
            scheme: '?m=lottery.Gd11x5.index',
            chart: '?m=Lottery.Gd11x5.getChartData'
        },
        'sd11x5': {
            scheme: '?m=lottery.sd11x5.index',
            chart: '?m=Lottery.sd11x5.getChartData'
        },        
        'xj11x5': {
            scheme: '?m=lottery.xj11x5.index',
            chart: '?m=Lottery.xj11x5.getChartData'
        },
        'gx11x5': {
            scheme: '?m=lottery.gx11x5.index',
            chart: '?m=Lottery.gx11x5.getChartData'
        }
    };

    ConfigObj.fastK3Type = 'gxk3';
    ConfigObj.fastK3Api = {
        'gxk3': {
            scheme: '?m=lottery.gxk3.index',
            chart: '?m=Lottery.gxk3.getChartData'
        },
        'jxk3':{
        	scheme:'?m=lottery.jxk3.index',
        	chart:'?m=Lottery.jxk3.getChartData'
        }
    };

    ConfigObj.syx5Type = ['gd11x5', 'xj11x5', 'sd11x5', 'gx11x5']; // 各省 11选5
    if (ConfigObj.platForm === 'android' && typeof android_obj !== 'undefined') {
        ConfigObj.umengChannel = android_obj.getUmengChannel();	//友盟ID
        ConfigObj.appVersion = android_obj.getAppVersionName(); // app 原生版本
        ConfigObj.stationId = android_obj.getStationId();
        ConfigObj.zdid = android_obj.getStationId();
    } else if (ConfigObj.platForm === 'ios' && typeof ios_obj !== 'undefined') {
        ios_obj.upLoadUMengChanelIdForLottery();  //友盟ID
    }   
}
