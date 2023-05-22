import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { FcGoogle } from 'react-icons/fc';
import { AiFillLock } from 'react-icons/ai';


export default function Login() {

    return (

        <div className='login-main'>

            <div className='login-content'>

                {/* ========== Title Header ========= */}
                <span style={{ fontSize: '32px', color: "#3AAF9F" }} >ເຂົ້າສູ່ລະບົບ</span>

                {/* ========== Form Email ========= */}
                <div style={{ width: "500px", marginTop: '40px' }}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" style={{ border: 'none', background: '#F4F8F7' }}><FcGoogle /></InputGroup.Text>
                        <Form.Control
                            placeholder="ອີເມວ..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            style={{
                                background: "#F4F8F7",
                                border: 'none',
                                height: '45px'
                            }}
                        />
                    </InputGroup>
                </div>

                {/* ========== Form Password ========= */}
                <div style={{ width: "500px" }}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" style={{ border: 'none', background: '#F4F8F7' }}><AiFillLock /> </InputGroup.Text>
                        <Form.Control
                            placeholder="ລະຫັດຜ່ານ..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            style={{
                                background: "#F4F8F7",
                                border: 'none',
                                height: '45px'
                            }}
                        />
                    </InputGroup>
                </div>

                <div style={{ marginTop: '45px' }}>
                    <Button style={{
                        width: '200px',
                        height: '45px',
                        background: '#3AAF9F',
                        border: 'none',
                        borderRadius: '30px'
                    }}>
                        ເຂົ້າສູ່ລະບົບ
                    </Button>
                </div>

            </div>

        </div >
    )
}


