import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const H2Heading = ({children}: Props) => {
  return (
    <h2 className="text-2xl font-bold">{children}</h2>
  )
}

export default H2Heading