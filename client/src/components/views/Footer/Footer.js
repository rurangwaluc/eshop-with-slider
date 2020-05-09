import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem',
            boxShadow: 'rgba(2, 12, 27, 0.7) 0px 10px 30px -10px',
            
        }}>
           <p style={{ paddingTop: '10px', fontSize:'1.8rem', fontWeight: '600' }}> Choice Is Yours<Icon type="likeOut" /></p>
        </div>
    )
}

export default Footer
