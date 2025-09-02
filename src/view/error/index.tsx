import { Box } from "@mantine/core"
import { LanguageDictKey, selectLanguage } from "../../language"
import { useState } from "react"
import { useEffect } from "react"

// 定义一个BaseError函数，接收一个字符串参数msg
type BaseErrorProps = {
  top?: string | undefined
  msg: string | undefined
  end?: string | undefined
}
const BaseError = (props: BaseErrorProps) => {
  // 返回一个Box组件，其中包含msg参数
  const [content, setContent] = useState<string | undefined>(undefined)

  useEffect(() => {
    const tmp: string[] = []
    const pk: string[] = ['top', 'msg', 'end']
    const lang = selectLanguage()
    pk.forEach((key) => {
      const val = props[key as keyof BaseErrorProps]
      if (val !== undefined) {
        if (val in lang) {
          tmp.push(lang[val as keyof typeof lang])
        } else {
          tmp.push(val)
        }
      }
    })
    setContent(tmp.join(' '))
  }, [props.top, props.msg, props.end, props])
  return (
    <Box>
      {content}
    </Box>
  )
}

const defaultName: LanguageDictKey = 'common.asset'


export const NotExist = (props: {name?: string | undefined}) => {
  const lang = selectLanguage()
  const errkey: LanguageDictKey = 'error.not_exist'
  return <BaseError msg={props.name ? props.name : lang[defaultName]} end={lang[errkey]} />
}

export const NotFound = (props: {name?: string | undefined}) => {
  const lang = selectLanguage()
  const errkey: LanguageDictKey = 'error.not_found'
  return <BaseError msg={props.name ? props.name : lang[defaultName]} end={lang[errkey]} />
}

export default NotFound
