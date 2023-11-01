"use-client"

const StatusIcon = ({completion}) => {
    switch(completion){
        case "Publishing":
            return "📝"
        case "Finished":
            return "✔"
        default:
            return ""
    }
}

export default StatusIcon;