import React from "react";
import styled from "styled-components";

const JournalItem = (props) =>{
    return(
        <div>{props.date[0].text}</div>
    )
}

export default JournalItem;