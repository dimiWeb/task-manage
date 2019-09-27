import enLocale from 'element-ui/lib/locale/lang/en'
import errorCode  from "./en-code"
import msgCode from "./en-msg-code"
import sysCode from "./en-msg-code"
export default {  
  // element-ui
  ...enLocale,
  //errorCode
  ...errorCode,
  // msgCode
  ...msgCode,
  ...sysCode,
  //标题
  logoTitel                    :"Intelligent Edge Device",
  //主菜单                     
  realTimeVideo                :"Live Preview",
  recordQuery                  :"Record Query",  
  snapshotQuery                :"Capture Record Query",
  alarmQuery                   :"Alarm Record Query",
  faceService                  :"Intelligent Service", 
  libraryManage                :"Portrait Database Management",
  oneToOne                     :"1:1 Comparison",  
  retrieval                    :"Image Retrieval",  
  eventManage                  :"Event Management",  //1.2*
  alarmRuleSet                 :"Alarm Pop-ups",  
  signalLinkage                :"Signal Linkage Management", //1.2*
  userManage                   :"User Management", //1.2*
  sysSettings                  :"System Settings",
  generalSettings              :"General Settings",
  networkSettings              :"Network Settings",
  deviceManage                 :"Device Management",
  sysInfo                      :"System Information",
  storageManage                :"Storage Management",
  sysManage                    :"System Management",
  interfaceProtocol            :"Interface Protocol",
  logs                         :"System Log", //1.2* 
  logs_manage                  :"Log Management", //1.2+
  advancedSet                  :"Advanced Settings", //1.2
  languge                      :"Language",
  login                        :"Login",
  logout                       :"Logout",
  //导出                       
  totalNumTip                  :"You can export up to {num} records at a time",
  curNumTip                    :"Current total records: {num}",
  batchExport                  :"Batch Export",
  exportInterval               :"Export quantity range",
  startExport                  :"Start",
  endExport                    :"End",
  //通用                       
  submitTag                    :"OK",
  exportAllTag                 :"Export All",
  filterCondition              :"Filter by",
  exportTag                    :"Export",
  seqNumber                    :"No.",
  operation                    :"Operation",
  showDetail                   :"View Details",
  allTip                       :"All",
  showDetailOne                :"View",
  default                      :"Default",
  flush                        :"Refresh",
  cancel                       :"Cancel",
  delete                       :"Delete",
  edit                         :"Edit",
  reset                        :"Reset",
  close                        :"Close",
  startDate                    :"Start Date",
  endDate                      :"End Date",
  similarity                   :"Similarity",
  time                         :"Time",
  hint                         :"Tips",
  details                      :"Details",
  settingSuccess               :"OK",
  faceLead                     :"Batch Import",
  confDelete                   :"Delete",
  deleteOk                     :"OK",
  deleteError                  :"Failed to delete ",
  //file                       
  chooseFile                   :"Select Files",
  fileHint                     :"Please confirm that the current export file has been downloaded. After closing, you will need to export again. Continue?",
  fileErrHint                  :"Uploading an image failed, re-upload?",
  uploadSuccess                :"Image uploaded successfully",
  putInSuccNumber              :"Successes",
  putInErrNumber               :"Failures",
  uploadAgain                  :"Re-upload",
  //实时预览                   
  realTimeVideoTag             :"Live Stream",
  oneSplitScreen               :"One Screen",
  fourSplitScreen              :"Quad Screen",
  eightSplitScreen             :"Octuple Screen",
  autoMaticAlarm               :"Automatic Alarm Pop-ups",
  captureInfo                  :"Capture Info",
  //抓拍记录                   
  captureTitle                 :"Capture Details",
  allChannel                   :"All Channels",
  captureFigure                :"Images",
  channelNumber                :"Channel No.",
  channelName                  :"Channel Name",
  captureDate                  :"Capture Time",
  //common                     
  warnTitle                    :"Alarm Details",
  capturingFace                :"Capture Face Image",
  compareFace                  :"Portrait Database Image",
  // faceIdent                    :"Identity",
  uoloadForCompare             :"Upload face image to compare",
  uploadForSearch              :"Upload face image to search",
  reUploadSearch               :"Click image to re-upload",
  //告警记录                   
  libraryNameTip               :"Database",
  libraryAttrTip               :"Database Attribute",
  allLibrary                   :"All Databases",
  allLibraryAttr               :"All Database Types",
  blackLibType                 :"Blacklist Database",
  writeLibType                 :"Whitelist Database",
  //目标库                     
  libraryNameRe                :"Enter database name",
  libraryName                  :"Name",
  pictureTotal                 :"Total",
 // libCrateTime                 :"Creation Time",
 // libraryTypeTag               :"Type",
  addLibrary                   :"Add Database",
  editLibrary                  :"Edit Database",
  //人脸库                     
  face_picTag                  :"Images",
  face_nameTag                 :"Name",
  face_ageTag                  :"Age",
  face_sexTag                  :"Gender",
  // 告警详情下新增的字段
  face_mask                    :"Mask", // 1.2 +
  face_glasses                 :"Glasses", // 1.2 +
  face_mustache                :"Mustache", // 1.2 +
  face_have                    :"Yes", // 1.2+
  face_no                      :"No",// 1.2+
  //人脸库  
  face_rl_addTitle             :"Add target source",
  face_rl_eidtTitle            :"Edit person info",
  face_rl_infoTitle            :"Person Details",
  face_rl_delete               :"Delete",
  face_rl_edit                 :"Edit Attribute",
  //删除                       
  face_noChoose                :"You haven't selected a record",
  face_onlyDelete              :"You can delete up to 50 records",
  face_batchDelete             :"You are deleting {num} records, continue?",
  face_deleteTitle             :"This operation will permanently delete the personnel details, continue?",
  face_affi_delete             :"Delete Personnel Details",                
  //常规设置                   
  sys_cg_dateFormat            :"Date Format",
  sys_cg_timeFormat            :"Time Format",
  sys_cg_timeZone              :"Time Zone",
  sys_cg_sysTime               :"System Time",
  sys_cg_ntpsetting            :"NTP Settings",
  sys_cg_nptserver             :"NTP Server",
  // sys_cg_port                  :"Port",
  sys_cg_updateInv             :"Update Cycle (mins): ",
  sys_cg_using                 :"Enable",
  sys_cg_noUsing               :"Disable",
  //网络设置                   
  sys_wl_netInter              :"Network Port",
  sys_wl_autoGet               :"DHCP",
  sys_wl_ipAddr                :"IP Address",
  sys_wl_subNet                :"Subnet Mask",
  sys_wl_gateway               :"Gateway",
  sys_wl_macAddr               :"MAC Address",
  sys_wl_dnsServer             :"DNS Server",
  sys_wl_dnsGetFun             :"DNS Setup",
  sys_wl_dnsAutoGet            :"DHCP",
  sys_wl_dnsMyGet              :"Manual",
  sys_wl_firstDNS              :"Primary",
  sys_wl_backDNS               :"Secondary",
  sys_wl_defutNet              :"Default NIC",
  sys_wl_useThisNet            :"Network Port",
  /////编辑                    
  sys_wl_title                 :"Edit Network Port",
  sys_wl_mode                  :"Mode",
  sys_wl_mode_static           :"Static",
  sys_wl_mode_dhcp             :"DHCP",
  sys_wl_IpVersion             :"IP Version",
  sys_wl_addr                  :"Address",
  //设备管理                   
  sys_equ_mode                 :"Access Mode",
  sys_equ_video                :"Video",
  sys_equ_strategy             :"Capture Strategy",
  sys_equ_image                :"Image",
  sys_equ_deepImage            :"Capture",
  sys_equ_addEqu               :"Add Device",
  sys_equ_chan                 :"Channel",
  // sys_equ_chanNum              :"Channel No.",
  sys_equ_chanName             :"Channel Name",
  sys_equ_ipOrDomain           :"IP/Domain",
  sys_equ_equType              :"Device Type",
  sys_equ_protocol             :"Protocol",
  sys_equ_port                 :"Port",
  sys_equ_onlineStat           :"Status",
  sys_equ_isOnline             :"Online",
  sys_equ_noOnline             :"Offline",
  sys_equ_clMod_jz             :"Accurate",
  sys_equ_clMod_ds             :"Timing",
  sys_equ_clMod_ss             :"Realtime",
  sys_equ_imgMode1             :"Capture Camera",
  sys_equ_serverID             :"SIP Server ID",//1.2*
  sys_equ_noserverID           :"The SIP server ID cannot be empty.", //1.2*
  sys_equ_cameraID             :"SIP Camera ID",//1.2*
  sys_equ_nocameraID           :"The SIP camera ID cannot be empty.",//1.2*
  sys_equ_port_spi             :"SIP Server Port",//1.2*
  sys_equ_ip_address_spi       :"SIP Server IP Address",//1.2*
  sys_equ_ip_address_spi       :"SIP Server IP",
  ////添加&修改&查看             ",
  sys_equ_title_show           :"Device Details",
  sys_equ_title_edit           :"Edit Device",
  sys_equ_title_dele           :"Delete Device",
  sys_equ_delete               :"This operation will permanently delete this device, continue?",
  sys_equ_deleteErr            :"No free channel for more devices",
  sys_equ_deleteOk             :"The device is deleted",
  sys_equ_libTag               :"Database",
  sys_equ_threshold            :"Threshold (%)",
  sys_equ_userName             :"Username",
  sys_equ_password             :"Password",
  sys_equ_codeStream           :"Data Rate",
  sys_equ_ipAddr               :"IP Address",
  sys_equ_equAddr              :"Camera Position",
  //热区绘制                   
  hotToDraw_title              :"ROI",
  //系统信息                   
  sys_info_version             :"Version Information",
  sys_info_productEq           :"Serial Number",
  sys_info_sysVer              :"System Version",
  sys_info_webVer              :"WEB Version",
  sys_info_anthor              :"Others",
  sys_info_sysReboot           :"System Restart",
  sys_info_reboot              :"Restart",               
  system_resource              : "System Resources",
  cpu_usage                    : "CPU Usage",
  memory_usage                 : "MEM Usage",
    //存储管理    
  sys_save_setting             :"Storage Settings",
  sys_save_all                 :"Total (MB)",
  sys_save_residue             :"Free (MB)",
  sys_save_plan                :"Storage Plan",
  sys_save_strategy            :"Storage Strategy",
  sys_save_fullCover           :"Refill",
  sys_save_fullStop            :"Freeze",
  sys_save_emptyRecord         :"Clear Records",//1.2+  
  sys_save_warn                :"This operation will clear capture records and alarm records?",//1.2+
  sys_save_delSucc             :"Capture records and alarm records are cleared.", //1.2+ 
 //接口协议   
  sys_api_equId                :"Device ID",
  sys_api_produce              :"Access Protocol",
  sys_api_mqttPort             :"mqtt Port",
  sys_api_mqttName             :"mqtt Username",
  sys_api_mqttPwd              :"mqtt Password",
  sys_api_title                :"HTTP Configuration",                   
  //输入提示                   
  inputError                   :"There are still empty fields",
  //placehor                   
  choose                       :"Select",
  inputLibName                 :"Enter database name",
  inputIDOrName                :"Enter name",
  inputTime                    :"Select system time",
  inputName                    :"Enter name",
  inputAge                     :"Enter age",
  inputIdent                   :"Enter ID number",
  inputAddr                    :"Enter address",
  chooseDateTime               :"Select date and time",
  ///login                     
  inputUserName                :"Enter username",
  inputUserPwd                 :"Enter password",
  //http                       
  inputDeviceId                :"The device ID cannot be empty",
  inputHttpUrl                 :"http_url cannot be empty",
  inputHttpKey                 :"http_key cannot be empty",
  //err                        
  libNameErr                   :"The database name cannot be empty",
  libTypeErr                   :"No database type selected",
  ageErr                       :"Fill in the correct age",
  imageErr                     :"Upload a face image",
  sysTimeErr                   :"The system time cannot be empty or the format is incorrect!",
  mqttPortNullErr              :"The mqtt port cannot be empty",
  mqttPortErr                  :"The mqtt port does not match the format (0-65535)",
  mqttTopicErr                 :"Mqtt_topic cannot be empty",
  mqttIpErr                    :"Mqtt_ip cannot be empty",
  mqttNameErr                  :"The username of mqtt cannot be empty",
  mqttPwdErr                   :"The password of mqtt cannot be empty",
  //confirm                    
  changeModeWarn               :"After confirming, the system will clear the current cameras and restart the service. Are you sure to confirm?",
  changeModeTitle              :"Switch access mode",
  changeModeSucc               :"Access mode changed successfully!Please refresh the page in 20s and log in to the system again",
  changeCLTip                  :"Do you want to switch to the {type} strategy?",
  changeCLSucc                 :"Capture strategy changed successfully",
  mqttCloseSucc                :"MQTT closed successfully. Please log in again in 25s...",
  mqttUpdateSucc               :"MQTT configuration information modified successfully. Please log in again in 25s...",
  httpUpdateSucc               :"HTTP configuration information modified successfully. Please log in again in 25s...",
  //下载页面                   
  download_src                 :"Download Link",
  clickDownload                :"Click to download for details",
  saveSuccess                  :"Saved",
  updateSuccess                :"Modified",                           
  //补缺                       
  onLibrary                    :"Database",
  deleteLibrayTip              :"This operation will permanently delete this database, continue?",
  deleteLibTitle               :"Delete Database",
  libraryMaxNumErr             :"The number of the databases has reached the limit",
  addOk                        :"Added",
  updateOk                     :"Modified",
  addTip                       :"Add",
  targetSearchTip              :"Enter keyword",
  addNewFaceInfo               :"Single Import",
  chooseFolder                 :"Select Folder",
  batchDelete                  :"Batch Delete",
  sureDelete                   :"OK",
  saveTip                      :"Save",
  sex_hanzi                    :"Male",
  sex_meizi                    :"Female",
  idCardNumber                 :"ID Number",                             
  cancelUpdate                 :"Cancel",
  saveUpdate                   :"Save",
  makeSure                     :"Confirm",
  makeSure2                    :"OK",
  faceMakeSureLoad             :"Please confirm that the file of current face import details has been downloaded. After closing, you can no longer download this file, continue?",                             
  emptyData                    :"No data yet",                             
  loginNameNull                :"The username cannot be empty",
  loginPwdNull                 :"The password cannot be empty",                              
  TimeTo                       :"to",                             
  noSupportVideo               :"In image mode, live video is not supported",                        
  softUpdate                   :"Software Upgrade",
  loadUpdatePackage            :"Upgrade File",
  clickLoadUpdate              :"Select Upgrade File",
  softUpdateTip                :"This operation will upgrade the software, continue?",
  softUpdateSuccess            :"Software upgrade is successful! Please refresh the page in 20s and log in to the system again",
  noChooseUpdateFile           :"You haven't selected an upgrade file yet",
  rebootTip                    :"This operation will restart the device, continue?",
  rebootTitle                  :"Restart",
  rebootSuccess                :"The device will be restarted. Please log in again in about 25s…",                          
  export                       :"Import",
  upgrade                      :"Upgrade",                             
  flag_yes                     :"Yes",
  flag_no                      :"No",                        
  DNSSetErr                    :"Incorrect DNS format",
                               
  ipAddrNull                   :"The IP address cannot be empty",
  subNetNull                   :"The subnet mask cannot be empty",
  netWayNull                   :"The gateway cannot be empty",                     
  dataTimeTitle                :"Date Time",                      
  hourFomat                    :"Hour System",
  noChooseChannel              :"The channel has not been selected",
  channelNameNull              :"The channel name cannot be empty",
  protocolNull                 :"The protocol has not been selected",                 
  URLAddressNull               :"The URL cannot be empty.",//1.2*                            
  
  // RTSPAddressNull              :"RTSP位址不可空白",
  IPAddressNull                :"The IP address cannot be empty",
  IPAddressErr                 :"Incorrect IP address format",
  portNotNull                  :"The port cannot be empty",
  inputInteger                 :"Please enter an integer value",
  inputPort                    :"The port numbers range from 0 to 65535",                             
  chooseLibrary                :"Select Database",                        
  threshold                    :"Threshold",
  thresholdNotNull             :"The threshold cannot be empty",
  libFaceIsNull                :"No database",
  updateBtn                    :"Modify",

  y_m_d                        :"Year-month-day",
  m_d_y                        :"Month-day-year",
  d_m_y                        :"Day-month-year",
  
  pleChooseChannel             :"Please select a channel",                             
  //https设置                  
  httpsSettingMenu             :"Security Settings",
  httpsSettingTitle            :"HTTPS Security Settings",
  isUsingHttps                 :"ON/OFF",
  https_start                  :"On",
  https_unInstall              :"Uninstall",
  https_upload                 :"Upload",
  https_cert_hp                :"Click to select an SSL certificate",
  https_key_hp                 :"Click to select an SSL key",
  https_load_cert              :"Import Crt",
  https_cur_cert               :"Current Crt",
  https_cur_key                :"Current Key",
  https_load_key               :"Import Key",
                               
  //Flash相关                  
  enableFlashTitle             :"Install or enable the Flash Player",
  enableFlashTips              :"The current feature requires Flash Player support, please install or enable it first",                          
  confirmChangeMQTTStatusTitle :"Toggle Access Protocol",
  confirmChangeMQTTStatusTips  :"Please be careful!Toggling the access protocol will delete all data, continue?",
  https_key_no_choose          : "SSL key file not yet selected",
  https_crt_no_choose          : "SSL certificate file not yet selected",
  //设备管理补缺
  changeModeCl                 : "Modify Capture Strategy",
  Accurate                     : "Accurate",
  Timing                       : "Timing",
  RealTime                     : "Realtime",
  drawAreaMsg                  : "The length or width of ROI cannot be less than 60px",
  networkError                 : "Network Error",
  manage                       : "Manage",
  notNull                      : "The {name} cannot be empty",
  valueErr                     : "Incorrect {name} format",
  uploadOk                     : "Uploaded",
  unInstallOk                  : "Uninstalled",
  //1:N人脸对比
  faceCtra_titComp             : "1:N Comparison",
  faceCtra_grade               : "Rating Reference",
  faceCtra_frist               : "0 ~ 60%: The two images are probably not the same person;",
  faceCtra_second              : "60% ~ 85%: The two images might be the same person;",
  faceCtra_third               : "85% ~ 100%: The two images are most likely the same person!",
  faceCtra_target              :"Please select a target database",//1.2+
  // M:N 对比
  retri_tit                    : "Compare",
  retri_getResult              : "TOP-N",
  compare_libary               :"Please select the database to search",
  // 1.2.1
  interface_protocol_conf      :"Interface Protocol Settings",
  alarmRule_blacklist          :"Blacklist",
  alarmRule_whitelist          :"Whitelist",
  alarmRule_stranger           :"Stranger",
 // 库管理
  lib_custom_max_error         :"Up to five custom attributes allowed", //1.2 *
  minimum_face_pix_setting     :"Minimum Face Resolution", //1.2 *
  maximum_face_pix_setting     :"Maximum Face Resolution", // 1.2*
  detection_frame_rate         :"Frame Rate Detection",
  // 用户管理
  user_role                    :"Role Name", //1.2 *
  edit_password                :"Change Password", //1.2 *
  input_newPwd                 :"New Password",//1.2*
  plInput_newPwd               :"Please Enter Password", //1.2*
  plInput_en_newPwd            :"Please Confirm Password", //1.2*
  ensure_newPwd                :"Confirm Password", // 1.2*
  newPwd_success               :"Password changed", //1.2*
  place_ensure_newPwd          :"Please Enter Password Again", //1.2*
  pwd_inconsistency            :"Passwords inconsistent", //1.2*
  // reset_password               :"Reset Password", //1.2*
  pwd_Length                   :"The password must be at least eight characters in length.",//1.2*
  pwd_rules                    :"The password must contain at least eight characters, including letters, numbers, and special characters.",//1.2*
  user_rule                    :"English letters, numbers, and special characters (at sign (@), dot (.), underscore (_), and hyphen (-)) are allowed, less than 50 characters in length",//1.2+
  // 系统日志
  logs_edit_content            :"Log Content",//1.2*
  logs_edit_person             :"User",// 1.2*
  logs_edit_time               :"Operation Time",//1.2*
  logs_open                    :"Power-on",//1.2*
  logs_off                     :"Power-off",//1.2*
  logs_web_off                 :"Network Port Status",//1.2*
  logs_edit_user               :"Operation Log",//1.2*
  logs_fun_edit                :"Function Operation",//1.2*
  logs_type                    :"Log Type",//1.2*
  logopt_result                :"Result",//1.2*
  logopt_state_suc             :"Successful",//1.2*
  // logsFile                     :"Log Files",
  // logsQuery                    :"Search",//1.2*
  // FileSize                     :"File Size",//1.2*
  updateTime                   :"Modification Time",//1.2*
  inputViperUrl                :"url",
  inputViperUrlErr             : "url cannot be empty",
  inputViperKey                :"key",
  inputViperSwitch             :"Enable",
  inputViperKeyErr             :"key cannot be empty",
  http_url                     :"http_url",
  http_key                     :"http_key",
  
// 信号联动管理
  device_name                  :"Device Name",//1.2*
  device_name_notNull          :"The device name cannot be empty.",//1.2*
  device_detail                :"View Details",//1.2*
  device_sys_equ_equType       :"Device Type",//1.2*
  assoc_device_ip              :"Device IP Address",//1.2*
  assoc_device_ip_notNull      :"The device IP address cannot be empty.",//1.2*
  assoc_device_ip_IPErr        :"The device IP address is incorrectly formatted.",//1.2*
  assoc_sys_equ_port           :"Device Port",//1.2*
  assoc_sys_equ_port_notNull   :"The device port cannot be empty.",//1.2*
  assoc_sys_equ_port_inputPort :"The port number ranges from 0 to 65535.",//1.2*
  assoc_new_device             :"Add Correlated Device",//1.2*
  relay_new                    :"Relay",//1.2*
  select_device                :"Select a device",//1.2*
  delete_assoc                 :"This operation will permanently delete the correlated device, continue?",//1.2*
  delete_assocTitle            :"Delete Correlated Device",//1.2*
  assoc_channelName            :"Channel Name", //1.2*

  select_all                   : "Select All",//1.2*

  manufacturer                 : "Vendor",//1.2*
  dahua                        : "Dahua",
  hikvision                    : "HIKVISION",
  sensedlc11                   : "SenseDLC",
  // 高级设置
  adv_warn                     :"The input value is incorrect. It must be an integer in the range from {min} to {max}.",//1.2*
  adv_betwwennum               :"The maximum value cannot be less than the minimum value.",//1.2*
// 信号联动管理
  // equipment_associated         :"设备关联",
  equipment_nonull             :"It cannot be empty.",//1.2*
  equipment_userdefined        :"Custom Attributes",//1.2*
  default_value                :"Default Value",//1.2*
  // equipment_dev_ip             :"设备IP",
  admin                        : "Administrator",//1.2*
  add_user                     : "Add User",//1.2*
  add_role                     : "Add Role",//1.2*
  role_info                    : "Role Details",//1.2*
  set_role                     : "Edit Role",//1.2*
  permission                   : "Permission",//1.2*
  role_notnull                 : "The role name cannot be empty.",//1.2* 
  role_del_title               : "Delete Role",//1.2*
  role_del_tip                 : "This operation will permanently delete the role, continue?",//1.2*
  cur_user_pwd                 : "Password of the Current User",//1.2*
  cur_user_pwd_notnull         : "The password of the current user cannot be empty.",//1.2*
  user_notnull                 : "The username cannot be empty.",//1.2*
  role_choose                  : "Select a role",//1.2*
  set_user                     : "Edit User",//1.2*
  confirm_pwd                  : "Password Verification",//1.2*
  user_del_title               : "Delete User",//1.2*
  user_del_tip                 : "This operation will permanently delete the user, continue?",//1.2*
  user_info                    : "User Details", // 1.2 *
  creater                      : "Created By",//1.2*
  sys_restore_title            : "Restore Default",//1.2+
  sys_restore_tips             : "This operation will restore the default settings of all modules except network and security settings, continue?", //1.2+,
  image_code_title             : "Slide to complete image stitching",//1.2+
  image_code_error             : "Please enter the verification code for image stitching",//1.2+
  all_user_name                : "All Users",
};
