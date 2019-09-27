import zhTWLocale from 'element-ui/lib/locale/lang/zh-TW'
import errorCode  from "./zhTW-code"
import msgCode from "./zhTW-msg-code"
import sysCode from "./zhTW-msg-code"
export default {  
  // element-ui
  ...zhTWLocale,
  //errorCode
  ...errorCode,
  // msgCode
  ...msgCode,
  ...sysCode,
  //标题
  logoTitel                    :"智能边缘节点",
  //主菜单                     
  realTimeVideo                :"实时预览",
  recordQuery                  :"记录查询", 
  snapshotQuery                :"抓拍记录查询",
  alarmQuery                   :"告警记录查询",
  faceService                  :"智能业务", 
  libraryManage                :"人像库管理", 
  oneToOne                     :"1:1比对",  
  retrieval                    :"以图搜图", 
  eventManage                  :"事件管理",  //1.2*
  alarmRuleSet                 :"告警弹窗", 
  signalLinkage                :"訊號聯動管理", //1.2*
  userManage                   :"使用者管理", //1.2*
  sysSettings                  :"系统设置",
  generalSettings              :"常规设置",
  networkSettings              :"网络设置",
  deviceManage                 :"设备管理",
  sysInfo                      :"系统信息",
  storageManage                :"存储管理",
  sysManage                    :"系統管理", //1.2*
  interfaceProtocol            :"接口协议",
  logs                         :"系統記錄檔", //1.2* 
  logs_manage                  :"記錄管理", //1.2+
  advancedSet                  :"進階設定", //1.2*
  languge                      :"语言",
  login                        :"登录",
  logout                       :"注销",
  //导出                       
  totalNumTip                  :"每次最多导出 {num} 条数据",
  curNumTip                    :"当前总数据量为:{num} 条",
  batchExport                  :"批量导出",
  exportInterval               :"导出数量区间",
  startExport                  :"开始",
  endExport                    :"结束",
  //通用                       
  submitTag                    :"确定",
  exportAllTag                 :"全部导出",
  filterCondition              :"筛选条件",
  exportTag                    :"导出",
  seqNumber                    :"序号",
  operation                    :"操作",
  showDetail                   :"查看详情",
  allTip                       :"全部",
  showDetailOne                :"查看",
  default                      :"默认",
  flush                        :"刷新",
  cancel                       :"取消",
  delete                       :"删除",
  edit                         :"编辑",
  reset                        :"重置",
  close                        :"关闭",
  startDate                    :"开始日期",
  endDate                      :"结束日期",
  similarity                   :"相似度",
  time                         :"时间",
  hint                         :"提示",
  details                      :"详情",
  settingSuccess               :"设置成功",
  faceLead                     :"批量导入", 
  confDelete                   :"确认删除",
  deleteOk                     :"删除成功",
  deleteError                  :"删除失败, ",
  //file                       
  chooseFile                   :"选择文件",
  fileHint                     :"请确认当前导出文件已被下载,关闭后您需重新导出, 是否继续?",
  fileErrHint                  :"图片上传失败，是否重新上传？",
  uploadSuccess                :"图片已上传成功",
  putInSuccNumber              :"入库成功数量",
  putInErrNumber               :"入库失败数量",
  uploadAgain                  :"重新上传",
  //实时预览                   
  realTimeVideoTag             :"监控视频",
  oneSplitScreen               :"一分屏",
  fourSplitScreen              :"四分屏",
  eightSplitScreen             :"八分屏",
  autoMaticAlarm               :"自动显示告警弹窗",
  captureInfo                  :"抓拍信息",
  //抓拍记录                   
  captureTitle                 :"抓拍详情",
  allChannel                   :"所有通道",
  captureFigure                :"图片",
  channelNumber                :"通道号",
  channelName                  :"通道名称",
  captureDate                  :"抓拍时间",
  //common                     
  warnTitle                    :"报警详情",
  capturingFace                :"抓拍人脸",
  compareFace                  :"对比人脸",
  uoloadForCompare             :"上传人脸进行比对",
  uploadForSearch              :"上传人脸进行搜索",
  reUploadSearch               :"点击图片重新上传",
  //告警记录                   
  libraryNameTip               :"目标库",
  libraryAttrTip               :"库属性",
  allLibrary                   :"所有目标库",
  allLibraryAttr               :"所有库类型",
  blackLibType                 :"黑名单库",
  writeLibType                 :"白名单库",
  //目标库                     
  libraryNameRe                :"请输入库名",
  libraryName                  :"库名",
  pictureTotal                 :"图片数量",
  createTime                 :"创建时间",
  libraryTypeTag               :"类型",
  addLibrary                   :"新增目标库",
  editLibrary                  :"编辑目标库",
  //人脸库                     
  face_picTag                  :"图片",
  face_nameTag                 :"姓名",
  face_ageTag                  :"年龄",
  face_sexTag                  :"性别",
  // 告警详情下新增的字段
  face_mask                    :"口罩", // 1.2 +
  face_glasses                 :"眼鏡", // 1.2 +
  face_mustache                :"鬍子", // 1.2 +
  face_have                    :"有", // 1.2+
  face_no                      :"無",// 1.2+

  //人脸库-新增                
  face_rl_addTitle             :"新增目标源",
  //人脸库-编辑                
  face_rl_eidtTitle            :"编辑人员信息",
  //人脸库-详情                
  face_rl_infoTitle            :"人员详情",
  face_rl_delete               :"删除人员",
  face_rl_edit                 :"修改属性",
  //删除                       
  face_noChoose                :"您尚未选择记录",
  face_onlyDelete              :"最多只能删除50条记录",
  face_batchDelete             :"您正在删除{num}条记录,是否继续？",
  face_deleteTitle             :"此操作将永久删除此人员详情, 是否继续?",
  face_affi_delete             :"删除人员详情",
  //系统设置                   
  //常规设置                   
  sys_cg_dateFormat            :"日期格式",
  sys_cg_timeFormat            :"时间格式",
  sys_cg_timeZone              :"时区",
  sys_cg_sysTime               :"系统时间",
  sys_cg_ntpsetting            :"NTP设置",
  sys_cg_nptserver             :"NTP服务器",
  sys_cg_updateInv             :"更新周期(分钟) :",
  sys_cg_using                 :"启用",
  sys_cg_noUsing               :"不启用",
  //网络设置                   
  sys_wl_netInter              :"网口",
  sys_wl_autoGet               :"自动获取",
  sys_wl_ipAddr                :"IP地址",
  sys_wl_subNet                :"子网掩码",
  sys_wl_gateway               :"网关",
  sys_wl_macAddr               :"MAC地址",
  sys_wl_dnsServer             :"DNS服务器",
  sys_wl_dnsGetFun             :"DNS获取方式",
  sys_wl_dnsAutoGet            :"自动获取",
  sys_wl_dnsMyGet              :"手动获取",
  sys_wl_firstDNS              :"首选DNS",
  sys_wl_backDNS               :"备选DNS",
  sys_wl_defutNet              :"默认网卡",
  sys_wl_useThisNet            :"使用此网络接口设置",
  /////编辑                    
  sys_wl_title                 :"编辑网口",
  sys_wl_mode                  :"模式",
  sys_wl_mode_static           :"静态",
  sys_wl_mode_dhcp             :"DHCP",
  sys_wl_IpVersion             :"IP版本",
  sys_wl_addr                  :"地址",
  //设备管理                   
  sys_equ_mode                 :"接入模式",
  sys_equ_video                :"视频模式",
  sys_equ_strategy             :"抓拍策略",
  sys_equ_image                :"图片模式",
  sys_equ_deepImage            :"纯抓拍模式",
  sys_equ_addEqu               :"新增设备",
  sys_equ_chan                 :"通道",
  sys_equ_chanName             :"通道名称",
  sys_equ_ipOrDomain           :"IP/域名",
  sys_equ_equType              :"设备类型",
  sys_equ_protocol             :"协议",
  sys_equ_port                 :"端口",
  sys_equ_onlineStat           :"在线状态",
  sys_equ_isOnline             :"在线",
  sys_equ_noOnline             :"不在线",
  sys_equ_clMod_jz             :"精准模式",
  sys_equ_clMod_ds             :"定时模式",
  sys_equ_clMod_ss             :"实时模式",
  sys_equ_imgMode1             :"抓拍摄像机",
  sys_equ_imgMode2             :"网络摄像机",
  sys_equ_serverID             :"SIP伺服器ID",//1.2*
  sys_equ_noserverID           :"SIP伺服器ID不可空白", //1.2*
  sys_equ_cameraID             :"SIP相機ID",//1.2*
  sys_equ_nocameraID           :"SIP相機ID不可空白",//1.2*
  sys_equ_port_spi             :"SIP伺服器連接埠ID",//1.2*
  sys_equ_ip_address_spi       :"SIP伺服器IP",//1.2*
  ////添加&修改&查看           
  sys_equ_title_show           :"设备详情",
  sys_equ_title_edit           :"编辑设备",
  sys_equ_title_dele           :"删除设备",
  sys_equ_delete               :"此操作将会永久删除此设备，是否继续?",
  sys_equ_deleteErr            :"没有空闲通道，无法进行添加操作",
  sys_equ_deleteOk             :"删除设备成功",
  sys_equ_libTag               :"目标库",
  sys_equ_threshold            :"阈值(%)",
  sys_equ_userName             :"用户名",
  sys_equ_password             :"密码",
  sys_equ_codeStream           :"码流",
  sys_equ_ipAddr               :"IP地址",
  sys_equ_equAddr              :"相机位置",
  //热区绘制                   
  hotToDraw_title              :"绘制热区",
  //系统信息                   
  sys_info_version             :"版本信息",
  sys_info_productEq           :"产品序列号",
  sys_info_sysVer              :"系统版本",
  sys_info_webVer              :"WEB版本",
  sys_info_anthor              :"其他",
  sys_info_sysReboot           :"系统重启",
  sys_info_reboot              :"重启",

  system_resource              : "系統資源", // 1.2*
  cpu_usage                    : "CPU使用率", // 1.2*
  memory_usage                 : "記憶體使用率", // 1.2*
  
  //存储管理                   
  sys_save_setting             :"存储设置",
  sys_save_all                 :"总容量(MB)",
  sys_save_residue             :"剩余(MB)",
  sys_save_plan                :"存储计划",
  sys_save_strategy            :"存储策略",
  sys_save_fullCover           :"满覆盖",
  sys_save_fullStop            :"满即停",
  sys_save_emptyRecord         :"清空記錄",//1.2+
  sys_save_warn                :"此項操作將清空抓拍和警報記錄，是否清空？",//1.2+
  sys_save_delSucc             :"抓拍和警報記錄已清空", //1.2+
  //接口协议                   
  sys_api_equId                :"设备ID",
  sys_api_produce              :"接入协议",
  sys_api_mqttPort             :"mqtt端口",
  sys_api_mqttName             :"mqtt用户名",
  sys_api_mqttPwd              :"mqtt密码",
  sys_api_title                :"HTTP配置",
  //输入提示                   
  inputError                   :"您还有未填写字段",
  //placehor                   
  choose                       :"请选择",
  inputLibName                 :"请输入库名",
  inputIDOrName                :"请输入姓名",
  inputTime                    :"请选择系统时间",
  inputName                    :"请输入姓名",
  inputAge                     :"请输入年龄",
  inputIdent                   :"请输入人员证件号",
  inputAddr                    :"请输入地址",
  chooseDateTime               :"选择日期时间",
  ///login                     
  inputUserName                :"请输入用户名",
  inputUserPwd                 :"请输入密码",
  //http                       
  inputDeviceId                :"设备ID不能为空",
  inputHttpUrl                 :"http_url不能为空",
  inputHttpKey                 :"http_key不能为空",
  //err                        
  libNameErr                   :"库名不能为空",
  libTypeErr                   :"库类型尚未选择",
  ageErr                       :"请填写正确的年龄",
  imageErr                     :"请上传图片",
  sysTimeErr                   :"系统时间不能为空，或者格式不正确！",
  mqttPortNullErr              :"mqtt端口不能为空",
  mqttPortErr                  :"mqtt端口不符合格式（0-65535）",
  mqttTopicErr                 :"mqtt_topic不能为空",
  mqttIpErr                    :"mqtt_ip不能为空",
  mqttNameErr                  :"mqtt用户名不能为空",
  mqttPwdErr                   :"mqtt密码不能为空",
  //confirm                    
  changeModeWarn               :"确认后系统会清除当前相机设备、重启服务，是否确认？",
  changeModeTitle              :"更改接入模式",
  changeModeSucc               :"接入模式更改成功！请20s后刷新页面重新登录系统",
  changeCLTip                  :"是否要切换到{type}策略？",
  changeCLSucc                 :"抓拍策略更改成功",
  mqttCloseSucc                :"关闭MQTT成功, 请等待25秒后重新登录...",
  mqttUpdateSucc               :"修改MQTT配置信息成功, 请等待25秒后重新登录...",
  httpUpdateSucc               :"修改HTTP配置信息成功, 请等待25秒后重新登录...",
  //下载页面                   
  download_src                 :"下载链接",
  clickDownload                :"点击下载查看详情",
  saveSuccess                  :"保存成功",
  updateSuccess                :"修改成功",
                               
  //补缺                       
  onLibrary                    :"所在库",
  deleteLibrayTip              :"此操作将会永久删除此目标库，是否继续？",
  deleteLibTitle               :"删除目标库",
  libraryMaxNumErr             :"目标库数量已达上限",
  addOk                        :"添加成功",
  updateOk                     :"修改成功",
  addTip                       :"新增",
  targetSearchTip              :"请输入关键词",
  addNewFaceInfo               :"单张导入", 
  chooseFolder                 :"选择文件夹",
  batchDelete                  :"批量删除",
  sureDelete                   :"确定删除",
  saveTip                      :"保 存",
  sex_hanzi                    :"男",
  sex_meizi                    :"女",
  idCardNumber                 :"证件号",
                               
  cancelUpdate                 :"取消修改",
  saveUpdate                   :"保存修改",
  makeSure                     :"确认",
  makeSure2                    :"确定",
  faceMakeSureLoad             :"请确认当前人脸导入详情文件已被下载,关闭后您不能再下载此文件, 是否继续?",
                               
  emptyData                    :"暂无数据",
                               
  loginNameNull                :"用户名不能为空",
  loginPwdNull                 :"密码不能为空",
                               
  TimeTo                       :"至",
                               
  noSupportVideo               :"图片模式下，暂不支持实时播放",
                               
  softUpdate                   :"软件升级",
  loadUpdatePackage            :"导入升级文件",
  clickLoadUpdate              :"选择升级文件",
  softUpdateTip                :"此操作将会升级软件，是否继续？",
  softUpdateSuccess            :"软件升级成功!请在20s秒刷新页面重新登录系统",
  noChooseUpdateFile           :"您还没选择升级文件",
  rebootTip                    :"此操作将会重启设备，是否继续？",
  rebootTitle                  :"重启设备",
  rebootSuccess                :"即将重启设备, 请等待约25秒后重新登录页面...",
                               
  export                       :"导入",
  upgrade                      :"升级",
                               
  flag_yes                     :"是",
  flag_no                      :"否",
                               
  DNSSetErr                    :"DNS格式不正确",
                               
  ipAddrNull                   :"ip地址不能为空",
  subNetNull                   :"子网掩码不能为空",
  netWayNull                   :"网关不能为空",
                               
  dataTimeTitle                :"日期时间",
                               
  hourFomat                    :"小时制",
  noChooseChannel              :"通道尚未选择",
  channelNameNull              :"通道名称不能为空",
  protocolNull                 :"协议尚未选择",                          
  URLAddressNull               :"URL位址不可空白",//1.2*
  IPAddressNull                :"IP地址不能为空",
  IPAddressErr                 :"IP地址格式不正确",
  portNotNull                  :"端口不能为空",
                               
  inputInteger                 :"请输入整数数字值",
  inputPort                    :"端口号的范围从0到65535",
                               
  chooseLibrary                :"选择目标库",
                               
  threshold                    :"阈值",
  thresholdNotNull             :"阈值不能为空",
  libFaceIsNull                :"未设置目标库",
                               
  updateBtn                    :"修改",
                               
  y_m_d                        :"年-月-日",
  m_d_y                        :"月-日-年",
  d_m_y                        :"日-月-年",
                               
  pleChooseChannel             :"请选择通道",
                               
  //https设置                  
  httpsSettingMenu             :"安全设置",
  httpsSettingTitle            :"https安全设置",
  isUsingHttps                 :"是否开启https",
  https_start                  :"启用",
  https_unInstall              :"卸载",
  https_upload                 :"上传",
  https_cert_hp                :"点击选择SSL证书",
  https_key_hp                 :"点击选择SSL密钥",
  https_load_cert              :"导入证书",
  https_cur_cert               :"当前证书",
  https_cur_key                :"当前密钥",
  https_load_key               :"导入密钥",
                               
  //Flash相关                  
  enableFlashTitle             :"安装或者启用FLASH播放器",
  enableFlashTips              :"当前功能需要FLASH播放器支持，请先安装或者启用",
                               
  confirmChangeMQTTStatusTitle :"切换接入协议",
  confirmChangeMQTTStatusTips  :"请慎重！切换接入协议，将会清空所有数据，是否确定",

  https_key_no_choose          : "您尚未选择SSL密钥文件",
  https_crt_no_choose          : "您尚未选择SSL证书文件",

  //设备管理补缺
  changeModeCl                 : "更改抓拍策略",
  Accurate                     : "精准",
  Timing                       : "定时",
  RealTime                     : "实时",

  drawAreaMsg                  : "热区长或宽不能小于60px",

  networkError                 : "网络异常",
  manage                       : "管理",
  notNull                      : "{name}不能为空",
  valueErr                     : "{name}格式不正确",
  uploadOk                     : "上传成功",
  unInstallOk                  : "卸载成功",
  
  //1:N人脸对比
  faceCtra_titComp             : "1:N比对",
  faceCtra_grade               : "评分参考",
  faceCtra_frist               : "0 ~ 60%: 这两张人像很有可能不是同一个人；",
  faceCtra_second              : "60% ~ 85%: 这两张人像有可能是同一个人；",
  faceCtra_third               : "85% ~ 100%: 这两张人像极有可能是同一个人！",
  faceCtra_target              :"請選取目標資源庫",//1.2+

  // M:N 对比
  retri_tit                    : "比对",
  retri_getResult              : "TOP-N",
  compare_libary               :"请选择检索目标库",

  // 1.2.1
  interface_protocol_conf      :"接口协议设置",
  alarmRule_blacklist          :"黑名单",
  alarmRule_whitelist          :"白名单",
  alarmRule_stranger           :"陌生人",

 // 库管理
  lib_custom_max_error         :"自訂屬性最多五個", //1.2 *
  minimum_face_pix_setting     :"最小人臉像素", //1.2 *
  maximum_face_pix_setting     :"最大人臉像素", // 1.2*
  detection_frame_rate         :"偵測影格速率", // 1.2 *
  // 用户管理
  user_role                    :"角色名稱", //1.2 *
  edit_password                :"修改密碼", //1.2 *
  input_newPwd                 :"新密碼",//1.2*
  plInput_newPwd               :"請輸入密碼", //1.2*
  plInput_en_newPwd            :"請確認密碼", //1.2*
  ensure_newPwd                :"確認密碼", // 1.2*
  newPwd_success               :"密碼修改成功", //1.2*
  place_ensure_newPwd          :"請輸入確認密碼", //1.2*
  pwd_inconsistency            :"密碼輸入不一致", //1.2*
  reset_password               :"重設密碼", //1.2*
  pwd_Length                   :"密碼長度不小於8位數",//1.2*
  pwd_rules                    :"密碼應為8位數字母、數字和特殊符號組合",//1.2*
  user_rule                    :"應為字母、數字、字元 (@和._-)，長度&lt;50",//1.2+长度有限制，不超过60个字符例如：Should be letters,Numbers,characters (@ and. -),length <50（不准）
  // 系统日志
  logs_edit_content            :"記錄檔內容",//1.2*
  logs_edit_person             :"使用者",// 1.2*
  logs_edit_time               :"操作時間",//1.2*
  // logs_logout                  :"登出",
  logs_open                    :"開機",//1.2*
  logs_off                     :"關機",//1.2*
  logs_web_off                 :"網路埠狀態",//1.2*
  logs_edit_user               :"動作記錄檔",//1.2*
  logs_fun_edit                :"功能操作",//1.2*
  logs_type                    :"記錄檔類型",//1.2*
  logopt_result                :"操作結果",//1.2*
  logopt_state_suc             :"成功",//1.2*
  logsQuery                    :"查詢",//1.2*
  logsFile                     :"日志文件",
  FileSize                     :"檔案大小",//1.2*
  updateTime                   :"修改時間",//1.2*
  inputViperUrl                :"url",
  inputViperUrlErr             :"url不能为空",
  inputViperKey                :"key",
  inputViperSwitch             :"开启",
  inputViperKeyErr             :"key不能为空",
  http_url                     :"http_url",
  http_key                     :"http_key",
  
// 信号联动管理
  device_name                  :"關聯裝置名稱",//1.2*
  device_name_notNull          :"關聯裝置名稱不可空白",//1.2*
  device_detail                :"檢視詳細資料",//1.2*
  device_sys_equ_equType       :"關聯裝置類型",//1.2*
  assoc_device_ip              :"關聯裝置IP",//1.2*
  assoc_device_ip_notNull      :"關聯裝置IP不可空白",//1.2*
  assoc_device_ip_IPErr        :"關聯裝置IP格式不正確",//1.2*
  assoc_sys_equ_port           :"關聯連接埠",//1.2*
  assoc_sys_equ_port_notNull   :"關聯連接埠不可空白",//1.2*
  assoc_sys_equ_port_inputPort :"關聯連接埠號碼的範圍介於0至65535",//1.2*
  assoc_new_device             :"新增關聯裝置",//1.2*
  relay_new                    :"繼電器",//1.2*
  select_device                :"選取裝置",//1.2*
  delete_assoc                 :"此操作將會永久刪除關聯裝置，是否繼續？",//1.2*
  delete_assocTitle            :"刪除關聯裝置",//1.2*
  assoc_channelName            :"通道名稱", //1.2*

  select_all                   : "全選",//1.2*

  manufacturer                 : "廠商",//1.2*
  dahua                        : "Dahua",
  hikvision                    : "HIKVISION",
  sensedlc11                   : "SenseDLC",
  // 高级设置
  adv_warn                     :"輸入錯誤，應為整屬且在{min}—{max}之間",//1.2*
  adv_betwwennum               :"最大值不能小於最小值",//1.2*
// 信号联动管理
  // equipment_associated         :"设备关联",
  equipment_nonull             :"不可空白",//1.2*
  equipment_userdefined        :"自訂屬性",//1.2*
  default_value                :"預設值",//1.2*
  // equipment_dev_ip             :"设备IP",

  admin                        : "管理員",//1.2*

  add_user                     : "新增使用者",//1.2*

  add_role                     : "新增角色",//1.2*
  role_info                    : "角色詳細資料",//1.2*
  set_role                     : "編輯角色",//1.2*
  permission                   : "權限",//1.2*

  role_notnull                 : "角色名稱不可空白",//1.2*
  
  role_del_title               : "刪除角色",//1.2*
  role_del_tip                 : "此操作將會永久刪除此角色，是否繼續？",//1.2*

  cur_user_pwd                 : "目前的使用者密碼",//1.2*
  cur_user_pwd_notnull         : "目前的使用者密碼不可空白",//1.2*
  user_notnull                 : "使用者名稱不可空白",//1.2*
  role_choose                  : "請選取角色",//1.2*
  set_user                     : "編輯使用者",//1.2*
  confirm_pwd                  : "密碼驗證",//1.2*
  user_del_title               : "刪除使用者",//1.2*
  user_del_tip                 : "此操作將會永久刪除此使用者，是否繼續？",//1.2*
  user_info                    : "使用者詳細資料", // 1.2 *
  creater                      : "建立者",//1.2*
  sys_restore_title            : "恢復預設設定",//1.2+
  sys_restore_tips             : "除了網路及安全設定以外，其他模組均會恢復成原廠設定，是否繼續？", //1.2+,
  image_code_title             : "向右滑動完成拼圖",//1.2+
  image_code_error             : "請先完成拼圖驗證碼",//1.2+

};
