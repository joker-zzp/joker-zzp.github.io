import { Box } from "@mantine/core"
import { selectLanguage } from "../../language"
import { useState } from "react"
import { useEffect } from "react"

// 定义一个BaseError函数，接收一个字符串参数msg
type BaseErrorProps = {
  top: string | undefined
  msg: string | undefined
  end: string | undefined
}
const BaseError = (props: BaseErrorProps = {
  top: undefined,
  msg: undefined,
  end: undefined
}) => {
  // 返回一个Box组件，其中包含msg参数
  const lang = selectLanguage()
  const [content, setContent] = useState<string | undefined>(undefined)
  const pk: keyof BaseErrorProps[] = ['msg']

  useEffect(() => {
    const tmp = []
    pk.forEach((item) => {
    })
  }, [props.top, props.msg, props.end])
  return (
    <Box>
      {msg}
    </Box>
  )
}

export const NotExist = (props: {name: string | undefined} = {
  name: undefined
}) => {
  const lang = selectLanguage()
  const headmsg = props.name ? props.name : lang?.['common.asset']
  return BaseError(`${headmsg} ${lang?.['error.not_exist']}`)
}

export const NotFound = (props: {name: string | undefined} = {
  name: undefined
}) => {
  const lang = selectLanguage()
  const headmsg = lang?.['common.page']
  return BaseError(lang?.['error.not_found'])
}
