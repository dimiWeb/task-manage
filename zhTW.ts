﻿import zhTWLocale from 'element-ui/lib/locale/lang/zh-TW'
import errorCode  from "./zhTW-code"
import msgCode from './zhTW-msg-code'
export default {  
  // element-ui
  ...zhTWLocale,
  //errorCode
  ...errorCode,
  // msgCode
  ...msgCode,
  //标题
 logoTitel                    :"智慧邊緣節點",
 //主菜单                       ",
 realTimeVideo                :"即時預覽",
 recordQuery                  :"記錄査詢", 
 snapshotQuery                :"抓拍記錄査詢",
 alarmQuery                   :"警報記錄查詢",
 faceService                  :"智慧服務", 
 libraryManage                :"資料庫管理",//me
 oneToOne                     :"1:1比對",  
 retrieval                    :"以圖搜圖",  
  eventManage                  :"事件管理",  
 alarmRuleSet                 :"警報快顯視窗",  
 signalLinkage                :"訊號聯動管理",  
 userManage                   :"用戶管理",
 sysSettings                  :"系統設定",
 generalSettings              :"一般設定",
 networkSettings              :"網路設定",
 deviceManage                 :"裝置管理",
 sysInfo                      :"系統資訊",
 storageManage                :"儲存管理",
  sysManage                    :"系統管理",
  interfaceProtocol            :"通訊介面",
  logs                         :"系統日誌", //1.2  
  logs_manage                  :"記錄管理", //1.2+
  advancedSet                  :"高級設定", //1.2
 languge                      :"語言",
 login                        :"登入",
 logout                       :"登出",
 //导出                         ",
 totalNumTip                  :"每次最多匯出 {num} 筆資料，",
 curNumTip                    :"目前總資料量為：{num} 筆",
 batchExport                  :"分批匯出",
 exportInterval               :"匯出數量範圍",
 startExport                  :"開始",
 endExport                    :"結束",
  //通用                       
 submitTag                    :"確定",
 exportAllTag                 :"全部匯出",
 filterCondition              :"篩選條件",
 exportTag                    :"匯出",
 seqNumber                    :"序號",
  operation                    :"操作",
 showDetail                   :"檢視詳細資料",
  allTip                       :"全部",
 showDetailOne                :"檢視",
 default                      :"預設",
 flush                        :"重新整理",
  cancel                       :"取消",
 delete                       :"刪除",
 edit                         :"編輯",
 reset                        :"重設",
 close                        :"關閉",
 startDate                    :"開始日期",
 endDate                      :"結束日期",
 similarity                   :"相似性",
 time                         :"時間",
  hint                         :"提示",
 details                      :"詳細資料",
 settingSuccess               :"設定成功",
 faceLead                     :"批量匯入",
 confDelete                   :"確認刪除",
 deleteOk                     :"刪除成功",
 deleteError                  :"刪除失敗， ",
  //file                       
 chooseFile                   :"選取檔案",
 fileHint                     :"請確認已下載目前的匯出檔案，關閉後您需要重新匯出，是否繼續？",
 fileErrHint                  :"圖片上傳失敗，是否重新上傳？",
 uploadSuccess                :"圖片已上傳完成",
 putInSuccNumber              :"成功接收數量",
 putInErrNumber               :"接收失敗數量",
 uploadAgain                  :"重新上傳",
 //实时预览                     ",
 realTimeVideoTag             :"監控畫面",
 oneSplitScreen               :"一分割",//me
 fourSplitScreen              :"四分割",
 eightSplitScreen             :"八分割",
 autoMaticAlarm               :"自動顯示警報快顯視窗",
 captureInfo                  :"抓拍資訊",
 //抓拍记录                     ",
 captureTitle                 :"抓拍詳細資料",
  allChannel                   :"所有通道",
 captureFigure                :"圖片",
 channelNumber                :"通道編號",
 channelName                  :"通道名稱",
 captureDate                  :"抓拍時間",
 //common                       ",
 warnTitle                    :"警示詳細資料",
 capturingFace                :"抓拍人臉",
 compareFace                  :"比對人臉",
 faceIdent                    :"證件",
 uoloadForCompare             :"上傳人臉進行比對",
 uploadForSearch              :"上載人臉進行搜尋",
 reUploadSearch               :"點選圖片重新上傳",
 //告警记录                     ",
 libraryNameTip               :"目標資料庫",
 libraryAttrTip               :"資料庫屬性",
 allLibrary                   :"所有目標資料庫",
 allLibraryAttr               :"所有資料庫類型",
 blackLibType                 :"黑名單資料庫",
 writeLibType                 :"白名單資料庫",
 //目标库                       ",
 libraryNameRe                :"庫名",//me
 libraryName                  :"資料庫名稱",
 pictureTotal                 :"圖片數量",
 libCrateTime                 :"建立時間",
 libraryTypeTag               :"類型",
 addLibrary                   :"新增目標資料庫",
 editLibrary                  :"編輯目標資料庫",
 //人脸库                       ",
 face_picTag                  :"圖片",
  face_nameTag                 :"姓名",
 face_ageTag                  :"年齡",
 face_sexTag                  :"性別",
  // 告警详情下新增的字段
  face_mask                    :"口罩", // 1.2 +
  face_glasses                 :"眼鏡", // 1.2 +
  face_mustache                :"鬍子", // 1.2 +
  face_have                    :"有", // 1.2+
  face_no                      :"無",// 1.2+

 face_rl_addTitle             :"新增目標來源",
  face_rl_addTitle             :"新增目标源",
 face_rl_eidtTitle            :"編輯人員資訊",
 //人脸库-详情                  ",
 face_rl_infoTitle            :"人員詳細資料",
 face_rl_delete               :"刪除人員",
 face_rl_edit                 :"修改屬性",
 //删除                         ",
 face_noChoose                :"您尚未選取記錄",
 face_onlyDelete              :"最多只能刪除50筆記錄",
 face_batchDelete             :"您正在刪除{num}筆記錄，是否繼續？",
 face_deleteTitle             :"此操作將永久刪除此人員的詳細資料，是否繼續？",
 face_affi_delete             :"刪除人員詳細資料",
 //系统设置                     ",
 //常规设置                     ",
  sys_cg_dateFormat            :"日期格式",
 sys_cg_timeFormat            :"時間格式",
 sys_cg_timeZone              :"時區",
 sys_cg_sysTime               :"系統時間",
 sys_cg_ntpsetting            :"NTP設定",
 sys_cg_nptserver             :"NTP伺服器",
 sys_cg_port                  :"連接埠",
 sys_cg_updateInv             :"更新週期 (分鐘)：",
 sys_cg_using                 :"啟用",
 sys_cg_noUsing               :"不啟用",
 //网络设置                     ",
 sys_wl_netInter              :"網路連接埠",
 sys_wl_autoGet               :"自動取得",
 sys_wl_ipAddr                :"IP位址",
 sys_wl_subNet                :"子網路遮罩",
 sys_wl_gateway               :"預設閘道",
 sys_wl_macAddr               :"MAC位址",
 sys_wl_dnsServer             :"DNS伺服器",
 sys_wl_dnsGetFun             :"DNS獲取方式",//me
 sys_wl_dnsAutoGet            :"自動取得",
 sys_wl_dnsMyGet              :"手動取得",
 sys_wl_firstDNS              :"慣用DNS",//me
 sys_wl_backDNS               :"其他DNS",//me
 sys_wl_defutNet              :"預設網路卡",
 sys_wl_useThisNet            :"使用此網路介面設定",
 /////编辑                      ",
 sys_wl_title                 :"編輯網路連接埠",
  sys_wl_mode                  :"模式",
 sys_wl_mode_static           :"靜態",
  sys_wl_mode_dhcp             :"DHCP",
  sys_wl_IpVersion             :"IP版本",
 sys_wl_addr                  :"位址",
 //设备管理                     ",
 sys_equ_mode                 :"存取模式",
 sys_equ_video                :"視訊模式",
  sys_equ_strategy             :"抓拍策略",
 sys_equ_image                :"圖片模式",
 sys_equ_deepImage            :"純抓拍模式",
 sys_equ_addEqu               :"新增裝置",
  sys_equ_chan                 :"通道",
 sys_equ_chanNum              :"通道編號",
 sys_equ_chanName             :"通道名稱",
 sys_equ_ipOrDomain           :"IP/網域名稱",
 sys_equ_equType              :"裝置類型",
 sys_equ_protocol             :"通訊協定",
 sys_equ_port                 :"連接埠",
 sys_equ_onlineStat           :"上線狀態",
 sys_equ_isOnline             :"上線",
 sys_equ_noOnline             :"離線",
 sys_equ_clMod_jz             :"精準模式",
 sys_equ_clMod_ds             :"定時模式",
 sys_equ_clMod_ss             :"即時模式",
 sys_equ_imgMode1             :"抓拍攝影機",
 sys_equ_imgMode2             :"網路攝影機",
  sys_equ_serverID             :"SIP伺服器ID",
  sys_equ_noserverID           :"SIP伺服器ID不能為空",
  sys_equ_cameraID             :"SIP相機ID",
  sys_equ_nocameraID           :"SIP相機ID不能為空",
  sys_equ_port_spi             :"SIP伺服器埠",
  sys_equ_ip_address_spi       :"SIP伺服器IP",
 ////添加&修改&查看             ",
  sys_equ_title_show           :"設備詳情",
  sys_equ_title_edit           :"編輯設備",
  sys_equ_title_dele           :"刪除設備",
  sys_equ_delete               :"此操作將會永久刪除此設備，是否繼續？",
  sys_equ_deleteErr            :"沒有空閑通道，無法進行添加操作",
  sys_equ_deleteOk             :"刪除設備成功",
  sys_equ_libTag               :"目標庫",
 sys_equ_threshold            :"閾值(%)",
  sys_equ_userName             :"使用者名",
 sys_equ_password             :"密碼",
  sys_equ_codeStream           :"碼流",
  sys_equ_ipAddr               :"IP地址",
 sys_equ_equAddr              :"相機位置",
 //热区绘制                     ",
 hotToDraw_title              :"繪製熱區",
 //系统信息                     ",
 sys_info_version             :"版本資訊",
 sys_info_productEq           :"產品序號",
 sys_info_sysVer              :"系統版本",
  sys_info_webVer              :"WEB版本",
  sys_info_anthor              :"其他",
 sys_info_sysReboot           :"系統重啟",//me
 sys_info_reboot              :"啟動",//me

  system_resource              : "系统资源",
  cpu_usage                    : "CPU 使用率",
  memory_usage                 : "内存使用率",
  
 //存储管理                     ",
 sys_save_setting             :"儲存設定",
 sys_save_all                 :"總容量(MB)",
 sys_save_residue             :"剩餘(MB)",
 sys_save_plan                :"儲存計劃",
 sys_save_strategy            :"儲存策略",
 sys_save_fullCover           :"錄滿即覆寫",
 sys_save_fullStop            :"錄滿即停止",
  sys_save_emptyRecord         :"清空記錄",//1.2+
  sys_save_warn                :"此項操作將清空抓拍和警報記錄，是否清空？",//1.2+
  sys_save_delSucc             :"抓拍和警報記錄已清空", //1.2+
  //接口协议                   
 sys_api_equId                :"裝置ID",
 sys_api_produce              :"存取通訊協定",
 sys_api_mqttPort             :"mqtt連接埠",
 sys_api_mqttName             :"mqtt使用者名稱",
 sys_api_mqttPwd              :"mqtt密碼",
 sys_api_title                :"HTTP組態",
 //输入提示                     ",
 inputError                   :"您還有欄位尚未填寫",
 //placehor                     ",
 choose                       :"請選取",
 inputLibName                 :"請輸入資料庫名稱",
 inputIDOrName                :"請輸入姓名",
 inputTime                    :"請選取系統時間",
 inputName                    :"請輸入姓名",
 inputAge                     :"請輸入年齡",
 inputIdent                   :"請輸入人員證件編號",
 inputAddr                    :"請輸入位址",
 chooseDateTime               :"選取日期時間",
  ///login                     
 inputUserName                :"請輸入使用者名稱",
 inputUserPwd                 :"請輸入密碼",
 //http                         ",
 inputDeviceId                :"裝置ID不可空白",
 inputHttpUrl                 :"http_url不可空白",
 inputHttpKey                 :"http_key不可空白",
 //err                          ",
 libNameErr                   :"資料庫名稱不可空白",
 libTypeErr                   :"尚未選取資料庫類型",
 ageErr                       :"請填寫正確的年齡",
 imageErr                     :"請上傳圖片",
 sysTimeErr                   :"系統時間不可空白，或者格式不正確！",
 mqttPortNullErr              :"mqtt連接埠不可空白",
 mqttPortErr                  :"mqtt連接埠不符合格式 (0-65535)",
 mqttTopicErr                 :"mqtt_topic不可空白",
 mqttIpErr                    :"mqtt_ip不可空白",
 mqttNameErr                  :"mqtt使用者名稱不可空白",
 mqttPwdErr                   :"mqtt密碼不可空白",
 //confirm                      ",
 changeModeWarn               :"確認後系統會清除目前的相機裝置、重新啟動服務，是否確定？",
 changeModeTitle              :"變更存取模式",
 changeModeSucc               :"存取模式變更成功！請在20秒後重新整理介面，以重新登入系統",
 changeCLTip                  :"是否要切換到{type}策略？",
 changeCLSucc                 :"抓拍策略變更成功",
 mqttCloseSucc                :"關閉MQTT成功，請等待25秒後重新登入...",
 mqttUpdateSucc               :"修改MQTT組態資訊成功，請等待25秒後重新登入...",
 httpUpdateSucc               :"修改HTTP組態資訊成功，請等待25秒後重新登入...",
 //下载页面                     ",
 download_src                 :"下載連結",
 clickDownload                :"點選下載查看詳細資料",
 saveSuccess                  :"儲存成功",
  updateSuccess                :"修改成功",
                               
  //补缺                       
 onLibrary                    :"所在資料庫",
 deleteLibrayTip              :"此操作將會永久刪除此目標資料庫，是否繼續？",
 deleteLibTitle               :"刪除目標資料庫",
 libraryMaxNumErr             :"目標資料庫數量已達上限",
 addOk                        :"新增成功",
  updateOk                     :"修改成功",
  addTip                       :"新增",
 targetSearchTip              :"請輸入關鍵字",
 addNewFaceInfo               :"單一匯入",
 chooseFolder                 :"選取資料夾",
 batchDelete                  :"批量刪除",
 sureDelete                   :"確定刪除",
 saveTip                      :"儲存",
  sex_hanzi                    :"男",
  sex_meizi                    :"女",
 idCardNumber                 :"證件編號",
                               
  cancelUpdate                 :"取消修改",
 saveUpdate                   :"儲存修改",
 makeSure                     :"確認",
 makeSure2                    :"確定",
 faceMakeSureLoad             :"請確認已下載目前的人臉匯入詳細資料檔，關閉後您不能再下載此檔案，是否繼續？",
                               
 emptyData                    :"暫無資料",
                               
 loginNameNull                :"使用者名稱不可空白",
 loginPwdNull                 :"密碼不可空白",
                               
  TimeTo                       :"至",
                               
 noSupportVideo               :"在圖片模式下，暫時不支援即時播放",
                               
 softUpdate                   :"軟體升級",
 loadUpdatePackage            :"導入升級檔",//me
 clickLoadUpdate              :"選取升級檔案",
 softUpdateTip                :"此操作將會升級軟體，是否繼續？",
 softUpdateSuccess            :"軟體升級成功！請在20秒內重新整理頁面，以重新登入系統",
 noChooseUpdateFile           :"您尚未選取升級檔案",
 rebootTip                    :"此操作將會重新啟動裝置，是否繼續？",
 rebootTitle                  :"重新啟動裝置",
 rebootSuccess                :"即將重新啟動裝置，請等待約25秒後重新登入頁面...",
                               
 export                       :"匯入",
 upgrade                      :"升級",
                               
  flag_yes                     :"是",
  flag_no                      :"否",
                               
 DNSSetErr                    :"DNS格式不正確",
                               
 ipAddrNull                   :"ip位址不可空白",
 subNetNull                   :"子網路遮罩不可空白",
 netWayNull                   :"閘道不可空白",
                               
 dataTimeTitle                :"日期時間",
                               
 hourFomat                    :"小時制",
 noChooseChannel              :"尚未選取通道",
 channelNameNull              :"通道名稱不可空白",
 protocolNull                 :"尚未選取通訊協定",
  URLAddressNull               :"URL地址不能为空",
  IPAddressNull                :"IP地址不能为空",
  IPAddressErr                 :"IP地址格式不正确",
  portNotNull                  :"端口不能为空",
                               
 RTSPAddressNull              :"RTSP位址不可空白",
 IPAddressNull                :"IP位址不可空白",
 IPAddressErr                 :"IP位址格式不正確",
 portNotNull                  :"連接埠不可空白",
                               
 inputInteger                 :"請輸入整數值",
 inputPort                    :"連接埠號碼的範圍介於0至65535",
                               
 chooseLibrary                :"選取目標資源庫",
  thresholdNotNull             :"阈值不能为空",
  libFaceIsNull                :"未设置目标库",
                               
 threshold                    :"閾值",
 thresholdNotNull             :"閾值不可空白",
 libFaceIsNull                :"未設定目標資源庫",
                              
  updateBtn                    :"修改",
                               
  y_m_d                        :"年-月-日",
  m_d_y                        :"月-日-年",
  d_m_y                        :"日-月-年",
                               
 pleChooseChannel             :"請選取通道",
                               
  //https设置                  
 httpsSettingMenu             :"安全設定",//me
 httpsSettingTitle            :"https安全性設定",
 isUsingHttps                 :"是否開啟https",
 https_start                  :"啟用",
 https_unInstall              :"卸載",
 https_upload                 :"上傳",
 https_cert_hp                :"點選以選取SSL憑證",
 https_key_hp                 :"點選以選取SSL金鑰",
 https_load_cert              :"匯入憑證",
 https_cur_cert               :"目前憑證",
 https_cur_key                :"目前金鑰",
 https_load_key               :"匯入金鑰",
                               
  //Flash相关                  
 enableFlashTitle             :"安裝或啟用FLASH播放程式",
 enableFlashTips              :"目前功能需要FLASH播放程式支援，請先安裝或啟用",
                               
 confirmChangeMQTTStatusTitle :"切換存取通訊協定",
  confirmChangeMQTTStatusTips  :"请慎重！切换接入协议，将会清空所有数据，是否确定",

 https_key_no_choose          : "您尚未選取SSL金鑰檔案",
 https_crt_no_choose          : "您尚未選擇SSL憑證檔案",

  //设备管理补缺
 changeModeCl                 : "變更抓拍策略",
  Accurate                     : "精准",
 Timing                       : "定時",
 RealTime                     : "即時",

 drawAreaMsg                  : "熱區長度或寬度不能小於60px",

 networkError                 : "網路異常",
  manage                       : "管理",
 notNull                      : "{name}不可空白",
 valueErr                     : "{name}格式不正確",
 uploadOk                     : "上傳成功",
 unInstallOk                  : "卸載成功",
  
  //1:N人脸对比
 faceCtra_titComp             : "1:N比對",
 faceCtra_grade               : "評分參考",
 faceCtra_frist               : "0~60%： 這兩張人像很可能不是同一人；",
 faceCtra_second              : "60%~85%： 這兩張人像可能是同一人；",
 faceCtra_third               : "85% ~ 100%： 這兩張人像極可能是同一人！",
  faceCtra_target              :"請選取目標資源庫",//1.2+

  // M:N 对比
 retri_tit                    : "比對",
  retri_getResult              : "TOP-N",
 compare_libary               :"請選取檢索目標資料庫",

  // 1.2.1
 interface_protocol_conf      :"介面通訊協定設定",
 alarmRule_blacklist          :"黑名單",
 alarmRule_whitelist          :"白名單",
  alarmRule_stranger           :"陌生人",

 // 库管理
  lib_custom_max_error         :"自定义属性最多五个",
  minimum_face_pix_setting     :"最小人脸像素设置",
 detection_frame_rate         :"检测帧率",
  // 用户管理
  user_info                    :"用户",
  user_role                    :"角色",
  user_onLineOr                :"用户在线状态",
  edit_password                :"修改密码",
  input_newPwd                 :"新密码",
  plInput_newPwd               :"请输入新密码",
  plInput_en_newPwd            :"请确认密码",
  ensure_newPwd                :"确认密码",
  pwd_inconsistency            :"两次密码输入不一致",
  pwd_Length                   :"密码长度不小于8位",
  pwd_rules                    :"密碼應為8位字母、數位和特殊符號組合",
  user_rule                    :"應為字母、數字、字元 (@和._-)，長度&lt;50",//1.2+
  // 系统日志
  logs_edit_content            :"日志内容",
  logs_edit_person             :"用户",
  logs_edit_time               :"操作时间",
  // logs_logout                  :"登出",
  logs_open                    :"开机",
  logs_off                     :"关机",
  logs_web_off                 :"网口状态",
  logs_edit_user               :"操作日志",
  logs_fun_edit                :"功能操作",
  logs_type                    :"日志类型",
  logopt_result                :"操作结果",
  logopt_state_suc             :"成功",
  logsQuery                    :"查詢",
  logsFile                     :"日誌檔",
  FileSize                     :"檔案大小",
  updateTime                   :"修改時間",
  inputViperUrl                :"url",
 inputViperUrlErr              : "url不可空白",
  inputViperKey                :"key",
 inputViperSwitch              : "開啟",
 inputViperKeyErr              : "key不可空白",
  http_url                     :"http_url",
  http_key                     :"http_key",
  
// 信号联动管理
  device_name                  :"關聯設備名稱",
  device_name_notNull          :"關聯設備名稱不能為空",
  device_detail                :"關聯設備詳情",
  device_sys_equ_equType       :"關聯設備類型",
  assoc_device_ip              :"關聯設備IP",
  assoc_device_ip_notNull      :"關聯設備IP不能為空",
  assoc_device_ip_IPErr        :"關聯設備IP格式不正確",
  assoc_sys_equ_port           :"關聯端口",
  assoc_sys_equ_port_notNull   :"關聯端口不能為空",
  assoc_sys_equ_port_inputPort :"關聯端口範圍從0到65535",
  assoc_new_device             :"添加關聯設備",
  relay_new                    :"繼電器",
  select_device                :"選擇設備",
  delete_assoc                 :"此操作將會永久刪除關聯設備，是否繼續？",
  delete_assocTitle            :"刪除關聯設備",
  assoc_channelName            :"通道名稱",   

  select_all                   : "全選",

  manufacturer                 : "廠商",
  dahua                        : "Dahua",
  hikvision                    : "HIKVISION",
  sensedlc11                   : "SenseDLC",
  // 高级设置
  adv_warn                     :"輸入有誤,應為整數且在{min}—{max}之間",
  adv_betwwennum               :"最大值不能小於最小值",
// 信号联动管理
  // equipment_associated         :"设备关联",
  equipment_nonull             :"不能为空",
  equipment_userdefined        :"自定义属性",
  default_value                :"默认值",
  // equipment_dev_ip             :"设备IP",
  admin                        : "管理員",
  all_user_name                : "全部用户",

  add_user                     : "新增用户",

  add_role                     : "新增角色",
  role_info                    : "角色详情",
  set_role                     : "编辑角色",
  permission                   : "权限",

  role_notnull                 : "角色名不能为空",
  
  role_del_title               : "删除角色",
  role_del_tip                 : "此操作将会永久删除此角色，是否继续？",

  cur_user_pwd                 : "当前用户密码",
  cur_user_pwd_notnull         : "当前用户密码不能为空",
  user_notnull                 : "用户名不能为空",
  role_choose                  : "请选择角色",
  set_user                     : "编辑用户",
  confirm_pwd                  : "密码验证",
  user_del_title               : "删除用户",
  user_del_tip                 : "此操作将会永久删除此用户，是否继续？",
  user_info                    : "用户详情",
  creater                      : "创建人",
  sys_restore_title            : "恢復預設設定",//1.2+
  sys_restore_tips             : "除了網路及安全設定以外，其他模組均會恢復成原廠設定，是否繼續？", //1.2+,
  image_code_title             : "向右滑動完成拼圖",//1.2+
  image_code_error             : "請先完成拼圖驗證碼",//1.2+
};
