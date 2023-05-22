import React from 'react'
import Form from 'react-bootstrap/Form';
import ButtonComPonents from '../../components/ButtonComPonents';

export default function Register() {
    return (
        <div>
            <div>Register</div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>password</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>ບ້ານ</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>ເມືອງ</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>ເເຂວງ</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>


            <ButtonComPonents
                title={'ບັນທືກລົງທະບຽນ'}
                background={'black'}
            />
        </div>
    )
}
