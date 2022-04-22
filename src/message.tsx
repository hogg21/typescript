import React from "react";

export interface Log {
    message: string
}

const Message = (message: Log) => {
    return (
        <div>{message.message}</div>
    )
}
export default Message;