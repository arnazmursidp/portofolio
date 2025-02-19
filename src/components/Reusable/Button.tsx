import './Button.scss'

type Props = {
    children: any
    className?: string
    style?: object
}

const Button = ({ children, className, style }: Props) => {
  return (
    <div className={`${className} button-outline`} style={{...style}}>{children}</div>
  )
}

export default Button