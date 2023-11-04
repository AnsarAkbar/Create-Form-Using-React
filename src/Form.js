import React from "react";
function Forms(params) {
    let buttonsDiv={
        display: "flex",
        justifyContent: "center",
        margin:"0.5em"
    }
    let buttons={
        padding: "0.3em 3em",
        borderRadius: "4px",
        // border: "none",
        backgroundColor: "lightgoldenrodyellow"
    }
    return(
        <div className="containmer">
            <h2>Student Form</h2>
        <form>
                <div >
                    <label> Frist Name :</label>
                    <input type="text" placeholder="enter your fristname" />
                </div>
                <div >
                    <label>Last Name :</label>
                    <input type="text" placeholder="enter your lastname" />
                </div>
                <div>
                    <label>E-mail :</label>
                    <input  type="email" placeholder="enter your email" />
                </div>
                <div >
                    <label>Mobile No. :</label>
                    <input  type="number" placeholder="enter your mobile number" />
                </div>
            <div style={buttonsDiv}>
            <button style={buttons}>Submited</button>
            <button style={buttons}>Clear</button>
            </div>
        </form>
        </div>
    )
}
export default Forms;