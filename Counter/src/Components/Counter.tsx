import { useState } from "react";
import React from "react";

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const handleIncreament = () => {
            setCount(count+1);
    }

    const handleDecreament = () => {
        setCount(count-1);
    }

    return (
        <div id="container" style={styles.container}>
            <div style={styles.text}>{count}</div>
            <button className="add" onClick={handleIncreament} style={{...styles.button, ...styles.addButton}}>+</button>
            <button className="subtract" disabled={count>0 ? false : true} onClick={handleDecreament} style={{...styles.button, ...styles.subtractButton}}>-</button>
        </div>
    );
};

export default Counter

interface Styles {
    container? : React.CSSProperties,
    text? : React.CSSProperties,
    button? : React.CSSProperties,
    addButton? : React.CSSProperties,
    subtractButton? : React.CSSProperties
}

const styles : Styles = {
    container : {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        backgroundColor: "#f0f0f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    text : {
        fontFamily : "monospace",
    },
    button : {
        backgroundColor : "#f7f7f7",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        fontWeight: "bold",
        cursor: "pointer",
        position: "absolute",
    },
    addButton : {
        bottom : "10px",
        right : "10px",
        backgroundColor: "#4CAF50",
        color: "white",
    },
    subtractButton : {
        bottom : "10px",
        left : "10px",
        backgroundColor: "#4CAF50",
        color: "white",
    }
}