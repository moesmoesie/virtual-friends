interface StringIcon {
    type: 'string'
    icon : string
    className? : string
}

 interface ComponentIcon {
    type: 'component'
    icon : JSX.Element
}

export type IconProps = StringIcon | ComponentIcon
