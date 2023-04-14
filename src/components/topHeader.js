import React from 'react';
const TopHeader = () => {
    return (
        <div className="navbar  text-white p-0 " style={{fontFamily:'Jost, sans-serif',width:'100%', height:"45px", zIndex:'11',justifyContent:'space-between', color:"#0f1321", fontWeight:'400'}}>
            <div style={{width:"20px", margin:'0px 0px 0px 20px'}}>
            </div>
            <p style={{ margin:'0', justifyContent:"center", display:'flex', color:"#0f1321" }}>Welcome to Sarnia Hindu Society</p>
            <div style={{width:"20px", margin:'0px 20px 0px 0px'}}>
            </div>
        </div>
    );
}
export default TopHeader