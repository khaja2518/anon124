import React from "react"

function FunctionalMemo(props) {
    console.log('functional memo')
    return (<div>I'm from Functional Memo Component {props.name}</div>)
}

export default React.memo(FunctionalMemo)