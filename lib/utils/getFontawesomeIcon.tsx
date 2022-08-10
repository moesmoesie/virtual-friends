const prefixes : any = {
    "solid" : "fas",
    "brand" : "fab"
}

const getFontAwesomeIcon = (value: string) : any => {
    if(value === undefined){
        return ["fas", "plus"]
    }

    const [icon,type] = value.split("@")
    const prefix = prefixes[type]
    return [prefix,icon]
}

export default getFontAwesomeIcon