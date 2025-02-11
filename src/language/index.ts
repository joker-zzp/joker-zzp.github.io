const languageDict = {
  // error
  'error.base': '错误',
  'error.network': '网络错误',
  'error.timeout': '请求超时',
  'error.not_found': '未找到',
  'error.not_exist': '不存在',
  'error.forbidden': '无权限',

  // common
  'common': '通用',
  'common.back': '返回',
  'common.next': '下一步',
  'common.prev': '上一步',
  'common.submit': '提交',
  'common.reset': '重置',
  'common.all': '全部',
  'common.select': '选择',
  'common.select_placeholder': '请选择',
  'common.select_all': '全选',
  'common.asset': '资源',

  'language': "语言",
  'language.zh_cn': "中文",
  'language.en_us': "英文",
  'default': '默认',
  'cancel': '取消',
  'confirm': '确定',
  'save': '保存',
  'delete': '删除',
  'add': '添加',
  'edit': '编辑',
  'delete_confirm': '确认删除吗？',
  'delete_success': '删除成功',
  'delete_fail': '删除失败',
  'save_success': '保存成功',
  'save_fail': '保存失败',
  'add_success': '添加成功',
  'add_fail': '添加失败',
  'edit_success': '编辑成功',
  'edit_fail': '编辑失败',
  'search': '搜索',
  'search_placeholder': '请输入搜索内容',
  'no_data': '暂无数据',
  'loading': '加载中...',
  // 主题
  'theme': '主题',
  'theme.light': '浅色',
  'theme.dark': '深色',
  'theme.auto': '自动',
  'theme.system': '跟随系统',
  'theme.black': '黑色',
  'theme.white': '白色',
  'theme.blue': '蓝色',
  'theme.green': '绿色',
  'theme.purple': '紫色',
  'theme.red': '红色',
  'theme.yellow': '黄色',
  'theme.orange': '橙色',
  'theme.pink': '粉色',
  'theme.gray': '灰色',
  'theme.brown': '棕色',
  'theme.cyan': '青色',
}

export type LanguageDictKey = keyof typeof languageDict

const zh_cn: {[key in LanguageDictKey]: string} = languageDict

const en_us: {[key in LanguageDictKey]: string} = {
  // error
  'error.base': 'Error',
  'error.network': 'Network error',
  'error.timeout': 'Request timeout',
  'error.not_found': 'Not found',
  'error.not_exist': 'Not exist',
  'error.forbidden': 'Forbidden',

  // common
  'common': 'Common',
  'common.back': 'Back',
  'common.next': 'Next',
  'common.prev': 'Prev',
  'common.submit': 'Submit',
  'common.reset': 'Reset',
  'common.all': 'All',
  'common.select': 'Select',
  'common.select_placeholder': 'Please select',
  'common.select_all': 'Select all',
  'common.asset': 'Asset',

  'language': "Language",
  'language.zh_cn': "Chinese",
  'language.en_us': "English",
  'default': 'Default',
  'cancel': 'Cancel',
  'confirm': 'Confirm',
  'save': 'Save',
  'delete': 'Delete',
  'add': 'Add',
  'edit': 'Edit',
  'delete_confirm': 'Are you sure to delete?',
  'delete_success': 'Delete success',
  'delete_fail': 'Delete fail',
  'save_success': 'Save success',
  'save_fail': 'Save fail',
  'add_success': 'Add success',
  'add_fail': 'Add fail',
  'edit_success': 'Edit success',
  'edit_fail': 'Edit fail',
  'search': 'Search',
  'search_placeholder': 'Please enter search content',
  'no_data': 'No data',
  'loading': 'Loading...',
  // 主题
  'theme': 'Theme',
  'theme.light': 'Light',
  'theme.dark': 'Dark',
  'theme.auto': 'Auto',
  'theme.system': 'System',
  'theme.black': 'Black',
  'theme.white': 'White',
  'theme.blue': 'Blue',
  'theme.green': 'Green',
  'theme.purple': 'Purple',
  'theme.red': 'Red',
  'theme.yellow': 'Yellow',
  'theme.orange': 'Orange',
  'theme.pink': 'Pink',
  'theme.gray': 'Gray',
  'theme.brown': 'Brown',
  'theme.cyan': 'Cyan',
}

export const language = {
  "zh_cn": zh_cn,
  "en_us": en_us,
}

export const selectLanguage = (lang: keyof typeof language | undefined = undefined): {[key in LanguageDictKey]: string} => {
  // 没有传入语言参数，根据浏览器语言设置
  if (!lang) {
    const systemlang = navigator.language.toLowerCase()
    // 如果在语言包中存在
    if (systemlang in language) {
      return language[systemlang as keyof typeof language]
    }
    // 如果在语言包中不存在，则默认中文
    return language['zh_cn']
  }
  return language[lang] || language['zh_cn']
}
